import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/products/ProductCard.jsx'
import { WHATSAPP_NUMBER } from '../data/contact.js'
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
  const benefitItems = product.benefits?.flatMap((benefit) =>
    benefit
      .split(/(?<=[.!?])\s+(?=[A-Z])/)
      .map((item) => item.trim())
      .filter(Boolean),
  )

  const inquiryMessage = `Hello, I'm interested in ${product.name}. Could you please share its current price and availability?`
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(inquiryMessage)}`

  return (
    <main className="products-page">
      <section className="products-page__intro product-detail">
        <div className="product-detail__image-frame">
          <img
            className="product-detail__image"
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
        </div>

        <div className="product-detail__info">
          <p className="products-page__eyebrow">BF Suma Nyahururu</p>
          <p>{product.category}</p>
          <h1>{product.name}</h1>

          {product.ingredients && (
            <section className="product-detail__section">
              <h2>Ingredients</h2>
              <p>{product.ingredients}</p>
            </section>
          )}

          {benefitItems?.length > 0 && (
            <section className="product-detail__section">
              <h2>Benefits</h2>
              <ul>
                {benefitItems.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </section>
          )}

          {product.caution && (
            <p className="product-detail__caution">
              <strong>Caution:</strong> {product.caution}
            </p>
          )}

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
