import React from "react";
import { useTranslation } from "react-i18next";
import bukoPhoto from "../assets/buko2.png";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="o-mnie"
      className="relative py-20 bg-gray-100 overflow-hidden"
    >
      {/* --- TŁO: ANIMOWANE FALE --- */}
      <svg
        className="absolute left-0 top-0 h-full w-[50%] opacity-45 pointer-events-none z-0"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00BFFF" />
            <stop offset="100%" stopColor="#0077FF" />
          </linearGradient>
        </defs>
        {[...Array(10)].map((_, i) => (
          <path
            key={i}
            d={`M0 ${150 + i * 40} Q200 ${120 + i * 45}, 400 ${150 + i * 40} T800 ${150 + i * 40}`}
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="3"
            opacity={0.6 - i * 0.04}
          >
            <animate
              attributeName="d"
              dur={`${3 + i * 0.8}s`}
              repeatCount="indefinite"
              values={`
                M0 ${150 + i * 40} Q200 ${120 + i * 45}, 400 ${150 + i * 40} T800 ${150 + i * 40};
                M0 ${160 + i * 40} Q200 ${140 + i * 45}, 400 ${160 + i * 40} T800 ${160 + i * 40};
                M0 ${150 + i * 40} Q200 ${120 + i * 45}, 400 ${150 + i * 40} T800 ${150 + i * 40}
              `}
            />
          </path>
        ))}
      </svg>

      {/* --- GŁÓWNA ZAWARTOŚĆ --- */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* 1. KOLUMNA ZE ZDJĘCIEM 
              - Na mobile: order-last (będzie pod tekstem)
              - Na desktopie: order-first (będzie po lewej)
          */}
          <div className="order-last md:order-first flex justify-center md:justify-start">
            <div className="relative w-full max-w-md md:max-w-full">
              {/* Ozdobne koło w tle zdjęcia (opcjonalne) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
              
              <img 
                src={bukoPhoto} 
                alt="Tomek" 
                className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
                style={{ maxHeight: "500px" }} // Ograniczenie wysokości zdjęcia
              />
            </div>
          </div>

          {/* 2. KOLUMNA Z TEKSTEM 
              - Na mobile: order-first (będzie na górze)
              - Na desktopie: order-last (będzie po prawej)
          */}
          <div className="order-first md:order-last space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-bold text-blueDark font-heading">
              {t("about_greeting")}{" "}
              <span className="text-orange-500">{t("about_name")}</span>.
            </h2>

            <h3 className="text-xl lg:text-2xl font-extrabold text-gray-800 leading-relaxed">
              {t("about_p1")}
            </h3>
            <h3 className="text-xl lg:text-2xl font-extrabold text-gray-800 leading-relaxed">
              {t("about_p2")}
            </h3>

            <div className="pt-4">
              <a
                href="#kontakt"
                className="inline-block bg-blueDark text-white px-8 py-4 rounded-xl hover:bg-blueLight transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t("about_cta")}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}