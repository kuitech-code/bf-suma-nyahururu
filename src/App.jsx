import { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import FloatingCall from './components/FloatingCall.jsx'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import HealthTopicsPage from './pages/HealthTopicsPage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import HealthTopicDetailPage from './pages/HealthTopicDetailPage.jsx'

function ScrollToSection() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const sectionId = hash.slice(1)
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <>
      <ScrollToSection />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/health-topics" element={<HealthTopicsPage />} />
        <Route path="/health-topics/:topicId" element={<HealthTopicDetailPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
      <FloatingCall />
    </>
  )
}

export default App
