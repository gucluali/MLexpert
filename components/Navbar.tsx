import React from 'react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const navItems = [
    { id: ViewState.HOME, label: 'Ana Sayfa' },
    { id: ViewState.SPECS, label: 'Teknik Veri' },
    { id: ViewState.FAULTS, label: 'Arızalar' },
    { id: ViewState.STATS, label: 'Grafikler' },
    { id: ViewState.HISTORY, label: 'Tarihçe' },
    { id: ViewState.AI_USTA, label: 'AI USTA', special: true },
  ];

  return (
    <nav className="bg-mercedes-panel border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer gap-2" 
            onClick={() => onNavigate(ViewState.HOME)}
          >
            <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-500 flex items-center justify-center">
               {/* Abstract Star Icon */}
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
               </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-wider text-lg">ALİ GÜÇLÜ</span>
              <span className="text-slate-400 text-xs tracking-[0.2em] font-mono">W164 USER</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    item.special 
                    ? 'bg-mercedes-accent text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20' 
                    : currentView === item.id 
                      ? 'text-white bg-slate-700' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button (Simplified) */}
          <div className="md:hidden">
             <div className="flex gap-2">
                <button 
                  onClick={() => onNavigate(ViewState.AI_USTA)}
                  className="p-2 rounded-md text-white bg-mercedes-accent"
                >
                  AI
                </button>
                <button 
                   className="text-gray-300 hover:text-white p-2"
                   onClick={() => onNavigate(ViewState.HOME)} // Simple reset for demo
                >
                   <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                   </svg>
                </button>
             </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu List (Visible only on small screens below main nav - rudimentary implementation) */}
      <div className="md:hidden flex overflow-x-auto bg-slate-900 pb-2 px-2 gap-2 scrollbar-hide">
         {navItems.filter(i => !i.special).map(item => (
            <button
               key={item.id}
               onClick={() => onNavigate(item.id)}
               className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold border ${
                 currentView === item.id ? 'bg-slate-700 border-slate-500 text-white' : 'border-slate-800 text-slate-400'
               }`}
            >
              {item.label}
            </button>
         ))}
      </div>
    </nav>
  );
};

export default Navbar;