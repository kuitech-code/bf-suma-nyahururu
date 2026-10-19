import { Link } from 'react-router-dom'
import logo from '../assets/logo2.png'
import { DISPLAY_PHONE_NUMBER } from '../data/contact.js'
import SocialLinks from './home/SocialLinks.jsx'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand-block">
          <Link className="site-footer__brand" to="/" aria-label="BF Suma Nyahururu home">
            <img src={logo} alt="BF Suma Nyahururu" />
          </Link>
          <p>
            Supporting your wellness journey right here in Nyahururu and around Kenya. Our clinic is dedicated to bringing world-class healthcare, advanced cellular nutrition and professional health screenings directly to our local community so you can live a vibrant, healthy life.
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Explore BF Suma">
          <h2>Explore</h2>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/health-topics">Health Topics</Link>
          <Link to="/#about">About Us</Link>
        </nav>

        <div className="site-footer__visit">
          <h2>Visit us</h2>
          <p>Mbaria Complex, Kenyatta Road<br />Nyahururu</p>
          <a href={`tel:${DISPLAY_PHONE_NUMBER.replaceAll(' ', '')}`}>
            {DISPLAY_PHONE_NUMBER}
          </a>
            <SocialLinks variant="footer" />
        </div>

        <div className="site-footer__copyright">
          <p>&copy; {new Date().getFullYear()} BF Suma Nyahururu</p>
          <a
            href="https://wa.me/254741194959"
            target="_blank"
            rel="noreferrer"
          >
            Made by KuiTech
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
