import React, { useState } from 'react';
import { FaultCode, Language } from '../types';
import { Search, AlertTriangle, Activity, PenTool, CheckCircle, BarChart3 } from 'lucide-react';

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
    frequencyTitle: lang === 'en' ? 'W164 OM642 Failure Frequency Index' : 'W164 OM642 Arıza Sıklık Endeksi',
    highFreq: lang === 'en' ? 'Very Common' : 'Çok Yaygın',
    medFreq: lang === 'en' ? 'Common' : 'Yaygın',
    lowFreq: lang === 'en' ? 'Occasional' : 'Nadir',
  };

  // Expanded database for OM642 with Bilingual support
  const FAULT_DATABASE: FaultCode[] = [
    {
      code: 'P2015',
      description: lang === 'en' 
        ? 'Intake Manifold Runner Position Sensor Range/Performance' 
        : 'Emme Manifoldu Klape Pozisyon Sensörü Hatası',
      possibleCauses: lang === 'en' ? [
        'Swirl Flap Motor (M55) internal failure due to oil ingress.',
        'Plastic linkage arms snapped.',
        'Intake manifold flaps carbonized and stuck.'
      ] : [
        'Girdap Kapak Motoru (M55) yağ alması nedeniyle iç arıza.',
        'Plastik bağlantı kolları kırık.',
        'Emme manifoldu klapeleri kurumlanmış ve sıkışmış.'
      ],
      solution: lang === 'en' 
        ? '1. Inspect M55 motor (under turbo intake). 2. If oily, replace Turbo Intake Seal (A6420940080). 3. Replace M55 motor. 4. If flaps stuck, clean manifold or replace.' 
        : '1. M55 motorunu kontrol edin (turbo emiş altı). 2. Yağlıysa Turbo Emiş Contasını değiştirin (A6420940080). 3. M55 motorunu değiştirin. 4. Klapeler sıkışmışsa manifoldu temizleyin veya değiştirin.',
      severity: 'Medium'
    },
    {
      code: 'P0299',
      description: lang === 'en' 
        ? 'Turbocharger Underboost Condition' 
        : 'Turboşarj Düşük Basınç Durumu',
      possibleCauses: lang === 'en' ? [
        'Boost leak (Intercooler hoses, O-rings).',
        'Electronic Turbo Actuator (Hella) worm gear worn.',
        'Exhaust Backpressure Sensor blocked.',
        'DPF Clogged.'
      ] : [
        'Basınç kaçağı (Intercooler hortumları, O-ringler).',
        'Elektronik Turbo Aktüatörü (Hella) dişlisi aşınmış.',
        'Egzoz Geri Basınç Sensörü tıkalı.',
        'DPF Tıkalı.'
      ],
      solution: lang === 'en'
        ? '1. Smoke test intake system. 2. Inspect green O-ring on turbo outlet. 3. Check Actuator arm movement. 4. Clean/Replace Backpressure sensor.'
        : '1. Emme sistemine duman testi yapın. 2. Turbo çıkışındaki yeşil O-ringi kontrol edin. 3. Aktüatör kolu hareketini kontrol edin. 4. Geri Basınç sensörünü temizleyin/değiştirin.',
      severity: 'High'
    },
    {
      code: 'P2600',
      description: lang === 'en'
        ? 'Coolant Pump Control Circuit / Open'
        : 'Soğutma Pompası Kontrol Devresi / Açık',
      possibleCauses: lang === 'en' ? [
        'Auxiliary Water Pump (for Turbo cooling) failed.',
        'Wiring harness break.',
        'Fuse blown.'
      ] : [
        'Yardımcı Su Pompası (Turbo soğutma için) arızalı.',
        'Kablo tesisatı kopuk.',
        'Sigorta atmış.'
      ],
      solution: lang === 'en'
        ? 'Replace the small electric auxiliary water pump located near the expansion tank or firewall. This is critical for cooling the turbo after shutdown.'
        : 'Genleşme tankı veya güvenlik duvarı yanındaki küçük elektrikli yardımcı su pompasını değiştirin. Bu, stop ettikten sonra turboyu soğutmak için kritiktir.',
      severity: 'Medium'
    },
    {
      code: 'P0471',
      description: lang === 'en'
        ? 'Exhaust Pressure Sensor Range/Performance'
        : 'Egzoz Basınç Sensörü Aralığı/Performansı',
      possibleCauses: lang === 'en' ? [
        'Exhaust Backpressure Sensor (EBP) clogged with soot.',
        'Wiring issue.',
        'Vacuum leak (if applicable).'
      ] : [
        'Egzoz Geri Basınç Sensörü (EBP) kurumla tıkanmış.',
        'Kablo sorunu.',
        'Vakum kaçağı (varsa).'
      ],
      solution: lang === 'en'
        ? 'Remove EBP sensor (near turbo/EGR). Clean carefully with brake cleaner or replace (Part A0071530328). Check port for carbon blockage.'
        : 'EBP sensörünü sökün (turbo/EGR yanı). Balata spreyi ile dikkatlice temizleyin veya değiştirin (Parça A0071530328). Giriş portunu tıkanıklık için kontrol edin.',
      severity: 'Medium'
    },
    {
      code: '5200',
      description: lang === 'en'
        ? 'Airmatic: Compressor Run Time Exceeded'
        : 'Airmatic: Kompresör Çalışma Süresi Aşıldı',
      possibleCauses: lang === 'en' ? [
        'Air leak in struts/bags.',
        'Compressor piston ring worn out.',
        'Relay stuck closed (pump runs continuously).'
      ] : [
        'Süspansiyon körüklerinde hava kaçağı.',
        'Kompresör piston segmanı aşınmış.',
        'Röle kapalı takılı kalmış (pompa sürekli çalışıyor).'
      ],
      solution: lang === 'en'
        ? '1. Replace Airmatic Relay (Hella) immediately to save pump. 2. Soap test strut tops. 3. If pump weak, replace compressor.'
        : '1. Pompayı kurtarmak için Airmatic Rölesini (Hella) derhal değiştirin. 2. Amortisör kafalarına sabun testi yapın. 3. Pompa zayıfsa kompresörü değiştirin.',
      severity: 'Critical'
    },
    {
      code: 'P2002',
      description: lang === 'en'
        ? 'DPF Efficiency Below Threshold'
        : 'DPF Verimliliği Eşik Değerin Altında',
      possibleCauses: lang === 'en' ? [
        'DPF Ash accumulation > 100%.',
        'Differential Pressure Sensor faulty.',
        'Thermostat stuck open (engine too cold to regen).'
      ] : [
        'DPF Kül birikimi > %100.',
        'Fark Basınç Sensörü arızalı.',
        'Termostat açık kalmış (motor rejenerasyon için çok soğuk).'
      ],
      solution: lang === 'en'
        ? '1. Check engine temp (must be >80°C). 2. Check Diff Pressure Sensor values. 3. Perform manual regeneration via Xentry. 4. DPF cleaning required.'
        : '1. Motor sıcaklığını kontrol edin (>80°C olmalı). 2. Fark Basınç Sensörü değerlerini kontrol edin. 3. Xentry ile manuel rejenerasyon yapın. 4. DPF temizliği gerekir.',
      severity: 'High'
    },
    {
      code: 'P0670',
      description: lang === 'en'
        ? 'Glow Plug Module Control Circuit'
        : 'Kızdırma Bujisi Modülü Kontrol Devresi',
      possibleCauses: lang === 'en' ? [
        'Glow Plug Output Stage (GSE) internal failure.',
        'Wiring harness short.'
      ] : [
        'Kızdırma Bujisi Beyni (GSE) iç arızası.',
        'Kablo tesisatında kısa devre.'
      ],
      solution: lang === 'en'
        ? 'Replace Glow Plug Control Module (GSE). Always check glow plugs resistance first; a bad plug can fry the new module.'
        : 'Kızdırma Bujisi Beynini (GSE) değiştirin. Önce her zaman buji dirençlerini kontrol edin; bozuk bir buji yeni beyni yakabilir.',
      severity: 'Medium'
    }
  ];

  const FREQUENCY_DATA = [
    { label: lang === 'en' ? 'Oil Cooler Seals' : 'Yağ Soğutucu Contaları', pct: 95, color: 'bg-red-500' },
    { label: lang === 'en' ? 'Glow Plug Module' : 'Kızdırma Beyni', pct: 80, color: 'bg-orange-500' },
    { label: lang === 'en' ? 'M55 Swirl Motor' : 'M55 Girdap Motoru', pct: 75, color: 'bg-orange-500' },
    { label: lang === 'en' ? 'Airmatic Air Bags' : 'Airmatic Körükleri', pct: 60, color: 'bg-yellow-500' },
    { label: lang === 'en' ? 'Turbo Actuator' : 'Turbo Aktüatörü', pct: 40, color: 'bg-blue-500' },
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

      {/* FREQUENCY CHART */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="text-emerald-500" /> {t.frequencyTitle}
        </h3>
        <div className="space-y-4">
            {FREQUENCY_DATA.map((item, idx) => (
                <div key={idx}>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>{item.label}</span>
                        <span>{item.pct}% {item.pct > 80 ? t.highFreq : item.pct > 50 ? t.medFreq : t.lowFreq}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                        <div 
                            className={`h-full ${item.color} transition-all duration-1000 ease-out`} 
                            style={{ width: `${item.pct}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
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