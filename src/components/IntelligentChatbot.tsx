"use client";
import React, { useState, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  type?: 'text' | 'cta';
  ctaButtons?: Array<{
    label: string;
    action: string;
  }>;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  category?: string;
}

// Updated FAQ data with correct product information - Step 2 + corrections
const XHENVOLT_FAQS: FAQ[] = [
  {
    id: "drais-1",
    question: "What is DRAIS?",
    answer: "DRAIS is Xhenvolt's comprehensive school management system for attendance, grades, fees, student records, and parent communication. It helps schools reduce administrative work by 60%. Want a demo? 📚",
    keywords: ["drais", "school", "management", "attendance", "grades", "fees", "students", "education"],
    category: "products"
  },
  {
    id: "constra-1", 
    question: "What is Constra?",
    answer: "Constra is our construction management system that handles project planning, resource allocation, progress tracking, and cost management for construction companies. Perfect for contractors in Uganda. 🏗️",
    keywords: ["constra", "construction", "building", "project", "contractor", "management"],
    category: "products"
  },
  {
    id: "zyra-1",
    question: "What is Zyra?",
    answer: "Zyra is our SACCO management system that handles member management, loans, savings, shares, and financial reporting for savings and credit cooperatives. Trusted by SACCOs across Uganda. 💰",
    keywords: ["zyra", "sacco", "savings", "credit", "loans", "cooperative", "members"],
    category: "products"
  },
  {
    id: "inveto-1",
    question: "What is Inveto?",
    answer: "Inveto is our investment management system that tracks portfolios, analyzes performance, manages assets, and provides investment insights for financial institutions and individual investors. 📈",
    keywords: ["inveto", "investment", "portfolio", "assets", "financial", "trading"],
    category: "products"
  },
  {
    id: "sentra-1",
    question: "What is Sentra?",
    answer: "Sentra is our Point of Sale (POS) system for retail businesses. It handles sales, inventory, customer management, and reporting. Perfect for shops, restaurants, and retail chains. 🛒",
    keywords: ["sentra", "pos", "point of sale", "retail", "sales", "inventory", "shop"],
    category: "products"
  },
  {
    id: "pricing-drais",
    question: "How much does DRAIS cost?",
    answer: "DRAIS pricing starts from UGX 800,000/year for small schools (up to 200 students) and scales based on school size and features. Call +256 741 341 483 for a personalized quote! 💰",
    keywords: ["drais", "price", "cost", "school", "pricing", "ugx"],
    category: "pricing"
  },
  {
    id: "pricing-zyra",
    question: "How much does Zyra cost?",
    answer: "Zyra SACCO management system starts from UGX 1,200,000/year for small SACCOs (up to 500 members). Pricing varies by member count and features. Contact us for details! 💳",
    keywords: ["zyra", "price", "cost", "sacco", "pricing", "ugx"],
    category: "pricing"
  },
  {
    id: "pricing-sentra",
    question: "How much does Sentra cost?",
    answer: "Sentra POS starts from UGX 300,000/year for single outlet retail businesses. Multi-outlet packages available. Call +256 741 341 483 for competitive pricing! 🏪",
    keywords: ["sentra", "pos", "price", "cost", "retail", "pricing", "ugx"],
    category: "pricing"
  },
  {
    id: "demo-1",
    question: "How can I schedule a demo?",
    answer: "Easy! Call +256 741 341 483 or email info@xhenvolt.com. We'll set up a personalized demo within 48 hours. Which product interests you most - DRAIS, Zyra, Constra, Inveto, or Sentra? 🎯",
    keywords: ["demo", "schedule", "appointment", "meeting", "show"],
    category: "sales"
  },
  {
    id: "support-1",
    question: "Do you provide technical support?",
    answer: "Absolutely! We provide 24/7 technical support, training, and maintenance. Our team is always here to help you succeed. 🛠️",
    keywords: ["support", "help", "technical", "training", "maintenance"],
    category: "support"
  },
  {
    id: "location-1",
    question: "Where is Xhenvolt located?",
    answer: "We're proudly based in Uganda, serving clients across East Africa. Our local presence means we understand your business needs. 🇺🇬",
    keywords: ["location", "where", "uganda", "address", "office"],
    category: "company"
  },
  {
    id: "implementation-1",
    question: "How long does implementation take?",
    answer: "Implementation typically takes 2-4 weeks depending on complexity. We provide full support and training throughout the process. ⏱️",
    keywords: ["implementation", "install", "setup", "how long", "time"],
    category: "services"
  },
  {
    id: "customization-1",
    question: "Can you customize solutions for my business?",
    answer: "Yes! All our solutions are highly customizable. We tailor them to fit your specific industry and business processes. 🎨",
    keywords: ["customize", "custom", "tailor", "specific", "industry"],
    category: "services"
  },
  {
    id: "integration-1",
    question: "Do your systems integrate with existing software?",
    answer: "Our solutions integrate seamlessly with most existing systems through APIs and standard protocols. We ensure smooth data flow. 🔗",
    keywords: ["integrate", "integration", "api", "existing", "connect"],
    category: "technical"
  },
  {
    id: "security-1",
    question: "How secure are your systems?",
    answer: "Security is our top priority. We use enterprise-grade encryption, regular backups, and comply with international standards. 🔒",
    keywords: ["security", "secure", "safe", "encryption", "backup"],
    category: "technical"
  },
  {
    id: "training-1",
    question: "Do you provide user training?",
    answer: "Yes! We provide comprehensive training for all users, including documentation, video tutorials, and hands-on sessions. 📖",
    keywords: ["training", "learn", "education", "tutorial", "guide"],
    category: "support"
  },
  {
    id: "mobile-1",
    question: "Are your solutions mobile-friendly?",
    answer: "All our solutions are fully responsive and mobile-optimized. We also have dedicated mobile apps for key features. 📱",
    keywords: ["mobile", "phone", "app", "responsive", "android", "ios"],
    category: "technical"
  },
  {
    id: "backup-1",
    question: "How do you handle data backup?",
    answer: "We perform automated daily backups with multiple redundancy levels. Your data is always safe and recoverable. ☁️",
    keywords: ["backup", "data", "recovery", "restore", "cloud"],
    category: "technical"
  },
  {
    id: "updates-1",
    question: "How often do you release updates?",
    answer: "We release regular updates monthly with new features and improvements. All updates are included in your subscription. 🔄",
    keywords: ["updates", "upgrade", "new features", "improvements"],
    category: "technical"
  },
  {
    id: "trial-1",
    question: "Do you offer free trials?",
    answer: "Yes! We offer 30-day free trials for all our products. No commitment required - just call +256 741 341 483 to get started! 🆓",
    keywords: ["trial", "free", "test", "try", "evaluation"],
    category: "sales"
  },
  {
    id: "payment-1",
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, mobile money (MTN, Airtel), and major credit cards. Flexible payment plans available in UGX. 💳",
    keywords: ["payment", "pay", "money", "bank", "mobile money", "credit card"],
    category: "pricing"
  },
  {
    id: "contact-1",
    question: "How can I contact Xhenvolt?",
    answer: "📞 Phone: +256 741 341 483\n📧 Email: info@xhenvolt.com\n🌐 Website: xhenvolt.com\n\nWe're available 24/7 for support and consultations!",
    keywords: ["contact", "phone", "email", "reach", "talk"],
    category: "company"
  },
  {
    id: "experience-1",
    question: "How experienced is Xhenvolt?",
    answer: "We've served 25+ clients with 100% satisfaction rate. Our team has deep expertise in software development and understanding of Ugandan business needs. 🏆",
    keywords: ["experience", "clients", "expertise", "years", "track record"],
    category: "company"
  },
  {
    id: "industries-1",
    question: "Which industries do you serve?",
    answer: "We serve schools (DRAIS), SACCOs (Zyra), construction companies (Constra), investment firms (Inveto), retail businesses (Sentra), and various SMEs across Uganda and East Africa. 🏢",
    keywords: ["industries", "sectors", "business", "schools", "sacco", "retail", "construction"],
    category: "services"
  }
];

// Step 3: Business context and facts
const XHENVOLT_BUSINESS_FACTS = {
  contact: {
    phone: "+256 741 341 483",
    email: "info@xhenvolt.com",
    website: "xhenvolt.com",
    location: "Uganda, East Africa"
  },
  products: {
    drais: "School Management System",
    constra: "Construction Management System", 
    zyra: "SACCO Management System",
    inveto: "Investment Management System",
    sentra: "Point of Sale (POS) System"
  },
  stats: {
    clients: "25+",
    satisfaction: "100%",
    experience: "5+ years",
    support: "24/7"
  },
  services: [
    "Custom software development",
    "System integration", 
    "Training and support",
    "Data migration",
    "Cloud hosting",
    "Mobile app development"
  ]
};

const IntelligentChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState<string[]>([]);
  const [userInterests, setUserInterests] = useState<string[]>([]);

  // Check if welcome message was already shown (localStorage)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const welcomeShown = localStorage.getItem('xhenvolt-chat-welcome-shown');
      setHasShownWelcome(!!welcomeShown);
    }
  }, []);

  // Show welcome message when chat opens for the first time
  useEffect(() => {
    if (isOpen && !hasShownWelcome && messages.length === 0) {
      const timer = setTimeout(() => {
        const welcomeMessage: Message = {
          id: 'welcome-1',
          text: "👋 Hi — I'm Xhenvolt's AI Assistant. I can help with DRAIS, Zyra, Lypha, pricing, demos, or support. Would you like to:",
          isUser: false,
          timestamp: new Date(),
          type: 'cta',
          ctaButtons: [
            { label: 'Ask a question', action: 'ask' },
            { label: 'View FAQs', action: 'faqs' },
            { label: 'Schedule a demo', action: 'demo' }
          ]
        };
        setMessages([welcomeMessage]);
        
        if (typeof window !== 'undefined') {
          localStorage.setItem('xhenvolt-chat-welcome-shown', 'true');
          setHasShownWelcome(true);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, hasShownWelcome, messages.length]);

  // Step 3: Context-aware conversation memory
  const updateConversationContext = (userInput: string, botResponse: string) => {
    const newContext = [...conversationContext, userInput, botResponse].slice(-6); // Keep last 6 exchanges
    setConversationContext(newContext);
    
    // Track user interests based on keywords
    const interests = [];
    const input = userInput.toLowerCase();
    if (input.includes('drais') || input.includes('school')) interests.push('school-management');
    if (input.includes('zyra') || input.includes('sacco')) interests.push('sacco-management');
    if (input.includes('constra') || input.includes('construction')) interests.push('construction-management');
    if (input.includes('inveto') || input.includes('investment')) interests.push('investment-management');
    if (input.includes('sentra') || input.includes('pos') || input.includes('retail')) interests.push('pos-retail');
    if (input.includes('price') || input.includes('cost')) interests.push('pricing');
    
    if (interests.length > 0) {
      setUserInterests(prev => [...new Set([...prev, ...interests])]);
    }
  };

  // Keyword matching function for FAQ lookup
  const findMatchingFAQ = (userInput: string): FAQ | null => {
    const input = userInput.toLowerCase().trim();
    
    // Context-aware matching - boost scores for previously discussed topics
    const contextBoost = (faq: FAQ): number => {
      let boost = 0;
      if (userInterests.includes('school-management') && faq.id.includes('drais')) boost += 2;
      if (userInterests.includes('sacco-management') && faq.id.includes('zyra')) boost += 2;
      if (userInterests.includes('construction-management') && faq.id.includes('constra')) boost += 2;
      if (userInterests.includes('investment-management') && faq.id.includes('inveto')) boost += 2;
      if (userInterests.includes('pos-retail') && faq.id.includes('sentra')) boost += 2;
      return boost;
    };

    // Direct question match first
    const directMatch = XHENVOLT_FAQS.find(faq => 
      faq.question.toLowerCase().includes(input) || 
      input.includes(faq.question.toLowerCase().split('?')[0])
    );
    if (directMatch) return directMatch;

    // Keyword scoring with context awareness
    const faqScores = XHENVOLT_FAQS.map(faq => {
      const keywordScore = faq.keywords.reduce((acc, keyword) => {
        if (input.includes(keyword)) {
          return acc + keyword.length;
        }
        return acc;
      }, 0);
      
      const contextScore = contextBoost(faq);
      return { faq, score: keywordScore + contextScore };
    });

    // Find best match (minimum score threshold of 3)
    const bestMatch = faqScores
      .filter(item => item.score >= 3)
      .sort((a, b) => b.score - a.score)[0];

    return bestMatch ? bestMatch.faq : null;
  };

  // Enhanced message handler with context memory
  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputText,
      isUser: true,
      timestamp: new Date(),
      type: 'text'
    };
    setMessages(prev => [...prev, userMessage]);

    const currentInput = inputText;
    setInputText('');
    setIsTyping(true);

    // Simulate thinking time
    setTimeout(() => {
      setIsTyping(false);
      
      // Try FAQ matching first
      const matchedFAQ = findMatchingFAQ(currentInput);
      let response = '';
      
      if (matchedFAQ) {
        response = matchedFAQ.answer;
        
        // Add contextual follow-ups based on user interests
        if (matchedFAQ.category === 'products' && !userInterests.includes('pricing')) {
          response += "\n\nWould you like to know about pricing for this solution?";
        }
        if (matchedFAQ.category === 'pricing' && !userInterests.includes('demo')) {
          response += "\n\nInterested in seeing a demo?";
        }
      } else {
        // Enhanced fallback responses with business context
        const input = currentInput.toLowerCase();
        
        if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
          const productMention = userInterests.length > 0 
            ? ` I see you've been interested in ${userInterests.includes('school-management') ? 'DRAIS' : userInterests.includes('sacco-management') ? 'Zyra' : 'our solutions'}.`
            : '';
          response = `Hello! 👋 I'm here to help you with DRAIS, Zyra, Constra, Inveto, Sentra, or any Xhenvolt services.${productMention} What would you like to know?`;
        } else if (input.includes('thank') || input.includes('thanks')) {
          response = "You're welcome! 😊 Is there anything else about our solutions I can help you with? We're here 24/7!";
        } else if (input.includes('bye') || input.includes('goodbye')) {
          response = `Goodbye! Thanks for chatting with Xhenvolt AI. ${XHENVOLT_BUSINESS_FACTS.contact.phone} or ${XHENVOLT_BUSINESS_FACTS.contact.email} for any follow-up questions! 👋`;
        } else {
          // Contextual suggestions based on conversation history
          const suggestions = [];
          if (!userInterests.includes('school-management')) suggestions.push('• DRAIS school management');
          if (!userInterests.includes('sacco-management')) suggestions.push('• Zyra SACCO management');
          if (!userInterests.includes('pos-retail')) suggestions.push('• Sentra POS system');
          if (!userInterests.includes('pricing')) suggestions.push('• Pricing information');
          
          response = `I'd love to help you with "${currentInput}"! 🤔\n\nWhile I'm learning about that topic, I can definitely help with:\n\n${suggestions.slice(0, 4).join('\n')}\n\nOr call ${XHENVOLT_BUSINESS_FACTS.contact.phone} for immediate assistance!`;
        }
      }
      
      addBotMessage(response);
      updateConversationContext(currentInput, response);
    }, 800 + Math.random() * 1200);
  };

  const handleCTAClick = (action: string) => {
    switch (action) {
      case 'ask':
        // Focus on input
        const input = document.querySelector('#chat-input') as HTMLInputElement;
        if (input) input.focus();
        break;
      case 'faqs':
        // Updated FAQ summary with correct products
        const faqSummary = `Here are our most common questions by category:\n\n🏢 **Products**\n• What is DRAIS? (School Management)\n• What is Zyra? (SACCO Management)\n• What is Constra? (Construction Management)\n• What is Inveto? (Investment Management)\n• What is Sentra? (POS System)\n\n💰 **Pricing**\n• How much do solutions cost?\n• Payment methods?\n• Free trials?\n\n🎯 **Sales & Demos**\n• Schedule a demo\n• Implementation time\n• Customization options\n\n🛠️ **Support**\n• Technical support (${XHENVOLT_BUSINESS_FACTS.stats.support})\n• Training provided\n• Data security\n\nJust ask me about any of these topics! 😊`;
        addBotMessage(faqSummary);
        break;
      case 'demo':
        addBotMessage(`I'd love to schedule a demo for you! 🎯\n\nCall us at ${XHENVOLT_BUSINESS_FACTS.contact.phone} or email ${XHENVOLT_BUSINESS_FACTS.contact.email}\n\nOur team will set up a personalized demo within 48 hours. Which product interests you most - DRAIS, Zyra, Constra, Inveto, or Sentra?`);
        break;
    }
  };

  const addBotMessage = (text: string) => {
    const botMessage: Message = {
      id: `bot-${Date.now()}`,
      text,
      isUser: false,
      timestamp: new Date(),
      type: 'text'
    };
    setMessages(prev => [...prev, botMessage]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Xhenvolt chat"
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          {/* Online indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden transition-all duration-300 ${
          isMinimized ? 'h-16' : 'h-[500px]'
        }`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">X</span>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Xhenvolt AI Assistant</h3>
                <p className="text-xs text-white/80">Online • Ready to help</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMinimized ? "M4 8l4-4 4 4" : "M20 12l-4-4-4 4"} />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close chat"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                        : 'bg-white text-gray-800 shadow-sm border'
                    }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                      
                      {/* CTA Buttons */}
                      {message.type === 'cta' && message.ctaButtons && (
                        <div className="flex flex-col gap-2 mt-3">
                          {message.ctaButtons.map((button, index) => (
                            <button
                              key={index}
                              onClick={() => handleCTAClick(button.action)}
                              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
                              {button.label}
                            </button>
                          ))}
                        </div>
                      )}
                      
                      <p className={`text-xs mt-2 opacity-70 ${
                        message.isUser ? 'text-white/70' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 shadow-sm border p-3 rounded-2xl max-w-[80%]">
                      <div className="flex items-center gap-1">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                        <span className="text-xs text-gray-500 ml-2">Xhenvolt AI is thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t bg-white">
                <div className="flex gap-2">
                  <input
                    id="chat-input"
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about DRAIS, Zyra, pricing..."
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim()}
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    aria-label="Send message"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Powered by Xhenvolt AI • Always learning
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default IntelligentChatbot;