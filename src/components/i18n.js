// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importujemy nasz plik z tłumaczeniami
import { resources } from './translations';

i18n
  // Wykrywanie języka użytkownika
  .use(LanguageDetector)
  // Przekazanie instancji i18n do react-i18next
  .use(initReactI18next)
  // Inicjalizacja i18n
  .init({
    // Nasze tłumaczenia
    resources,
    // Język domyślny, jeśli wykrywanie zawiedzie
    fallbackLng: 'pl',
    // Opcje detekcji języka
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
    },
    interpolation: {
      // React sam dba o bezpieczeństwo (XSS), więc możemy to wyłączyć
      escapeValue: false,
    },
  });

export default i18n;