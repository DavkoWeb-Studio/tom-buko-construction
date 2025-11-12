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
      {/* ANIMOWANE FALE PO LEWEJ */}
      <svg
        className="absolute left-0 top-0 h-full w-[50%] opacity-45 pointer-events-none"
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
            d={`M0 ${150 + i * 40} Q200 ${120 + i * 45}, 400 ${
              150 + i * 40
            } T800 ${150 + i * 40}`}
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
                M0 ${150 + i * 40} Q200 ${120 + i * 45}, 400 ${
                150 + i * 40
              } T800 ${150 + i * 40};
                M0 ${160 + i * 40} Q200 ${140 + i * 45}, 400 ${
                160 + i * 40
              } T800 ${160 + i * 40};
                M0 ${150 + i * 40} Q200 ${120 + i * 45}, 400 ${
                150 + i * 40
              } T800 ${150 + i * 40}
              `}
            />
          </path>
        ))}
      </svg>

      {/* Postać */}
      <div
        className="absolute inset-0 bg-no-repeat bg-contain opacity-100"
        style={{
          backgroundImage: `url(${bukoPhoto})`,
          backgroundPosition: "300px center",
        }}
      ></div>

      {/* Treść sekcji */}
      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:block"></div>

          <div className="space-y-6 z-10">
            <h2 className="text-4xl font-bold text-blueDark font-heading">
              {t("about_greeting")}{" "}
              <span className="text-orange-500">{t("about_name")}</span>.
            </h2>

            {/* Tekst jako pogrubione h3 jak w Hero */}
            <h3 className="text-xl lg:text-2xl font-extrabold text-gray-800 leading-relaxed">
              {t("about_p1")}
            </h3>
            <h3 className="text-xl lg:text-2xl font-extrabold text-gray-800 leading-relaxed">
              {t("about_p2")}
            </h3>

            <a
              href="#kontakt"
              className="inline-block bg-blueDark text-white px-6 py-3 rounded-xl hover:bg-blueLight transition-colors font-semibold"
            >
              {t("about_cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
