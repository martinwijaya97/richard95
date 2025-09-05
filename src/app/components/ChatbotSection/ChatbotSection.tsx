'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatbotSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Mr. Pengu Honorer, contract teacher earning $53/month. Ask me anything! (max 50 chars) 😊",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim() || inputValue.length > 50) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || 'Maaf, terjadi kesalahan. Silakan coba lagi.',
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Maaf, terjadi kesalahan koneksi. Silakan coba lagi.',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setInputValue(value);
    }
  };

  return (
    <section className='py-16 px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-8'>
          <h2 className='text-4xl font-bold text-white mb-4'>
            Chat with Mr. PENGU HONORER
          </h2>
          <p className='text-lg text-gray-300'>
            Contract Teacher ready to listen and share experiences
          </p>
          <p className='text-sm text-yellow-400 mt-2'>
            &quot;Teaching with heart, despite earning only $53/month&quot;
          </p>
        </div>

        <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-green-500/30 shadow-2xl'>
          {/* Chat Messages */}
          <div className='h-96 overflow-y-auto p-6 space-y-4'>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isUser ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                    message.isUser ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.isUser ? 'bg-teal-600' : 'bg-green-700'
                    }`}
                  >
                    {message.isUser ? (
                      <User className='w-4 h-4 text-white' />
                    ) : (
                      <Bot className='w-4 h-4 text-white' />
                    )}
                  </div>
                  <div
                    className={`px-4 py-2 rounded-2xl ${
                      message.isUser
                        ? 'bg-teal-600 text-white'
                        : 'bg-green-800 text-white'
                    }`}
                  >
                    <p className='text-sm'>{message.text}</p>
                    <p className='text-xs opacity-70 mt-1'>
                      {message.timestamp.toLocaleTimeString('id-ID', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className='flex justify-start'>
                <div className='flex items-start space-x-3'>
                  <div className='w-8 h-8 rounded-full bg-green-700 flex items-center justify-center'>
                    <Bot className='w-4 h-4 text-white' />
                  </div>
                  <div className='bg-gray-700 px-4 py-2 rounded-2xl'>
                    <div className='flex space-x-1'>
                      <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'></div>
                      <div
                        className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                        style={{ animationDelay: '0.1s' }}
                      ></div>
                      <div
                        className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                        style={{ animationDelay: '0.2s' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <div className='p-6 border-t border-gray-700'>
            <form onSubmit={handleSubmit} className='flex space-x-4'>
              <div className='flex-1'>
                <input
                  type='text'
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder='Share your story or ask Mr. Pengu Honorer... (max 50 characters)'
                  className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                  disabled={isLoading}
                />
                <div className='mt-1 text-right'>
                  <span
                    className={`text-xs ${
                      inputValue.length >= 45 ? 'text-red-400' : 'text-gray-400'
                    }`}
                  >
                    {inputValue.length}/50
                  </span>
                </div>
              </div>
              <button
                type='submit'
                disabled={
                  !inputValue.trim() || inputValue.length > 50 || isLoading
                }
                className='px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl hover:from-green-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2'
              >
                <Send className='w-4 h-4' />
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
