import React from 'react';
import { ViewState } from '../types';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full h-[600px] bg-slate-900 overflow-hidden flex items-center justify-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Mercedes Abstract" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block mb-4 px-3 py-1 border border-mercedes-accent/50 rounded-full bg-mercedes-accent/10 backdrop-blur-md">
          <span className="text-mercedes-accent font-mono text-sm tracking-widest">EST. 2005 - STUTTGART / TUSCALOOSA</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
          ALİ GÜÇLÜ <span className="text-mercedes-silver">W164 USER</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-8 font-light leading-relaxed">
          OM642 Motor ve W164 Şasi için Devasa Kaynak. <br/>
          Teknik Veriler, Kronik Arızalar ve Yapay Zeka Destekli Usta Desteği.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => onNavigate(ViewState.AI_USTA)}
            className="px-8 py-4 bg-mercedes-accent hover:bg-blue-600 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            AI USTA'ya Sor
          </button>
          
          <button 
             onClick={() => onNavigate(ViewState.SPECS)}
             className="px-8 py-4 bg-transparent border-2 border-slate-500 hover:border-white text-slate-300 hover:text-white font-semibold rounded-lg transition-all flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            Sıvı & Teknik Veriler
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;