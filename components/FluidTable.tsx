import React from 'react';
import { FluidSpec, Language } from '../types';

interface FluidTableProps {
  lang: Language;
}

const FluidTable: React.FC<FluidTableProps> = ({ lang }) => {
  const t = {
    title: lang === 'en' ? 'Fluid Specifications & Capacities' : 'Sıvı Özellikleri ve Kapasiteleri',
    subtitle: lang === 'en' 
      ? 'Using correct fluids is non-negotiable for Mercedes-Benz longevity.'
      : 'Mercedes-Benz uzun ömürlülüğü için doğru sıvıları kullanmak tartışılmazdır.',
    warning: lang === 'en'
      ? 'NEVER use generic "Multi-Vehicle" fluids unless they specifically list the MB Approval sheet number.'
      : 'MB Onay numarası özellikle listelenmedikçe ASLA genel "Çok Araçlı" sıvılar kullanmayın.',
    system: lang === 'en' ? 'System' : 'Sistem',
    sheet: lang === 'en' ? 'MB Sheet' : 'MB Onay',
    part: lang === 'en' ? 'OEM Part #' : 'OEM Parça #',
    capacity: lang === 'en' ? 'Capacity' : 'Kapasite',
    notes: lang === 'en' ? 'Notes' : 'Notlar',
    bevoTitle: lang === 'en' ? 'Bevo System' : 'Bevo Sistemi',
    bevoText: lang === 'en' 
      ? 'Mercedes-Benz maintains an official operating fluids database called "Bevo". Always cross-reference the numbers here with the official Bevo site.'
      : 'Mercedes-Benz, "Bevo" adında resmi bir işletme sıvıları veritabanı tutar. Buradaki numaraları her zaman resmi Bevo sitesiyle karşılaştırın.',
    adblueTitle: lang === 'en' ? 'AdBlue (BlueTEC)' : 'AdBlue (BlueTEC)',
    adblueText: lang === 'en'
      ? 'For BlueTEC models, ensure you use ISO 22241 standard Diesel Exhaust Fluid (DEF). Tank holds approx 28 Liters.'
      : 'BlueTEC modelleri için ISO 22241 standardı Dizel Egzoz Sıvısı (DEF) kullandığınızdan emin olun. Depo yaklaşık 28 Litre alır.'
  };

  const FLUID_DATA: FluidSpec[] = [
    {
      id: '1',
      system: 'Engine Oil (OM642)',
      code: 'MB 229.51 / 229.52',
      capacity: '8.5 Liters',
      specification: 'Low SAPS 5W-30',
      partNumber: 'A 000 989 83 01',
      notes: lang === 'en' ? 'Crucial for DPF health. Do not use 229.5.' : 'DPF sağlığı için kritik. 229.5 kullanmayın.'
    },
    {
      id: '2',
      system: 'Transmission (7G 722.9)',
      code: 'MB 236.14 (Red)',
      capacity: '9.0 Liters (Total)',
      specification: 'ATF 134',
      partNumber: 'A 001 989 68 03',
      notes: lang === 'en' ? 'Early W164 use Red fluid (236.14). Do not mix with Blue (236.15)!' : 'Erken W164 Kırmızı sıvı kullanır. Mavi ile karıştırmayın!'
    },
    {
      id: '3',
      system: 'Coolant',
      code: 'MB 325.0 / 326.0',
      capacity: '9.5 Liters',
      specification: 'G48 (Blue/Green)',
      partNumber: 'A 000 989 08 25',
      notes: lang === 'en' ? 'Mix 50/50 with distilled water.' : 'Saf su ile %50 oranında karıştırın.'
    },
    {
      id: '4',
      system: 'Power Steering',
      code: 'MB 236.3',
      capacity: '1.2 Liters',
      specification: 'Lenkgetriebeöl',
      partNumber: 'A 000 989 88 03',
      notes: lang === 'en' ? 'Specific MB fluid required. Check reservoir cap.' : 'Özel MB sıvısı gereklidir. Hazne kapağını kontrol edin.'
    },
    {
      id: '5',
      system: 'Brake Fluid',
      code: 'DOT 4 Plus',
      capacity: '1.0 Liter',
      specification: 'MB 331.0',
      partNumber: 'A 000 989 08 07',
      notes: lang === 'en' ? 'Change every 2 years.' : 'Her 2 yılda bir değiştirin.'
    },
    {
      id: '6',
      system: 'Differential (F/R)',
      code: 'MB 235.7',
      capacity: '1.1L Each',
      specification: '75W-85 Hypoid',
      partNumber: 'A 001 989 33 03',
      notes: lang === 'en' ? 'Fill until overflows fill hole.' : 'Dolum deliğinden taşana kadar doldurun.'
    },
    {
      id: '7',
      system: 'Transfer Case',
      code: 'MB 236.12 / ATF 3353',
      capacity: '0.5 Liters',
      specification: 'ATF',
      partNumber: 'A 001 989 45 03',
      notes: lang === 'en' ? 'Critical for 4MATIC system.' : '4MATIC sistemi için kritik.'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
        <h2 className="text-2xl font-bold text-white mb-4">{t.title}</h2>
        <p className="text-slate-400 mb-6">
          {t.subtitle} 
          <span className="text-red-400 font-bold ml-1">{t.warning}</span>
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700 text-slate-400 text-sm uppercase tracking-wider">
                <th className="p-4">{t.system}</th>
                <th className="p-4">{t.sheet}</th>
                <th className="p-4 hidden sm:table-cell">{t.part}</th>
                <th className="p-4">{t.capacity}</th>
                <th className="p-4 hidden md:table-cell">{t.notes}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {FLUID_DATA.map((fluid) => (
                <tr key={fluid.id} className="hover:bg-slate-700/30 transition-colors">
                  <td className="p-4 font-medium text-blue-300">{fluid.system}</td>
                  <td className="p-4">
                    <span className="bg-slate-900 px-2 py-1 rounded text-sm font-mono text-emerald-400 border border-slate-600">
                      {fluid.code}
                    </span>
                  </td>
                  <td className="p-4 hidden sm:table-cell text-slate-300 font-mono text-sm">{fluid.partNumber}</td>
                  <td className="p-4 text-slate-300">{fluid.capacity}</td>
                  <td className="p-4 hidden md:table-cell text-sm text-slate-400">{fluid.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <h3 className="font-bold text-white text-lg mb-2">{t.bevoTitle}</h3>
            <p className="text-slate-400 text-sm">
                {t.bevoText}
            </p>
        </div>
         <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <h3 className="font-bold text-white text-lg mb-2">{t.adblueTitle}</h3>
            <p className="text-slate-400 text-sm">
                {t.adblueText}
            </p>
        </div>
      </div>
    </div>
  );
};

export default FluidTable;
