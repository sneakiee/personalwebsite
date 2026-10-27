/* eslint-disable react-refresh/only-export-components -- hooks are intentionally co-located with their provider */
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
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.dataset.theme = theme
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#070A18' : '#E9ECF7')
    }
  }, [theme])

  const t = (key) => {
    return translations[language]?.[key] || key
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
  const next = language === 'en' ? 'Tagalog' : 'English'

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="control"
      aria-label={`${language === 'en' ? 'tl' : 'en'} — switch language to ${next}`}
      title={`switch language to ${next}`}
    >
      {language === 'en' ? 'tl' : 'en'}
    </button>
  )
}

// Theme toggle component
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="control"
      aria-label={`switch to ${next} theme`}
      title={`switch to ${next} theme`}
    >
      <span aria-hidden="true">◐</span>
    </button>
  )
}
