import { Link } from 'react-router-dom'
import { useLanguage, useTheme, LanguageToggle, ThemeToggle } from '../i18n/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <div className={`min-h-screen ${isDark ? 'bg-neutral-950 text-white' : 'bg-neutral-100 text-black'} flex items-center justify-center px-6 transition-colors`}>
      <div className="max-w-md w-full">
        {/* Back Link + Toggles */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className={`${isDark ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'} transition-colors text-sm`}>
            ← back
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Title */}
          <h1 className="text-2xl font-medium">about</h1>
          
          {/* Bio */}
          <div className={`space-y-4 ${isDark ? 'text-neutral-400' : 'text-neutral-600'} leading-relaxed`}>
            <p>{t('aboutBio1')}</p>
            <p>{t('aboutBio2')}</p>
            <p>{t('aboutBio3')}</p>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h2 className={`text-sm ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>{t('skillsTitle')}</h2>
            <p className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>{t('skills')}</p>
          </div>

          {/* Navigation Links */}
          <nav className={`flex flex-wrap gap-x-6 gap-y-2 text-sm pt-4 border-t ${isDark ? 'border-neutral-900' : 'border-neutral-200'}`}>
            <Link to="/" className={`${isDark ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'} transition-colors`}>home</Link>
            <Link to="/works" className={`${isDark ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'} transition-colors`}>works</Link>
            <Link to="/portfolio" className={`${isDark ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'} transition-colors`}>projects</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}