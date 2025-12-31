import { FaultItem, HistoryEvent, SpecItem } from './types';

export const FLUID_SPECS: SpecItem[] = [
  {
    component: "Motor Yağı (OM642)",
    fluid: "MB-Approval 229.51 / 229.52",
    spec: "5W-30 veya 0W-30 Low SPAsh",
    capacity: "8.5 - 9.0 Litre",
    interval: "10.000 - 15.000 km"
  },
  {
    component: "Otomatik Şanzıman (7G-Tronic 722.9)",
    fluid: "ATF 134 FE (Mavi - 2010 sonrası) veya ATF 134 (Kırmızı - 2010 öncesi)",
    spec: "MB-Approval 236.15 / 236.14",
    capacity: "9.0 Litre (Tork konvertörü dahil)",
    interval: "60.000 km"
  },
  {
    component: "Ön Diferansiyel",
    fluid: "Hipoid Dişli Yağı",
    spec: "MB-Approval 235.7 / 85W-90",
    capacity: "1.1 Litre",
    interval: "Kalıcı (Ömürlük - Tavsiye: 100k km)"
  },
  {
    component: "Arka Diferansiyel",
    fluid: "Hipoid Dişli Yağı",
    spec: "MB-Approval 235.7 / 85W-90",
    capacity: "1.1 Litre",
    interval: "Kalıcı (Ömürlük - Tavsiye: 100k km)"
  },
  {
    component: "Transfer Kutusu (Arazi Şanzımanı)",
    fluid: "ATF",
    spec: "MB-Approval 236.12",
    capacity: "0.5 Litre",
    interval: "60.000 km"
  },
  {
    component: "Soğutma Sıvısı (Antifriz)",
    fluid: "G48 (Mavi/Yeşil)",
    spec: "MB-Approval 325.0",
    capacity: "9.5 Litre (50/50 Karışım)",
    interval: "250.000 km / 15 Yıl"
  },
  {
    component: "Direksiyon Hidroliği",
    fluid: "Pentosin CHF 11S",
    spec: "MB-Approval 345.0",
    capacity: "1.0 Litre",
    interval: "Her 2 Yılda bir kontrol"
  },
  {
    component: "Fren Hidroliği",
    fluid: "DOT 4 Plus",
    spec: "MB-Approval 331.0",
    capacity: "0.7 - 0.9 Litre",
    interval: "2 Yıl"
  }
];

export const COMMON_FAULTS: FaultItem[] = [
  {
    code: "OM642-01",
    system: "Motor (OM642)",
    symptom: "Motor V yatağında yağ birikmesi, alt muhafazada yağ kaçağı.",
    solution: "Yağ Soğutucu (Oil Cooler) Contalarının değişimi. Viton (Mor) contalar kullanılmalı.",
    difficulty: "Expert",
    cost: "High"
  },
  {
    code: "W164-AIR-01",
    system: "Süspansiyon (Airmatic)",
    symptom: "Araç park halindeyken bir tarafı çöküyor, 'Airmatic Malfunction' uyarısı.",
    solution: "Hava körüklerinde kaçak testi, gerekirse körük veya kompresör değişimi.",
    difficulty: "Medium",
    cost: "Medium"
  },
  {
    code: "SAM-R-01",
    system: "Elektronik (Rear SAM)",
    symptom: "Arka stoplar, benzin göstergesi veya bagaj kapağı saçmalıyor.",
    solution: "Arka sağ stop lambası contasından su girmesi sonucu SAM modülü oksitlenmesi. Modül değişimi ve conta yalıtımı.",
    difficulty: "Medium",
    cost: "High"
  },
  {
    code: "7G-Tronic-01",
    system: "Şanzıman (722.9)",
    symptom: "Vites geçişlerinde vuruntu, şanzıman korumaya geçiyor, hız sensörü hatası.",
    solution: "Konduktör plakası (Conductor Plate) veya solenoid değişimi. SCN kodlama gerekir.",
    difficulty: "Hard",
    cost: "High"
  },
  {
    code: "OM642-SWIRL",
    system: "Emme Manifoldu",
    symptom: "Güç kaybı, Motor Arıza Lambası (CEL), Swirl Flap motoru hatası.",
    solution: "Emme manifoldu klepelerinin temizlenmesi veya iptal kiti uygulanması. Motor değişimi.",
    difficulty: "Hard",
    cost: "Medium"
  }
];

export const HISTORY_TIMELINE: HistoryEvent[] = [
  {
    year: "2005",
    title: "W164 Lansmanı",
    description: "Detroit Otomobil Fuarı'nda tanıtıldı. Önceki W163 kasaya göre monokok şasiye geçildi, arazi yetenekleri ve konfor artırıldı."
  },
  {
    year: "2006",
    title: "ML 63 AMG",
    description: "6.2 litrelik V8 atmosferik canavar tanıtıldı. Dönemin en hızlı SUV'larından biri."
  },
  {
    year: "2007",
    title: "OM642 Dominasyonu",
    description: "3.0 V6 CDI Dizel motor (ML 320 CDI / ML 350 CDI) en popüler seçenek haline geldi. Yüksek tork ve yakıt verimliliği sağladı."
  },
  {
    year: "2008",
    title: "Makyaj Operasyonu (Facelift)",
    description: "Yeni farlar, daha büyük ızgara, yeni aynalar ve iç mekanda direksiyon ile Command sistemi güncellendi."
  },
  {
    year: "2009",
    title: "BlueTEC Teknolojisi",
    description: "AdBlue sistemi entegre edilerek emisyon değerleri düşürüldü. ABD pazarında temiz dizel olarak pazarlandı."
  },
  {
    year: "2011",
    title: "W166'ya Devir",
    description: "W164 kasa yerini daha yuvarlak hatlara sahip W166 kasaya bıraktı. Ancak W164, 'Gerçek Off-Road' ruhunu taşıyan son modern ML olarak anıldı."
  }
];

export const STATS_DATA = [
  { name: 'Yağ Soğutucu', value: 85, fill: '#ef4444' }, // Red
  { name: 'Airmatic', value: 70, fill: '#f97316' },    // Orange
  { name: 'Arka SAM', value: 60, fill: '#eab308' },    // Yellow
  { name: 'Turbo', value: 40, fill: '#3b82f6' },       // Blue
  { name: 'EGR/DPF', value: 55, fill: '#8b5cf6' },     // Purple
  { name: '7G-Tronic', value: 50, fill: '#10b981' },   // Emerald
];

export const REGION_DATA = [
  { name: 'Kuzey Amerika', value: 40, fill: '#3b82f6' },
  { name: 'Avrupa', value: 35, fill: '#6366f1' },
  { name: 'Asya', value: 15, fill: '#8b5cf6' },
  { name: 'Diğer', value: 10, fill: '#94a3b8' },
];