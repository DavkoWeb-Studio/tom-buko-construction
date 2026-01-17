import React from "react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  const services = [
    { icon: "💧", titleKey: "service_1_title", descKey: "service_1_desc" },
    { icon: "🔥", titleKey: "service_2_title", descKey: "service_2_desc" },
    { icon: "🔧", titleKey: "service_3_title", descKey: "service_3_desc" },
    { icon: "🤝", titleKey: "service_4_title", descKey: "service_4_desc" },
  ];

  return (
    <section id="uslugi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Nagłówek sekcji */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blueDark mb-4 relative inline-block">
            {t('services_title')}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-orange-500 rounded-full"></div>
          </h2>
        </div>

        {/* Grid Kart */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 
                         hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Pasek ozdobny na górze */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              {/* Ikona */}
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-3xl mb-6 
                              group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                {service.icon}
              </div>
              
              {/* Tytuł */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">
                {t(service.titleKey)}
              </h3>
              
              {/* Opis */}
              <p className="text-gray-500 leading-relaxed text-sm">
                {t(service.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}