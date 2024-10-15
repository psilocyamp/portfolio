import React from 'react'
import { Code2, User, Briefcase, Mail, Moon, Sun } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
  const { language, toggleLanguage } = useLanguage()
  const { isDarkMode, toggleDarkMode } = useTheme()

  const navItems = {
    es: [
      { href: "#about", icon: User, text: "Sobre mí" },
      { href: "#skills", icon: Code2, text: "Habilidades" },
      { href: "#projects", icon: Briefcase, text: "Proyectos" },
      { href: "#contact", icon: Mail, text: "Contacto" },
    ],
    en: [
      { href: "#about", icon: User, text: "About" },
      { href: "#skills", icon: Code2, text: "Skills" },
      { href: "#projects", icon: Briefcase, text: "Projects" },
      { href: "#contact", icon: Mail, text: "Contact" },
    ]
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-colors duration-300`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <ul className="flex space-x-6">
            {navItems[language].map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className={`flex items-center ${isDarkMode ? 'text-indigo-300 hover:text-indigo-100' : 'text-indigo-600 hover:text-indigo-800'} transition-colors duration-300`}
                >
                  <item.icon className="mr-2" size={20} />
                  <span className="hidden md:inline">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1 rounded ${isDarkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600'} transition-colors duration-300`}
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={toggleDarkMode}
              className={`p-1 rounded ${isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-400'} transition-colors duration-300`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header