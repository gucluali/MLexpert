import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnicalSpecs from './components/TechnicalSpecs';
import FaultsGuide from './components/FaultsGuide';
import HistorySection from './components/HistorySection';
import StatsDashboard from './components/StatsDashboard';
import AiMechanic from './components/AiMechanic';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <>
            <Hero onNavigate={setCurrentView} />
            <StatsDashboard /> {/* Preview stats on home */}
          </>
        );
      case ViewState.SPECS:
        return <TechnicalSpecs />;
      case ViewState.FAULTS:
        return <FaultsGuide />;
      case ViewState.HISTORY:
        return <HistorySection />;
      case ViewState.STATS:
        return <StatsDashboard />;
      case ViewState.AI_USTA:
        return <AiMechanic />;
      default:
        return <Hero onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-mercedes-accent selection:text-white">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      <main className="fade-in">
        {renderView()}
      </main>
      
      <footer className="bg-mercedes-panel border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p>&copy; 2024 ALİ GÜÇLÜ W164 USER. Tüm Hakları Saklıdır.</p>
            <p className="text-xs mt-1">Mercedes-Benz, Daimler AG'nin tescilli markasıdır. Bu site bağımsız bir hayran projesidir.</p>
          </div>
          <div className="flex gap-4">
             <span className="hover:text-white cursor-pointer transition-colors">Github</span>
             <span className="hover:text-white cursor-pointer transition-colors">Linkedin</span>
             <span className="hover:text-white cursor-pointer transition-colors">Donate</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;