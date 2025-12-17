# Xhenvolt AI Chatbot - Production Implementation Guide

## Overview

This is a production-ready, knowledge-grounded AI assistant for Xhenvolt powered by Google Gemini API. The chatbot is configured to:

✅ **Answer ONLY using Xhenvolt's knowledge base** - No external information or general knowledge  
✅ **Never expose API keys** - All API calls happen securely on the backend  
✅ **Provide professional, business-appropriate responses** - No emojis or casual language  
✅ **Rate-limited and secure** - Prevents abuse and protects resources  
✅ **Provider-agnostic architecture** - Easy to switch to OpenAI or other providers later  

## Architecture

### Frontend (`src/components/Chatbot.tsx`)
- Clean React component with Framer Motion animations
- Sends messages to `/api/chat` endpoint
- Displays professional, knowledge-grounded responses
- No access to API keys or sensitive data

### Backend (`src/app/api/chat/route.ts`)
- **Handles all AI logic securely on the server**
- Reads `GEMINI_API_KEY` from environment variables only
- Implements rate limiting (30 requests per minute per IP)
- Sanitizes user input (max 2000 chars, removes special characters)
- Builds prompts server-side with knowledge context
- Returns clean, professional responses to frontend

### Knowledge Base (`src/lib/knowledge-base.ts`)
- **Single source of truth** for all Xhenvolt information
- Contains:
  - Company overview and contact info
  - All 5 systems (DRAIS, XHETON, XHAIRA, CONSTY, JORC)
  - Pricing tiers and payment options
  - Team members and expertise
  - Services and FAQs
- Smart retrieval: Only relevant sections passed to AI
- Prevents hallucinations and off-topic responses

## Setup Instructions

### 1. Get Your Gemini API Key

Visit [ai.google.dev](https://ai.google.dev) and follow these steps:

1. Sign in with your Google account (create one if needed)
2. Click "Get API Key" in the left menu
3. Create a new project (or select existing)
4. Generate an API key
5. Copy the key

**Note:** Gemini's free tier allows:
- **15 requests per minute**
- **1 million tokens per month** (more than enough for testing)

### 2. Configure Environment Variables

Create `.env.local` in your project root:

```bash
GEMINI_API_KEY=your_actual_api_key_here
```

**CRITICAL:** Never commit `.env.local` to Git. It's in `.gitignore` by default.

### 3. Install Dependencies

```bash
npm install
```

This installs `@google/generative-ai` SDK.

### 4. Test the Chatbot

**Development:**
```bash
npm run dev
```

Visit http://localhost:3000, click the chat button, and test:
- "What is DRAIS?"
- "Tell me about pricing"
- "How can I contact your team?"

**Production Build:**
```bash
npm run build
npm start
```

## How It Works

### Query Flow

```
User Message
    ↓
Frontend sends to /api/chat
    ↓
Backend receives sanitized message
    ↓
Extract relevant knowledge sections from knowledge base
    ↓
Build system prompt with knowledge + user message
    ↓
Call Gemini API (on server - key never exposed)
    ↓
Receive AI response
    ↓
Return professional response to frontend
    ↓
Display in chat UI
```

### Knowledge Retrieval Example

**User asks:** "What's the cost of DRAIS?"

**System extracts:**
- DRAIS system information
- Pricing information
- Contact information (for follow-up)

**System prompt includes:**
```
You are the official Xhenvolt assistant. Answer ONLY using the provided information:

[DRAIS details]
[Pricing tiers]
[Contact info]

User question: What's the cost of DRAIS?
```

**AI responds (professionally):**
```
DRAIS is available in three pricing tiers:
- Professional: UGX 1,000,000
- Premium: UGX 1,800,000 (most popular)
- Gold: UGX 2,500,000

Pricing depends on project complexity. For a personalized quote, 
contact our team at 0745 726 350 or +256 774 543 406.
```

## Security Features

### 1. API Key Protection
- ✅ Read from `process.env.GEMINI_API_KEY` only
- ✅ Never exposed in frontend code
- ✅ Never logged or transmitted to client

### 2. Rate Limiting
- ✅ 30 requests per minute per IP address
- ✅ Prevents abuse and keeps costs low
- ✅ Returns 429 status code when limit exceeded

### 3. Input Sanitization
- ✅ Maximum 2000 character limit per message
- ✅ Removes dangerous characters (`<`, `>`)
- ✅ Prevents injection attacks

### 4. Knowledge Grounding
- ✅ AI can ONLY use provided knowledge base
- ✅ System prompt explicitly forbids external knowledge
- ✅ Prevents hallucinations about services/pricing

## Customization

### Update Knowledge Base

Edit `src/lib/knowledge-base.ts` to:
- Add new systems or products
- Update pricing
- Change team members
- Add FAQs
- Update contact information

**Example:** Add a new system

```typescript
xheton: {
  name: "XHETON",
  fullName: "XHETON Sales & Inventory Management",
  category: "Retail & Commerce",
  description: "...",
  // ... rest of details
}
```

### Adjust System Prompt

Edit the `buildSystemPrompt()` function in `src/app/api/chat/route.ts` to:
- Change communication style
- Add business rules
- Modify response guidelines

### Change AI Model

In `src/app/api/chat/route.ts`, change:

```typescript
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
```

Options:
- `gemini-1.5-flash` - Fast, cheap, good for chat (current)
- `gemini-1.5-pro` - More capable, slightly slower
- `gemini-2.0-flash` - Latest model (when available)

### Switch to OpenAI (Future)

The architecture supports easy provider switching:

```typescript
// Instead of Gemini
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: "gpt-4-turbo",
  messages: [{
    role: "system",
    content: systemPrompt,
  }, {
    role: "user",
    content: sanitizedMessage,
  }],
});
```

## Deployment

### Environment Variables (Production)

On your hosting platform (Vercel, Railway, etc.), set:

```
GEMINI_API_KEY=your_production_key
```

### Cost Monitoring

**Gemini Pricing:**
- **Input:** $0.075 per 1M tokens
- **Output:** $0.30 per 1M tokens
- **Free tier:** 15 requests/min, 1M tokens/month

For reference, a typical 500-character conversation = ~100 tokens.

**Cost Estimate:**
- 100 chats/day × 30 days = 3,000 chats/month
- Average 200 tokens per chat = 600K tokens/month
- Cost: ~$0.18/month (essentially free)

### Monitoring & Logging

Track API usage in Google AI Studio:
1. Visit [ai.google.dev](https://ai.google.dev)
2. Check "Usage Dashboard" for token counts
3. Set alerts if approaching limits

## Troubleshooting

### "GEMINI_API_KEY is not configured"
- **Check:** Is `.env.local` file created?
- **Check:** Is GEMINI_API_KEY set correctly?
- **Restart:** Server needs restart after setting env vars

### 429 Too Many Requests
- **Cause:** Hit rate limit (30 requests/minute)
- **Solution:** Wait a minute or increase `RATE_LIMIT_WINDOW`

### AI responds with "I don't know"
- **Check:** Is the question about Xhenvolt services?
- **Check:** Update knowledge base with missing information
- **Remember:** AI ONLY uses provided knowledge base

### Slow responses
- **Check:** Network latency to Google servers
- **Check:** Gemini API service status
- **Note:** Flash model (current) is optimized for speed

## Best Practices

1. **Keep knowledge base updated** - Add new systems/pricing immediately
2. **Monitor costs** - Check usage dashboard regularly
3. **Test thoroughly** - Verify AI only answers about Xhenvolt
4. **Rotate API keys** - Generate new key periodically
5. **Track feedback** - Log user questions to improve knowledge base
6. **Rate limiting** - Adjust limits based on traffic patterns

## Support & Resources

- **Google Gemini Docs:** https://ai.google.dev/docs
- **API Reference:** https://ai.google.dev/api/python
- **Model Cards:** https://ai.google.dev/models
- **Free Tier Details:** https://ai.google.dev/pricing

## Technical Specifications

| Component | Technology |
|-----------|-----------|
| Frontend | React 19, TypeScript, Framer Motion |
| Backend | Next.js 15.5 API Routes |
| AI Provider | Google Gemini API |
| Knowledge | TypeScript object (no database needed) |
| Rate Limiting | In-memory Map (use Redis for scaling) |
| Styling | Tailwind CSS |

## Next Steps

1. ✅ Set up GEMINI_API_KEY
2. ✅ Run `npm install` to get dependencies
3. ✅ Test locally with `npm run dev`
4. ✅ Deploy to production
5. ✅ Update knowledge base as services change
6. ✅ Monitor costs and usage

---

**Last Updated:** December 2024  
**Version:** 1.0 - Production Ready
