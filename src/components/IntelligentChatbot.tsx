"use client";
import React, { useState } from "react";

const IntelligentChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);

    const response = generateResponse(input);
    setMessages(prev => [...prev, { sender: "bot", text: response }]);
    setInput("");
  };

  const generateResponse = (text) => {
    if (text.toLowerCase().includes("hello")) {
      return "Hi there! How can I help you today?";
    } else if (text.toLowerCase().includes("weather")) {
      return "The weather is great today!";
    } else {
      return "I'm not sure, but I'm learning!";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
        <h1 className="text-xl font-semibold text-center mb-4">Intelligent Chatbot</h1>
        <div className="h-64 overflow-y-auto border p-2 rounded mb-4">
          {messages.map((msg, index) => (
            <div key={index} className={`my-1 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
              <span className={`inline-block px-3 py-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 border rounded-l px-3 py-2 focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntelligentChatbot;