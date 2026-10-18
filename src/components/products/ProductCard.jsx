import { Link } from 'react-router-dom'

function ProductCard({ product, compact = false }) {
  return (
    <article className={`product-card${compact ? ' product-card--compact' : ''}`}>
      <img
        className="product-card__image"
        src={
          product.image ??
          `${import.meta.env.BASE_URL}images/products/sample-product.png`
        }
        alt={
          product.image
            ? `${product.name} product image`
            : 'Sample BF SUMA products (placeholder image)'
        }
      />
      {!compact && <p className="product-card__category">{product.category}</p>}
      <h2>{product.name}</h2>
      {!compact && (
        <>
          {product.description && (
            <p className="product-card__description">{product.description}</p>
          )}
        </>
      )}

      <Link to={`/products/${product.id}`}>
        {compact ? 'View product' : 'View product details'}
      </Link>
    </article>
  )
}

export default ProductCard
