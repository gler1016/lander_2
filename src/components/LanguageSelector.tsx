// LanguageSelector.tsx
import React, { useState, useRef, useEffect } from 'react';
import styles from './LanguageSelector.module.scss';
import { useTheme } from '@/contexts/ThemeContext';

interface Language {
  code: string;
}

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({ code: 'EN' });
  const dropdownRef = useRef<HTMLDivElement>(null);
    const { theme, toggleTheme } = useTheme();
  

  const languages: Language[] = [
    { code: 'EN' },
    { code: 'PO'},
    { code: 'FR' },
    { code: 'DE' },
    { code: 'ES' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className={styles.languageSelector} ref={dropdownRef}>
      <button 
        className={`${styles.trigger} ${theme === "dark" ? styles.lanDark : styles.lanWhite}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedLanguage.code}
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map((language) => (
            <button
              key={language.code}
              className={styles.option}
              onClick={() => handleLanguageSelect(language)}
            >
              <span className={styles.code}>{language.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;