import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

const SkillIcon = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-12 h-12 object-contain" />
)

const Skills = () => {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()

  const skills = [
    { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'Spring', icon: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg' },
    { name: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
    { name: 'JWT', icon: 'https://jwt.io/img/pic_logo.svg' },
    { name: 'Git', icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
    { name: 'GitHub', icon: 'https://www.vectorlogo.zone/logos/github/github-icon.svg' },
    { name: 'Vite', icon: 'https://vitejs.dev/logo.svg' },
    { name: 'Redux', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg' },
    { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  ]

  return (
    <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white bg-opacity-80'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center ${isDarkMode ? 'text-indigo-300' : 'text-indigo-700'} mb-12`}>
          {language === 'es' ? 'Mis Habilidades' : 'My Skills'}
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className={`flex flex-col items-center p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-md transition-transform duration-300 hover:scale-110`}>
              <SkillIcon src={skill.icon} alt={skill.name} />
              <span className={`mt-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills