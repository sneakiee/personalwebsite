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
      meta.setAttribute('content', theme === 'dark' ? '#05060A' : '#E9ECF7')
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
function MoonIcon() {
  return (
    <svg
      className="theme-glyph"
      viewBox="0 0 16 16"
      width="15"
      height="15"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10.7 2.1a5.9 5.9 0 1 0 3.2 10.2 4.8 4.8 0 0 1-3.2-10.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg
      className="theme-glyph"
      viewBox="0 0 16 16"
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="3.1" />
      <path d="M8 1.2v1.5M8 13.3v1.5M1.2 8h1.5M13.3 8h1.5M3.2 3.2l1.1 1.1M11.7 11.7l1.1 1.1M12.8 3.2l-1.1 1.1M4.3 11.7l-1.1 1.1" />
    </svg>
  )
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="control control-theme"
      aria-label={`switch to ${next} theme`}
      title={`switch to ${next} theme`}
    >
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
