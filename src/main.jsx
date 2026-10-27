import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App.jsx'

const legacyRoute = window.location.hash.slice(1)

if (legacyRoute.startsWith('/')) {
  const anchorIndex = legacyRoute.indexOf('#')
  const pathname = anchorIndex === -1 ? legacyRoute : legacyRoute.slice(0, anchorIndex)
  const anchor = anchorIndex === -1 ? '' : legacyRoute.slice(anchorIndex)
  const route = pathname ? `/${pathname}` : '/'

  window.history.replaceState(
    null,
    '',
    `${route}${window.location.search}${anchor}`,
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)