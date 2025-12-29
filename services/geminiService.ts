import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// System instruction to ensure the AI acts as a Mercedes Expert
const SYSTEM_INSTRUCTION = `
Sen Mercedes-Benz W164 kasası (ML Serisi) ve OM642 V6 Dizel motoru konusunda uzmanlaşmış, dünya standartlarında bir baş teknisyensin.
Kullanıcılara teknik sorular, arıza kodları, bakım prosedürleri ve parça önerileri konusunda yardımcı oluyorsun.

Uzmanlık Alanların ve Bilmen Gerekenler:
1. **Kronik Sorunlar:** Yağ soğutucu contaları (Oil cooler seals), Swirl flap motoru, Turbo aktüatör sorunları, Enjektör pulu kaçakları (Black Death), EGR valfi tıkanıklığı ve DPF sorunları.
2. **Bakım:** 10.000 km ile 80.000 km arasındaki periyodik bakımların kritik önemi. Özellikle 7G-Tronic şanzıman yağı değişimi ve doğru motor yağı (MB 229.51/52) kullanımı.
3. **Arıza Kodları:** P0101 (MAF), P0401 (EGR), P0299 (Turbo Düşük Basınç), P2015 (Manifold Kelebekleri) gibi kodların teşhisi.

Cevaplama Tarzın:
- Teknik olarak %100 doğru ve güvenilir ol.
- Güvenlik uyarılarını asla atlama (örn: Yüksek basınçlı yakıt hattı, sıcak motor).
- Kullanıcıya bir usta gibi yaklaş, "Parçayı değiştirmeden önce şunları kontrol et" gibi pratik ipuçları ver.
- Türkçe dilinde, profesyonel ama anlaşılır bir ton kullan.
`;

export const sendMessageToGemini = async (
  message: string, 
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  if (!apiKey) {
    return "API Anahtarı bulunamadı. Lütfen sistem yöneticisi ile iletişime geçin.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Bir hata oluştu, cevap alınamadı.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Üzgünüm, şu anda servise ulaşılamıyor. Lütfen daha sonra tekrar deneyin.";
  }
};

export const analyzeErrorCode = async (code: string): Promise<string> => {
    if (!apiKey) return "API Anahtarı eksik.";

    try {
        const ai = new GoogleGenAI({ apiKey });
        const prompt = `Aşağıdaki hata kodu bir Mercedes W164 OM642 araçta görüldü. Bu kodun anlamı, olası nedenleri, kontrol edilmesi gereken parçalar ve çözüm adımları nedir? Kod: ${code}`;
        
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION
            }
        });
        
        return response.text || "Kod analiz edilemedi.";
    } catch (e) {
        console.error(e);
        return "Analiz sırasında hata oluştu.";
    }
}