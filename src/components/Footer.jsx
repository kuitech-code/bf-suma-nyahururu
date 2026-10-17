import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Link className="site-footer__brand" to="/">
          BF Suma Nyahururu
        </Link>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/health-topics">Health Topics</Link>
          <Link to="/#about">About</Link>
          <Link to="/#contact">Contact</Link>
        </nav>

        <p className="site-footer__copyright">
          © {new Date().getFullYear()} BF Suma Nyahururu
        </p>
      </div>
    </footer>
  )
}

export default Footer
