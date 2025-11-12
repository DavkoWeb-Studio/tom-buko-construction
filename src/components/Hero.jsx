import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-12 flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #00BFFF 0%, #0099FF 50%, #0044AA 100%)",
      }}
    >
      {/* Delikatny rozświetlający overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-white/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Logo */}
          <div className="w-full md:w-2/5 flex justify-center animate-fade-in-down">
            <div className="bg-white/90 rounded-full p-8 shadow-2xl backdrop-blur-sm">
              <img
                src={logo}
                alt="Tom-Buko Construction Logo"
                className="h-48 w-48 md:h-64 md:w-64"
              />
            </div>
          </div>

          {/* Tekst */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold font-heading text-white mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] animate-fade-in-down">
              Tom-Buko Construction
            </h1>

            <h3
              className="text-3xl lg:text-4xl font-extrabold text-orange-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] mb-6 animate-fade-in-down"
              style={{ animationDelay: "0.2s" }}
            >
              {t("hero_motto")}
            </h3>

            <h3
              className="text-xl lg:text-2xl font-medium text-blue-50/90 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] mb-10 animate-fade-in-down"
              style={{ animationDelay: "0.4s" }}
            >
              {t("hero_description")}
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up">
              <a
                href="tel:+31615541951"
                className="group relative px-8 py-4 bg-orange-500 rounded-full font-bold text-lg text-white overflow-hidden transform transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  📞 {t("hero_cta_call")}
                </span>
                <div className="absolute inset-0 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
              <a
                href="#uslugi"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                {t("hero_cta_check")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
