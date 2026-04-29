"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'EN' | 'HI';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (en: string, hi: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('orgalth_lang') as Language;
      return saved || 'EN';
    }
    return 'EN';
  });

  const toggleLanguage = () => {
    setLanguage(prev => {
      const next = prev === 'EN' ? 'HI' : 'EN';
      localStorage.setItem('orgalth_lang', next);
      return next;
    });
  };

  const t = (en: string, hi: string) => {
    return language === 'EN' ? en : hi;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
