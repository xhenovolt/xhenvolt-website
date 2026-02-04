import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { extractRelevantKnowledge, sanitizeInput } from "@/lib/knowledge-base";

/**
 * Rate limiting store (in-memory for single server instance)
 * For production, use Redis or similar
 */
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_REQUESTS = 30; // requests per window
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

/**
 * Get client IP address
 */
function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

/**
 * Check rate limit
 */
function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    // Reset window
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT_REQUESTS - 1 };
  }

  if (record.count >= RATE_LIMIT_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_REQUESTS - record.count };
}

/**
 * Initialize Gemini API
 */
function initializeGemini() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY environment variable is not set. Please add it to your .env.local file."
    );
  }

  return new GoogleGenAI({ apiKey });
}

/**
 * Build the system prompt for Al Hanan Education Centre assistant
 */
function buildSystemPrompt(knowledgeContext: string): string {
  return `You are the official Al Hanan Education Centre AI assistant, representing Al Hanan Education Centre - a premium Muslim school dedicated to academic excellence and Qur'anic memorization.

CRITICAL RULES:
1. Answer ONLY using the provided Al Hanan knowledge base information below
2. Do NOT use general knowledge, assumptions, or external information
3. If information is not in the knowledge base, explicitly say: "I don't have information about that. Please contact Al Hanan at 0745 726 350 or info@alhanan.ug for assistance."
4. NEVER provide information not specific to Al Hanan Education Centre
5. Keep responses warm, welcoming, and professional
6. Use friendly emojis appropriate to the school context (e.g., 📚 for learning, 🕌 for Islamic content)
7. If a user asks for something outside Al Hanan's scope, politely redirect to available services

AL HANAN EDUCATION CENTRE KNOWLEDGE BASE:
${knowledgeContext}

COMMUNICATION GUIDELINES:
- Be warm, welcoming, and professional
- Focus on Al Hanan's unique value: Qur'anic memorization + academic excellence
- Provide specific details from the knowledge base
- Always include contact information (0745 726 350 or info@alhanan.ug) when relevant
- Emphasize the school's Islamic values, discipline, and excellence
- Maintain a tone that reflects the school's premium, faith-centered nature`;
}

/**
 * POST /api/chat - Production-ready AI chat endpoint
 */
export async function POST(request: NextRequest) {
  try {
    // Check rate limit
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(clientIp);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded. Please try again in a moment.",
          retryAfter: RATE_LIMIT_WINDOW / 1000,
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 }
      );
    }

    // Sanitize user input
    const sanitizedMessage = sanitizeInput(message);

    if (sanitizedMessage.length === 0) {
      return NextResponse.json(
        { error: "Message cannot be empty" },
        { status: 400 }
      );
    }

    // Extract relevant knowledge
    const relevantKnowledge = extractRelevantKnowledge(sanitizedMessage);

    // Initialize Gemini
    const genAI = initializeGemini();

    // Build system prompt with knowledge context
    const systemPrompt = buildSystemPrompt(relevantKnowledge);

    // Call Gemini API using the new SDK
    // The new SDK requires system instructions to be embedded in the content itself
    const response = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: systemPrompt,
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "I understand. I will follow these instructions strictly and only provide information from the knowledge base provided.",
            },
          ],
        },
        {
          role: "user",
          parts: [
            {
              text: sanitizedMessage,
            },
          ],
        },
      ],
    });

    // Extract response text - new SDK returns text directly
    const aiResponse = response.text || "";

    if (!aiResponse) {
      throw new Error("No text response from Gemini");
    }

    return NextResponse.json(
      {
        success: true,
        response: aiResponse,
        rateLimitRemaining: rateLimit.remaining,
      },
      {
        headers: {
          "X-RateLimit-Remaining": String(rateLimit.remaining),
          "X-RateLimit-Limit": String(RATE_LIMIT_REQUESTS),
        },
      }
    );
  } catch (error) {
    console.error("Chat API error:", error);

    // Handle Gemini-specific errors
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        return NextResponse.json(
          {
            error: "API configuration error. The assistant is temporarily unavailable.",
            details: "Please check that GEMINI_API_KEY is properly configured.",
          },
          { status: 500 }
        );
      }

      if (error.message.includes("GEMINI_API_KEY")) {
        return NextResponse.json(
          {
            error: "API key not configured. Please contact the administrator.",
          },
          { status: 500 }
        );
      }

      // Return user-friendly error
      return NextResponse.json(
        {
          error: "Unable to process your message at this moment.",
          suggestion: "Please contact our team directly at 0745 726 350 or +256 774 543 406.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        error: "An unexpected error occurred.",
        suggestion: "Please contact our team directly at 0745 726 350 or +256 774 543 406.",
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/chat - Health check endpoint
 */
export async function GET(request: NextRequest) {
  try {
    // Verify API key exists
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        {
          status: "error",
          message: "GEMINI_API_KEY is not configured",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      status: "ok",
      service: "Al Hanan Chat API",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: String(error) },
      { status: 500 }
    );
  }
}
