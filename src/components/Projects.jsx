import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const TechTag = ({ tech }) => {
  const { isDarkMode } = useTheme();
  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-semibold mr-2 mb-2 rounded-full ${
        isDarkMode
          ? 'bg-indigo-700 text-indigo-200'
          : 'bg-indigo-200 text-indigo-700'
      }`}
    >
      {tech}
    </span>
  );
};

const ProjectCard = ({
  title,
  description,
  image,
  demoLink,
  githubLink,
  technologies,
}) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${
        isDarkMode ? 'bg-gray-700' : 'bg-white'
      } rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105`}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3
          className={`text-xl font-semibold ${
            isDarkMode ? 'text-indigo-300' : 'text-indigo-700'
          } mb-2`}
        >
          {title}
        </h3>
        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
          {description}
        </p>
        <div className="mb-4">
          {technologies.map((tech, index) => (
            <TechTag key={index} tech={tech} />
          ))}
        </div>
        <div className="flex justify-between">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center ${
              isDarkMode
                ? 'text-indigo-300 hover:text-indigo-100'
                : 'text-indigo-600 hover:text-indigo-800'
            }`}
          >
            <ExternalLink size={18} className="mr-1" />
            Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center ${
              isDarkMode
                ? 'text-indigo-300 hover:text-indigo-100'
                : 'text-indigo-600 hover:text-indigo-800'
            }`}
          >
            <Github size={18} className="mr-1" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  const projects = {
    es: [
      {
        title: 'HomeBanking',
        description:
          'Una plataforma segura para gestionar cuentas bancarias, realizar transferencias, pedir prestamos administrar tarjetas y relaizar pagos con ella.',
        image: 'https://i.imgur.com/dNnzRgy.png',
        demoLink: 'https://homebankingfront-6n5u.onrender.com/',
        githubLink: 'https://github.com/psilocyamp/homebankingFront',
        technologies: [
          'React',
          'Tailwind CSS',
          'Spring Security',
          'Java',
          'Redux',
          'Spring Boot',
          ' PostgreSQL',
          'JWT',
        ],
      },
      {
        title: 'Centro Cultural',
        description:
          'Plataforma que permite a los usuarios comprar tickets para eventos con asientos numerados, acceder a convenciones y reservar stands para emprendedores.',
          image: 'https://i.imgur.com/yt6yiEH.png',
          demoLink: 'https://passwave.onrender.com/Home',
          githubLink: 'https://github.com/LudwingValecillos/PassWave',
        technologies: ['Vue.js', 'Firebase', 'Vuex', 'PWA', 'Cloud Functions'],
      },
      {
        title: 'Panel de Control del Clima',
        description:
          'Una aplicación interactiva del clima con pronósticos detallados.',
        image: 'https://i.imgur.com/p1a3Cke.png',
        demoLink: 'https://youthful-almeida-eee46f.netlify.app/',
        githubLink: 'https://github.com/psilocyamp/forecast-app',
        technologies: [
          'JavaScript',
          'Weather API',
          'HTML',
          'Bootstrap',
          'Hosting',
          'CSS',
        ],
      },
    ],
    en: [
      {
        title: 'HomeBanking',
        description:
          'A secure platform for managing bank accounts, making transfers, requesting loans, managing cards, and processing payments with them.',
        image: 'https://i.imgur.com/dNnzRgy.png',
        demoLink: 'https://homebankingfront-6n5u.onrender.com/',
        githubLink: 'https://github.com/psilocyamp/homebankingFront',
        technologies: [
          'React',
          'Tailwind CSS',
          'Spring Security',
          'Java',
          'Redux',
          'Spring Boot',
          'PostgreSQL',
          'JWT',
        ],
      },
      {
        title: 'Cultural Center',
        description:
          'A platform that allows users to purchase tickets for events with assigned seating, access conventions, and reserve booths for entrepreneurs.',
        image: 'https://i.imgur.com/yt6yiEH.png',
        demoLink: 'https://passwave.onrender.com/Home',
        githubLink: 'https://github.com/LudwingValecillos/PassWave',
        technologies: [
          'React',
          'Tailwind CSS',
          'Spring Security',
          'Java',
          'Redux',
          'Spring Boot',
          'PostgreSQL',
          'JWT',
        ],
      },
      {
        title: 'Weather App',
        description:
          'An interactive weather application with detailed forecasts.',
        image: 'https://i.imgur.com/p1a3Cke.png',
        demoLink: 'https://youthful-almeida-eee46f.netlify.app/',
        githubLink: 'https://github.com/psilocyamp/forecast-app',
        technologies: [
          'JavaScript',
          'Weather API',
          'HTML',
          'Bootstrap',
          'Hosting',
          'CSS',
        ],
      },
    ],
  };

  return (
    <section
      id="projects"
      className={`py-20 ${
        isDarkMode ? 'bg-gray-900' : 'bg-indigo-100'
      } bg-opacity-80`}
    >
      <div className="container mx-auto px-6">
        <h2
          className={`text-4xl font-bold text-center ${
            isDarkMode ? 'text-indigo-300' : 'text-indigo-700'
          } mb-12`}
        >
          {language === 'es' ? 'Mis Proyectos' : 'My Projects'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[language].map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
