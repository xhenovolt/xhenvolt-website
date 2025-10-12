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

const IntelligentChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [hasShownWelcome, setHasShownWelcome] = useState(false);

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

  const handleCTAClick = (action: string) => {
    switch (action) {
      case 'ask':
        // Focus on input
        const input = document.querySelector('#chat-input') as HTMLInputElement;
        if (input) input.focus();
        break;
      case 'faqs':
        addBotMessage("Here are some common questions:\n\n• What is DRAIS?\n• How much does Zyra cost?\n• Can I schedule a demo?\n\nWhat would you like to know more about?");
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

    // Simple fallback response (Step 1 - no backend)
    setTimeout(() => {
      addBotMessage("Thanks for your message! I'm still learning. For immediate assistance, please call +256 741 341 483 or email info@xhenvolt.com. 📞");
    }, 800);

    setInputText('');
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