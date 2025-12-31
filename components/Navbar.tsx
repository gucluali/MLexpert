import React from 'react';
import { PageView, Language } from '../types';
import { Wrench, Droplet, AlertTriangle, Cpu, Car, BookOpen, Languages } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, lang, setLang }) => {
  const translations = {
    en: {
      overview: 'Overview',
      models: 'Encyclopedia',
      engine: 'OM642 Engine',
      fluids: 'Fluids & Specs',
      faults: 'Diagnostics'
    },
    tr: {
      overview: 'Özet',
      models: 'Ansiklopedi',
      engine: 'OM642 Motor',
      fluids: 'Sıvılar & Spek',
      faults: 'Arıza Teşhis'
    }
  };

  const t = translations[lang];

  const navItems = [
    { id: PageView.HOME, label: t.overview, icon: Car },
    { id: PageView.MODELS, label: t.models, icon: BookOpen },
    { id: PageView.ENGINE, label: t.engine, icon: Cpu },
    { id: PageView.FLUIDS, label: t.fluids, icon: Droplet },
    { id: PageView.FAULTS, label: t.faults, icon: AlertTriangle },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate(PageView.HOME)}>
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              W164<span className="text-blue-500">Expert</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-baseline space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="h-6 w-px bg-slate-700 mx-2"></div>

            <button
              onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}
              className="flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-slate-800 transition-colors text-slate-300"
            >
              <Languages className="h-4 w-4" />
              <span className="text-xs font-bold font-mono">{lang.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Lang Toggle */}
          <div className="md:hidden flex items-center">
             <button
              onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}
              className="flex items-center gap-1 px-3 py-2 rounded-md bg-slate-800 text-slate-300"
            >
              <span className="text-xs font-bold">{lang.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Bar (Bottom) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 pb-safe z-50">
        <div className="flex justify-around py-3 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 min-w-[60px] ${
                currentPage === item.id ? 'text-blue-500' : 'text-slate-400'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-[10px] uppercase tracking-wider truncate w-full text-center px-1">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;