import React from 'react';
import PropTypes from 'prop-types';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

const LanguageSwitcher = ({ className = '' }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const availableLanguages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' }
  ];

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  const getCurrentLanguageInfo = () => {
    return availableLanguages.find(lang => lang.code === currentLanguage) || availableLanguages[0];
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`${styles.languageSwitcher} ${className}`}
      aria-label={`Changer la langue vers ${currentLanguage === 'fr' ? 'English' : 'Français'}`}
      title={`Langue actuelle: ${getCurrentLanguageInfo().label}`}
    >
      <div className={styles.languageSwitcherContent}>
        <Globe className={styles.icon} />
        <span className={styles.languageCode}>
          {getCurrentLanguageInfo().flag}
        </span>
      </div>
    </button>
  );
};

LanguageSwitcher.propTypes = {
  className: PropTypes.string
};

export default LanguageSwitcher;

