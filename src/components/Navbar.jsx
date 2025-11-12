// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

// Zmieniona ścieżka
import logo from '../assets/logo.png';

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-3">
          <div className="bg-white p-1 rounded-full shadow-sm"><img src={logo} alt="Tom-Buko Construction Logo" className="h-10 w-10" /></div>
          <span className={`font-bold text-xl md:text-2xl font-heading transition-colors ${scrolled ? 'text-blueDark' : 'text-white'}`}>Tom-Buko Construction</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map(link => (
              <li key={link.key}><a href={link.href} className={`font-medium transition-colors hover:text-orange-500 ${scrolled ? 'text-gray-700' : 'text-white'}`}>{t(link.key)}</a></li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
        <a href="tel:+31615541951" className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-all duration-300 ${scrolled ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-white/90 text-blueDark hover:bg-white'}`}>📞 +31 6 15541951</a>
        <div className="flex md:hidden items-center gap-4">
          <LanguageSwitcher />
          <button className={`p-2 rounded-md ${scrolled ? 'text-blueDark' : 'text-white'}`}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m4 6h-16" /></svg></button>
        </div>
      </div>
    </nav>
  );
}