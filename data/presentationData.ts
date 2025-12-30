import { Slide } from '../types';

export const PRESENTATION_SLIDES: Slide[] = [
  {
    id: 1,
    title: "Vaka Analizi: W164 M272/OM642",
    subtitle: "Tanıdık Semptomlar ve Gizemli Kodlar",
    content: [
      "Gösterge panelinde 'ESP Inoperative' uyarısı.",
      "Motor çalışmasında hissedilir sarsıntı ve titreme.",
      "Teşhis Cihazı Kodları: P0016, P0017 (Krank/Eksantrik Senkronizasyonu).",
      "P0300: Rastgele / Çoklu Silindir Ateşleme Hatası."
    ],
    highlight: "Kritik Kodlar: P0016 - P0017"
  },
  {
    id: 2,
    title: "M272 Emme Manifoldu Arızası",
    subtitle: "P2015 Kodunun Arkasındaki Gerçek",
    content: [
      "Emme manifoldu içindeki 'Swirl Flap' kanatçıklarını yöneten mekanizma.",
      "Manifoldun dışındaki plastik kumanda kolu zamanla ısıdan gevrekleşir ve kırılır.",
      "Kırıldığında kanatçıklar belirli bir pozisyonda takılı kalır.",
      "Sonuç: Düşük devirde tork kaybı ve P2015 arıza kodu."
    ],
    highlight: "Sebep: Plastik Kol Kırılması"
  },
  {
    id: 3,
    title: "Denge Mili (Balance Shaft)",
    subtitle: "Motoru İndirten Kronik Sorun",
    content: [
      "P0016 ve P0017 kodlarının asıl ve en korkulan sebebidir.",
      "Denge mili üzerindeki dişli, yetersiz sertleştirilmiş metalden yapıldığı için erken aşınır.",
      "Zincir boşluk yapar, zamanlama (sente) kaçar.",
      "Çözüm: Motorun araçtan indirilip denge milinin değiştirilmesidir."
    ],
    highlight: "Risk: Dişli Aşınması"
  },
  {
    id: 4,
    title: "7G-Tronic Şanzıman Kartı",
    subtitle: "VGS / Conductor Plate Arızası",
    content: [
      "Şanzıman beyni (TCM), valf gövdesinin üzerinde yağın içindedir.",
      "Devir sensörleri (Y3/8n1, Y3/8n2) zamanla bozulur.",
      "Belirtiler: Vitese geçmeme, tek viteste takılı kalma (Limp Mode).",
      "Genellikle kart değişimi veya profesyonel onarım gerektirir."
    ],
    highlight: "Parça: İletken Plaka (TCM)"
  },
  {
    id: 5,
    title: "Kritik Tork Değerleri",
    subtitle: "Ön Takım ve Diferansiyel Montajı",
    content: [
      "Ön Aks Mili Somunu: 260 Nm + 45° (Derece sıkımı şarttır).",
      "Ön Diferansiyel Bağlantı Vidaları: 160 Nm.",
      "Tekerlek Bijonları: 150 Nm.",
      "Hatalı torklama, rulman dağılmasına veya aks kesmesine yol açar."
    ],
    highlight: "Dikkat: 260 Nm + 45°"
  },
  {
    id: 6,
    title: "Parça Numaraları & Özel Aletler",
    subtitle: "Referans Bilgileri",
    content: [
      "Emme Manifoldu (Komple): A 272 140 24 01",
      "Ön Aks Sökme/Takma Aleti (Çektirme): 210 589 03 43 00",
      "Termostat (OM642): A 642 200 22 15",
      "Turbo Contası (Viton - Mor): A 642 094 00 80"
    ],
    highlight: "Orijinal Parça Kullanın"
  }
];