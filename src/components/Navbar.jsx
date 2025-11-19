// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/logo.png';

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // <--- TO DODAŁEM

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', key: 'nav_start' },
    { href: '#uslugi', key: 'nav_uslugi' },
    { href: '#o-mnie', key: 'nav_o_mnie' },
    { href: '#wspolpraca', key: 'nav_wspolpraca' },
    { href: '#kontakt', key: 'nav_kontakt' },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 
        transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-white/10 py-4'
        }
      `}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <div className="bg-white p-1 rounded-full shadow-sm">
            <img src={logo} alt="Tom-Buko Construction Logo" className="h-10 w-10" />
          </div>
          <span
            className={`font-bold text-xl md:text-2xl font-heading transition-colors ${
              scrolled ? 'text-blueDark' : 'text-white'
            }`}
          >
            Tom-Buko Construction
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map(link => (
              <li key={link.key}>
                <a
                  href={link.href}
                  className={`font-medium transition-colors hover:text-orange-500 ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)} // zamyka menu po kliknięciu (na wszelki wypadek)
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>

        {/* Phone number - desktop only */}
        <a
          href="tel:+31615541951"
          className={`hidden lg:flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
            scrolled
              ? 'bg-orange-500 text-white hover:bg-orange-600'
              : 'bg-white/90 text-blueDark hover:bg-white'
          }`}
        >
          📞 +31 6 15541951
        </a>

        {/* Mobile - przełącznik języka + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} // <--- WAŻNE
            className={`p-2 rounded-md transition-colors ${
              scrolled ? 'text-blueDark' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? (
              // X kiedy otwarte
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // hamburger kiedy zamknięte
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILNE MENU - pokazuje się pod navbar kiedy otwarte */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col py-4">
          {navLinks.map(link => (
            <li key={link.key}>
              <a
                href={link.href}
                onClick={() => setMobileMenuOpen(false)} // zamyka po kliknięciu
                className="block px-6 py-4 text-lg font-medium text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                {t(link.key)}
              </a>
            </li>
          ))}
          {/* Telefon w menu mobilnym - opcjonalnie */}
          <li className="border-t border-gray-200">
            <a
              href="tel:+31615541951"
              className="block px-6 py-5 text-lg font-bold text-orange-600 hover:bg-orange-50"
            >
              📞 +31 6 15541951
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}