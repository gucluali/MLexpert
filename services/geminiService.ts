import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Initialize Gemini Client
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Check process.env.API_KEY");
  }
  return new GoogleGenAI({ apiKey });
};

export const getAIUstaResponse = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  try {
    const ai = getClient();
    
    // Construct the context based on history
    // We only send the last few messages to keep context relevant but manageable
    const recentHistory = history.slice(-6); 
    
    // System Instruction for the persona
    const systemInstruction = `
      Sen "Ali Güçlü", Mercedes-Benz W164 kasa ve OM642 motorlar konusunda uzmanlaşmış, yılların tecrübesine sahip usta bir makine mühendisi ve tamircisin.
      
      Kullanıcı sana arıza belirtileri, parça soruları veya teknik değerler soracak.
      Cevapların şu formatta olmalı:
      1. Samimi, "Usta" ağzıyla ama profesyonel teknik dille konuş (Örn: "Bak kardeşim, o ses turbodan değil manifolddan geliyor olabilir").
      2. W164'ün kronik sorunlarını (Yağ soğutucu, SAM beyni, Airmatic, Türbin) göz önünde bulundur.
      3. Olası arıza kodlarını tahmin etmeye çalış.
      4. Mümkünse parça numarası veya teknik sıvı onayı (MB 229.51 gibi) ver.
      5. Güvenlik uyarısı yapmayı unutma.
      
      Eğer konu Mercedes W164 veya OM642 dışındaysa, nazikçe konuyu tekrar Mercedes'e getir.
    `;

    // Format history for the API
    // Note: The API treats 'user' and 'model' roles.
    let contents = recentHistory.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    // Add the new message
    contents.push({
      role: 'user',
      parts: [{ text: newMessage }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview', // Using fast thinking model
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7, // Creative but accurate
        maxOutputTokens: 800,
      }
    });

    return response.text || "Usta şu an meşgul, lifte araç kaldırıyor. Tekrar dener misin?";

  } catch (error) {
    console.error("AI Usta Error:", error);
    return "Bağlantıda bir sorun oluştu evlat. Kaputu açıp tekrar bakalım (Sistemsel Hata).";
  }
};