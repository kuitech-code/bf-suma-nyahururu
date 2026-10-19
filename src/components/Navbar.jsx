import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo2.png'
import SocialLinks from './home/SocialLinks.jsx'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [headerHidden, setHeaderHidden] = useState(false)
    const navbarRef = useRef(null)

  function closeMenu() {
    setMenuOpen(false)
  }

  useEffect(() => {
    let previousScrollY = window.scrollY

    function handleScroll() {
      const currentScrollY = window.scrollY
      const scrollingDown = currentScrollY > previousScrollY + 5
      const scrollingUp = currentScrollY < previousScrollY - 5

      if (currentScrollY < 80 || scrollingUp) {
        setHeaderHidden(false)
      } else if (scrollingDown) {
        setHeaderHidden(true)
        setMenuOpen(false)
      }

      previousScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    function handlePointerDown(event) {
      if (!navbarRef.current?.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [menuOpen])

  function linkClassName({ isActive }) {
    return `navbar__link${isActive ? ' navbar__link--active' : ''}`
  }

  return (
      <header
        ref={navbarRef}
        className={`site-header${headerHidden ? ' site-header--hidden' : ''}`}
      >
        <div className="navbar__socialbar">
          <div className="navbar__socialbar-inner">
            <SocialLinks variant="top" />
          </div>
        </div>
        <nav className="navbar" aria-label="Main navigation">
        <NavLink
          className="navbar__brand"
          to="/"
          aria-label="Suma Health and Wellness home"
          onClick={closeMenu}
        >
          <img className="navbar__logo" src={logo} alt="" />
          <span className="navbar__brand-name">and wellness</span>
        </NavLink>

        <button
          className="navbar__toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar__icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <div
          className={`navbar__menu${menuOpen ? ' navbar__menu--open' : ''}`}
          id="primary-navigation"
        >
          <NavLink to="/" end className={linkClassName} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/products" className={linkClassName} onClick={closeMenu}>
            Products
          </NavLink>
          <NavLink to="/health-topics" className={linkClassName} onClick={closeMenu}>
            Health Topics
          </NavLink>

          <Link to="/#about" className="navbar__link" onClick={closeMenu}>
            About
          </Link>

          <Link to="/#contact" className="navbar__cta" onClick={closeMenu}>
            Book a Consultation
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
