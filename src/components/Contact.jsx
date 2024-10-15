import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const ContactLink = ({ icon: Icon, label, url }) => {
  const { isDarkMode } = useTheme();
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center ${
        isDarkMode
          ? 'text-indigo-300 hover:text-indigo-100'
          : 'text-indigo-600 hover:text-indigo-800'
      } transition duration-300 transform hover:scale-105`}
    >
      <Icon className="mr-2" size={24} />
      <span className="text-lg font-medium">{label}</span>
    </a>
  );
};

const Contact = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  const contactLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/psilocyamp' },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amparo-p%C3%A9rez/',
    },
    {
      icon: FileText,
      label: 'CV',
      url: 'https://www.flipsnack.com/A66C8BAA9F7/amparoperezgarciafullstacken/full-view.html',
    },
    { icon: Mail, label: 'Email', url: 'mailto:ampienmonte@gmail.com' },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white bg-opacity-80'
      } rounded-lg shadow-lg`}
    >
      <div className="container mx-auto px-6">
        <h2
          className={`text-4xl font-bold text-center ${
            isDarkMode ? 'text-indigo-300' : 'text-indigo-700'
          } mb-12`}
        >
          {language === 'es' ? 'Contáctame' : 'Contact Me'}
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {contactLinks.map((link, index) => (
            <ContactLink key={index} {...link} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p
            className={`text-lg ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            {language === 'es'
              ? '¡Estoy siempre abierto a nuevas oportunidades y colaboraciones!'
              : "I'm always open to new opportunities and collaborations!"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
