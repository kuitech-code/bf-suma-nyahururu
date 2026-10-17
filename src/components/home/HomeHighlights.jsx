import { Link } from 'react-router-dom'

function HomeHighlights() {
  return (
    <section
      className="home-section highlights"
      aria-labelledby="highlights-title"
    >
      <p className="highlights__eyebrow">Explore BF Suma</p>
      <h2 id="highlights-title">Discover products and health topics</h2>

      <div className="highlights__grid">
        <article className="highlights__card">
          <h3>Products</h3>
          <p>Browse products available through BF Suma Nyahururu.</p>
          <Link className="highlights__link" to="/products">
            Explore products
          </Link>
        </article>

        <article className="highlights__card">
          <h3>Health Topics</h3>
          <p>Explore health topics featured by the clinic.</p>
          <Link className="highlights__link" to="/health-topics">
            Explore health topics
          </Link>
        </article>
      </div>
    </section>
  )
}

export default HomeHighlights
