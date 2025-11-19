// src/components/Together.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const collaborations = [
  { intermediary: "Tech Mission B.V.", client: "Giesbers" },
  { intermediary: "Tech Mission B.V.", client: "Winkels Techniek" },
  { intermediary: "Volt Detachering B.V.", client: "Vink" },
  { intermediary: "Ruitec", client: "Instaan" },
  { intermediary: "Reduzs", client: "Breman" },
  { intermediary: "Reduzs", client: "MSI Installaties" },
  { intermediary: "Verdo Werk", client: "I.C.D Installaties" },
];

export default function Together() {
  const { t } = useTranslation();

  return (
    <section id="wspolpraca" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Nagłówek sekcji */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blueDark mb-4 font-heading">
            {t('together_title')}
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded mb-6"></div>
          
          {/* Tekst wprowadzający  - TERAZ Z TŁUMACZENIEM  */}
         <h3 className="text-gray-800 font-bold max-w-2xl mx-auto">
  {t('together_intro')}
</h3>
        </div>

        {/* Grid kart */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborations.map((item, index) => (
            <div 
              key={index}
              className="group bg-gray-50 hover:bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300"
            >
              {/* Ikona połączenia */}
              <div className="mb-4 text-orange-500 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform origin-left">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                 </svg>
              </div>

              {/* Agencja / Pośrednik */}
              <div className="mb-3">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                   {t('together_via')}
                </span>
                <h3 className="text-lg font-bold text-blueDark"> {/*POGRUBIONE ✅ */} 
                  {item.intermediary}
                </h3>
              </div>

              {/* Klient docelowy */}
              <div className="pt-3 border-t border-gray-200 group-hover:border-orange-100 transition-colors">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                  {item.client ? t('together_client') : t('together_direct')}
                </span>
                <h3 className="text-xl font-bold text-gray-800"> {/*POGRUBIONE ✅  */}
                  {item.client || "-"}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}