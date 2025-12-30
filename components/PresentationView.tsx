import React, { useState } from 'react';
import { PRESENTATION_SLIDES } from '../data/presentationData';
import { ChevronLeft, ChevronRight, Projector, Bookmark, CheckCircle } from 'lucide-react';

export const PresentationView: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slide = PRESENTATION_SLIDES[currentIndex];
  const totalSlides = PRESENTATION_SLIDES.length;

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const progressPercentage = ((currentIndex + 1) / totalSlides) * 100;

  return (
    <div className="max-w-5xl mx-auto h-[calc(100vh-140px)] flex flex-col animate-fade-in">
      {/* Header */}
      <div className="bg-slate-900 text-white p-6 rounded-t-2xl flex justify-between items-center border-b border-slate-700">
        <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
                <Projector className="h-6 w-6 text-white" />
            </div>
            <div>
                <h2 className="text-xl font-bold">Teknik Eğitim Serisi</h2>
                <p className="text-slate-400 text-sm">W164 Kronik Sorunlar & Çözüm Stratejileri</p>
            </div>
        </div>
        <div className="text-right">
            <span className="text-3xl font-mono font-bold text-blue-500">{currentIndex + 1}</span>
            <span className="text-slate-500 text-lg"> / {totalSlides}</span>
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-1 bg-slate-800 text-slate-100 p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto w-full z-10">
            <div className="mb-2">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold tracking-wider uppercase mb-4 border border-blue-500/30">
                    Konu Başlığı
                </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-white">
                {slide.title}
            </h1>
            {slide.subtitle && (
                <h3 className="text-xl md:text-2xl text-slate-400 mb-8 font-light border-l-4 border-blue-500 pl-4">
                    {slide.subtitle}
                </h3>
            )}

            <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="md:col-span-2 space-y-4">
                    {slide.content.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors">
                            <CheckCircle className="h-6 w-6 text-green-400 shrink-0 mt-0.5" />
                            <p className="text-lg text-slate-200 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
                
                {slide.highlight && (
                    <div className="md:col-span-1">
                        <div className="bg-slate-700/50 border border-slate-600 p-6 rounded-xl h-full flex flex-col justify-center items-center text-center shadow-xl backdrop-blur-sm">
                            <Bookmark className="h-8 w-8 text-amber-400 mb-3" />
                            <span className="text-slate-400 text-sm uppercase font-bold tracking-widest mb-2">Önemli Not</span>
                            <p className="text-xl font-bold text-white">{slide.highlight}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* Controls & Progress */}
      <div className="bg-slate-900 p-6 rounded-b-2xl border-t border-slate-700">
        <div className="flex items-center justify-between gap-4">
            <button 
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
                <ChevronLeft className="h-5 w-5" />
                <span className="hidden sm:inline">Önceki</span>
            </button>

            <div className="flex-1 max-w-md mx-4">
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-500 ease-out"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
            </div>

            <button 
                onClick={nextSlide}
                disabled={currentIndex === totalSlides - 1}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
                <span className="hidden sm:inline">Sonraki</span>
                <ChevronRight className="h-5 w-5" />
            </button>
        </div>
      </div>
    </div>
  );
};