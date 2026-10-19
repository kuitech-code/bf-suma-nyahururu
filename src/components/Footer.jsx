import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { DISPLAY_PHONE_NUMBER } from '../data/contact.js'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand-block">
          <Link className="site-footer__brand" to="/" aria-label="BF Suma Nyahururu home">
            <img src={logo} alt="BF Suma Nyahururu" />
          </Link>
          <p>Supporting your wellness journey, right here in Nyahururu.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Explore BF Suma">
          <h2>Explore</h2>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/health-topics">Health Topics</Link>
          <Link to="/#about">About the clinic</Link>
        </nav>

        <div className="site-footer__visit">
          <h2>Visit us</h2>
          <p>Mbaria Complex, Kenyatta Road<br />Nyahururu</p>
          <a href={`tel:${DISPLAY_PHONE_NUMBER.replaceAll(' ', '')}`}>
            {DISPLAY_PHONE_NUMBER}
          </a>
          <Link className="site-footer__booking" to="/#contact">
            Book an appointment <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <p className="site-footer__copyright">
          &copy; {new Date().getFullYear()} BF Suma Nyahururu
        </p>
      </div>
    </footer>
  )
}

export default Footer
