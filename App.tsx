import React, { useState } from 'react';
import { View } from './types';
import { Navigation } from './components/Navigation';
import { HomeView } from './components/HomeView';
import { FaultsView } from './components/FaultsView';
import { MaintenanceView } from './components/MaintenanceView';
import { CodesView } from './components/CodesView';
import { AiAssistant } from './components/AiAssistant';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return <HomeView onNavigate={setCurrentView} />;
      case View.FAULTS:
        return <FaultsView />;
      case View.MAINTENANCE:
        return <MaintenanceView />;
      case View.CODES:
        return <CodesView />;
      case View.AI_ASSISTANT:
        return <AiAssistant />;
      default:
        return <HomeView onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navigation currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderView()}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2">Mercedes-Benz W164 OM642 Bilgi Sistemi</p>
          <p className="text-sm text-slate-500">
            Bu site resmi Mercedes-Benz ürünü değildir. Bilgiler tavsiye niteliğindedir.
            <br />
            Powered by Google Gemini AI
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;