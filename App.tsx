import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EngineSection from './components/EngineSection';
import FluidTable from './components/FluidTable';
import FaultsList from './components/FaultsList';
import ModelsSection from './components/ModelsSection';
import Assistant from './components/Assistant';
import { PageView, Language } from './types';
import { ChevronRight, ShieldCheck, Wrench, BookOpen } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>(PageView.HOME);
  const [lang, setLang] = useState<Language>('en');

  const renderContent = () => {
    switch (currentPage) {
      case PageView.MODELS:
        return <ModelsSection lang={lang} />;
      case PageView.ENGINE:
        return <EngineSection />; // EngineSection is mostly visual/static numbers, kept simple for now
      case PageView.FLUIDS:
        return <FluidTable lang={lang} />;
      case PageView.FAULTS:
        return <FaultsList lang={lang} />;
      case PageView.ASSISTANT:
        return (
          <div className="max-w-4xl mx-auto">
             <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {lang === 'en' ? 'Virtual Master Technician' : 'Sanal Usta Teknisyen'}
                </h2>
                <p className="text-slate-400">
                    {lang === 'en' 
                      ? 'Use this tool to ask complex questions not covered in the static guides. The AI is trained to act as a Mercedes-Benz specialist.'
                      : 'Statik kılavuzlarda kapsanmayan karmaşık soruları sormak için bu aracı kullanın. Yapay zeka Mercedes-Benz uzmanı olarak eğitilmiştir.'}
                </p>
             </div>
             <Assistant lang={lang} />
          </div>
        );
      case PageView.HOME:
      default:
        return (
          <div className="space-y-12 animate-fade-in">
            {/* Hero Section */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
                {/* 2007 ML 320 CDI Image - Definitive W164 Source */}
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Mercedes-Benz_ML_320_CDI_%28W_164%29_%E2%80%93_Frontansicht%2C_23._September_2012%2C_Wuppertal.jpg/1280px-Mercedes-Benz_ML_320_CDI_%28W_164%29_%E2%80%93_Frontansicht%2C_23._September_2012%2C_Wuppertal.jpg"
                    onError={(e) => {
                      // Fallback to a high quality black W164 if the silver one fails
                      e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/2007_Mercedes-Benz_ML320_CDI_--_01-22-2010.jpg/1280px-2007_Mercedes-Benz_ML320_CDI_--_01-22-2010.jpg";
                    }}
                    alt="2007 Mercedes-Benz ML 320 CDI W164" 
                    className="w-full h-80 md:h-96 object-cover opacity-60"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-12">
                    <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 w-fit">
                        W164 Platform • 2005-2011
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                        {lang === 'en' ? 'The Definitive' : 'En Kapsamlı'} <br/>
                        <span className="text-blue-500">ML-Class</span> {lang === 'en' ? 'Guide' : 'Rehberi'}
                    </h1>
                    <p className="text-lg text-slate-300 max-w-xl mb-8">
                        {lang === 'en' 
                          ? 'Comprehensive technical data, common faults, and expert maintenance advice for the Mercedes-Benz ML (W164) and OM642 Diesel Engine.'
                          : 'Mercedes-Benz ML (W164) ve OM642 Dizel Motor için kapsamlı teknik veriler, yaygın arızalar ve uzman bakım tavsiyeleri.'}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button 
                            onClick={() => setCurrentPage(PageView.MODELS)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all"
                        >
                            {lang === 'en' ? 'Encyclopedia' : 'Ansiklopedi'} <BookOpen className="h-4 w-4" />
                        </button>
                        <button 
                             onClick={() => setCurrentPage(PageView.FAULTS)}
                            className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 px-6 py-3 rounded-lg font-medium transition-all"
                        >
                            {lang === 'en' ? 'Diagnostic Tool' : 'Arıza Teşhis'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                    <ShieldCheck className="h-10 w-10 text-emerald-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{lang === 'en' ? 'Reliability Mods' : 'Dayanıklılık Modları'}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        {lang === 'en' 
                          ? 'Learn about critical preventative maintenance: Oil Cooler Seals, Swirl Flap Motors, and Black Death prevention.'
                          : 'Kritik önleyici bakım hakkında bilgi edinin: Yağ Soğutucu Contaları, Girdap Kapak Motorları ve Kara Ölüm önleme.'}
                    </p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                    <Wrench className="h-10 w-10 text-amber-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{lang === 'en' ? 'Technical Specs' : 'Teknik Özellikler'}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        {lang === 'en' 
                          ? 'Exact fluid capacities, torque specifications, and MB Sheet numbers (229.51, 236.14) for DIY service.'
                          : 'DIY servis için tam sıvı kapasiteleri, tork spesifikasyonları ve MB Sayfa numaraları (229.51, 236.14).'}
                    </p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                    <div className="h-10 w-10 text-blue-500 mb-4 font-mono text-3xl font-bold">AI</div>
                    <h3 className="text-xl font-bold text-white mb-2">{lang === 'en' ? 'Interactive Diagnosis' : 'İnteraktif Teşhis'}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        {lang === 'en' 
                          ? 'Not sure what that code means? Chat with our fine-tuned Gemini model trained on Mercedes workshop logic.'
                          : 'Bu kodun ne anlama geldiğinden emin değil misiniz? Mercedes atölye mantığıyla eğitilmiş Gemini modelimizle sohbet edin.'}
                    </p>
                </div>
            </div>
            
            <div className="text-center pt-8 border-t border-slate-800 text-slate-500 text-sm">
                <p>{lang === 'en' ? 'Designed for Enthusiasts. Not affiliated with Mercedes-Benz Group AG.' : 'Meraklılar için tasarlanmıştır. Mercedes-Benz Group AG ile bağlantısı yoktur.'}</p>
                <p className="mt-2 font-mono text-xs">W164 EXPERT v1.1.0</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-mb-dark text-slate-200">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} lang={lang} setLang={setLang} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;