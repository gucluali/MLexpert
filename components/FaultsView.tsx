import React from 'react';
import { Fault } from '../types';
import { AlertCircle, ChevronDown, ChevronUp, Thermometer, Wind, Zap, Disc, Activity } from 'lucide-react';

const COMMON_FAULTS: Fault[] = [
  {
    id: 'oil-cooler',
    title: 'Yağ Soğutucu Contaları (Oil Cooler Seals)',
    severity: 'high',
    symptoms: ['Motor altında ciddi yağ sızıntısı', 'Şanzıman ile motor birleşim yerinden yağ gelmesi', 'Su eksiltme (yağ suya karışırsa)'],
    cause: 'OM642\'nin en meşhur arızasıdır. V bloğunun tam ortasında (Valley) bulunan soğutucunun contaları ısıdan sertleşir. Parça ucuzdur (contalar) ancak değişim için turbo ve emme manifoldunun sökülmesi gerekir.',
    solution: 'Mutlaka mor renkli geliştirilmiş Viton contalar kullanılmalıdır. İşlem sırasında manifold contaları ve turbo contaları da yenilenmelidir.'
  },
  {
    id: 'injectors-black-death',
    title: 'Enjektör Pulu Kaçakları (Black Death)',
    severity: 'high',
    symptoms: ['Motor kapağında zift gibi siyah kalıntı', 'Kabin içine gelen egzoz kokusu', 'Enjektör diplerinde "tıss tıss" sesi'],
    cause: 'Enjektörün silindir kapağına oturduğu bakır pulun zamanla aşınması sonucu kompresyon ve egzoz gazı yukarı kaçar. Bu kaçak zamanla ziftleşerek enjektörü kapağa kaynatır.',
    solution: 'Enjektör sökülmeli, yuva özel raybalarla temizlenmeli ve yeni bakır pul ile torklanarak takılmalıdır. Gecikilirse enjektör sökülemez hale gelir.'
  },
  {
    id: 'turbo-actuator',
    title: 'Turbo Aktüatörü ve VNT Mekanizması',
    severity: 'medium',
    symptoms: ['Limp Mode (Araç 3000 deviri geçmez)', 'Ani güç kaybı', 'P0299 veya 2510 hata kodları'],
    cause: 'Turbo üzerindeki elektronik beynin (Hella) lehim çatlağı yapması veya turbonun içindeki kanatçık (VNT) mekanizmasının kurumdan sıkışması.',
    solution: 'Aktüatör tamir takımı ile onarılabilir. Eğer mekanik sıkışma varsa turbo sökülüp temizlenmeli veya revize edilmelidir.'
  },
  {
    id: 'egr-valve',
    title: 'EGR Valfi Tıkanıklığı',
    severity: 'medium',
    symptoms: ['Siyah duman atma', 'Rölantide dalgalanma', 'Alt devirlerde cansızlık', 'P0401 hata kodu'],
    cause: 'Egzoz gazlarının geri dönüşümü sırasında biriken kurum, valfin hareket etmesini engeller. OM642\'de EGR, motorun arka kısmında yer alır.',
    solution: 'EGR valfi sökülüp balata spreyi ile temizlenebilir. Çok aşınmışsa Wahler marka orijinali ile değiştirilmelidir.'
  },
  {
    id: 'swirl-flap',
    title: 'Emme Manifoldu Kelebekleri (Swirl Flaps)',
    severity: 'medium',
    symptoms: ['Motor arıza lambası', 'Sigorta atması (Motor beyni sigortası)', 'Performans düşüklüğü'],
    cause: 'Turbo girişinden damlayan yağ, hemen alttaki M55 motorunu bozar. Ayrıca manifold içindeki plastik kanatçıklar zamanla kırılabilir.',
    solution: 'M55 motoru değişimi ve yağ kaçağının önlenmesi. Kalıcı çözüm için manifold değişimi veya (yasal sorumluluk kullanıcıda olmak üzere) iptal kitleri uygulanabilir.'
  },
  {
    id: 'dpf',
    title: 'DPF Doluluğu ve Sensör Arızaları',
    severity: 'medium',
    symptoms: ['Motor korumaya geçer', 'Yüksek yakıt tüketimi', 'Fan sürekli yüksek devirde çalışır'],
    cause: 'Egzoz basınç fark sensörünün (Differential Pressure Sensor) bozulması veya sürekli şehir içi kullanım sonucu filtrenin dolması.',
    solution: 'Önce basınç sensörü kontrol edilmeli. Tıkanıklık varsa otobanda 3000 devirde 20dk sürüş ile rejenerasyon yapılmalı. Çözülmezse profesyonel temizlik.'
  }
];

export const FaultsView: React.FC = () => {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Kronik Arızalar ve Çözümleri</h2>
        <p className="text-slate-600">
          OM642 motoru güçlü ve dayanıklıdır ancak belirli noktalar düzenli kontrol gerektirir. 
          Aşağıdaki liste, kullanıcıların en sık yaşadığı sorunları ve tecrübe edilmiş çözüm yöntemlerini içerir.
        </p>
      </div>

      <div className="space-y-4">
        {COMMON_FAULTS.map((fault) => (
          <div 
            key={fault.id} 
            className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
              expandedId === fault.id ? 'border-blue-500 shadow-md' : 'border-slate-200 shadow-sm hover:border-blue-300'
            }`}
          >
            <div 
              onClick={() => toggleExpand(fault.id)}
              className="p-5 flex items-center justify-between cursor-pointer bg-white"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${
                  fault.severity === 'high' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'
                }`}>
                  {fault.id.includes('oil') || fault.id.includes('dpf') ? <Thermometer className="h-6 w-6" /> : 
                   fault.id.includes('injectors') ? <Disc className="h-6 w-6" /> :
                   fault.id.includes('turbo') || fault.id.includes('egr') ? <Wind className="h-6 w-6" /> : <Zap className="h-6 w-6" />}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">{fault.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase ${
                        fault.severity === 'high' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                        {fault.severity === 'high' ? 'Kritik' : 'Orta Seviye'}
                    </span>
                    <span className="text-sm text-slate-500 hidden sm:inline-block">
                        • {fault.symptoms[0]}
                    </span>
                  </div>
                </div>
              </div>
              {expandedId === fault.id ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
            </div>

            {expandedId === fault.id && (
              <div className="px-5 pb-5 pt-0 bg-white">
                <div className="h-px w-full bg-slate-100 mb-4"></div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-slate-700 flex items-center gap-2 mb-2">
                            <Activity className="h-4 w-4" /> Belirtiler
                        </h4>
                        <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                            {fault.symptoms.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-700 mb-2">Teknik Neden</h4>
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">{fault.cause}</p>
                        
                        <h4 className="font-semibold text-green-700 mb-2">Çözüm Yöntemi</h4>
                        <p className="text-sm text-slate-700 leading-relaxed bg-green-50 p-3 rounded-lg border border-green-100">
                            {fault.solution}
                        </p>
                    </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};