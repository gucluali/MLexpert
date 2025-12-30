import React, { useState, useRef, useEffect } from 'react';
import { ViewState } from '../types';
import { ENGINE_SPECS, COMMON_FAULTS, MAINTENANCE_SCHEDULE, PRESENTATION_SLIDES, SERVICE_INFO } from '../data/content';
import { getGeminiResponse, analyzeCode } from '../services/geminiService';
import { ArrowRight, Droplet, Activity, ShieldCheck, ChevronDown, ChevronUp, AlertCircle, CheckCircle2, Search, Loader2, Bot, Send, User, ChevronLeft, ChevronRight, Phone, MapPin, Clock } from 'lucide-react';

// --- HOME VIEW ---
export const HomeView: React.FC<{nav: (v: ViewState)=>void}> = ({nav}) => (
  <div className="space-y-8 animate-fade-in">
    <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl min-h-[400px] flex items-center">
      <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/2006-2008_Mercedes-Benz_ML_320_%28W164%29_CDI_luxury_wagon_%282011-11-17%29_01.jpg/1920px-2006-2008_Mercedes-Benz_ML_320_%28W164%29_CDI_luxury_wagon_%282011-11-17%29_01.jpg')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      <div className="relative p-8 md:p-12 z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Mercedes <span className="text-blue-500">W164</span></h1>
        <p className="text-xl text-slate-300 mb-8">OM642 Motor Teknik Rehberi ve AI Destekli Arıza Çözüm Merkezi.</p>
        <div className="flex flex-wrap gap-4">
          <button onClick={() => nav('AI')} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all">
            AI Ustaya Sor <ArrowRight className="w-5 h-5"/>
          </button>
          <button onClick={() => nav('CODES')} className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-full font-bold border border-slate-600 transition-all">
            Arıza Kodu Ara
          </button>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4 text-blue-600"><Activity/> <h3 className="font-bold text-slate-900">Motor</h3></div>
            <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between border-b pb-1"><span>Kod</span> <span className="text-slate-900 font-medium">{ENGINE_SPECS.code}</span></div>
                <div className="flex justify-between border-b pb-1"><span>Güç</span> <span className="text-slate-900 font-medium">{ENGINE_SPECS.power}</span></div>
            </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4 text-amber-600"><Droplet/> <h3 className="font-bold text-slate-900">Yağ</h3></div>
            <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between border-b pb-1"><span>Spek</span> <span className="text-slate-900 font-medium">{ENGINE_SPECS.oil}</span></div>
                <div className="flex justify-between border-b pb-1"><span>Kapasite</span> <span className="text-slate-900 font-medium">{ENGINE_SPECS.capacity}</span></div>
            </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 cursor-pointer hover:border-blue-400 transition-colors" onClick={() => nav('FAULTS')}>
            <div className="flex items-center gap-3 mb-4 text-red-600"><ShieldCheck/> <h3 className="font-bold text-slate-900">Kronik</h3></div>
            <p className="text-sm text-slate-600">Yağ soğutucu, Enjektör pulları ve Turbo sorunları hakkında detaylı bilgi için tıklayın.</p>
        </div>
    </div>
  </div>
);

// --- FAULTS VIEW ---
export const FaultsView: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>(null);
    return (
        <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Kronik Arızalar</h2>
            {COMMON_FAULTS.map(f => (
                <div key={f.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <button onClick={() => setOpenId(openId === f.id ? null : f.id)} className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50">
                        <div className="flex items-center gap-3">
                            <AlertCircle className={`w-6 h-6 ${f.severity === 'high' ? 'text-red-500' : 'text-amber-500'}`} />
                            <div>
                                <h3 className="font-bold text-slate-800">{f.title}</h3>
                                <span className={`text-xs px-2 py-0.5 rounded font-bold uppercase ${f.severity === 'high' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                                    {f.severity === 'high' ? 'Kritik' : 'Orta'}
                                </span>
                            </div>
                        </div>
                        {openId === f.id ? <ChevronUp className="text-slate-400"/> : <ChevronDown className="text-slate-400"/>}
                    </button>
                    {openId === f.id && (
                        <div className="p-5 pt-0 bg-slate-50 border-t border-slate-100">
                            <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
                                <div><h4 className="font-bold mb-1">Belirtiler:</h4><ul className="list-disc pl-4 text-slate-600">{f.symptoms.map((s,i) => <li key={i}>{s}</li>)}</ul></div>
                                <div>
                                    <h4 className="font-bold mb-1">Sebep:</h4><p className="text-slate-600 mb-2">{f.cause}</p>
                                    <h4 className="font-bold text-green-700 mb-1">Çözüm:</h4><p className="text-green-800 bg-green-50 p-2 rounded border border-green-100">{f.solution}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

// --- MAINTENANCE VIEW ---
export const MaintenanceView: React.FC = () => (
    <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-slate-900 text-white p-6 rounded-2xl">
            <h2 className="text-2xl font-bold">Bakım Periyotları</h2>
            <p className="text-slate-400">Motor ömrünü uzatan en önemli faktör erken yağ değişimidir.</p>
        </div>
        <div className="grid gap-4">
            {MAINTENANCE_SCHEDULE.map((m, i) => (
                <div key={i} className={`bg-white p-6 rounded-xl border shadow-sm ${m.isMajor ? 'border-blue-300 ring-1 ring-blue-100' : 'border-slate-200'}`}>
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-slate-800">{m.km.toLocaleString()} KM</h3>
                        {m.isMajor && <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">AĞIR BAKIM</span>}
                    </div>
                    <ul className="space-y-2 mb-4">
                        {m.tasks.map((t, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-green-500"/> {t}
                            </li>
                        ))}
                    </ul>
                    {m.note && <div className="text-xs bg-amber-50 text-amber-800 p-3 rounded border border-amber-100">{m.note}</div>}
                </div>
            ))}
        </div>
    </div>
);

// --- CODES VIEW ---
export const CodesView: React.FC = () => {
    const [code, setCode] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!code) return;
        setLoading(true);
        const res = await analyzeCode(code);
        setResult(res || 'Hata oluştu.');
        setLoading(false);
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Arıza Kodu Sorgula</h2>
            <form onSubmit={handleSearch} className="relative mb-8">
                <input type="text" value={code} onChange={e=>setCode(e.target.value.toUpperCase())} placeholder="Örn: P0299, 2510" className="w-full p-4 pl-12 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none uppercase" />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>
                <button type="submit" disabled={loading} className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white px-6 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50">
                    {loading ? <Loader2 className="animate-spin"/> : 'Bul'}
                </button>
            </form>
            {result && (
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 prose prose-slate">
                    <h3 className="text-lg font-bold text-slate-900 border-b pb-2 mb-4">Analiz: {code}</h3>
                    <div className="whitespace-pre-wrap">{result}</div>
                </div>
            )}
        </div>
    );
};

// --- AI ASSISTANT VIEW ---
export const AiView: React.FC = () => {
    const [msgs, setMsgs] = useState<{id:string, role:'user'|'model', text:string}[]>([
        {id:'1', role:'model', text:'Merhaba! Ben W164 ve OM642 uzmanıyım. Nasıl yardımcı olabilirim?'}
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => bottomRef.current?.scrollIntoView({behavior:'smooth'}), [msgs]);

    const send = async (e:React.FormEvent) => {
        e.preventDefault();
        if(!input.trim() || loading) return;
        const userMsg = input;
        setInput('');
        setMsgs(p => [...p, {id: Date.now().toString(), role:'user', text:userMsg}]);
        setLoading(true);
        
        const res = await getGeminiResponse(userMsg, msgs);
        setMsgs(p => [...p, {id: (Date.now()+1).toString(), role:'model', text:res}]);
        setLoading(false);
    };

    return (
        <div className="flex flex-col h-[calc(100vh-140px)] bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-4xl mx-auto">
            <div className="bg-slate-900 p-4 text-white flex items-center gap-2">
                <Bot className="text-blue-400"/> <span className="font-bold">Sanal Usta</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                {msgs.map(m => (
                    <div key={m.id} className={`flex ${m.role==='user'?'justify-end':'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl ${m.role==='user'?'bg-blue-600 text-white rounded-br-none':'bg-white border border-slate-200 text-slate-800 rounded-bl-none'}`}>
                            {m.text}
                        </div>
                    </div>
                ))}
                {loading && <div className="flex justify-start"><div className="bg-slate-200 p-3 rounded-2xl animate-pulse">Yazıyor...</div></div>}
                <div ref={bottomRef}/>
            </div>
            <form onSubmit={send} className="p-4 border-t bg-white flex gap-2">
                <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Sorunuzu yazın..." className="flex-1 p-3 border rounded-xl outline-none focus:border-blue-500"/>
                <button type="submit" disabled={loading} className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700"><Send/></button>
            </form>
        </div>
    );
};

// --- PRESENTATION VIEW ---
export const PresentationView: React.FC = () => {
    const [idx, setIdx] = useState(0);
    const s = PRESENTATION_SLIDES[idx];
    return (
        <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl overflow-hidden shadow-2xl min-h-[500px] flex flex-col">
            <div className="p-8 flex-1 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full"></div>
                <div className="relative z-10">
                    <span className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-2 block">Ders {idx+1}/{PRESENTATION_SLIDES.length}</span>
                    <h2 className="text-4xl font-bold mb-4">{s.title}</h2>
                    {s.subtitle && <h3 className="text-xl text-slate-400 mb-8 border-l-4 border-blue-500 pl-4">{s.subtitle}</h3>}
                    <ul className="space-y-3 mb-8">
                        {s.content.map((c,i) => <li key={i} className="flex items-start gap-3 text-lg"><CheckCircle2 className="w-6 h-6 text-green-500 shrink-0"/> {c}</li>)}
                    </ul>
                    {s.highlight && <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center text-amber-400 font-bold">{s.highlight}</div>}
                </div>
            </div>
            <div className="bg-slate-950 p-4 flex justify-between items-center">
                <button onClick={()=>setIdx(i => Math.max(0, i-1))} disabled={idx===0} className="p-2 text-slate-400 hover:text-white disabled:opacity-30"><ChevronLeft className="w-8 h-8"/></button>
                <div className="h-1 flex-1 mx-4 bg-slate-800 rounded-full"><div className="h-full bg-blue-600 transition-all" style={{width:`${((idx+1)/PRESENTATION_SLIDES.length)*100}%`}}></div></div>
                <button onClick={()=>setIdx(i => Math.min(PRESENTATION_SLIDES.length-1, i+1))} disabled={idx===PRESENTATION_SLIDES.length-1} className="p-2 text-slate-400 hover:text-white disabled:opacity-30"><ChevronRight className="w-8 h-8"/></button>
            </div>
        </div>
    );
};

// --- SERVICE VIEW ---
export const ServiceView: React.FC = () => (
    <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center">İletişim ve Servis</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-xl mb-6 border-b pb-4">{SERVICE_INFO.name}</h3>
                    <div className="space-y-4">
                        <div className="flex gap-4"><MapPin className="text-blue-600"/> <div><p className="font-bold">Adres</p><p className="text-slate-600">{SERVICE_INFO.address}</p></div></div>
                        <div className="flex gap-4"><Phone className="text-green-600"/> <div><p className="font-bold">Telefon</p><a href={`tel:${SERVICE_INFO.phone}`} className="text-slate-600 hover:text-blue-600">{SERVICE_INFO.phone}</a></div></div>
                        <div className="flex gap-4"><Clock className="text-amber-600"/> <div><p className="font-bold">Saatler</p><p className="text-slate-600">{SERVICE_INFO.hours}</p></div></div>
                    </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-blue-900 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6"/> <span className="font-medium">{SERVICE_INFO.guarantee}</span>
                </div>
            </div>
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 h-[300px] md:h-auto">
                <iframe 
                    title="map"
                    src="https://maps.google.com/maps?q=Beysan+Sanayi+Sitesi+Beylikdüzü&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%" height="100%" style={{border:0, borderRadius:'12px'}} loading="lazy">
                </iframe>
            </div>
        </div>
    </div>
);