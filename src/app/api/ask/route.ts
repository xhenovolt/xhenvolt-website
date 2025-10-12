import { NextRequest, NextResponse } from 'next/server';

const faqsData: Record<string, string> = {
  hi: "Hello! 👋 Welcome to Xhenvolt Uganda! I'm your AI assistant and I'm excited to help you today. How can I assist you with learning about our amazing technology solutions?",
  hello: "Hi there! 😊 Great to meet you! I'm the Xhenvolt AI assistant, and I'm here to help you discover how our innovative technology solutions can transform your business. What would you like to know?",
  hey: "Hey! 🚀 Thanks for stopping by Xhenvolt Uganda! I'm your friendly AI assistant, ready to chat about our cutting-edge software solutions, mobile apps, and digital transformation services. What's on your mind?",
  "good morning": "Good morning! ☀️ What a wonderful day to explore innovative technology solutions! I'm your Xhenvolt AI assistant, and I'm energized to help you learn about our services. How can I brighten your day with some tech insights?",
  "good afternoon": "Good afternoon! 🌤️ Perfect timing to discover how Xhenvolt Uganda can elevate your business with our technology solutions. I'm here to answer any questions you have. What would you like to explore?",
  "good evening": "Good evening! 🌅 Thanks for visiting Xhenvolt Uganda! Even though it's evening, I'm always ready to chat about our amazing software solutions and how they're transforming businesses across East Africa. What can I help you with?",
  "how are you": "I'm doing fantastic! 😄 I'm always excited to talk about Xhenvolt Uganda's incredible technology solutions. We've been helping businesses transform digitally since June 2025, and every day brings new opportunities to make a difference. How are you doing today?",
  "what's up": "Not much, just here helping awesome people like you discover how Xhenvolt Uganda can revolutionize their business operations! 🚀 We're all about custom software, mobile apps, and digital transformation. What's up with you? Any tech challenges I can help solve?",
  "how's it going": "It's going great! 😊 I love chatting with people about technology and how Xhenvolt Uganda is making a real impact across East Africa. We've got some amazing success stories and innovative solutions. How's your day going?",
  thanks: "You're very welcome! 😊 I'm always happy to help! If you have any more questions about Xhenvolt Uganda, our services, or how we can help transform your business, just ask. We're here to make your technology dreams come true! 🌟",
  "thank you": "You're absolutely welcome! 🙏 It's my pleasure to help you learn about Xhenvolt Uganda. We're passionate about delivering exceptional technology solutions, and I love sharing that passion with you. Feel free to ask me anything else!",
  bye: "Goodbye! 👋 It was wonderful chatting with you about Xhenvolt Uganda! Remember, we're always here to help with your technology needs. Feel free to come back anytime, or contact our team at +256 741 341 483. Have a fantastic day! 🌟",
  goodbye: "Farewell! 😊 Thanks for learning about Xhenvolt Uganda with me today. I hope you found our conversation helpful! Don't forget - we're just a call away at +256 741 341 483 if you need any technology solutions. Take care! ✨",
  "see you later": "See you later! 👋 I hope you'll visit again soon to learn more about our exciting technology solutions. Until next time, remember that Xhenvolt Uganda is here to transform your business dreams into digital reality! 🚀",
  "what is xhenvolt": "Xhenvolt Uganda is a leading technology solutions provider founded in June 2025. We specialize in custom software development, mobile applications, POS systems, and enterprise solutions that transform businesses across East Africa. Our mission is to empower African businesses with cutting-edge technology that drives growth and innovation.",
  "what is drais": "DRAIS is our comprehensive School Management System that revolutionizes educational institution operations. It includes student enrollment, grade management, parent-teacher communication portals, fee management, attendance tracking, and academic performance reporting. Successfully implemented at schools like Northgate School, DRAIS has helped reduce administrative workload by 60% while improving parent-teacher communication.",
  "what is zyra": "Zyra is our powerful SACCO Management System designed for financial cooperatives like Bumwena Scrap SACCO. It automates member management, loan processing, savings tracking, interest calculations, and compliance reporting. Our happiest client, Wekesa Muhammad, leads a 500+ member cooperative that has been completely transformed by Zyra, achieving 100% member satisfaction.",
  "what is sentra": "Sentra is our intelligent Point-of-Sale (POS) system for retail businesses. It features real-time inventory tracking, multi-location management, sales analytics, customer loyalty programs, and offline mode capability for uninterrupted operations. Sentra helps businesses streamline their retail operations and increase profitability.",
  "what is lypha": "Lypha is our modern Pharmacy Management System that streamlines prescription tracking, inventory management, customer records, and regulatory compliance for pharmaceutical businesses. It helps pharmacies operate more efficiently while maintaining strict compliance standards.",
  services: "We offer comprehensive technology solutions including: Custom Software Development, Mobile App Development (iOS & Android), UI/UX Design, POS & Inventory Systems, School Management Systems (DRAIS), SACCO Management (Zyra), Healthcare Solutions, Process Automation. All solutions are tailored to your specific business needs.",
  pricing: "We offer flexible pricing models to suit different budgets: fixed-price projects, hourly rates, and monthly retainers. Pricing depends on project complexity, timeline, and features. We also provide milestone-based payment plans for larger projects and comprehensive maintenance packages. Contact us at +256 741 341 483 for a personalized quote!",
  contact: "You can reach us at +256 741 341 483, email info@xhenvolt.com, or visit our office in Bulubandi, Iganga, Uganda. We're available Monday-Friday, 8:00 AM - 6:00 PM EAT. We also offer free consultations to discuss your project requirements!",
  team: "Our expert team includes Hamuza Ibrahim (Founder & CEO), Mubeezi Calebu Ashiraf (Lead UI/UX Designer), Nasa Matovu (Lead Full-Stack Developer), and Ganiyu Kule Hussein (Marketing & Growth Lead). Each brings specialized expertise in technology and business strategy to deliver exceptional results.",
  "wekesa muhammad": "Wekesa Muhammad is the Chairperson of Bumwena Scrap SACCO, our happiest client with 100% satisfaction! He leads a 500+ member cooperative that has been completely transformed by our Zyra SACCO Management System. The system automated their loan processing, member management, and financial reporting, making Wekesa our biggest success story!",
  "success stories": "Our clients have achieved remarkable results: 60% reduction in administrative workload at schools, 45% increase in staff productivity at hospitals, 40% improvement in student completion rates at memorization centers, and 100% client satisfaction across all 25+ projects. We've transformed organizations across education, healthcare, finance, and more!",
  "why choose xhenvolt": "Choose Xhenvolt for our rapid delivery (25+ successful projects in just 3 months), 100% client satisfaction, expert team, enterprise-grade security, deep African market understanding, flexible pricing, comprehensive support, and proven track record across multiple industries. We're not just developers - we're your technology transformation partners!",
  mission: "Our mission is to empower African businesses and institutions with cutting-edge technology solutions that drive sustainable growth, improve efficiency, and create lasting positive impact in communities across the continent.",
  vision: "To become the leading technology partner for organizations across Africa, driving digital transformation that bridges the gap between traditional operations and modern innovation, creating a more connected and prosperous continent.",
  demo: "Yes! We offer product demonstrations for all our solutions. Contact us to schedule a demo of DRAIS School Management, Zyra SACCO System, Sentra POS, Lypha Pharmacy System, or any of our custom solutions. Call +256 741 341 483 to book your demo today!",
  consultation: "We offer free consultations to discuss your project requirements. Contact us at +256 741 341 483 or info@xhenvolt.com to schedule a consultation. We'll analyze your needs and provide customized solution recommendations with no obligation."
};

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
          // Use type guard and type assertion for safe indexing
          if (Object.prototype.hasOwnProperty.call(faqsData, responseKey)) {
            return NextResponse.json({
              answer: faqsData[responseKey as keyof typeof faqsData],
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
