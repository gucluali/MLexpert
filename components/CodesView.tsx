import React, { useState } from 'react';
import { Search, ServerCrash, Loader2, BookOpen, ChevronRight } from 'lucide-react';
import { analyzeErrorCode } from '../services/geminiService';

const COMMON_CODES = [
    {
        code: 'P0101',
        title: 'Kütle Hava Akış (MAF) Sensörü',
        desc: 'Hava akış metresi verisi tutarsız.',
        fix: 'Hava filtreleri kontrol edilmeli, kaçak (turbo hortumu yırtığı) aranmalı, sensör temizlenmeli veya değişmeli.'
    },
    {
        code: 'P0401 / P0404',
        title: 'EGR Akış Yetersizliği',
        desc: 'EGR valfi kurumdan dolayı tıkanmış veya sıkışmış.',
        fix: 'EGR valfi sökülüp temizlenmeli, düzelmezse değiştirilmeli.'
    },
    {
        code: 'P0299',
        title: 'Turbo Düşük Basınç (Underboost)',
        desc: 'Turbo istenen basıncı üretemiyor.',
        fix: 'Turbo hortumlarında kaçak, intercooler deliği veya turbo aktüatör arızası kontrol edilmeli.'
    },
    {
        code: '2510',
        title: 'Turbo Aktüatör Konum Hatası',
        desc: 'Turbo üzerindeki elektronik beyin kanatçıkları yönetemiyor.',
        fix: 'Genellikle Hella marka turbo beyni (aktüatör) değişimi veya tamiri gerekir.'
    },
    {
        code: 'P2015',
        title: 'Emme Manifoldu Kelebek Pozisyonu',
        desc: 'Swirl flap motoru veya kolu arızalı.',
        fix: 'M55 motoru değişimi veya manifold üzerindeki plastik kolların tamir takımı ile değişimi.'
    },
    {
        code: 'P0471',
        title: 'Egzoz Basınç Sensörü',
        desc: 'DPF öncesi basıncı ölçen sensör hatası.',
        fix: 'Sensör değişimi ucuz ve kolaydır. Tıkanırsa DPF rejenerasyonu yapamaz.'
    }
];

export const CodesView: React.FC = () => {
    const [code, setCode] = useState('');
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!code.trim()) return;
        performSearch(code);
    };

    const performSearch = async (searchCode: string) => {
        setLoading(true);
        setResult(null);
        setCode(searchCode.toUpperCase());
        
        try {
            const analysis = await analyzeErrorCode(searchCode);
            setResult(analysis);
        } catch (error) {
            setResult("Bir hata oluştu. Lütfen tekrar deneyin.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="max-w-3xl mx-auto animate-fade-in pb-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Akıllı Arıza Kodu Çözücü</h2>
                <p className="text-slate-600">
                    OBD-II veya Mercedes Hex kodlarını girin. Yapay zeka motorun dilinden anlar.
                </p>
            </div>

            <form onSubmit={handleSearch} className="relative mb-12">
                <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    placeholder="Arıza Kodu Girin (Örn: P0299, 2510)"
                    className="w-full p-4 pl-12 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none text-lg shadow-sm"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-6 w-6" />
                <button 
                    type="submit" 
                    disabled={loading || !code}
                    className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white px-6 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Sorgula'}
                </button>
            </form>

            {result && (
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mb-12">
                    <div className="bg-slate-100 p-4 border-b border-slate-200 flex items-center gap-2">
                        <ServerCrash className="h-5 w-5 text-red-500" />
                        <span className="font-bold text-slate-700">Analiz Sonucu: {code}</span>
                    </div>
                    <div className="p-6 prose prose-slate max-w-none">
                        <div className="whitespace-pre-wrap text-slate-700 leading-relaxed">
                            {result}
                        </div>
                    </div>
                    <div className="bg-yellow-50 p-4 border-t border-yellow-100 text-sm text-yellow-800 flex gap-2">
                        <BookOpen className="h-5 w-5 shrink-0" />
                        <p>Not: Bu sonuçlar AI tarafından üretilmiştir. Kesin teşhis için Xentry/DAS cihazı önerilir.</p>
                    </div>
                </div>
            )}

            <div className="border-t border-slate-200 pt-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6">W164 & OM642 İçin Sık Görülen Kodlar</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    {COMMON_CODES.map((item, idx) => (
                        <div 
                            key={idx} 
                            onClick={() => performSearch(item.code)}
                            className="bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-mono font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{item.code}</span>
                                <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-blue-500" />
                            </div>
                            <h4 className="font-bold text-slate-700 mb-1">{item.title}</h4>
                            <p className="text-xs text-slate-500 mb-2">{item.desc}</p>
                            <div className="text-xs text-green-700 bg-green-50 p-2 rounded border border-green-100">
                                <strong>Çözüm:</strong> {item.fix}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};