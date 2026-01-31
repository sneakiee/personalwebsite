import { Link } from 'react-router-dom'
import { useLanguage, useTheme, LanguageToggle, ThemeToggle } from '../i18n/LanguageContext'

export default function Home() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <div className={`min-h-screen ${isDark ? 'bg-neutral-950 text-white' : 'bg-neutral-100 text-black'} flex items-center justify-center px-6 transition-colors`}>
      <div className="max-w-md w-full">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Name + Toggles */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-medium">mikael gomez</h1>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
          
          {/* Bio */}
          <div className={`space-y-4 ${isDark ? 'text-neutral-400' : 'text-neutral-600'} leading-relaxed`}>
            <p>{t('bio1')}</p>
            <p>{t('bio2')}</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link to="/about" className={`${isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-black'} transition-colors`}>about</Link>
            <Link to="/works" className={`${isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-black'} transition-colors`}>works</Link>
            <Link to="/portfolio" className={`${isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-black'} transition-colors`}>projects</Link>
          </nav>

          {/* Social Links */}
          <div className={`flex flex-wrap gap-x-6 gap-y-2 text-sm pt-4 border-t ${isDark ? 'border-neutral-900' : 'border-neutral-200'}`}>
            <a href="https://github.com/sneakiee" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'} transition-colors`}>
              github
            </a>
            <a href="https://linkedin.com/in/mikael-a-gomez" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'} transition-colors`}>
              linkedin
            </a>
            <a href="mailto:gomezm9@mcmaster.ca" className={`${isDark ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'} transition-colors`}>
              email
            </a>
            <a href="https://www.youtube.com/@SteelTownPowerRangers" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'} transition-colors`}>
              stpr
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}