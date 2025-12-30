import React from 'react';
import { Language } from '../types';
import { BadgeInfo, Gauge, Calendar, Cog } from 'lucide-react';

interface ModelsSectionProps {
  lang: Language;
}

const ModelsSection: React.FC<ModelsSectionProps> = ({ lang }) => {
  const t = {
    title: lang === 'en' ? 'W164 Model Encyclopedia' : 'W164 Model Ansiklopedisi',
    subtitle: lang === 'en' 
      ? 'Detailed specifications for OM642 powered ML-Class vehicles' 
      : 'OM642 motorlu ML-Serisi araçlar için detaylı teknik özellikler',
    engineCode: lang === 'en' ? 'Engine Code' : 'Motor Kodu',
    power: lang === 'en' ? 'Power' : 'Güç',
    torque: lang === 'en' ? 'Torque' : 'Tork',
    years: lang === 'en' ? 'Production' : 'Üretim Yılları',
    features: lang === 'en' ? 'Key Features' : 'Önemli Özellikler',
  };

  const models = [
    {
      name: 'ML 280 CDI',
      years: '2005 - 2009',
      engineCode: 'OM642.940',
      power: '190 PS (140 kW)',
      torque: '440 Nm',
      desc_en: 'The entry-level V6 diesel. Mechanically identical to the 320 CDI but software de-tuned for lower tax brackets in certain markets.',
      desc_tr: 'Giriş seviyesi V6 dizel. Mekanik olarak 320 CDI ile aynıdır ancak belirli pazarlarda vergi avantajı için yazılımla gücü düşürülmüştür.',
      features_en: ['No AdBlue system', 'Standard coil springs (Airmatic optional)', '17-inch wheels standard'],
      features_tr: ['AdBlue sistemi yok', 'Standart yaylı süspansiyon (Airmatic opsiyonel)', '17 inç jantlar standart']
    },
    {
      name: 'ML 320 CDI',
      years: '2005 - 2009',
      engineCode: 'OM642.940',
      power: '224 PS (165 kW)',
      torque: '510 Nm',
      desc_en: 'The most popular pre-facelift diesel. Offers the full torque potential of the early OM642. Known for robust performance but prone to early seal leaks.',
      desc_tr: 'Makyaj öncesi en popüler dizel. Erken OM642\'nin tam tork potansiyelini sunar. Güçlü performansıyla bilinir ancak conta kaçaklarına yatkındır.',
      features_en: ['Often equipped with Off-Road package', '7G-Tronic Pre-Plus', 'DPF standard in most regions'],
      features_tr: ['Genellikle Off-Road paketi ile donatılmıştır', '7G-Tronic Pre-Plus', 'Çoğu bölgede DPF standart']
    },
    {
      name: 'ML 300 CDI BlueEfficiency',
      years: '2009 - 2011',
      engineCode: 'OM642.820',
      power: '204 PS (150 kW)',
      torque: '500 Nm',
      desc_en: 'Facelift version of the 280 CDI. Improved fuel efficiency and slightly higher output. Features newer mirrors, headlights, and bumpers.',
      desc_tr: '280 CDI\'nın makyajlı versiyonu. Yakıt verimliliği artırılmış ve gücü biraz yükseltilmiştir. Yeni aynalar, farlar ve tamponlar içerir.',
      features_en: ['Updated interior telematics (NTG 2.5)', 'LED taillights', 'Improved fuel economy'],
      features_tr: ['Güncellenmiş iç telemati (NTG 2.5)', 'LED arka stoplar', 'Geliştirilmiş yakıt ekonomisi']
    },
    {
      name: 'ML 350 CDI',
      years: '2009 - 2011',
      engineCode: 'OM642.822',
      power: '224 PS / 231 PS',
      torque: '540 Nm',
      desc_en: 'The rebranding of the 320 CDI for the facelift era. Late 2010 models received a power bump to 231PS and 540Nm.',
      desc_tr: 'Makyajlı dönemde 320 CDI\'nın yeniden markalanmış hali. 2010 sonu modelleri 231PS ve 540Nm güce yükseltildi.',
      features_en: ['Peak W164 refinement', 'Often high spec', 'Revised turbocharger actuator'],
      features_tr: ['W164\'ün en rafine hali', 'Genellikle yüksek donanım', 'Revize edilmiş turbo aktüatörü']
    },
    {
      name: 'ML 350 BlueTEC',
      years: '2009 - 2011',
      engineCode: 'OM642.820',
      power: '211 PS (155 kW)',
      torque: '540 Nm',
      desc_en: 'Introduced AdBlue (DEF) injection to meet stricter US/Euro emissions. Complex exhaust system requires specific maintenance.',
      desc_tr: 'Daha sıkı ABD/Avrupa emisyonlarını karşılamak için AdBlue (DEF) enjeksiyonu eklendi. Karmaşık egzoz sistemi özel bakım gerektirir.',
      features_en: ['AdBlue Tank in trunk (spare wheel deleted)', 'Run-flat tires standard', 'Cleanest emissions'],
      features_tr: ['Bagajda AdBlue Deposu (stepne iptal)', 'Run-flat lastikler standart', 'En temiz emisyon değerleri']
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">{t.title}</h2>
        <p className="text-slate-400">{t.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all group">
            <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-400"></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{model.name}</h3>
                <span className="bg-slate-900 text-slate-400 text-xs px-2 py-1 rounded border border-slate-700 font-mono">
                  {model.engineCode}
                </span>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span>{t.years}: <span className="font-semibold text-white">{model.years}</span></span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Gauge className="h-4 w-4 text-emerald-500" />
                  <span>{t.power}: <span className="font-semibold text-white">{model.power}</span></span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Cog className="h-4 w-4 text-amber-500" />
                  <span>{t.torque}: <span className="font-semibold text-white">{model.torque}</span></span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-slate-400 italic">
                  "{lang === 'en' ? model.desc_en : model.desc_tr}"
                </p>
              </div>

              <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <BadgeInfo className="h-3 w-3" /> {t.features}
                </h4>
                <ul className="space-y-1">
                  {(lang === 'en' ? model.features_en : model.features_tr).map((feature, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                      <span className="w-1 h-1 bg-slate-500 rounded-full mt-1.5"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelsSection;
