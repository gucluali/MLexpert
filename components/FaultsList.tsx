import React, { useState } from 'react';
import { FaultCode, Language } from '../types';
import { Search, AlertTriangle, Activity, PenTool, CheckCircle } from 'lucide-react';

interface FaultsListProps {
  lang: Language;
}

const FaultsList: React.FC<FaultsListProps> = ({ lang }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFault, setSelectedFault] = useState<FaultCode | null>(null);

  const t = {
    title: lang === 'en' ? 'Interactive Diagnostic Tool' : 'İnteraktif Arıza Teşhis',
    subtitle: lang === 'en' 
      ? 'Enter your P-Code or symptom below to analyze OM642 specific faults.' 
      : 'OM642\'ye özgü arızaları analiz etmek için P-Kodunuzu veya belirtiyi girin.',
    placeholder: lang === 'en' ? 'Enter Code (e.g. P2015)...' : 'Kod Girin (örn. P2015)...',
    analyze: lang === 'en' ? 'Analyze Code' : 'Kodu Analiz Et',
    possibleCauses: lang === 'en' ? 'Root Cause Analysis' : 'Kök Neden Analizi',
    solution: lang === 'en' ? 'Repair Strategy' : 'Onarım Stratejisi',
    severity: lang === 'en' ? 'Severity' : 'Ciddiyet',
    noResults: lang === 'en' ? 'No exact match found in database.' : 'Veritabanında tam eşleşme bulunamadı.',
  };

  // Expanded database for OM642
  const FAULT_DATABASE: FaultCode[] = [
    {
      code: 'P2015',
      description: 'Intake Manifold Runner Position Sensor Range/Performance',
      possibleCauses: [
        'Swirl Flap Motor (M55) internal failure due to oil ingress.',
        'Plastic linkage arms snapped.',
        'Intake manifold flaps carbonized and stuck.'
      ],
      solution: '1. Inspect M55 motor (under turbo intake). 2. If oily, replace Turbo Intake Seal (A6420940080). 3. Replace M55 motor. 4. If flaps stuck, clean manifold or replace.',
      severity: 'Medium'
    },
    {
      code: 'P0299',
      description: 'Turbocharger Underboost Condition',
      possibleCauses: [
        'Boost leak (Intercooler hoses, O-rings).',
        'Electronic Turbo Actuator (Hella) worm gear worn.',
        'Exhaust Backpressure Sensor blocked.',
        'DPF Clogged.'
      ],
      solution: '1. Smoke test intake system. 2. Inspect green O-ring on turbo outlet. 3. Check Actuator arm movement. 4. Clean/Replace Backpressure sensor.',
      severity: 'High'
    },
    {
      code: 'P2600',
      description: 'Coolant Pump Control Circuit / Open',
      possibleCauses: [
        'Auxiliary Water Pump (for Turbo cooling) failed.',
        'Wiring harness break.',
        'Fuse blown.'
      ],
      solution: 'Replace the small electric auxiliary water pump located near the expansion tank or firewall. This is critical for cooling the turbo after shutdown.',
      severity: 'Medium'
    },
    {
      code: 'P0471',
      description: 'Exhaust Pressure Sensor Range/Performance',
      possibleCauses: [
        'Exhaust Backpressure Sensor (EBP) clogged with soot.',
        'Wiring issue.',
        'Vacuum leak (if applicable).'
      ],
      solution: 'Remove EBP sensor (near turbo/EGR). Clean carefully with brake cleaner or replace (Part A0071530328). Check port for carbon blockage.',
      severity: 'Medium'
    },
    {
      code: '5200',
      description: 'Airmatic: Compressor Run Time Exceeded',
      possibleCauses: [
        'Air leak in struts/bags.',
        'Compressor piston ring worn out.',
        'Relay stuck closed (pump runs continuously).'
      ],
      solution: '1. Replace Airmatic Relay (Hella) immediately to save pump. 2. Soap test strut tops. 3. If pump weak, replace compressor.',
      severity: 'Critical'
    },
    {
      code: 'P2002',
      description: 'DPF Efficiency Below Threshold',
      possibleCauses: [
        'DPF Ash accumulation > 100%.',
        'Differential Pressure Sensor faulty.',
        'Thermostat stuck open (engine too cold to regen).'
      ],
      solution: '1. Check engine temp (must be >80°C). 2. Check Diff Pressure Sensor values. 3. Perform manual regeneration via Xentry. 4. DPF cleaning required.',
      severity: 'High'
    }
  ];

  const handleSearch = () => {
    if (!searchTerm) return;
    const found = FAULT_DATABASE.find(
      f => f.code.toLowerCase() === searchTerm.toLowerCase() || 
      f.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSelectedFault(found || null);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-4 bg-blue-600/20 rounded-full mb-2">
            <Activity className="h-8 w-8 text-blue-500" />
        </div>
        <h2 className="text-3xl font-bold text-white">{t.title}</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      {/* Interactive Input Section */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 h-5 w-5" />
            <input 
              type="text"
              placeholder={t.placeholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono text-lg tracking-wider"
            />
          </div>
          <button 
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <PenTool className="h-5 w-5" />
            {t.analyze}
          </button>
        </div>
      </div>

      {/* Results Display */}
      {searchTerm && !selectedFault && (
          <div className="text-center py-12 bg-slate-800/30 rounded-xl border border-slate-800 border-dashed">
             <AlertTriangle className="h-12 w-12 text-slate-600 mx-auto mb-3" />
             <p className="text-slate-400 font-medium">{t.noResults}</p>
          </div>
      )}

      {selectedFault && (
        <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl animate-fade-in">
          <div className={`p-1 w-full ${
            selectedFault.severity === 'Critical' ? 'bg-red-500' :
            selectedFault.severity === 'High' ? 'bg-orange-500' :
            'bg-blue-500'
          }`}></div>
          
          <div className="p-8">
            <div className="flex items-start justify-between mb-8 border-b border-slate-800 pb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-mono font-bold text-white tracking-widest">{selectedFault.code}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                         selectedFault.severity === 'Critical' ? 'bg-red-500/20 text-red-400 border border-red-500/50' :
                         selectedFault.severity === 'High' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/50' :
                         'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                    }`}>
                        {selectedFault.severity}
                    </span>
                </div>
                <h3 className="text-xl text-slate-300">{selectedFault.description}</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h4 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" /> {t.possibleCauses}
                </h4>
                <ul className="space-y-3">
                  {selectedFault.possibleCauses.map((cause, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></span>
                      {cause}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-900/10 p-6 rounded-lg border border-blue-900/30">
                 <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" /> {t.solution}
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {selectedFault.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaultsList;