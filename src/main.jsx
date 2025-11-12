// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Importujemy naszą konfigurację i18n
import './components/i18n'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Używamy Suspense na wypadek, gdyby tłumaczenia ładowały się asynchronicznie */}
    <React.Suspense fallback="Ładowanie...">
      <App />
    </React.Suspense>
  </React.StrictMode>,
);