import { Link } from 'react-router-dom'
import { products } from '../../data/product.js'

const featuredProductIds = [
  'micro-o2-cycle-tablets',
  'arthroxtra-tablets',
  'four-in-one-reishi-coffee',
  'nmn-duo-release',
  'youth-essence-facial-cream',
  'probio3-plus-probiotics',
]

function ProductRibbonGroup({ items, duplicate = false }) {
  return (
    <div className="highlights__group" aria-hidden={duplicate || undefined}>
      {items.map((product) => (
        <Link
          className="highlights__product"
          key={product.id}
          to={`/products/${product.id}`}
          tabIndex={duplicate ? -1 : undefined}
        >
          <span className="highlights__product-image-wrap">
            <img src={product.image} alt="" loading="lazy" />
          </span>
          <span className="highlights__product-copy">
            <span className="highlights__product-category">{product.category}</span>
            <span className="highlights__product-name">{product.name}</span>
            <span className="highlights__product-link">View details <span aria-hidden="true">↗</span></span>
          </span>
        </Link>
      ))}
    </div>
  )
}

function HomeHighlights() {
  const featuredProducts = featuredProductIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product) => product?.image)

  return (
    <section
      className="home-section highlights"
      aria-labelledby="highlights-title"
    >
      <div className="highlights__heading">
        <div>
          <p className="highlights__eyebrow"><span aria-hidden="true">✦</span> Product picks</p>
          <h2 id="highlights-title">A few picks to explore</h2>
        </div>
        <Link className="highlights__browse" to="/products">Browse all products <span aria-hidden="true">→</span></Link>
      </div>

      <div className="highlights__marquee" aria-label="Featured products">
        <div className="highlights__track">
          <ProductRibbonGroup items={featuredProducts} />
          <ProductRibbonGroup items={featuredProducts} duplicate />
        </div>
      </div>
    </section>
  )
}

export default HomeHighlights
