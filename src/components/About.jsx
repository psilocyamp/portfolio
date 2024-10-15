import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  const content = {
    es: {
      title: 'Amparo Perez',
      description:
        '¡Hola! Soy Amparo, desarrolladora Full Stack Java. 👩‍💻 Me apasiona crear soluciones que realmente marquen la diferencia. Desde el inicio de mi carrera en la programación, me ha encantado ver cómo las innovaciones simples pueden mejorar la vida diaria. Disfruto trabajando con metodologías ágiles, participando en todo el proceso desde la idea inicial hasta la implementación. Mi objetivo es desarrollar productos que no solo sean funcionales, sino también agradables y significativos.✨',
      highlights: [
        'Especializado en JavaScript, React, Java, Spring',
        'Experiencia en Tailwind CSS, JWT, Git, GitHub, Vite, Redux, PostgreSQL y Postman',
        'Apasionado por la optimización del rendimiento y la accesibilidad',
        'Comprometida con las mejores prácticas y el aprendizaje continuo, aprendiendo haciendo ("learn by doing")',
      ],
    },
    en: {
      title: 'Amparo Perez',
      description:
        "Hi! I'm Amparo, a Full Stack Java developer. 👩‍💻 I'm passionate about creating solutions that truly make a difference. Since the start of my programming career, I've loved seeing how simple innovations can improve daily life. I enjoy working with agile methodologies, being involved in the entire process from the initial idea to implementation. My goal is to develop products that are not only functional but also delightful and meaningful. ✨ ",
      highlights: [
        'Specialized in JavaScript, React, Java, Spring',
        'Experience with Tailwind CSS, JWT, Git, GitHub, Vite, Redux, PostgreSQL, and Postman',
        'Passionate about performance optimization and accessibility',
        'Committed to best practices and continuous learning, learning by doing ("learn by doing")',
      ],
    },
  };

  return (
    <section
      id="about"
      className={`py-20 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white bg-opacity-80'
      } rounded-lg shadow-lg mb-10`}
    >
      <div className="container mx-auto px-6">
        <h2
          className={`text-4xl font-bold text-center ${
            isDarkMode ? 'text-indigo-300' : 'text-indigo-700'
          } mb-8`}
        >
          {content[language].title}
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img
              src="https://i.imgur.com/1c2aEvy.jpeg"
              alt="My photo"
              className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-indigo-500 shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-10">
            <p
              className={`text-xl ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              } leading-relaxed mb-6`}
            >
              {content[language].description}
            </p>
            <ul
              className={`list-disc list-inside ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {content[language].highlights.map((highlight, index) => (
                <li key={index} className="mb-2">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
