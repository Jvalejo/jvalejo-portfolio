'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Plus, Linkedin } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const quickActions = [
    'What is your leadership philosophy?',
    'Explain Empathic Design.',
    'How do you scale quality with AI?'
  ];

  const sendMessage = async (messageText) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage = { role: 'user', content: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText, history: messages })
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage = { role: 'assistant', content: data.response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = {
        role: 'assistant',
        content: 'I encountered an error. Please try again or verify the API configuration.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickAction = (action) => {
    sendMessage(action);
  };

  return (
    <>
      {/* Floating Action Button - Industrial Noir */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-14 h-14 border border-zinc-700 bg-black hover:bg-zinc-950 hover:border-yellow-500 text-zinc-100 transition-all duration-300 flex items-center justify-center z-50 group backdrop-blur-md"
        aria-label="Open The Alter-Ego"
      >
        {isOpen ? (
          <X className="w-5 h-5" strokeWidth={1.5} />
        ) : (
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" strokeWidth={1.5} />
        )}
      </button>

      {/* Chat Window - Industrial Noir */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-96 max-w-[calc(100vw-4rem)] h-[550px] border border-zinc-800 bg-zinc-950/90 backdrop-blur-md flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="border-b border-zinc-800 bg-black/50 p-4 flex items-center justify-between flex-shrink-0">
            <div>
              <div className="text-zinc-100 font-serif text-base tracking-tight mb-1">
                The Alter-Ego
              </div>
              <div className="text-zinc-500 font-mono text-[9px] uppercase tracking-wider">
                Jeison's Strategy Twin
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-zinc-100 transition-colors"
            >
              <X className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>

          {/* Messages Area - Fixed Height with Scroll */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px]">
            {messages.length === 0 && (
              <div className="py-6">
                <div className="w-12 h-12 border border-zinc-800 bg-black flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-6 h-6 text-yellow-500" strokeWidth={1.5} />
                </div>
                
                {/* Initial Message */}
                <div className="text-center mb-8">
                  <p className="text-zinc-300 text-sm leading-relaxed mb-2">
                    I'm Jeison's AI counterpart.
                  </p>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    Ask me about leadership, strategy, or design philosophy.
                  </p>
                </div>
                
                {/* Safe Quick Actions */}
                <div className="space-y-2">
                  {quickActions.map((action, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickAction(action)}
                      className="w-full text-left px-4 py-3 border border-zinc-800 bg-black hover:bg-zinc-950 hover:border-yellow-500/50 text-zinc-400 hover:text-zinc-100 text-xs transition-all duration-200"
                    >
                      <span className="text-yellow-500 mr-2">→</span>
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 ${
                    msg.role === 'user'
                      ? 'border border-yellow-500/50 bg-yellow-500/5 text-zinc-100'
                      : 'border border-zinc-800 bg-black text-zinc-300'
                  }`}
                >
                  <p className="text-xs leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="border border-zinc-800 bg-black px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-yellow-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-yellow-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-yellow-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            {/* LinkedIn Redirect Message */}
            {messages.length > 0 && (
              <div className="mt-6 pt-4 border-t border-zinc-800">
                <a 
                  href="https://www.linkedin.com/in/jeisonvalejo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 border border-zinc-800 bg-black hover:border-yellow-500/50 transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-yellow-500 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-zinc-300 text-xs leading-relaxed">
                      Message me directly on LinkedIn to discuss the 2026 Strategy.
                    </p>
                  </div>
                </a>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="border-t border-zinc-800 p-4 bg-black/50 flex-shrink-0">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything..."
                className="flex-1 border border-zinc-800 bg-black px-4 py-2 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-yellow-500/50 text-xs"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="border border-zinc-800 bg-black hover:bg-zinc-950 hover:border-yellow-500/50 disabled:border-zinc-900 disabled:bg-zinc-950 text-zinc-100 disabled:text-zinc-700 px-4 py-2 transition-all duration-200 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}