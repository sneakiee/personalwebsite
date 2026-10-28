import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LanguageToggle, ThemeToggle } from '../i18n/LanguageContext'
import PiscesMark from './PiscesMark'
import Starfield from './Starfield'

const nav = [
  { to: '/about', label: 'about', index: '01' },
  { to: '/works', label: 'works', index: '02' },
  { to: '/portfolio', label: 'projects', index: '03' },
]

const socials = [
  { href: 'https://github.com/sneakiee', label: 'github' },
  { href: 'https://linkedin.com/in/mikael-a-gomez', label: 'linkedin' },
  { href: 'https://www.youtube.com/@SteelTownPowerRangers', label: 'stpr' },
]

export default function Layout({ title, children }) {
  const pageTitle = title ? `${title} — mikael's website` : "mikael's website"

  useEffect(() => {
    document.title = pageTitle
  }, [pageTitle])

  return (
    <div className="site">
      <div className="page-ambience" aria-hidden="true">
        <Starfield variant="wide" className="ambience-stars ambience-stars-top" />
      </div>

      <a className="skip" href="#main">
        skip to content
      </a>

      <header className="masthead">
        <div className="masthead-inner shell">
          <Link to="/" className="brand">
            <span className="brand-name">
              mikael gomez<span className="brand-dot">.</span>
            </span>
            <span className="brand-meta">design / code</span>
          </Link>

          <nav className="nav" aria-label="Primary">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} className="nav-cell">
                <span className="nav-index">{item.index}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="controls">
            <span className="label coords">43.2557° N / 79.8711° W</span>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main" className="shell" tabIndex={-1}>
        {children}
        <div className="star-band" aria-hidden="true">
          <Starfield variant="wide" className="star-band-field" />
          <Starfield variant="cluster" className="star-band-field star-band-field-c" />
          <Starfield variant="knot" className="star-band-field star-band-field-b" />
        </div>
      </main>

      <footer className="footer">
        <div className="footer-inner shell">
          <div className="footer-panel">
            <div className="footer-contact">
              <span className="tag">contact / signal</span>
              <a className="footer-mail" href="mailto:gomezm9@mcmaster.ca">
                gomezm9@mcmaster.ca <span aria-hidden="true">↗</span>
              </a>
              <ul className="social-row" aria-label="Social links">
                {socials.map((link) => (
                  <li key={link.href}>
                    <a
                      className="social-link"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label} <span aria-hidden="true">↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-pisces">
              <PiscesMark className="footer-pisces-mark" />
              <span className="label">pisces / 00h 49m / +06°</span>
              <span className="label">alrescha / circlet / alpherg</span>
            </div>

            <div className="footer-meta">
              <div>
                <span className="label">origin</span>
                <p className="mono">
                  43.2557° N
                  <br />
                  79.8711° W
                </p>
              </div>
              <div>
                <span className="label">epoch</span>
                <p className="mono">
                  rev. 2026.10
                  <br />
                  hamilton, ontario
                </p>
              </div>
            </div>
          </div>

          <div className="footer-base">
            <span className="label">© {new Date().getFullYear()} mikael gomez</span>
            <span className="label">design &amp; code</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
