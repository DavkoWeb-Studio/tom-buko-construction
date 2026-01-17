import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/logo.png';

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full shadow-md bg-white p-1" />
          <span className={`font-bold text-xl md:text-2xl ${scrolled ? 'text-blue-900' : 'text-white drop-shadow-lg'}`}>
            Tom-Buko Construction
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8">
            {navLinks.map(link => (
              <li key={link.key}>
                <a href={link.href} className={`font-medium text-lg transition hover:text-orange-500 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
          <a href="tel:+31615541951" className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition shadow-lg">
            📞 +31 6 15541951
          </a>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 lg:hidden">
          <LanguageSwitcher /> {/* ZAWSZE WIDOCZNE */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`${scrolled ? 'text-gray-800' : 'text-white'}`}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden bg-white shadow-2xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="py-4">
          {navLinks.map(link => (
            <li key={link.key}>
              <a href={link.href} onClick={() => setMobileMenuOpen(false)} className="block px-6 py-4 text-lg font-medium text-gray-800 hover:bg-orange-50 hover:text-orange-600">
                {t(link.key)}
              </a>
            </li>
          ))}
          <li className="px-6 py-4 border-t">
            <a href="tel:+31615541951" className="text-xl font-bold text-orange-600">📞 +31 6 15541951</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}