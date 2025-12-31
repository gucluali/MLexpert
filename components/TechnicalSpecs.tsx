import React from 'react';
import { FLUID_SPECS } from '../constants';

const TechnicalSpecs: React.FC = () => {
  return (
    <div className="p-6 md:p-10 bg-slate-900 min-h-screen">
       <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Yağ & Sıvı Teknik Değerleri</h2>
        <p className="text-slate-400 mb-8">W164 ve OM642 motorunuzun uzun ömürlü olması için hayati öneme sahip fabrika değerleri.</p>

        <div className="bg-mercedes-panel rounded-xl shadow-2xl border border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800 text-mercedes-silver text-sm uppercase tracking-wider border-b border-slate-600">
                  <th className="p-4 font-semibold">Bileşen / Sistem</th>
                  <th className="p-4 font-semibold">Onaylı Sıvı / Tip</th>
                  <th className="p-4 font-semibold">Spesifikasyon</th>
                  <th className="p-4 font-semibold">Dolum Kapasitesi</th>
                  <th className="p-4 font-semibold">Değişim Aralığı</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700 text-slate-300 text-sm md:text-base">
                {FLUID_SPECS.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium text-white">{item.component}</td>
                    <td className="p-4 text-blue-400">{item.fluid}</td>
                    <td className="p-4 font-mono text-xs md:text-sm text-yellow-500">{item.spec}</td>
                    <td className="p-4">{item.capacity}</td>
                    <td className="p-4">{item.interval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 p-6 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
          <h3 className="text-yellow-500 font-bold text-lg mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Önemli Usta Notu
          </h3>
          <p className="text-yellow-200/80">
            OM642 motorlarda yağ seviyesini kesinlikle maksimum çizgisinin üzerine çıkartmayın. DPF rejenerasyonu sırasında 
            yakıt karışması sonucu yağ seviyesi yükselebilir. 229.51 veya 229.52 "Low SPAsh" onayı olmayan yağlar DPF'i tıkar.
          </p>
        </div>
       </div>
    </div>
  );
};

export default TechnicalSpecs;