import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { STATS_DATA, REGION_DATA } from '../constants';

const StatsDashboard: React.FC = () => {
  return (
    <div className="p-6 md:p-10 bg-slate-900 min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-2">Global W164 Analitikleri</h2>
      <p className="text-slate-400 mb-8">Dünya genelinde toplanan servis verilerine göre arıza sıklıkları ve araç dağılımı.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Bar Chart: Common Faults */}
        <div className="bg-mercedes-panel rounded-xl p-6 shadow-xl border border-slate-700">
          <h3 className="text-xl font-semibold text-mercedes-silver mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-mercedes-accent rounded-full"></span>
            Kronik Arıza Sıklığı (100 Araç Başına)
          </h3>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={STATS_DATA}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                <XAxis type="number" stroke="#94a3b8" />
                <YAxis dataKey="name" type="category" stroke="#e2e8f0" width={100} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#f1f5f9' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="value" name="Vaka Sayısı" radius={[0, 4, 4, 0]}>
                  {STATS_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart: Regional Distribution */}
        <div className="bg-mercedes-panel rounded-xl p-6 shadow-xl border border-slate-700">
          <h3 className="text-xl font-semibold text-mercedes-silver mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
            W164 Global Pazar Dağılımı
          </h3>
          <div className="h-[350px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={REGION_DATA}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  stroke="#1e293b"
                  strokeWidth={2}
                >
                  {REGION_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#f1f5f9' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Info Card */}
        <div className="lg:col-span-2 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-slate-700 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-mercedes-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Veri Analizi Notu</h4>
              <p className="text-slate-300 mt-2">
                Grafikler, global forumlar ve servis kayıtlarından derlenen yaklaşık verilerdir. W164 kasalarda 
                özellikle 150.000km sonrası <span className="text-red-400 font-bold">Yağ Soğutucu</span> arızasının baskınlığı dikkat çekmektedir.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StatsDashboard;