import { Link } from 'react-router-dom'

function ProductCard({ product, compact = false }) {
  return (
    <article className={`product-card${compact ? ' product-card--compact' : ''}`}>
      <img
        className="product-card__image"
        src={`${import.meta.env.BASE_URL}images/products/sample-product.png`}
        alt="Sample BF SUMA product packaging"
      />
      {!compact && <p className="product-card__category">{product.category}</p>}
      <h2>{product.name}</h2>
      {!compact && (
        <>
          <p className="product-card__price">
            {typeof product.price === 'number'
              ? `KSh ${product.price.toLocaleString('en-KE')}`
              : 'Price'}
          </p>
          {product.packaging && <p>Packaging: {product.packaging}</p>}
        </>
      )}

      <Link to={`/products/${product.id}`}>
        {compact ? 'View product' : 'View product details'}
      </Link>
    </article>
  )
}

export default ProductCard
