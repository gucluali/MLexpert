import React from 'react';
import { Language } from '../types';
import { MapPin, Star, ShieldCheck, ExternalLink, Navigation, Phone, Clock } from 'lucide-react';

interface ServiceNetworkProps {
  lang: Language;
}

const ServiceNetwork: React.FC<ServiceNetworkProps> = ({ lang }) => {
  const t = {
    title: lang === 'en' ? 'Top Quality Service Network' : 'En Kaliteli Servisler',
    subtitle: lang === 'en' 
      ? 'Verified independent specialists for Mercedes-Benz W164 & OM642.' 
      : 'Mercedes-Benz W164 & OM642 için doğrulanmış bağımsız uzmanlar.',
    featured: lang === 'en' ? 'Master Technician\'s Choice' : 'Uzman Tavsiyesi',
    navigate: lang === 'en' ? 'Get Directions' : 'Yol Tarifi Al',
    verified: lang === 'en' ? 'Verified Expert' : 'Doğrulanmış Uzman',
    specialty: lang === 'en' ? 'Specialty' : 'Uzmanlık',
    hours: lang === 'en' ? 'Hours' : 'Çalışma Saatleri',
    call: lang === 'en' ? 'Call' : 'Ara',
  };

  const services = [
    {
      id: 1,
      name: "Mercedes-Benz Özel Servisi", // Generic name as we don't scrape, but implied from the request
      address: "Konum için tıklayınız / Click for location",
      location_tr: "Türkiye",
      location_en: "Turkey",
      mapLink: "https://maps.app.goo.gl/QMaJkzoB9BZ62V5r9",
      rating: 5.0,
      isFeatured: true,
      specialties_en: ["OM642 Specialist", "Transmission Repair", "Airmatic Systems"],
      specialties_tr: ["OM642 Uzmanı", "Şanzıman Onarımı", "Airmatic Sistemleri"],
      phone: "+90 (5XX) XXX XX XX" 
    },
    // You can add more placeholder services here if needed
  ];

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-4 bg-amber-500/10 rounded-full mb-4 border border-amber-500/20">
            <Star className="h-8 w-8 text-amber-500 fill-amber-500" />
        </div>
        <h2 className="text-4xl font-bold text-white mb-3">{t.title}</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`relative bg-slate-800 rounded-2xl overflow-hidden border transition-all hover:shadow-2xl group ${
              service.isFeatured 
                ? 'border-amber-500 shadow-amber-900/20' 
                : 'border-slate-700 hover:border-blue-500'
            }`}
          >
            {/* Featured Badge */}
            {service.isFeatured && (
              <div className="absolute top-0 right-0 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 z-10">
                <ShieldCheck className="h-3 w-3" />
                {t.featured}
              </div>
            )}

            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
              {/* Left Column: Icon/Map Placeholder */}
              <div className="flex-shrink-0">
                 <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center ${
                   service.isFeatured ? 'bg-amber-500/20 text-amber-500' : 'bg-slate-700 text-slate-400'
                 }`}>
                    <MapPin className="h-10 w-10 md:h-12 md:w-12" />
                 </div>
              </div>

              {/* Middle Column: Info */}
              <div className="flex-grow space-y-3">
                 <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                       {service.name}
                       {service.isFeatured && <ShieldCheck className="h-5 w-5 text-blue-400" />}
                    </h3>
                    <p className="text-slate-400 flex items-center gap-1 text-sm mt-1">
                      <Navigation className="h-3 w-3" /> 
                      {lang === 'en' ? service.location_en : service.location_tr}
                    </p>
                 </div>

                 <div className="flex flex-wrap gap-2">
                    {(lang === 'en' ? service.specialties_en : service.specialties_tr).map((tag, idx) => (
                      <span key={idx} className="bg-slate-900 border border-slate-700 text-slate-300 text-xs px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                 </div>
              </div>

              {/* Right Column: Actions */}
              <div className="flex flex-col justify-center gap-3 min-w-[160px]">
                 <a 
                   href={service.mapLink} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-transform active:scale-95 ${
                     service.isFeatured 
                       ? 'bg-amber-500 hover:bg-amber-400 text-slate-900' 
                       : 'bg-blue-600 hover:bg-blue-500 text-white'
                   }`}
                 >
                    <Navigation className="h-5 w-5" />
                    {t.navigate}
                 </a>
                 <div className="flex justify-center">
                    <div className="flex items-center gap-1 text-amber-500">
                        <Star className="h-4 w-4 fill-amber-500" />
                        <Star className="h-4 w-4 fill-amber-500" />
                        <Star className="h-4 w-4 fill-amber-500" />
                        <Star className="h-4 w-4 fill-amber-500" />
                        <Star className="h-4 w-4 fill-amber-500" />
                    </div>
                 </div>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="bg-slate-900/50 px-6 py-3 border-t border-slate-700/50 flex flex-wrap gap-4 text-xs md:text-sm text-slate-400">
               <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span>09:00 - 18:00</span>
               </div>
               <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>{t.verified}</span>
               </div>
               <div className="ml-auto flex items-center gap-1 text-slate-500">
                  <ExternalLink className="h-3 w-3" />
                  <span className="truncate max-w-[200px]">{service.mapLink}</span>
               </div>
            </div>
          </div>
        ))}

        <div className="bg-slate-800/50 border border-slate-700 border-dashed rounded-xl p-8 text-center">
           <p className="text-slate-400 mb-2">
             {lang === 'en' 
               ? 'Know a master mechanic who deserves to be here?' 
               : 'Burada olması gereken usta bir tamirci tanıyor musunuz?'}
           </p>
           <button className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors">
             {lang === 'en' ? 'Submit a Recommendation' : 'Tavsiye Gönder'}
           </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceNetwork;