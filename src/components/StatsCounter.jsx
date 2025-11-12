// src/components/StatsCounter.jsx
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';

export default function StatsCounter() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  const stats = [
    { icon: "📅", valueKey: 'stats_1_value', labelKey: 'stats_1_label', suffix: "+" },
    { icon: "🏢", valueKey: 'stats_2_value', labelKey: 'stats_2_label', suffix: "+" },
    { icon: "⏰", valueKey: 'stats_3_value', labelKey: 'stats_3_label', suffix: "/7" },
    { icon: "✅", valueKey: 'stats_4_value', labelKey: 'stats_4_label', suffix: "%" }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-gray-800 to-gray-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          {t('stats_title')}
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          {t('stats_description')}
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                {isVisible && (
                  <CountUp end={Number(t(stat.valueKey))} suffix={stat.suffix} />
                )}
              </div>
              <p className="text-white text-sm md:text-base">{t(stat.labelKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Counter animation component
function CountUp({ end, suffix }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let current = 0;
    const increment = end / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [end]);
  
  return <>{count}{suffix}</>;
}