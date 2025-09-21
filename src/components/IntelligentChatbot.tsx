"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles, Minimize2, Volume2, VolumeX } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  typing?: boolean;
}

interface ChatbotConfig {
  proactiveEngagementChance: number; // 0-100%
  typingDelayMin: number; // milliseconds
  typingDelayMax: number; // milliseconds
  inactivityTriggerTime: number; // seconds
  contextMemoryLength: number; // number of messages to remember
  webSearchEnabled: boolean;
  patternMatchingThreshold: number; // 0-1
}

const defaultConfig: ChatbotConfig = {
  proactiveEngagementChance: 20,
  typingDelayMin: 800,
  typingDelayMax: 2500,
  inactivityTriggerTime: 45,
  contextMemoryLength: 10,
  webSearchEnabled: false,
  patternMatchingThreshold: 0.3
};

const proactiveMessages = [
  "👋 Hi there! I noticed you've been browsing our services. Is there anything specific about Xhenvolt's solutions I can help you with?",
  "🚀 Exploring our technology solutions? I'm here to answer any questions about DRAIS, Zyra, or our custom software development!",
  "💡 Need help finding the right solution for your business? I can guide you through our services and success stories!",
  "🌟 Curious about how we've helped clients like Wekesa Muhammad achieve 100% satisfaction? Let me share some insights!",
  "📱 Interested in mobile app development or custom software? I'd love to tell you about our latest projects!",
  "🏆 Want to know why 25+ clients chose Xhenvolt Uganda for their digital transformation? Ask me anything!",
  "💬 I'm your friendly Xhenvolt AI assistant! Feel free to ask about our services, pricing, or schedule a demo.",
  "🎯 Looking for specific solutions? Whether it's school management, SACCO systems, or POS - I can help you find the perfect fit!"
];

const contextualPrompts = [
  "Based on what you're looking at, would you like to know more about our implementation process?",
  "I see you're interested in our services. Would you like me to explain how we can customize solutions for your industry?",
  "Curious about pricing or timeline for your project? I can provide detailed information!",
  "Would you like to hear about similar projects we've completed in your industry?",
  "Interested in scheduling a demo or consultation? I can help you get started!"
];

export default function IntelligentChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionContext, setSessionContext] = useState<string[]>([]);
  const [lastActivity, setLastActivity] = useState(Date.now());
  const [hasEngaged, setHasEngaged] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout>();
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessage: Message = {
      id: '1',
      text: "👋 Hi! I'm your intelligent Xhenvolt AI assistant! I can help you with our services, answer questions about DRAIS, Zyra, pricing, or even just have a friendly chat. What would you like to explore today? 😊",
      isUser: false,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, []);

  // Play notification sound
  const playNotificationSound = useCallback(() => {
    if (!soundEnabled) return;
    
    try {
      if (!audioContextRef.current) {
        const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioContextClass();
      }
      
      const ctx = audioContextRef.current;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.frequency.setValueAtTime(800, ctx.currentTime);
      oscillator.frequency.setValueAtTime(600, ctx.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.3);
    } catch {
      console.log('Audio not supported');
    }
  }, [soundEnabled]);

  // Scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Update last activity
  const updateActivity = useCallback(() => {
    setLastActivity(Date.now());
  }, []);

  // Proactive engagement logic
  const initiateProactiveEngagement = useCallback(() => {
    if (hasEngaged || isOpen) return;

    const shouldEngage = Math.random() * 100 < defaultConfig.proactiveEngagementChance;
    if (!shouldEngage) return;

    setHasEngaged(true);
    const randomMessage = proactiveMessages[Math.floor(Math.random() * proactiveMessages.length)];
    
    // Show notification or open chat with proactive message
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        const proactiveMsg: Message = {
          id: Date.now().toString(),
          text: randomMessage,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, proactiveMsg]);
        playNotificationSound();
      }, 1000);
    }
  }, [hasEngaged, isOpen, playNotificationSound]);

  // Inactivity timer
  useEffect(() => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }

    inactivityTimerRef.current = setTimeout(() => {
      initiateProactiveEngagement();
    }, defaultConfig.inactivityTriggerTime * 1000);

    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [lastActivity, initiateProactiveEngagement]);

  // Track user activity
  useEffect(() => {
    const handleActivity = () => updateActivity();
    
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('scroll', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('keypress', handleActivity);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('keypress', handleActivity);
    };
  }, [updateActivity]);

  // Simulate human-like typing
  const simulateTyping = useCallback((duration?: number) => {
    setIsTyping(true);
    const delay = duration || (defaultConfig.typingDelayMin + Math.random() * (defaultConfig.typingDelayMax - defaultConfig.typingDelayMin));
    
    setTimeout(() => {
      setIsTyping(false);
    }, delay);
    
    return delay;
  }, []);

  // Enhanced message processing with context
  const processMessageWithContext = useCallback((userMessage: string, context: string[]) => {
    const contextString = context.join(' ').toLowerCase();
    const messageLC = userMessage.toLowerCase();
    
    // Context-aware responses
    if (messageLC.includes('more') && contextString.includes('drais')) {
      return "I'd love to tell you more about DRAIS! It's helped schools like Northgate reduce administrative work by 60%. Would you like to know about specific features like grade management, parent portals, or fee tracking? Or would you prefer to see a demo? 📚✨";
    }
    
    if (messageLC.includes('price') || messageLC.includes('cost')) {
      if (contextString.includes('drais') || contextString.includes('school')) {
        return "Great question about DRAIS pricing! Our school management solutions are very competitively priced with flexible payment plans. The exact cost depends on your school size and specific features needed. Would you like me to connect you with our team for a personalized quote? Call +256 741 341 483 or I can help you schedule a free consultation! 💰🎓";
      }
    }
    
    return null; // Use normal processing
  }, []);

  // Send message with enhanced AI
  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Update context
    const newContext = [...sessionContext, inputText].slice(-defaultConfig.contextMemoryLength);
    setSessionContext(newContext);
    
    const currentInput = inputText;
    setInputText('');
    setIsLoading(true);
    
    // Simulate thinking time
    const typingDuration = simulateTyping();

    try {
      // Try context-aware processing first
      const contextualResponse = processMessageWithContext(currentInput, newContext);
      
      if (contextualResponse) {
        setTimeout(() => {
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: contextualResponse,
            isUser: false,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botMessage]);
          setIsLoading(false);
          playNotificationSound();
        }, typingDuration);
        return;
      }

      // Normal API processing
      await new Promise(resolve => setTimeout(resolve, typingDuration));
      
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          question: currentInput,
          context: newContext.slice(-3) // Send recent context
        }),
      });

      const data = await response.json();
      
      let responseText = data.answer || "I'm not quite sure about that, but I'd love to help you find the right information! 🤔 Try asking me about our services like DRAIS, Zyra, pricing, or contact our amazing team at +256 741 341 483 for personalized assistance! 😊";
      
      // Add contextual follow-ups
      if (currentInput.toLowerCase().includes('drais') && !responseText.includes('demo')) {
        responseText += "\n\n🎯 Would you like to schedule a demo to see DRAIS in action?";
      }
      
      if (currentInput.toLowerCase().includes('price') && !responseText.includes('contact')) {
        responseText += "\n\n📞 Want a detailed quote? I can help you get in touch with our team!";
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      playNotificationSound();
      
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Oops! I'm having a tiny technical hiccup 😅 But don't worry - our awesome human team is always available at +256 741 341 483 or info@xhenvolt.com. They'll take excellent care of you! 💙",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      playNotificationSound();
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center z-40 hover:shadow-3xl transition-all duration-300"
          >
            <MessageCircle className="w-8 h-8" />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute inset-0 bg-blue-400 rounded-full"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              height: isMinimized ? 60 : 500 
            }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-6 right-6 w-96 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative">
                  <Bot className="w-6 h-6 text-white" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <Sparkles className="w-3 h-3 text-yellow-300 absolute top-0 right-0" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-bold text-white">Xhenvolt AI Assistant</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-xs text-white/80">Smart & Ready to Help!</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4 text-white" /> : <VolumeX className="w-4 h-4 text-white" />}
                </button>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Minimize2 className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-80">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      {!message.isUser && (
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                      )}
                      
                      <div className={`max-w-[75%] p-3 rounded-2xl ${
                        message.isUser 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                      }`}>
                        <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                        <p className={`text-xs mt-1 opacity-70 ${
                          message.isUser ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                      
                      {message.isUser && (
                        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                  
                  {/* Enhanced Typing Indicator */}
                  {(isLoading || isTyping) && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-3 justify-start"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl">
                        <div className="flex gap-1 items-center">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                            className="w-2 h-2 bg-blue-500 rounded-full"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            className="w-2 h-2 bg-purple-500 rounded-full"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                            className="w-2 h-2 bg-cyan-500 rounded-full"
                          />
                          <span className="text-xs text-gray-500 ml-2">thinking...</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about Xhenvolt! 😊"
                      className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      disabled={isLoading}
                    />
                    <motion.button
                      onClick={sendMessage}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      disabled={!inputText.trim() || isLoading}
                      className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
                    >
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 text-center">
                    🧠 Powered by Intelligent AI • 🚀 Always Learning
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
}
