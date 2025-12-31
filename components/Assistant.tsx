import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToExpert } from '../services/geminiService';
import { ChatMessage, Language } from '../types';
import { Send, Bot, User, Loader2, Key } from 'lucide-react';

interface AssistantProps {
  lang: Language;
}

const Assistant: React.FC<AssistantProps> = ({ lang }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize greeting based on language
  useEffect(() => {
    const greeting = lang === 'en' 
      ? "Greetings. I am your W164 Master Technician. How can I assist with your Mercedes-Benz today?"
      : "Merhaba. Ben W164 Uzman Teknisyeninizim. Bugün Mercedes-Benz'inizle ilgili size nasıl yardımcı olabilirim?";
    
    setMessages([{
      role: 'model',
      text: greeting,
      timestamp: new Date()
    }]);
  }, [lang]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Convert to gemini history format
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await sendMessageToExpert(input, history, lang);
      
      const botMsg: ChatMessage = { 
        role: 'model', 
        text: responseText, 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: ChatMessage = {
        role: 'model',
        text: lang === 'en' 
          ? "I apologize, my diagnostic system is currently offline." 
          : "Üzgünüm, teşhis sistemim şu anda çevrimdışı.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="h-[600px] flex flex-col bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
      <div className="bg-slate-800 p-4 border-b border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-full">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold">MB Master Tech AI</h3>
            <p className="text-xs text-blue-400">Powered by Gemini | OM642 Specialist</p>
          </div>
        </div>
        {!process.env.API_KEY && (
             <div className="flex items-center gap-1 text-amber-500 text-xs bg-amber-900/20 px-2 py-1 rounded border border-amber-900/50">
                <Key className="h-3 w-3" />
                <span>API Key Missing</span>
             </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[85%] rounded-2xl p-4 ${
                msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
              }`}
            >
              <div className="flex items-center gap-2 mb-1 opacity-50 text-xs">
                 {msg.role === 'user' ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                 <span>{msg.role === 'user' ? (lang === 'en' ? 'You' : 'Siz') : (lang === 'en' ? 'Expert' : 'Uzman')}</span>
              </div>
              <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 rounded-2xl rounded-bl-none p-4 border border-slate-700">
               <div className="flex items-center gap-2 text-slate-400 text-sm">
                 <Loader2 className="h-4 w-4 animate-spin" />
                 <span>{lang === 'en' ? 'Analyzing diagnostics...' : 'Arıza analiz ediliyor...'}</span>
               </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-slate-800 border-t border-slate-700">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={lang === 'en' ? "Ask about oil leaks, limp mode..." : "Yağ kaçakları, koruma modu hakkında sorun..."}
            className="flex-1 bg-slate-900 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-500"
            disabled={isLoading}
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-lg transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        <p className="text-center text-[10px] text-slate-500 mt-2">
           {lang === 'en' ? 'AI can make mistakes. Verify with WIS.' : 'Yapay zeka hata yapabilir. WIS ile doğrulayın.'}
        </p>
      </div>
    </div>
  );
};

export default Assistant;
