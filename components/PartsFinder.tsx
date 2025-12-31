import React, { useState } from 'react';
import { Language } from '../types';
import { Search, Copy, Check, ShoppingBag } from 'lucide-react';

interface PartData {
  category: string;
  name_en: string;
  name_tr: string;
  partNumber: string;
  notes_en: string;
  notes_tr: string;
}

interface PartsFinderProps {
  lang: Language;
}

const PartsFinder: React.FC<PartsFinderProps> = ({ lang }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const t = {
    title: lang === 'en' ? 'OEM Spare Part Finder' : 'OEM Yedek Parça Bulucu',
    subtitle: lang === 'en' 
      ? 'Verified Part Numbers for OM642 & W164 Platform.' 
      : 'OM642 & W164 Platformu için Doğrulanmış Parça Numaraları.',
    placeholder: lang === 'en' ? 'Search part name or number...' : 'Parça adı veya numarası ara...',
    cat: lang === 'en' ? 'Category' : 'Kategori',
    part: lang === 'en' ? 'Part Name' : 'Parça Adı',
    number: lang === 'en' ? 'OEM Number' : 'OEM Numarası',
    notes: lang === 'en' ? 'Mechanic Notes' : 'Usta Notları',
  };

  const PARTS_DB: PartData[] = [
    {
      category: 'Filters',
      name_en: 'Oil Filter Element',
      name_tr: 'Yağ Filtresi',
      partNumber: 'A 642 180 00 09',
      notes_en: 'Use Mann-Filter HU 821 x. Includes O-rings.',
      notes_tr: 'Mann-Filter HU 821 x kullanın. O-ringler dahildir.'
    },
    {
      category: 'Filters',
      name_en: 'Air Filter Set (L+R)',
      name_tr: 'Hava Filtresi Seti (Sağ+Sol)',
      partNumber: 'A 642 094 00 00',
      notes_en: 'Change every 2nd oil change (20k km). Reset adaption after change.',
      notes_tr: 'Her 2 yağ bakımında bir (20k km) değiştirin. Değişim sonrası adaptasyonu sıfırlayın.'
    },
    {
      category: 'Filters',
      name_en: 'Fuel Filter (With Heater)',
      name_tr: 'Yakıt Filtresi (Isıtıcılı)',
      partNumber: 'A 642 090 60 52',
      notes_en: '5-pin connector. Verify chassis number, some use 3-pin.',
      notes_tr: '5 pinli soket. Şasi numarasını doğrulayın, bazıları 3 pinlidir.'
    },
    {
      category: 'Seals',
      name_en: 'Oil Cooler Seals (Kit)',
      name_tr: 'Yağ Soğutucu Contaları (Set)',
      partNumber: 'A 642 188 04 80',
      notes_en: 'MUST use purple Viton seals. Do not use old orange seals.',
      notes_tr: 'MUTLAKA mor Viton contalar kullanılmalı. Eski turuncu contaları kullanmayın.'
    },
    {
      category: 'Seals',
      name_en: 'Turbo Intake Seal (Red/Orange)',
      name_tr: 'Turbo Emiş Contası (Kırmızı/Turuncu)',
      partNumber: 'A 642 094 00 80',
      notes_en: 'Replace at every oil change to save M55 motor.',
      notes_tr: 'M55 motorunu korumak için her yağ değişiminde yenileyin.'
    },
    {
      category: 'Electrical',
      name_en: 'Swirl Flap Motor (M55)',
      name_tr: 'Girdap Kapak Motoru (M55)',
      partNumber: 'A 642 150 04 94',
      notes_en: 'Pierburg is the OEM. Requires clips replacement too.',
      notes_tr: 'Orijinal üretici Pierburg. Klipslerin de değişmesi gerekir.'
    },
    {
      category: 'Electrical',
      name_en: 'Glow Plug Control Module',
      name_tr: 'Kızdırma Bujisi Beyni',
      partNumber: 'A 642 900 78 01',
      notes_en: 'Updated part number. Old versions fail often.',
      notes_tr: 'Güncel parça numarası. Eski versiyonlar sık arızalanır.'
    },
    {
      category: 'Belts',
      name_en: 'Serpentine Belt (V-Belt)',
      name_tr: 'V-Kayışı',
      partNumber: 'A 001 993 75 96',
      notes_en: 'Check tensioner pulley for wobble.',
      notes_tr: 'Gergi kütüğünü salgı için kontrol edin.'
    },
    {
      category: 'Sensors',
      name_en: 'Differential Pressure Sensor (DPF)',
      name_tr: 'Fark Basınç Sensörü (DPF)',
      partNumber: 'A 006 153 95 28',
      notes_en: 'Common cause for P2002. Check hoses for cracks.',
      notes_tr: 'P2002 hatasının yaygın nedeni. Hortumları çatlak için kontrol edin.'
    }
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text.replace(/\s/g, ''));
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredParts = PARTS_DB.filter(p => 
    p.partNumber.replace(/\s/g, '').includes(searchTerm.replace(/\s/g, '')) ||
    (lang === 'en' ? p.name_en : p.name_tr).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
       <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-slate-800 border border-slate-700 rounded-full mb-4">
             <ShoppingBag className="h-6 w-6 text-blue-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">{t.title}</h2>
          <p className="text-slate-400">{t.subtitle}</p>
       </div>

       {/* Search Bar */}
       <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-lg">
          <div className="relative">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 h-5 w-5" />
             <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.placeholder}
                className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
             />
          </div>
       </div>

       {/* Table */}
       <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse">
                <thead>
                   <tr className="bg-slate-900/50 text-slate-400 text-xs uppercase tracking-wider border-b border-slate-700">
                      <th className="p-4">{t.cat}</th>
                      <th className="p-4">{t.part}</th>
                      <th className="p-4">{t.number}</th>
                      <th className="p-4 hidden md:table-cell">{t.notes}</th>
                      <th className="p-4 w-10"></th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-700 text-sm">
                   {filteredParts.map((part, idx) => (
                      <tr key={idx} className="hover:bg-slate-700/30 transition-colors">
                         <td className="p-4">
                            <span className="inline-block px-2 py-1 rounded bg-slate-700 text-slate-300 text-xs">
                               {part.category}
                            </span>
                         </td>
                         <td className="p-4 font-medium text-white">
                            {lang === 'en' ? part.name_en : part.name_tr}
                         </td>
                         <td className="p-4 font-mono text-blue-400">
                            {part.partNumber}
                         </td>
                         <td className="p-4 hidden md:table-cell text-slate-400">
                            {lang === 'en' ? part.notes_en : part.notes_tr}
                         </td>
                         <td className="p-4 text-right">
                            <button 
                               onClick={() => handleCopy(part.partNumber)}
                               className="p-2 hover:bg-slate-600 rounded-lg transition-colors text-slate-400 hover:text-white"
                               title="Copy Number"
                            >
                               {copiedId === part.partNumber ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                            </button>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
             {filteredParts.length === 0 && (
                <div className="p-8 text-center text-slate-500">
                   No parts found matching "{searchTerm}"
                </div>
             )}
          </div>
       </div>
       <div className="text-center text-xs text-slate-500 pt-4">
          * Always verify fitment with your VIN (Vehicle Identification Number). Parts may vary by build date.
       </div>
    </div>
  );
};

export default PartsFinder;