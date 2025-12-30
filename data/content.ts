import { Fault, MaintenanceItem, Slide } from '../types';

export const ENGINE_SPECS = {
  name: "OM642 V6 CDI",
  code: "DE 30 LA",
  power: "224 PS / 510 Nm",
  oil: "MB 229.51 / 229.52",
  capacity: "8.0 - 8.5 Litre"
};

export const COMMON_FAULTS: Fault[] = [
  {
    id: 'oil-cooler',
    title: 'Yağ Soğutucu (Oil Cooler) Contaları',
    severity: 'high',
    symptoms: ['V blok arasından motor altına yoğun yağ kaçağı', 'Su eksiltme'],
    cause: 'V bloğunun ortasındaki soğutucunun contaları zamanla ısıdan sertleşir.',
    solution: 'Mutlaka mor renkli Viton contalar ile değişim. Turbo ve manifold sökülmelidir.'
  },
  {
    id: 'black-death',
    title: 'Enjektör Pulu Kaçakları (Black Death)',
    severity: 'high',
    symptoms: ['Motor kapağında ziftleşme', 'Egzoz kokusu', 'Tıss tıss sesi'],
    cause: 'Bakır enjektör pullarının aşınması sonucu kompresyon kaçağı.',
    solution: 'Yuva temizliği, yeni bakır pul ve doğru torklama.'
  },
  {
    id: 'swirl-flap',
    title: 'Emme Manifoldu Kelebekleri (M55)',
    severity: 'medium',
    symptoms: ['Limp Mode', 'P2015 Arızası', 'Sigorta atması'],
    cause: 'Turbo girişinden damlayan yağ M55 motorunu bozar veya plastik kollar kırılır.',
    solution: 'Manifold değişimi veya iptal kiti uygulaması.'
  },
  {
    id: 'turbo',
    title: 'Turbo Aktüatör Arızası',
    severity: 'medium',
    symptoms: ['Güç kaybı', 'P0299 Düşük Basınç', '2510 kodu'],
    cause: 'Elektronik beyin lehim çatlağı veya kurumlanma.',
    solution: 'Aktüatör tamiri veya turbo revizyonu.'
  }
];

export const MAINTENANCE_SCHEDULE: MaintenanceItem[] = [
  {
    km: 10000,
    tasks: ['Motor Yağı (229.51)', 'Yağ Filtresi', 'Hava Filtresi Kontrol', 'Genel Kontrol'],
    note: 'OM642 için 10.000 km değişimi zincir ömrü için kritiktir.'
  },
  {
    km: 20000,
    tasks: ['10k Bakımı +', 'Mazot Filtresi', 'Polen Filtresi'],
    note: 'Mazot filtresi yan sanayi olursa enjektör bozabilir.'
  },
  {
    km: 60000,
    tasks: ['20k Bakımı +', 'Şanzıman Yağı (7G-Tronic)', 'Diferansiyel Yağları', 'Fren Hidroliği'],
    isMajor: true,
    note: 'Şanzıman yağı değişimi (ATF 134FE) kart arızasını önler.'
  }
];

export const PRESENTATION_SLIDES: Slide[] = [
  {
    id: 1,
    title: "OM642 & W164 Tanıtım",
    subtitle: "Kronik Sorunlar ve Çözümleri",
    content: ["Vaka Analizleri", "P0016/P0017 Zincir Sorunları", "Turbo ve Manifold İlişkisi"],
    highlight: "Kritik Bilgiler"
  },
  {
    id: 2,
    title: "Yağ Soğutucu Kabusu",
    subtitle: "Neden oluyor?",
    content: ["V-Blok tasarımı ısıyı hapseder", "Eski turuncu contalar dayanıksız", "İşçiliği parça fiyatının 10 katıdır"],
    highlight: "Mor Conta Kullanın"
  },
  {
    id: 3,
    title: "Önemli Tork Değerleri",
    content: ["Enjektör Civatası: 7Nm + 90° + 90°", "Ön Aks Somunu: 260Nm + 45°", "Tekerlekler: 150Nm"],
    highlight: "Tork Anahtarı Şart"
  }
];

export const SERVICE_INFO = {
  name: "W164 Expert Servis",
  owner: "ALİ GÜÇÜ",
  address: "Beysan San. Sit, Yakuplu, Beylikdüzü / İstanbul",
  phone: "+90 537 310 89 22",
  hours: "Pzt-Cmt: 08:30 - 19:00",
  guarantee: "1 Yıl / 20.000 KM İşçilik Garantisi"
};