import { NextRequest, NextResponse } from 'next/server';
import faqsData from '../../../data/faqs.json';

interface RequestBody {
  question: string;
  context?: string[];
}

export async function POST(request: NextRequest) {
  try {
    const { question, context = [] }: RequestBody = await request.json();
    
    if (!question || typeof question !== 'string') {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      );
    }

    const normalizedQuestion = question.toLowerCase().trim();
    
    // Enhanced conversational patterns with more variety
    const conversationalMatches = [
      { 
        patterns: ['hi', 'hello', 'hey', 'hiya', 'sup'], 
        responses: ['hi', 'hello', 'hey'],
        weights: [1.0, 1.0, 1.0] 
      },
      { 
        patterns: ['good morning'], 
        responses: ['good morning'],
        weights: [1.0] 
      },
      { 
        patterns: ['good afternoon'], 
        responses: ['good afternoon'],
        weights: [1.0] 
      },
      { 
        patterns: ['good evening'], 
        responses: ['good evening'],
        weights: [1.0] 
      },
      { 
        patterns: ['how are you', 'how are u', 'how r u', 'how do you do', 'how you doing'], 
        responses: ['how are you'],
        weights: [1.0] 
      },
      { 
        patterns: ['what\'s up', 'whats up', 'sup', 'wassup', 'what up'], 
        responses: ['what\'s up'],
        weights: [1.0] 
      },
      { 
        patterns: ['how\'s it going', 'hows it going', 'how is it going', 'how goes it'], 
        responses: ['how\'s it going'],
        weights: [1.0] 
      },
      { 
        patterns: ['thanks', 'thank you', 'thx', 'ty', 'appreciate it', 'appreciate'], 
        responses: ['thanks', 'thank you'],
        weights: [0.8, 1.0] 
      },
      { 
        patterns: ['bye', 'goodbye', 'see you', 'see ya', 'farewell', 'cya', 'later', 'talk soon'], 
        responses: ['bye', 'goodbye', 'see you later'],
        weights: [0.8, 1.0, 0.9] 
      }
    ];

    // Check for conversational matches with context awareness
    for (const match of conversationalMatches) {
      for (const pattern of match.patterns) {
        if (normalizedQuestion.includes(pattern)) {
          const responseKey = match.responses[Math.floor(Math.random() * match.responses.length)];
          if (faqsData[responseKey]) {
            return NextResponse.json({ 
              answer: faqsData[responseKey],
              confidence: 0.9,
              source: 'conversational'
            });
          }
        }
      }
    }
    
    // Context-aware business logic
    const contextString = context.join(' ').toLowerCase();
    
    // Enhanced pattern matching with business context
    if (normalizedQuestion.includes('more info') || normalizedQuestion.includes('tell me more')) {
      if (contextString.includes('drais') || contextString.includes('school')) {
        return NextResponse.json({
          answer: "I'd love to share more about DRAIS! 📚 It's our flagship school management system that has revolutionized education management at schools like Northgate. Here are the key highlights:\n\n✅ 60% reduction in administrative workload\n✅ Real-time parent-teacher communication\n✅ Automated grade management and reporting\n✅ Comprehensive fee management\n✅ Student attendance tracking\n\nWould you like to see a demo or learn about pricing? I can also connect you with our team at +256 741 341 483! 🚀",
          confidence: 0.95,
          source: 'contextual'
        });
      }
    }

    // Smart business intent detection
    const businessIntents = [
      {
        keywords: ['price', 'cost', 'pricing', 'how much', 'budget', 'quote'],
        response: "Great question about pricing! 💰 We offer flexible pricing models to fit different budgets:\n\n🔹 Fixed-price projects\n🔹 Hourly rates for smaller tasks\n🔹 Monthly retainers for ongoing support\n🔹 Milestone-based payments for larger projects\n\nPricing depends on complexity, timeline, and features. For a personalized quote, contact our team at +256 741 341 483 or schedule a free consultation! Would you like me to help you get started? 😊",
        confidence: 0.9
      },
      {
        keywords: ['demo', 'demonstration', 'show me', 'preview', 'see it', 'trial'],
        response: "Absolutely! I'd love to arrange a demo for you! 🎯\n\nWe offer live demonstrations of:\n🔹 DRAIS School Management System\n🔹 Zyra SACCO Management\n🔹 Sentra POS Systems\n🔹 Custom software solutions\n\nOur demos are interactive and tailored to your specific needs. You can see exactly how our solutions would work for your organization!\n\nCall +256 741 341 483 to schedule your personalized demo today! Which solution interests you most? 🚀",
        confidence: 0.9
      },
      {
        keywords: ['contact', 'call', 'phone', 'reach', 'talk to someone', 'human'],
        response: "Perfect! Our amazing team is ready to help you! 📞\n\n🏢 **Contact Information:**\n📱 Phone: +256 741 341 483\n📧 Email: info@xhenvolt.com\n📍 Office: Bulubandi, Iganga, Uganda\n⏰ Hours: Monday-Friday, 8:00 AM - 6:00 PM EAT\n\nWe also offer FREE consultations to discuss your project requirements. Our experts will analyze your needs and provide customized recommendations!\n\nWhat's the best way for our team to reach you? 😊",
        confidence: 0.95
      }
    ];

    // Check business intents
    for (const intent of businessIntents) {
      for (const keyword of intent.keywords) {
        if (normalizedQuestion.includes(keyword)) {
          return NextResponse.json({
            answer: intent.response,
            confidence: intent.confidence,
            source: 'business_intent'
          });
        }
      }
    }
    
    // Enhanced pattern matching for knowledge base
    let bestMatch = '';
    let highestScore = 0;
    
    for (const [key, answer] of Object.entries(faqsData)) {
      const score = calculateEnhancedMatchScore(normalizedQuestion, key, answer, context);
      if (score > highestScore && score > 0.3) {
        highestScore = score;
        bestMatch = answer;
      }
    }
    
    // Smart fallback with helpful suggestions
    if (!bestMatch) {
      const helpfulResponse = generateSmartFallback(normalizedQuestion, context);
      return NextResponse.json({ 
        answer: helpfulResponse,
        confidence: 0.6,
        source: 'fallback' 
      });
    }
    
    // Add contextual enhancements to responses
    const enhancedResponse = enhanceResponseWithContext(bestMatch, normalizedQuestion, context);
    
    return NextResponse.json({ 
      answer: enhancedResponse,
      confidence: highestScore,
      source: 'knowledge_base'
    });
    
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { 
        answer: "I'm experiencing a small technical hiccup! 😅 But our amazing human team is always ready to help at +256 741 341 483 or info@xhenvolt.com. They'll take excellent care of you! 💙",
        confidence: 0.5,
        source: 'error'
      },
      { status: 200 } // Don't return 500 to avoid UI crashes
    );
  }
}

function calculateEnhancedMatchScore(question: string, key: string, answer: string, context: string[]): number {
  const questionWords = question.split(' ').filter(word => word.length > 2);
  const answerWords = answer.toLowerCase().split(' ').filter(word => word.length > 2);
  const contextString = context.join(' ').toLowerCase();
  
  let score = 0;
  
  // Direct key matches (highest weight)
  for (const word of questionWords) {
    if (key.includes(word)) {
      score += 0.8;
    }
  }
  
  // Answer content matches
  for (const word of questionWords) {
    if (answerWords.some(answerWord => answerWord.includes(word) || word.includes(answerWord))) {
      score += 0.4;
    }
  }
  
  // Exact phrase matches
  if (question.includes(key)) {
    score += 1.2;
  }
  
  // Context relevance boost
  if (contextString) {
    const contextWords = contextString.split(' ').filter(word => word.length > 2);
    for (const contextWord of contextWords) {
      if (key.includes(contextWord) || answer.toLowerCase().includes(contextWord)) {
        score += 0.3;
      }
    }
  }
  
  // Business term boost
  const businessTerms = ['xhenvolt', 'drais', 'zyra', 'sentra', 'lypha', 'software', 'development', 'mobile', 'app', 'sacco', 'school', 'pos'];
  for (const term of businessTerms) {
    if (question.includes(term) && (key.includes(term) || answer.toLowerCase().includes(term))) {
      score += 0.4;
    }
  }
  
  // Semantic similarity for common question patterns
  const questionPatterns = [
    { patterns: ['what is', 'what\'s', 'tell me about'], boost: 0.2 },
    { patterns: ['how much', 'cost', 'price'], boost: 0.3 },
    { patterns: ['how to', 'how do i', 'can you'], boost: 0.2 },
    { patterns: ['where', 'location', 'contact'], boost: 0.25 }
  ];
  
  for (const pattern of questionPatterns) {
    for (const p of pattern.patterns) {
      if (question.includes(p)) {
        score += pattern.boost;
        break;
      }
    }
  }
  
  return Math.min(score / Math.max(questionWords.length, 1), 1);
}

function generateSmartFallback(question: string, context: string[]): string {
  const contextString = context.join(' ').toLowerCase();
  
  // Context-aware fallbacks
  if (contextString.includes('drais') || contextString.includes('school')) {
    return "I'd love to help you learn more about our school management solutions! 🎓\n\nHere's what I can tell you about:\n🔹 DRAIS features and benefits\n🔹 Implementation process\n🔹 Pricing and packages\n🔹 Success stories from schools like Northgate\n🔹 Demo scheduling\n\nWhat specific aspect interests you most? Or would you prefer to speak with our education specialists at +256 741 341 483? 😊";
  }
  
  if (contextString.includes('zyra') || contextString.includes('sacco')) {
    return "Happy to help with SACCO management questions! 🏦\n\nI can share information about:\n🔹 Zyra SACCO system features\n🔹 Member management capabilities\n🔹 Loan processing automation\n🔹 Success story with Bumwena Scrap SACCO\n🔹 Pricing and implementation\n\nWhat would you like to explore? Our SACCO experts are also available at +256 741 341 483! 💰";
  }
  
  // General smart fallback
  return "I'd love to help you with that! 😊 I'm specialized in answering questions about:\n\n🚀 **Our Services:**\n• DRAIS School Management\n• Zyra SACCO Systems\n• Sentra POS Solutions\n• Custom Software Development\n• Mobile App Development\n\n💡 **Quick Help:**\n• Pricing and consultation\n• Demo scheduling\n• Success stories\n• Technical support\n\nTry asking something like:\n• 'What is DRAIS?'\n• 'How much does it cost?'\n• 'Can I see a demo?'\n• 'Tell me about your team'\n\nOr connect directly with our experts at +256 741 341 483! What interests you most? 🌟";
}

function enhanceResponseWithContext(response: string, question: string, context: string[]): string {
  const questionLC = question.toLowerCase();
  const contextString = context.join(' ').toLowerCase();
  
  // Add relevant follow-ups based on context
  let enhancedResponse = response;
  
  if (questionLC.includes('drais') && !response.includes('demo') && !response.includes('call')) {
    enhancedResponse += "\n\n🎯 Would you like to schedule a demo to see DRAIS in action? Call +256 741 341 483!";
  }
  
  if (questionLC.includes('price') && !response.includes('contact') && !response.includes('call')) {
    enhancedResponse += "\n\n📞 For detailed pricing, our team can provide a personalized quote at +256 741 341 483!";
  }
  
  if (questionLC.includes('zyra') && !response.includes('wekesa') && contextString.includes('success')) {
    enhancedResponse += "\n\n🌟 Fun fact: Our happiest client Wekesa Muhammad leads a 500+ member SACCO with 100% satisfaction using Zyra!";
  }
  
  return enhancedResponse;
}
