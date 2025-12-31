import React, { useState, useEffect, useRef } from 'react';
import { getAIUstaResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiMechanic: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: 'Selamün aleyküm kardeşim. Ben Ali Güçlü Usta. W164 ML veya OM642 motorunla ilgili derdin nedir? Ses mi var, ışık mı yaktı, yoksa bakım mı soracaksın? Anlat bakalım.',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const responseText = await getAIUstaResponse(messages, input);
      
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("Chat error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-slate-900">
      {/* Header */}
      <div className="bg-slate-800 p-4 border-b border-slate-700 flex items-center justify-between shadow-lg z-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-mercedes-accent rounded-full flex items-center justify-center border-2 border-white overflow-hidden">
             <img src="https://picsum.photos/200/200?grayscale" alt="Ali Usta" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-white font-bold text-lg">AI USTA (Ali Güçlü)</h2>
            <p className="text-green-400 text-xs flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Çevrimiçi - W164 Uzmanı
            </p>
          </div>
        </div>
        <div className="hidden md:block text-slate-400 text-xs text-right">
          Powered by Gemini 3 Flash<br/>Mercedes-Benz Knowledge Base
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-slate-900 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[85%] md:max-w-[70%] rounded-2xl p-4 shadow-md ${
                msg.role === 'user' 
                  ? 'bg-mercedes-accent text-white rounded-tr-none' 
                  : 'bg-slate-700 text-slate-100 rounded-tl-none border border-slate-600'
              }`}
            >
              <div className="whitespace-pre-wrap text-sm md:text-base leading-relaxed">
                {msg.text}
              </div>
              <div className={`text-[10px] mt-2 opacity-70 ${msg.role === 'user' ? 'text-blue-100' : 'text-slate-400'}`}>
                {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-700 rounded-2xl rounded-tl-none p-4 border border-slate-600 flex items-center gap-2">
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
              <span className="text-slate-400 text-xs ml-2">Usta düşünüyor...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-slate-800 p-4 border-t border-slate-700">
        <div className="max-w-4xl mx-auto flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Arızanı yaz evlat... (Örn: 'Sabahları geç çalışıyor', 'Kırmızı yağ damlatıyor')"
            className="flex-1 bg-slate-900 text-white border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-mercedes-accent focus:ring-1 focus:ring-mercedes-accent transition-all placeholder-slate-500"
            disabled={loading}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="bg-mercedes-accent hover:bg-blue-600 disabled:bg-slate-600 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2"
          >
            <span>GÖNDER</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-90" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiMechanic;