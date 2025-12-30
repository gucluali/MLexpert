import React from 'react';
import { MapPin, Phone, Clock, ShieldCheck, Wrench } from 'lucide-react';

export const ServicesView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in pb-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
          <Wrench className="h-8 w-8 text-blue-600" />
          Premium Servis İstanbul
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Mercedes-Benz W164 ve OM642 motorlarında uzmanlaşmış kadromuzla, orijinal parça garantili bakım ve onarım hizmeti.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Info Card */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-full">
            <h3 className="text-lg font-bold text-slate-800 mb-6 border-b pb-4">İletişim Bilgileri</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600 shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Adres</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    Beysan San. Sit,<br/>
                    Yakuplu, Beylikdüzü / İstanbul
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-xl text-green-600 shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Telefon</h4>
                  <a href="tel:+905373108922" className="text-slate-600 text-sm mt-1 block hover:text-blue-600 hover:underline font-medium transition-colors">
                    +90 537 310 89 22
                  </a>
                  <span className="text-xs text-green-600 mt-1 block">Whatsapp Aktif</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-xl text-amber-600 shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Çalışma Saatleri</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Pzt - Cmt: 08:30 - 19:00<br/>
                    Pazar: Kapalı
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center gap-2 mb-2 text-slate-800 font-semibold">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                    Hizmet Garantisi
                </div>
                <p className="text-xs text-slate-500">
                    Yapılan tüm mekanik onarımlar ve değişen parçalar 1 yıl / 20.000 km işçilik garantisi altındadır.
                </p>
            </div>
          </div>
        </div>

        {/* Map Card */}
        <div className="md:col-span-2">
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 h-full min-h-[400px]">
                <iframe 
                    src="https://maps.google.com/maps?q=Beysan+Sanayi+Sitesi+Beylikdüzü&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, minHeight: '400px', borderRadius: '12px' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Servis Konumu"
                ></iframe>
            </div>
        </div>
      </div>
    </div>
  );
};