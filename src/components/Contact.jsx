// src/components/Contact.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  
  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blueDark">{t('contact_title')}</h2>
          <p className="text-xl text-grayMedium mt-2">{t('contact_subtitle')}</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 bg-gradient-hydraulic text-white p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-orange-400">{t('contact_phone_label')}</h3>
              <a href="tel:+31615541951" className="text-3xl font-bold hover:text-white/80 transition-colors">
                +31 6 15541951
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-orange-400">{t('contact_email_label')}</h3>
              <a href="mailto:info@tombuko-construction.nl" className="text-xl hover:text-white/80 transition-colors">
                info@tombuko-construction.nl
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-orange-400">{t('contact_area_label')}</h3>
              <p className="text-xl">{t('contact_area_value')}</p>
            </div>
          </div>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder={t('contact_form_name')} 
              className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-200 border-2 border-transparent focus:border-white focus:bg-white/30 outline-none" 
            />
            <input 
              type="tel" 
              placeholder={t('contact_form_phone')} 
              className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-200 border-2 border-transparent focus:border-white focus:bg-white/30 outline-none" 
            />
            <textarea 
              placeholder={t('contact_form_message')} 
              rows="4" 
              className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-200 border-2 border-transparent focus:border-white focus:bg-white/30 outline-none"
            />
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              {t('contact_form_submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}