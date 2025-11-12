// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import plFlag from '../assets/pl.png';
import gbFlag from '../assets/gb.png';
import nlFlag from '../assets/nl.png';

const languages = [
  { code: 'pl', flag: plFlag, name: 'Polski' },
  { code: 'en', flag: gbFlag, name: 'English' },
  { code: 'nl', flag: nlFlag, name: 'Nederlands' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`p-1 rounded-md transition-all duration-300 ${
            i18n.language === lang.code 
              ? 'ring-2 ring-orange-500 scale-110' 
              : 'opacity-60 hover:opacity-100 hover:scale-105'
          }`}
          title={lang.name}
        >
          <img 
            src={lang.flag} 
            alt={lang.name} 
            className="w-7 h-7 rounded object-cover shadow-sm" 
          />
        </button>
      ))}
    </div>
  );
}