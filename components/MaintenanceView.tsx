import React from 'react';
import { MaintenanceItem } from '../types';
import { CheckCircle2, Clock, Info } from 'lucide-react';

const SCHEDULE: MaintenanceItem[] = [
    {
        km: 10000,
        tasks: [
            'Motor Yağı Değişimi (Mutlaka MB 229.51/229.52 Onaylı)',
            'Yağ Filtresi Değişimi',
            'Hava Filtresi Kontrolü (Tozlu bölgelerde değişim)',
            'Silecek Suyu ve Antifriz Seviyesi Kontrolü',
            'Lastik Basınçları ve Diş Derinliği Kontrolü'
        ],
        note: 'OM642 motoru kurum oluşturmaya meyillidir. Fabrika verisi 15.000 km olsa da, Türkiye şartlarında 10.000 km\'de yağ değişimi zincir ve turbo ömrünü uzatır.'
    },
    {
        km: 20000,
        tasks: [
            '10.000 km bakımındaki tüm işlemler',
            'Mazot Filtresi Değişimi (Su sensörü kontrolü ile)',
            'Kabin (Polen) Filtresi Değişimi',
            'Fren Balataları Gözle Kontrolü',
            'Alt Takım ve Airmatic Körük Kontrolü'
        ],
        note: 'Mazot filtresi enjektör sağlığı için kritiktir. Yan sanayi filtreler enjektör bozabilir.'
    },
    {
        km: 40000,
        tasks: [
            '20.000 km bakımındaki tüm işlemler',
            'Fren Hidroliği Değişimi (Nem oranı ölçümü)',
            'Hava Filtreleri Değişimi (Sağ ve Sol Kutu)',
            'Ön-Arka Diferansiyel Yağ Seviyesi Kontrolü',
            'Sunroof Su Giderlerinin Temizlenmesi'
        ],
        note: 'W164 kasada sunroof giderleri tıkanırsa araç içine su alır ve SAM beyni (elektronik ünite) bozulur.'
    },
    {
        km: 80000,
        tasks: [
            '40.000 km bakımındaki tüm işlemler',
            'Şanzıman Yağı ve Filtresi (7G-Tronic ATF 134FE - Kırmızı/Mavi Koda Dikkat)',
            'Transfer Kutusu (Arazi Şanzımanı) Yağı Değişimi',
            'V-Kayışı, Gergi Bilyası ve Avare Bilyaların Değişimi',
            'Soğutma Sıvısı (Antifriz) Değişimi',
            'Diferansiyel Yağlarının Değişimi'
        ],
        note: '80.000 km veya 4 yıl ağır bakım zamanıdır. Şanzıman yağı değişmezse vuruntu başlar ve kart arızası verebilir.'
    }
];

export const MaintenanceView: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
             <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Clock className="h-6 w-6 text-blue-400" />
                    Periyodik Bakım Rehberi
                </h2>
                <p className="text-slate-300 text-sm md:text-base">
                    Mercedes ML W164 ve OM642 motoru için kilometreye bağlı yapılması gereken kritik kontroller. 
                    Düzenli bakım, binlerce dolarlık arızaları önler.
                </p>
            </div>

            <div className="grid gap-6">
                {SCHEDULE.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-all">
                        <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">{item.km.toLocaleString()} KM</span>
                                <span className="text-slate-600 text-sm font-normal">veya her yıl</span>
                            </h3>
                            {index === 3 && <span className="text-red-500 font-bold text-xs border border-red-200 bg-red-50 px-2 py-1 rounded">AĞIR BAKIM</span>}
                        </div>
                        
                        <div className="p-5">
                            <ul className="grid md:grid-cols-2 gap-3 mb-4">
                                {item.tasks.map((sub, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                        <span>{sub}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            {item.note && (
                                <div className="bg-amber-50 text-amber-800 p-3 rounded-lg text-sm flex gap-3 border border-amber-100">
                                    <Info className="h-5 w-5 shrink-0" />
                                    <p>{item.note}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-blue-900 text-sm">
                <strong>Önemli Hatırlatma:</strong> Airmatic süspansiyon sistemi olan araçlarda, her bakımda körüklerin çatlak kontrolü ve kompresör rölesinin kontrolü yapılmalıdır. Röle yapışırsa kompresör sürekli çalışıp yanabilir.
            </div>
        </div>
    );
}