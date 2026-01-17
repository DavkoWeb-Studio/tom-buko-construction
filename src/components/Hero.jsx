import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

export default function Hero() {
  const { t } = useTranslation();

  // --- WYBIERZ ZDJĘCIE (Odkomentuj to, które wolisz) ---

  // OPCJA 1 (Domyślna): Nowoczesna kotłownia/rury - jasna, techniczna, widać detal
  const bgImage = "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2070&auto=format&fit=crop";

  // OPCJA 2: Hydraulik przy pracy (klucz francuski, rura) - akcja
  // const bgImage = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop";

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-12 flex items-center justify-center overflow-hidden"
    >
      {/* --- TŁO --- */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed" 
        }}
      >
        {/* NOWY GRADIENT: Ciemny po lewej (pod tekstem), jasny po prawej (zeby widać było hydraulikę) */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/60 to-blue-900/20"></div>
        
        {/* Dodatkowy gradient od dołu, żeby stopka ładnie wyglądała */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      </div>

      {/* --- ZAWARTOŚĆ --- */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Logo */}
          <div className="w-full md:w-2/5 flex justify-center animate-fade-in-down">
            <div className="bg-white/95 rounded-full p-8 shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-500 border-4 border-white/20">
              <img
                src={logo}
                alt="Tom-Buko Construction Logo"
                className="h-48 w-48 md:h-64 md:w-64 drop-shadow-lg"
              />
            </div>
          </div>

          {/* Tekst */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold font-heading text-white mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] animate-fade-in-down">
              Tom-Buko Construction
            </h1>

            <h3
              className="text-3xl lg:text-4xl font-extrabold text-orange-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-6 animate-fade-in-down"
              style={{ animationDelay: "0.2s" }}
            >
              {t("hero_motto")}
            </h3>

            <h3
              className="text-xl lg:text-2xl font-medium text-white leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-10 animate-fade-in-down max-w-2xl"
              style={{ animationDelay: "0.4s" }}
            >
              {t("hero_description")}
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <a
                href="tel:+31615541951"
                className="group relative px-8 py-4 bg-orange-500 rounded-full font-bold text-lg text-white overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-orange-500/40 ring-2 ring-orange-400 ring-offset-2 ring-offset-transparent"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  📞 {t("hero_cta_call")}
                </span>
                <div className="absolute inset-0 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
              <a
                href="#uslugi"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
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