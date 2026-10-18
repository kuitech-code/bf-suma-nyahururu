import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import clinicShelves from '../../assets/clinic/clinic-shelves.jpeg'
import clinicCounter from '../../assets/clinic/clinic-counter.jpeg'
import clinicOwnerEvent from '../../assets/clinic/clinic-owner-event.jpeg'

const heroSlides = [
  {
    image: clinicShelves,
    alt: 'BF Suma products displayed on shelves at the clinic',
    label: 'A welcoming place for your wellness journey',
    tone: 'green',
  },
  {
    image: clinicCounter,
    alt: 'The BF Suma clinic counter and product display',
    label: 'Visit us in Nyahururu',
    tone: 'blue',
  },
  {
    image: clinicOwnerEvent,
    alt: 'BF Suma representative at a professional event',
    label: 'Meet the people behind BF Suma',
    tone: 'pink',
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
        <p className="hero__eyebrow">BF Suma Wellness Clinic</p>
        <h1>
          Get screened for only <span>KSh 1,500</span>
        </h1>
        <p className="hero__intro">
          Prioritize Your Well-being: Book a Comprehensive Health Screening at BF Suma Wellness Clinic Nyahururu, and Take the First Step Toward a Healthier, More Vibrant Life.
        </p>

        <div className="hero__actions">
          <a className="hero__button" href="#contact">
            Book a screening <span aria-hidden="true">→</span>
          </a>
          <Link className="hero__button hero__button--secondary" to="/products">
            Explore products
          </Link>
        </div>
      </div>

      <div className="hero__showcase" aria-label="BF Suma clinic photos">
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
