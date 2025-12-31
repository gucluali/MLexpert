import React from 'react';
import { HISTORY_TIMELINE } from '../constants';

const HistorySection: React.FC = () => {
  return (
    <div className="p-6 md:p-10 bg-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">W164 Tarihçesi</h2>
        <p className="text-slate-400 mb-12">Luxury SUV kavramını değiştiren efsane kasanın yolculuğu.</p>

        <div className="relative border-l-2 border-slate-700 ml-4 md:ml-6 space-y-12">
          {HISTORY_TIMELINE.map((event, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Dot */}
              <span className="absolute -left-[9px] top-1 w-5 h-5 rounded-full bg-slate-800 border-4 border-mercedes-accent group-hover:scale-125 transition-transform duration-300 z-10"></span>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                <span className="text-4xl font-black text-mercedes-silver opacity-20 font-mono group-hover:opacity-40 transition-opacity">
                  {event.year}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-mercedes-accent transition-colors">
                  {event.title}
                </h3>
              </div>
              
              <div className="bg-mercedes-panel p-6 rounded-lg border border-slate-700 shadow-lg relative">
                 {/* Decorative image based on index to mix it up */}
                 <div className="absolute right-0 top-0 w-20 h-20 opacity-10 pointer-events-none overflow-hidden rounded-tr-lg">
                    <img src={`https://picsum.photos/seed/${event.year}/100/100?grayscale`} alt="Deco" className="object-cover w-full h-full" />
                 </div>
                 <p className="text-slate-300 leading-relaxed relative z-10">
                   {event.description}
                 </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-500 italic">"W164, sadece bir araç değil, bir mühendislik beyanıdır."</p>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;