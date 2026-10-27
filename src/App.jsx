import { useEffect } from 'react'
import { useLocation, useRoutes, BrowserRouter } from 'react-router-dom'
import routes from '~react-pages'
import { LanguageProvider } from './i18n/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Pages />
      </BrowserRouter>
    </LanguageProvider>
  )
}

function Pages() {
  return useRoutes(routes)
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
