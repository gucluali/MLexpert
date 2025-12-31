import React from 'react';
import { AlertCircle, CheckCircle2, Settings } from 'lucide-react';

const EngineSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10"></div>
        {/* OM642 / Mercedes V6 Diesel Representation */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Mercedes-Benz_OM642_DE_30_LA_engine_%282007%29.jpg/1280px-Mercedes-Benz_OM642_DE_30_LA_engine_%282007%29.jpg" 
          onError={(e) => {
            // Fallback if specific wikimedia image has issues hotlinking, revert to high quality car engine placeholder
            e.currentTarget.src = "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1600&auto=format&fit=crop";
          }}
          alt="OM642 Engine Block" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-6 left-6 z-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">OM642 V6 CDI</h2>
          <p className="text-blue-400 font-mono text-sm md:text-base">3.0L TURBO DIESEL | 510-620 NM TORQUE</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Settings className="text-blue-500" /> Technical Architecture
          </h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
              <span><strong>Block:</strong> Aluminium with cast-in grey iron cylinder liners. 72° V-angle.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
              <span><strong>Injection:</strong> Bosch Piezo-electric Common Rail (1600+ bar).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
              <span><strong>Induction:</strong> Variable Nozzle Turbine (VNT) Turbocharger (Garrett GT2056V or similar).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
              <span><strong>Timing:</strong> Double overhead camshafts (DOHC), driven by a duplex chain.</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <AlertCircle className="text-amber-500" /> Known Weak Points
          </h3>
          <div className="space-y-4">
            <div className="bg-slate-900/50 p-3 rounded-lg border-l-4 border-amber-500">
              <h4 className="font-bold text-amber-500 text-sm">Oil Cooler Seals</h4>
              <p className="text-xs text-slate-400 mt-1">
                The infamous "purple seals" degrade, causing massive oil leaks into the V-valley. Requires extensive labor (manifold removal) to fix.
              </p>
            </div>
            <div className="bg-slate-900/50 p-3 rounded-lg border-l-4 border-amber-500">
              <h4 className="font-bold text-amber-500 text-sm">Swirl Flap Motor (M55)</h4>
              <p className="text-xs text-slate-400 mt-1">
                Located under the turbo intake pipe. Oil dripping from the PCV/intake ruins the motor, causing Limp Mode.
              </p>
            </div>
            <div className="bg-slate-900/50 p-3 rounded-lg border-l-4 border-amber-500">
              <h4 className="font-bold text-amber-500 text-sm">Black Death (Injector Seals)</h4>
              <p className="text-xs text-slate-400 mt-1">
                Copper washers fail, allowing carbon buildup around injectors. Needs periodic inspection and re-seating with new bolts/washers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/50">
        <h3 className="text-xl font-bold text-blue-100 mb-4 flex items-center gap-2">
          <CheckCircle2 className="text-blue-500" /> Maintenance Strategy
        </h3>
        <p className="text-slate-300 mb-4">
          The OM642 is capable of 500,000km+ if maintained correctly. The factory 25,000km oil change interval is generally considered too long by experts.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-slate-800 rounded-lg">
            <div className="text-2xl font-bold text-white">10k km</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Oil Change Max</div>
          </div>
          <div className="text-center p-3 bg-slate-800 rounded-lg">
            <div className="text-2xl font-bold text-white">60k km</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Fuel Filter</div>
          </div>
          <div className="text-center p-3 bg-slate-800 rounded-lg">
            <div className="text-2xl font-bold text-white">Every Service</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Drain Fuel Water</div>
          </div>
          <div className="text-center p-3 bg-slate-800 rounded-lg">
            <div className="text-2xl font-bold text-white">Check</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Intake for Oil</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineSection;