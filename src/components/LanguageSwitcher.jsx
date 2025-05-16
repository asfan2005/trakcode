import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ small = false }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Save language preference to localStorage
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <div className="flex items-center space-x-1">
      <button
        className={`${small ? 'px-1 py-0.5 text-[10px]' : 'px-1.5 py-0.5 text-xs xl:text-sm'} rounded-sm font-medium transition-all duration-200 min-h-0 ${
          currentLanguage === 'en' ? 'bg-yellow-400 text-blue-900' : 'text-white hover:text-yellow-400'
        }`}
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={`${small ? 'px-1 py-0.5 text-[10px]' : 'px-1.5 py-0.5 text-xs xl:text-sm'} rounded-sm font-medium transition-all duration-200 min-h-0 ${
          currentLanguage === 'uz' ? 'bg-yellow-400 text-blue-900' : 'text-white hover:text-yellow-400'
        }`}
        onClick={() => changeLanguage('uz')}
        aria-label="Switch to Uzbek"
      >
        UZ
      </button>
    </div>
  );
};

export default LanguageSwitcher; 