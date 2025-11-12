// src/components/Services.jsx
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
    <section id="uslugi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blueDark mb-12">{t('services_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card group cursor-pointer p-6">
              <div className="bg-blueLight w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold text-blueDark mb-2">{t(service.titleKey)}</h3>
              <p className="text-grayMedium">{t(service.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}