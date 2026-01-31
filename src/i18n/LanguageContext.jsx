import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()
const ThemeContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'en'
    }
    return 'en'
  })

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    // Apply font class for Tagalog
    if (language === 'tl') {
      document.body.classList.add('lang-tl')
    } else {
      document.body.classList.remove('lang-tl')
    }
    // Uncomment below for Korean support:
    // document.body.classList.remove('lang-tl', 'lang-ko')
    // if (language === 'tl') {
    //   document.body.classList.add('lang-tl')
    // } else if (language === 'ko') {
    //   document.body.classList.add('lang-ko')
    // }
  }, [language])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const t = (key) => {
    return translations[language][key] || key
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tl' : 'en')
    // Uncomment below for Korean support:
    // setLanguage(prev => {
    //   if (prev === 'en') return 'tl'
    //   if (prev === 'tl') return 'ko'
    //   return 'en'
    // })
  }

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a LanguageProvider')
  }
  return context
}

// Language toggle component
export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
  const { theme } = useTheme()
  
  // Uncomment below for Korean support:
  // const getNextLanguage = () => {
  //   if (language === 'en') return 'tl'
  //   if (language === 'tl') return 'ko'
  //   return 'en'
  // }
  
  return (
    <button 
      onClick={toggleLanguage}
      className={`${theme === 'dark' ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'} transition-colors text-sm`}
    >
      {language === 'en' ? 'tl' : 'en'}
      {/* For Korean support, replace above with: {getNextLanguage()} */}
    </button>
  )
}

// Theme toggle component
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button 
      onClick={toggleTheme}
      className={`${theme === 'dark' ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'} transition-colors text-sm`}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
