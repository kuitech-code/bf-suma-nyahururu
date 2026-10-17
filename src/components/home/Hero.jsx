
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">BF Suma Nyahururu</p>
        <h1>
          A brighter way to explore <span>wellness.</span>
        </h1>
        <p className="hero__intro">
          Discover BF Suma products, explore health topics and meet the people behind it all. We are committed to providing high-quality products and services that promote wellness and a healthy lifestyle.
        </p>

        <div className="hero__actions">
          <Link className="hero__button" to="/products">
            Explore products <span aria-hidden="true">→</span>
          </Link>
          <a className="hero__button hero__button--secondary" href="#contact">
            Book a consultation
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <img
          className="hero__product-image"
          src={`${import.meta.env.BASE_URL}images/products/sample-product.png`}
          alt="A selection of BF SUMA product packages"
        />
        <p className="hero__visual-label">
          <span aria-hidden="true">✦</span> Explore our product range
        </p>
      </div>
    </section>
  )
}

export default Hero
