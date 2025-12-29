import React from 'react';
import { View } from '../types';
import { Car, Wrench, FileText, AlertTriangle, MessageSquare, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { view: View.HOME, label: 'Genel Bakış', icon: Car },
    { view: View.FAULTS, label: 'Kronik Arızalar', icon: AlertTriangle },
    { view: View.CODES, label: 'Hata Kodları', icon: FileText },
    { view: View.MAINTENANCE, label: 'Bakım Şeması', icon: Wrench },
    { view: View.AI_ASSISTANT, label: 'AI Usta', icon: MessageSquare },
  ];

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate(View.HOME)}>
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight flex items-center">
              W164<span className="text-slate-400 font-light">Expert</span>
              <span className="ml-3 text-blue-400 font-medium text-sm border-l border-slate-700 pl-3">ALİ GÜÇÜ</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => onNavigate(item.view)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                    currentView === item.view
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 pb-3 pt-2">
          <div className="px-2 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => {
                  onNavigate(item.view);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium flex items-center gap-3 ${
                  currentView === item.view
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
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
  );
};