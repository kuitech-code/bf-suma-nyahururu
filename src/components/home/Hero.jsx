import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import clinicShelves from '../../assets/clinic/clinic-shelves.jpeg'
import clinicCounter from '../../assets/clinic/clinic-counter.jpeg'
import clinicOwnerEvent from '../../assets/clinic/clinic-owner-event.jpeg'
import clinicTeam from '../../assets/clinic/Team.jpg'

const heroSlides = [
  {
    image: clinicShelves,
    alt: 'Wellness products displayed on shelves at the clinic',
    label: 'A welcoming place for your wellness journey',
    tone: 'green',
  },
  {
    image: clinicCounter,
    alt: 'The Suma Health and Wellness clinic counter and product display',
    label: 'Visit us in Nyahururu',
    tone: 'blue',
  },
  {
    image: clinicOwnerEvent,
    alt: 'Suma Health and Wellness representative at a professional event',
    label: 'Meet the people behind Suma Nyahururu',
    tone: 'pink',
  },
  {
    image: clinicTeam,
    alt: 'The Suma Health and Wellness team outside the Nyahururu clinic',
    label: 'A welcoming team in Nyahururu',
    tone: 'orange',
  },
]

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (reduceMotion.matches) return undefined

    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className={`hero hero--${heroSlides[activeSlide].tone}`}>
      <div className="hero__content">
        <p className="hero__eyebrow hero__eyebrow--brand">Suma Health and Wellness</p>
        <h1>
          Get screened for only <span>KSh 1,500</span>
        </h1>
        <p className="hero__intro">
          Prioritize your well-being with a health screening at Suma Health and Wellness in Nyahururu, and take the first step toward a healthier, more vibrant life.
          Our most accurate machine QRMA TECH is always available for full body check up
        </p>

        <div className="hero__actions">
          <Link className="hero__button" to="/#contact">
            Book a screening <span aria-hidden="true">→</span>
          </Link>
          <Link className="hero__button hero__button--secondary" to="/products">
            Explore products
          </Link>
        </div>
      </div>

      <div className="hero__showcase" aria-label="Suma Health and Wellness clinic photos">
        <div className="hero__slides">
          {heroSlides.map((slide, index) => (
            <figure
              className={`hero__slide${index === activeSlide ? ' is-active' : ''}`}
              key={slide.image}
              aria-hidden={index !== activeSlide}
            >
              <img src={slide.image} alt={slide.alt} />
              <figcaption>{slide.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="hero__slide-controls" aria-label="Choose a clinic photo">
          {heroSlides.map((slide, index) => (
            <button
              className={`hero__slide-dot${index === activeSlide ? ' is-active' : ''}`}
              key={slide.image}
              type="button"
              aria-label={`Show photo ${index + 1}: ${slide.label}`}
              aria-pressed={index === activeSlide}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
