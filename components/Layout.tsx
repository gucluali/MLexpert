import React, { useState } from 'react';
import { ViewState } from '../types';
import { Car, Wrench, AlertTriangle, Cpu, MessageSquare, MonitorPlay, MapPin, Menu, X } from 'lucide-react';

interface LayoutProps {
  currentView: ViewState;
  onNavigate: (v: ViewState) => void;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ currentView, onNavigate, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'HOME', label: 'Genel', icon: Car },
    { id: 'FAULTS', label: 'Arızalar', icon: AlertTriangle },
    { id: 'CODES', label: 'Kod Çözücü', icon: Cpu },
    { id: 'MAINTENANCE', label: 'Bakım', icon: Wrench },
    { id: 'PRESENTATION', label: 'Eğitim', icon: MonitorPlay },
    { id: 'AI', label: 'AI Usta', icon: MessageSquare },
    { id: 'SERVICE', label: 'İletişim', icon: MapPin },
  ] as const;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navbar */}
      <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div 
              className="flex items-center gap-3 cursor-pointer" 
              onClick={() => onNavigate('HOME')}
            >
              <div className="bg-blue-600 p-2 rounded-lg">
                <Car className="h-6 w-6" />
              </div>
              <div>
                <h1 className="font-bold text-xl tracking-tight">W164<span className="text-slate-400 font-light">Expert</span></h1>
                <span className="text-xs text-blue-400 block -mt-1">ALİ GÜÇÜ</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                    currentView === item.id ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-300">
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { onNavigate(item.id); setIsMobileMenuOpen(false); }}
                  className={`w-full text-left px-3 py-3 rounded-md text-base font-medium flex items-center gap-3 ${
                    currentView === item.id ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 md:py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 py-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>Mercedes-Benz W164 OM642 Bilgi Bankası</p>
          <p className="mt-1">Powered by Google Gemini AI • Tasarım: Ali Güçü</p>
        </div>
      </footer>
    </div>
  );
};