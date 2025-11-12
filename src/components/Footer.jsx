// src/components/Footer.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import logo from '../assets/logo.png';

export default function Footer() {
  const { t } = useTranslation();
  
  const navLinks = [
    { href: '#o-mnie', key: 'nav_o_mnie' },
    { href: '#uslugi', key: 'nav_uslugi' },
    { href: '#wspolpraca', key: 'nav_wspolpraca' },
    { href: '#kontakt', key: 'nav_kontakt' }
  ];
  
  const specLinks = [
    'footer_spec_1',
    'footer_spec_2',
    'footer_spec_3',
    'footer_spec_4'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Kolumna 1: Logo i motto */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Tom-Buko Construction" className="h-10 w-10 bg-white p-1 rounded-full" />
              <span className="text-2xl font-bold">Tom-Buko Construction</span>
            </div>
            <p className="text-gray-400">{t('footer_motto')}</p>
          </div>
          
          {/* Kolumna 2: Nawigacja */}
          <div>
            <h4 className="font-bold mb-4">{t('footer_nav_title')}</h4>
            <ul className="space-y-2 text-gray-400">
              {navLinks.map(link => (
                <li key={link.key}>
                  <a href={link.href} className="hover:text-white transition">
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Kolumna 3: Specjalizacje */}
          <div>
            <h4 className="font-bold mb-4">{t('footer_spec_title')}</h4>
            <ul className="space-y-2 text-gray-400">
              {specLinks.map(key => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
          </div>
          
          {/* Kolumna 4: Kontakt */}
          <div>
            <h4 className="font-bold mb-4">{t('footer_contact_title')}</h4>
            <p className="text-2xl font-bold text-orange-400">
              <a href="tel:+31615541951">+31 6 15541951</a>
            </p>
            <p className="text-gray-400 mt-2">{t('footer_contact_cta')}</p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} {t('footer_copyright')}
        </div>
      </div>
    </footer>
  );
}