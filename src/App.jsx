import React, { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  const [language, setLanguage] = useState('es')
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es')
  }

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  }

  return (
    <LanguageProvider value={{ language, toggleLanguage }}>
      <ThemeProvider value={{ isDarkMode, toggleDarkMode }}>
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400'}`}>
          <Header />
          <main className="container mx-auto px-4 py-8 pt-24">
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App