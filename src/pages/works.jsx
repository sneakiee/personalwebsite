import { Link } from 'react-router-dom'
import { useTheme, LanguageToggle, ThemeToggle } from '../i18n/LanguageContext'

export default function Works() {
  const { theme } = useTheme()

  const isDark = theme === 'dark'

  const experiences = [
    {
      role: 'software developer',
      company: 'company name',
      period: '2024',
    },
    {
      role: 'full stack developer',
      company: 'startup inc',
      period: '2023',
    },
    {
      role: 'junior developer',
      company: 'agency co',
      period: '2022',
    },
  ]

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
          <h1 className="text-2xl font-medium">experience</h1>
          
          {/* Experience List */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className={`${isDark ? 'text-white group-hover:text-neutral-300' : 'text-black group-hover:text-neutral-600'} transition-colors`}>{exp.role}</p>
                    <p className={`${isDark ? 'text-neutral-500' : 'text-neutral-400'} text-sm`}>{exp.company}</p>
                  </div>
                  <span className={`${isDark ? 'text-neutral-600' : 'text-neutral-400'} text-sm`}>{exp.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Resume */}
          <div className={`pt-4 border-t ${isDark ? 'border-neutral-900' : 'border-neutral-200'}`}>
            <a href="#" className={`${isDark ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'} transition-colors text-sm`}>
              download resume ↓
            </a>
          </div>

          {/* Navigation Links */}
          <nav className={`flex flex-wrap gap-x-6 gap-y-2 text-sm pt-4 border-t ${isDark ? 'border-neutral-900' : 'border-neutral-200'}`}>
            <Link to="/" className={`${isDark ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'} transition-colors`}>home</Link>
            <Link to="/about" className={`${isDark ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'} transition-colors`}>about</Link>
            <Link to="/portfolio" className={`${isDark ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'} transition-colors`}>projects</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
