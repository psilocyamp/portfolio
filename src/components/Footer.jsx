import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-indigo-700 text-white'
      } py-8`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>
              &copy; 2024 Amapro Perez Garcia.{' '}
              {language === 'es'
                ? 'Todos los derechos reservados.'
                : 'All rights reserved.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
