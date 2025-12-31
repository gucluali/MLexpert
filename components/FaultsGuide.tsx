import React, { useState } from 'react';
import { COMMON_FAULTS } from '../constants';

const FaultsGuide: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaults = COMMON_FAULTS.filter(fault => 
    fault.symptom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fault.system.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fault.solution.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 md:p-10 bg-slate-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Arıza & Çözüm Kütüphanesi</h2>
        <p className="text-slate-400 mb-8">W164 kullanıcılarının en sık karşılaştığı sorunlar ve Ali Usta'nın çözüm reçeteleri.</p>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Arıza ara... (Örn: Airmatic, Yağ Kaçağı, Stop Lambası)"
              className="w-full bg-slate-800 border border-slate-600 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-mercedes-accent focus:ring-1 focus:ring-mercedes-accent pl-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500 absolute left-4 top-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFaults.map((fault) => (
            <div key={fault.code} className="bg-mercedes-panel rounded-xl border border-slate-700 overflow-hidden hover:border-slate-500 transition-colors group">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-mono rounded bg-slate-800 text-slate-400 border border-slate-600">
                    {fault.code}
                  </span>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 text-xs font-bold rounded ${
                      fault.difficulty === 'Easy' ? 'bg-green-900 text-green-300' :
                      fault.difficulty === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                      'bg-red-900 text-red-300'
                    }`}>
                      Zorluk: {fault.difficulty}
                    </span>
                    <span className={`px-2 py-1 text-xs font-bold rounded ${
                      fault.cost === 'Low' ? 'bg-green-900/50 text-green-300' :
                      fault.cost === 'Medium' ? 'bg-yellow-900/50 text-yellow-300' :
                      'bg-red-900/50 text-red-300'
                    }`}>
                      Maliyet: {fault.cost}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-mercedes-accent transition-colors">{fault.system}</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm uppercase tracking-wide text-slate-500 font-semibold mb-1">Belirti</h4>
                  <p className="text-slate-300 leading-relaxed">{fault.symptom}</p>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-sm uppercase tracking-wide text-green-500 font-semibold mb-1">Çözüm</h4>
                  <p className="text-slate-200">{fault.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredFaults.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            Aradığınız kriterde bir arıza kaydı bulunamadı. AI Usta'ya sormayı deneyin.
          </div>
        )}
      </div>
    </div>
  );
};

export default FaultsGuide;