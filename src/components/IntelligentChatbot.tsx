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

// Sample FAQ data - Step 2 implementation
const XHENVOLT_FAQS: FAQ[] = [
  {
    id: "drais-1",
    question: "What is DRAIS?",
    answer: "DRAIS is Xhenvolt's comprehensive school management system for attendance, grades, fees, and communication. It helps schools reduce administrative work by 60%. Want a demo? 📚",
    keywords: ["drais", "school", "management", "attendance", "grades", "fees"],
    category: "products"
  },
  {
    id: "zyra-1", 
    question: "What is Zyra?",
    answer: "Zyra is our intelligent business automation platform that streamlines operations and improves efficiency. Perfect for SMEs in Uganda. 🚀",
    keywords: ["zyra", "automation", "business", "platform", "efficiency"],
    category: "products"
  },
  {
    id: "lypha-1",
    question: "What is Lypha?",
    answer: "Lypha is our data analytics and visualization tool that helps businesses make informed decisions through powerful insights. 📊",
    keywords: ["lypha", "analytics", "data", "visualization", "insights"],
    category: "products"
  },
  {
    id: "rise-1",
    question: "What is RISE?",
    answer: "RISE is our enterprise resource planning solution designed for growing businesses in Uganda. It manages inventory, finance, and operations. 📈",
    keywords: ["rise", "erp", "enterprise", "inventory", "finance", "operations"],
    category: "products"
  },
  {
    id: "pricing-1",
    question: "How much do your solutions cost?",
    answer: "Our pricing is flexible and depends on your specific needs. DRAIS starts from UGX 500,000/year, Zyra from UGX 300,000/year. Call +256 741 341 483 for a personalized quote! 💰",
    keywords: ["price", "cost", "pricing", "how much", "ugx", "money"],
    category: "pricing"
  },
  {
    id: "demo-1",
    question: "How can I schedule a demo?",
    answer: "Easy! Call +256 741 341 483 or email info@xhenvolt.com. We'll set up a personalized demo within 48 hours. Which product interests you most? 🎯",
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
    answer: "We serve schools, SACCOs, retail businesses, healthcare, manufacturing, and SMEs across various sectors in Uganda and East Africa. 🏢",
    keywords: ["industries", "sectors", "business", "schools", "sacco", "retail"],
    category: "services"
  },
  {
    id: "cloud-1",
    question: "Do you offer cloud hosting?",
    answer: "Yes! We offer secure cloud hosting with 99.9% uptime guarantee. Your systems are accessible anywhere, anytime. ☁️",
    keywords: ["cloud", "hosting", "server", "online", "uptime"],
    category: "technical"
  },
  {
    id: "maintenance-1",
    question: "What about ongoing maintenance?",
    answer: "We provide comprehensive maintenance including monitoring, updates, bug fixes, and performance optimization. All included in your plan. 🔧",
    keywords: ["maintenance", "monitor", "fix", "optimize", "ongoing"],
    category: "support"
  },
  {
    id: "reports-1",
    question: "Can I generate custom reports?",
    answer: "Absolutely! Our systems include powerful reporting tools with custom report builders, automated scheduling, and export options. 📊",
    keywords: ["reports", "reporting", "analytics", "custom", "export"],
    category: "features"
  },
  {
    id: "migration-1",
    question: "Can you help migrate from my current system?",
    answer: "Yes! We provide full data migration services from any existing system. We ensure zero data loss and minimal downtime. 📦",
    keywords: ["migration", "migrate", "transfer", "move", "data"],
    category: "services"
  }
];

const IntelligentChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

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

  // Keyword matching function for FAQ lookup
  const findMatchingFAQ = (userInput: string): FAQ | null => {
    const input = userInput.toLowerCase().trim();
    
    // Direct question match first
    const directMatch = XHENVOLT_FAQS.find(faq => 
      faq.question.toLowerCase().includes(input) || 
      input.includes(faq.question.toLowerCase().split('?')[0])
    );
    if (directMatch) return directMatch;

    // Keyword scoring
    const faqScores = XHENVOLT_FAQS.map(faq => {
      const score = faq.keywords.reduce((acc, keyword) => {
        if (input.includes(keyword)) {
          return acc + keyword.length; // Longer keywords get higher scores
        }
        return acc;
      }, 0);
      return { faq, score };
    });

    // Find best match (minimum score threshold of 3)
    const bestMatch = faqScores
      .filter(item => item.score >= 3)
      .sort((a, b) => b.score - a.score)[0];

    return bestMatch ? bestMatch.faq : null;
  };

  // Enhanced message handler with FAQ lookup
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
      
      if (matchedFAQ) {
        addBotMessage(matchedFAQ.answer);
      } else {
        // Fallback responses based on input patterns
        const input = currentInput.toLowerCase();
        
        if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
          addBotMessage("Hello! 👋 I'm here to help you with questions about DRAIS, Zyra, Lypha, pricing, demos, or any other Xhenvolt services. What would you like to know?");
        } else if (input.includes('thank') || input.includes('thanks')) {
          addBotMessage("You're welcome! 😊 Is there anything else about Xhenvolt's solutions I can help you with?");
        } else if (input.includes('bye') || input.includes('goodbye')) {
          addBotMessage("Goodbye! Thanks for chatting with Xhenvolt AI. Feel free to reach out anytime at +256 741 341 483 or info@xhenvolt.com! 👋");
        } else {
          // General fallback with helpful suggestions
          addBotMessage(`I'd love to help you with "${currentInput}"! 🤔\n\nWhile I'm still learning about that specific topic, I can definitely help you with:\n\n• DRAIS school management\n• Zyra business automation\n• Lypha analytics\n• Pricing and demos\n• Technical support\n\nOr call our team at +256 741 341 483 for immediate assistance!`);
        }
      }
    }, 800 + Math.random() * 1200); // Random delay 0.8-2s
  };

  const handleCTAClick = (action: string) => {
    switch (action) {
      case 'ask':
        // Focus on input
        const input = document.querySelector('#chat-input') as HTMLInputElement;
        if (input) input.focus();
        break;
      case 'faqs':
        // Show categorized FAQs
        const faqSummary = `Here are our most common questions by category:\n\n🏢 **Products**\n• What is DRAIS?\n• What is Zyra?\n• What is Lypha?\n\n💰 **Pricing**\n• How much do solutions cost?\n• Payment methods?\n• Free trials?\n\n🎯 **Sales & Demos**\n• Schedule a demo\n• Implementation time\n• Customization options\n\n🛠️ **Support**\n• Technical support\n• Training provided\n• Data security\n\nJust ask me about any of these topics! 😊`;
        addBotMessage(faqSummary);
        break;
      case 'demo':
        addBotMessage("I'd love to schedule a demo for you! 🎯\n\nCall us at +256 741 341 483 or email info@xhenvolt.com\n\nOur team will set up a personalized demo within 48 hours. Which product interests you most?");
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