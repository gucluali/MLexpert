import React from 'react';
import { Language } from '../types';
import { Fuel, Thermometer, AlertCircle, PlayCircle, Wind } from 'lucide-react';

interface OwnershipSectionProps {
  lang: Language;
}

const OwnershipSection: React.FC<OwnershipSectionProps> = ({ lang }) => {
  const t = {
    title: lang === 'en' ? 'Owner\'s Command Center' : 'Araç Sahibi Komuta Merkezi',
    subtitle: lang === 'en' ? 'Real-world data and usage tips for longevity.' : 'Uzun ömürlülük için gerçek veriler ve kullanım tüyoları.',
    fuelTitle: lang === 'en' ? 'Real World Fuel Consumption (OM642)' : 'Gerçek Yakıt Tüketimi (OM642)',
    city: lang === 'en' ? 'Urban / City' : 'Şehir İçi',
    hwy: lang === 'en' ? 'Highway / Cruise' : 'Şehir Dışı / Uzun Yol',
    mixed: lang === 'en' ? 'Mixed' : 'Karma',
    tipsTitle: lang === 'en' ? 'Master Mechanic Tips' : 'Usta Tavsiyeleri',
    turboTitle: lang === 'en' ? 'Turbo Care' : 'Turbo Bakımı',
    airmaticTitle: lang === 'en' ? 'Airmatic Parking' : 'Airmatic Park',
    transTitle: lang === 'en' ? '7G-Tronic Usage' : '7G-Tronic Kullanımı',
    dpfTitle: lang === 'en' ? 'DPF Regeneration' : 'DPF Rejenerasyonu',
  };

  return (
    <div className="space-y-8 animate-fade-in">
       {/* Header */}
       <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">{t.title}</h2>
          <p className="text-slate-400">{t.subtitle}</p>
       </div>

       {/* Fuel Stats Grid */}
       <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
             <Fuel className="text-amber-500" /> {t.fuelTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* City */}
             <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Fuel className="h-12 w-12" />
                </div>
                <div className="text-slate-400 text-sm uppercase tracking-wider mb-1">{t.city}</div>
                <div className="text-3xl font-bold text-white">11.5 - 13.0</div>
                <div className="text-xs text-slate-500 mt-1">Liters / 100km</div>
             </div>
             {/* Mixed */}
             <div className="bg-slate-900/50 p-4 rounded-lg border border-blue-900/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Fuel className="h-12 w-12" />
                </div>
                <div className="text-blue-400 text-sm uppercase tracking-wider mb-1">{t.mixed}</div>
                <div className="text-3xl font-bold text-white">9.8 - 10.5</div>
                <div className="text-xs text-slate-500 mt-1">Liters / 100km</div>
             </div>
             {/* Highway */}
             <div className="bg-slate-900/50 p-4 rounded-lg border border-emerald-900/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Fuel className="h-12 w-12" />
                </div>
                <div className="text-emerald-400 text-sm uppercase tracking-wider mb-1">{t.hwy}</div>
                <div className="text-3xl font-bold text-white">8.0 - 9.0</div>
                <div className="text-xs text-slate-500 mt-1">Liters / 100km</div>
             </div>
          </div>
          <p className="text-xs text-slate-500 mt-4 italic text-center">
             * {lang === 'en' ? 'Based on 2.2 Ton curb weight with standard tires. Aggressive driving significantly increases these figures.' : 'Standart lastiklerle 2.2 Ton boş ağırlığa dayanmaktadır. Agresif sürüş bu değerleri önemli ölçüde artırır.'}
          </p>
       </div>

       {/* Tips Grid */}
       <div className="grid md:grid-cols-2 gap-6">
          {/* Turbo Cool Down */}
          <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-colors">
             <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-red-900/20 rounded-lg text-red-400">
                   <Thermometer className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-white">{t.turboTitle}</h3>
             </div>
             <p className="text-slate-300 text-sm leading-relaxed">
                {lang === 'en' 
                   ? 'The OM642 turbo gets extremely hot. After highway driving or towing, IDLE the engine for 60-90 seconds before shutting off. This prevents oil coking in the turbo bearings.'
                   : 'OM642 turbosu aşırı ısınır. Uzun yol veya rampa tırmanışı sonrası motoru kapatmadan önce 60-90 saniye RÖLANTİDE çalıştırın. Bu, turbo yataklarında yağın kurumlaşmasını önler.'}
             </p>
          </div>

          {/* Airmatic */}
          <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-colors">
             <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-900/20 rounded-lg text-blue-400">
                   <Wind className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-white">{t.airmaticTitle}</h3>
             </div>
             <p className="text-slate-300 text-sm leading-relaxed">
                {lang === 'en' 
                   ? 'When parking for long periods, keep wheels straight. If parking on a curb, ensure the car is level. Uneven parking stresses the airbags and sensors, leading to leaks.'
                   : 'Uzun süreli park ederken tekerlekleri düz tutun. Kaldırıma park ediyorsanız aracın dengede olduğundan emin olun. Dengesiz park, hava yastıklarını ve sensörleri zorlayarak kaçaklara yol açar.'}
             </p>
          </div>

          {/* 7G Tronic */}
          <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-colors">
             <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-900/20 rounded-lg text-emerald-400">
                   <PlayCircle className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-white">{t.transTitle}</h3>
             </div>
             <p className="text-slate-300 text-sm leading-relaxed">
                {lang === 'en' 
                   ? 'Never shift from D to R while moving (even slightly). The 7G-Tronic is sensitive. Reset adaptation via accelerator pedal trick if shifts feel clunky.'
                   : 'Hareket halindeyken (çok yavaş olsa bile) D\'den R\'ye geçmeyin. 7G-Tronic hassastır. Vites geçişleri sarsıntılıysa gaz pedalı yöntemiyle adaptasyonu sıfırlayın.'}
             </p>
          </div>

           {/* DPF */}
           <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-colors">
             <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-amber-900/20 rounded-lg text-amber-400">
                   <AlertCircle className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-white">{t.dpfTitle}</h3>
             </div>
             <p className="text-slate-300 text-sm leading-relaxed">
                {lang === 'en' 
                   ? 'Short city trips kill the DPF. Once a week, drive at >2000 RPM for 20 mins to allow passive regeneration. If the fan runs loud after shutoff, a regen was interrupted.'
                   : 'Kısa şehir içi sürüşler DPF\'i öldürür. Haftada bir kez, pasif rejenerasyon için 20 dakika boyunca >2000 devirde sürün. Motor kapandıktan sonra fan gürültülü çalışıyorsa, bir rejenerasyon yarıda kesilmiştir.'}
             </p>
          </div>
       </div>
    </div>
  );
};

export default OwnershipSection;