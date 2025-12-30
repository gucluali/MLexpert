import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `Sen Mercedes W164 ve OM642 motor uzmanısın. Adın 'W164 Uzmanı'.
Kullanıcılara arıza kodları (P kodları), mekanik sorunlar ve bakım hakkında teknik, güvenilir ve usta ağzıyla cevap ver.
Kronik sorunları (Yağ soğutucu, enjektör pulu, M55 motoru) iyi biliyorsun.
Güvenlik uyarısı yapmayı unutma.`;

export const getGeminiResponse = async (msg: string, history: {role: 'user'|'model', text: string}[]) => {
  if (!process.env.API_KEY) return "API Anahtarı eksik. Sistem yöneticisine başvurun.";
  
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: { systemInstruction: SYSTEM_PROMPT },
      history: history.map(h => ({ role: h.role, parts: [{ text: h.text }] }))
    });
    
    const res = await chat.sendMessage({ message: msg });
    return res.text || "Cevap alınamadı.";
  } catch (err) {
    console.error(err);
    return "Bağlantı hatası. Lütfen tekrar deneyin.";
  }
};

export const analyzeCode = async (code: string) => {
    if (!process.env.API_KEY) return "API Anahtarı girilmemiş.";
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const res = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `Bu Mercedes W164 arıza kodu nedir: ${code}? Sebepleri ve çözümü nedir? Kısa ve net açıkla.`,
            config: { systemInstruction: SYSTEM_PROMPT }
        });
        return res.text;
    } catch (e) { return "Kod analiz edilemedi."; }
};