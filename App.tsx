import React, { useState } from 'react';
import { ViewState } from './types';
import { Layout } from './components/Layout';
import { HomeView, FaultsView, MaintenanceView, CodesView, AiView, PresentationView, ServiceView } from './components/Views';

function App() {
  const [view, setView] = useState<ViewState>('HOME');

  const renderView = () => {
    switch (view) {
      case 'HOME': return <HomeView nav={setView} />;
      case 'FAULTS': return <FaultsView />;
      case 'MAINTENANCE': return <MaintenanceView />;
      case 'CODES': return <CodesView />;
      case 'AI': return <AiView />;
      case 'PRESENTATION': return <PresentationView />;
      case 'SERVICE': return <ServiceView />;
      default: return <HomeView nav={setView} />;
    }
  };

  return (
    <Layout currentView={view} onNavigate={setView}>
      {renderView()}
    </Layout>
  );
}

export default App;