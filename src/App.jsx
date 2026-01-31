import { useRoutes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import routes from '~react-pages'
import { LanguageProvider } from './i18n/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </LanguageProvider>
  )
}

function Pages() {
  return useRoutes(routes)
}