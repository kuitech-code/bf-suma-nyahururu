import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/products/ProductCard.jsx'
import { products } from '../data/product'
import '../styles/products.css'

function ProductDetailPage() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)

  if (!product) {
    return (
      <main className="products-page">
        <section className="products-page__intro">
          <h1>Product not found</h1>
          <Link to="/products">Back to products</Link>
        </section>
      </main>
    )
  }

  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 3)

  const formattedPrice =
    typeof product.price === 'number'
      ? `KSh ${product.price.toLocaleString('en-KE')}`
      : null
  const activeIngredients =
    product.activeIngredients ?? '[Active ingredients]'
  const productClaims =
    product.claims ?? '[Product claims]'
  const productCaution =
    product.caution ?? '[Caution to be confirmed, if applicable]'
  const inquiryMessage = formattedPrice
    ? `Hello, I'm interested in ${product.name}. The listed price is ${formattedPrice}. Could you please confirm availability?`
    : `Hello, I'm interested in ${product.name}. Could you please share its current price and availability?`
  const whatsappUrl = `https://wa.me/254724708274?text=${encodeURIComponent(inquiryMessage)}`

  return (
    <main className="products-page">
      <section className="products-page__intro product-detail">
        <img
          className="product-detail__image"
          src={`${import.meta.env.BASE_URL}images/products/sample-product.png`}
          alt="Sample BF SUMA product packaging"
        />

        <div className="product-detail__info">
          <p className="products-page__eyebrow">BF Suma Nyahururu</p>
          <p>{product.category}</p>
          <h1>{product.name}</h1>

          <p className="product-detail__price">
            {formattedPrice ?? 'Price'}
          </p>

          {product.packaging && <p>Packaging: {product.packaging}</p>}

          <section className="product-detail__section">
            <h2>Active ingredients</h2>
            {Array.isArray(activeIngredients) ? (
              <ul>
                {activeIngredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            ) : (
              <p>{activeIngredients}</p>
            )}
          </section>

          <section className="product-detail__section">
            <h2>Product claims</h2>
            {Array.isArray(productClaims) ? (
              <ul>
                {productClaims.map((claim) => <li key={claim}>{claim}</li>)}
              </ul>
            ) : (
              <p>{productClaims}</p>
            )}
          </section>

          <p className="product-detail__caution">
            <strong>Caution:</strong> {productCaution}
          </p>

          <a
            className="product-detail__whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Inquire on WhatsApp
          </a>

          <Link className="product-detail__back-link" to="/products">
            Browse all products
          </Link>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="products-related products-related--compact">
          <h2>Related products</h2>
          <div className="products-grid">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                compact
              />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

export default ProductDetailPage
