import { Link } from 'react-router-dom'
import { useTheme, LanguageToggle, ThemeToggle } from '../i18n/LanguageContext'

export default function Portfolio() {
  const { theme } = useTheme()

  const isDark = theme === 'dark'

  const projects = [
    {
      title: 'hackclubtcg',
      description: 'web-based trading card game for hack club (currently a pack opening simulator)',
      link: 'https://hackclubtcg.netlify.app/',
    },
    {
      title: 'rhythmpad',
      description: 'a macropad designed for music and rhythm games',
      link: 'https://github.com/sneakiee/rhythmpad',
    },
    {
      title: 'pokemon card launcher',
      description: 'launches pokemon cards like its money (its expensive)',
      link: 'https://github.com/sneakiee/pokemon-card-launcher',
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
          <h1 className="text-2xl font-medium">projects</h1>
          
          {/* Projects List */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <a 
                key={index} 
                href={project.link}
                className="block group"
              >
                <p className={`${isDark ? 'text-white group-hover:text-neutral-300' : 'text-black group-hover:text-neutral-600'} transition-colors`}>{project.title}</p>
                <p className={`${isDark ? 'text-neutral-500' : 'text-neutral-400'} text-sm`}>{project.description}</p>
              </a>
            ))}
          </div>

          {/* GitHub */}
          <div className={`pt-4 border-t ${isDark ? 'border-neutral-900' : 'border-neutral-200'}`}>
            <a 
              href="https://github.com/sneakiee?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${isDark ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'} transition-colors text-sm`}
            >
              view more on github →
            </a>
          </div>

          {/* Navigation Links */}
          <nav className={`flex flex-wrap gap-x-6 gap-y-2 text-sm pt-4 border-t ${isDark ? 'border-neutral-900' : 'border-neutral-200'}`}>
            <Link to="/" className={`${isDark ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'} transition-colors`}>home</Link>
            <Link to="/about" className={`${isDark ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'} transition-colors`}>about</Link>
            <Link to="/works" className={`${isDark ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'} transition-colors`}>works</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
