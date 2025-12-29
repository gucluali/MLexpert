import React from 'react';
import { OM642_SPECS, View } from '../types';
import { ArrowRight, Activity, Droplet, ShieldCheck } from 'lucide-react';

interface HomeViewProps {
    onNavigate: (view: View) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl text-white">
        {/* Background Image: 2007 Mercedes-Benz ML 320 CDI (W164) */}
        <div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/2006-2008_Mercedes-Benz_ML_320_%28W164%29_CDI_luxury_wagon_%282011-11-17%29_01.jpg/1920px-2006-2008_Mercedes-Benz_ML_320_%28W164%29_CDI_luxury_wagon_%282011-11-17%29_01.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        
        <div className="relative p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center min-h-[400px]">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Mercedes-Benz <span className="text-blue-500">W164</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-8">
            OM642 Motor Bakım, Onarım ve Teknik Bilgi Bankası. 
            AI destekli asistan ile aracınızın dilinden anlayın.
          </p>
          <button 
            onClick={() => onNavigate(View.AI_ASSISTANT)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg border border-blue-500/50"
          >
            Sorununu Anlat <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                    <Activity className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Motor Performansı</h3>
            </div>
            <div className="space-y-2 text-slate-600">
                <div className="flex justify-between border-b pb-1">
                    <span>Motor Kodu</span>
                    <span className="font-medium text-slate-900">OM642 DE 30 LA</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                    <span>Hacim</span>
                    <span className="font-medium text-slate-900">{OM642_SPECS.displacement}</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                    <span>Güç</span>
                    <span className="font-medium text-slate-900">{OM642_SPECS.power}</span>
                </div>
                 <div className="flex justify-between">
                    <span>Tork</span>
                    <span className="font-medium text-slate-900">{OM642_SPECS.torque}</span>
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
                    <Droplet className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Sıvılar & Kapasite</h3>
            </div>
            <div className="space-y-3 text-slate-600">
                 <p className="text-sm">
                    Bu motorun uzun ömürlü olması için doğru yağ kullanımı kritiktir. DPF sisteminin tıkanmaması için Low SAPS yağ kullanın.
                 </p>
                 <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <span className="block text-xs text-slate-500 uppercase font-bold">Motor Yağı</span>
                    <span className="font-mono text-slate-900 font-semibold text-lg">{OM642_SPECS.oilSpec}</span>
                 </div>
                 <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <span className="block text-xs text-slate-500 uppercase font-bold">Kapasite</span>
                    <span className="font-mono text-slate-900 font-semibold text-lg">{OM642_SPECS.oilCapacity}</span>
                 </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 rounded-xl text-green-600">
                    <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Hızlı Erişim</h3>
            </div>
            <div className="space-y-3">
                <button onClick={() => onNavigate(View.CODES)} className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors flex justify-between items-center group">
                    <span className="font-medium text-slate-700">Arıza Kodu Sorgula</span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
                </button>
                <button onClick={() => onNavigate(View.FAULTS)} className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors flex justify-between items-center group">
                    <span className="font-medium text-slate-700">Kronik Sorunlar</span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
                </button>
                 <button onClick={() => onNavigate(View.MAINTENANCE)} className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors flex justify-between items-center group">
                    <span className="font-medium text-slate-700">Bakım Periyotları</span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};