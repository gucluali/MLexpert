import React from 'react';
import { AlertCircle, CheckCircle2, Settings } from 'lucide-react';
import { Language } from '../types';

interface EngineSectionProps {
  lang: Language;
}

const EngineSection: React.FC<EngineSectionProps> = ({ lang }) => {
  const t = {
    title: lang === 'en' ? 'OM642 V6 CDI' : 'OM642 V6 CDI',
    subtitle: lang === 'en' ? '3.0L TURBO DIESEL | 510-620 NM TORQUE' : '3.0L TURBO DİZEL | 510-620 NM TORK',
    archTitle: lang === 'en' ? 'Technical Architecture' : 'Teknik Mimari',
    weakPointsTitle: lang === 'en' ? 'Known Weak Points' : 'Bilinen Zayıf Noktalar',
    maintTitle: lang === 'en' ? 'Maintenance Strategy' : 'Bakım Stratejisi',
    maintText: lang === 'en' 
      ? 'The OM642 is capable of 500,000km+ if maintained correctly. The factory 25,000km oil change interval is generally considered too long by experts.'
      : 'OM642 doğru bakımla 500.000 km+ yapabilir. Fabrikanın önerdiği 25.000 km yağ değişim aralığı, uzmanlarca çok uzun kabul edilmektedir.',
    block: lang === 'en' 
      ? 'Aluminium with cast-in grey iron cylinder liners. 72° V-angle.'
      : 'Dökme demir gömlekli alüminyum blok. 72° V-açısı.',
    injection: lang === 'en'
      ? 'Bosch Piezo-electric Common Rail (1600+ bar).'
      : 'Bosch Piezo-elektrik Common Rail (1600+ bar).',
    induction: lang === 'en'
      ? 'Variable Nozzle Turbine (VNT) Turbocharger (Garrett GT2056V or similar).'
      : 'Değişken Geometrili Turbo (VNT) (Garrett GT2056V veya benzeri).',
    timing: lang === 'en'
      ? 'Double overhead camshafts (DOHC), driven by a duplex chain.'
      : 'Çift eksantrik mili (DOHC), çift sıra zincir tahrikli.',
    oilCoolerTitle: lang === 'en' ? 'Oil Cooler Seals' : 'Yağ Soğutucu Contaları',
    oilCoolerDesc: lang === 'en'
      ? 'The infamous "purple seals" degrade, causing massive oil leaks into the V-valley. Requires extensive labor to fix.'
      : 'Meşhur "mor contalar" zamanla bozulur ve V-yatağına ciddi yağ kaçırır. Onarımı yoğun işçilik gerektirir.',
    m55Title: lang === 'en' ? 'Swirl Flap Motor (M55)' : 'Girdap Kapak Motoru (M55)',
    m55Desc: lang === 'en'
      ? 'Located under the turbo intake pipe. Oil dripping from the PCV/intake ruins the motor, causing Limp Mode.'
      : 'Turbo emiş borusunun altındadır. PCV/emiş hattından damlayan yağ motoru bozar, araç koruma moduna girer.',
    blackDeathTitle: lang === 'en' ? 'Black Death (Injector Seals)' : 'Kara Ölüm (Enjektör Pulu)',
    blackDeathDesc: lang === 'en'
      ? 'Copper washers fail, allowing carbon buildup around injectors. Needs periodic inspection and re-seating.'
      : 'Bakır pullar kaçırır, enjektör çevresinde kurum birikir (ziftlenme). Periyodik kontrol ve pul değişimi şarttır.',
    statOil: lang === 'en' ? 'Oil Change Max' : 'Yağ Değişimi Max',
    statFuel: lang === 'en' ? 'Fuel Filter' : 'Yakıt Filtresi',
    statWater: lang === 'en' ? 'Drain Fuel Water' : 'Su Tahliyesi',
    statIntake: lang === 'en' ? 'Intake for Oil' : 'Emiş Yağ Kontrol',
    statSvc: lang === 'en' ? 'Every Service' : 'Her Bakımda',
    statCheck: lang === 'en' ? 'Check' : 'Kontrol',
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10"></div>
        {/* OM642 / Mercedes V6 Diesel Representation */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Mercedes-Benz_OM642_DE_30_LA_engine_%282007%29.jpg/1280px-Mercedes-Benz_OM642_DE_30_LA_engine_%282007%29.jpg" 
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1600&auto=format&fit=crop";
          }}
          alt="OM642 Engine Block" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-6 left-6 z-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{t.title}</h2>
          <p className="text-blue-400 font-mono text-sm md:text-base">{t.subtitle}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Settings className="text-blue-500" /> {t.archTitle}
          </h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
              <span><strong>{lang === 'en' ? 'Block' : 'Blok'}:</strong> {t.block}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
              <span><strong>{lang === 'en' ? 'Injection' : 'Enjeksiyon'}:</strong> {t.injection}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
              <span><strong>{lang === 'en' ? 'Induction' : 'Besleme'}:</strong> {t.induction}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
              <span><strong>{lang === 'en' ? 'Timing' : 'Zamanlama'}:</strong> {t.timing}</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <AlertCircle className="text-amber-500" /> {t.weakPointsTitle}
          </h3>
          <div className="space-y-4">
            <div className="bg-slate-900/50 p-3 rounded-lg border-l-4 border-amber-500">
              <h4 className="font-bold text-amber-500 text-sm">{t.oilCoolerTitle}</h4>
              <p className="text-xs text-slate-400 mt-1">{t.oilCoolerDesc}</p>
            </div>
            <div className="bg-slate-900/50 p-3 rounded-lg border-l-4 border-amber-500">
              <h4 className="font-bold text-amber-500 text-sm">{t.m55Title}</h4>
              <p className="text-xs text-slate-400 mt-1">{t.m55Desc}</p>
            </div>
            <div className="bg-slate-900/50 p-3 rounded-lg border-l-4 border-amber-500">
              <h4 className="font-bold text-amber-500 text-sm">{t.blackDeathTitle}</h4>
              <p className="text-xs text-slate-400 mt-1">{t.blackDeathDesc}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/50">
        <h3 className="text-xl font-bold text-blue-100 mb-4 flex items-center gap-2">
          <CheckCircle2 className="text-blue-500" /> {t.maintTitle}
        </h3>
        <p className="text-slate-300 mb-4">{t.maintText}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-slate-800 rounded-lg">
            <div className="text-2xl font-bold text-white">10k km</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">{t.statOil}</div>
          </div>
          <div className="text-center p-3 bg-slate-800 rounded-lg">
            <div className="text-2xl font-bold text-white">60k km</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">{t.statFuel}</div>
          </div>
          <div className="text-center p-3 bg-slate-800 rounded-lg">
            <div className="text-2xl font-bold text-white">{t.statSvc}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">{t.statWater}</div>
          </div>
          <div className="text-center p-3 bg-slate-800 rounded-lg">
            <div className="text-2xl font-bold text-white">{t.statCheck}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">{t.statIntake}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineSection;