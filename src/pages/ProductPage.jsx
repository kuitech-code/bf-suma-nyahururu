import { Link } from 'react-router-dom'
import { products } from '../data/product'
import ProductCard from '../components/products/ProductCard.jsx'
import '../styles/products.css'

function ProductPage() {
  return (
    <main className="products-page">
      <section className="products-page__intro">
        <p className="products-page__eyebrow">BF Suma Nyahururu</p>
        <h1>Our Products</h1>
        <p>
          Explore the products available through the clinic.
        </p>
      </section>
      <section className="products-grid" aria-label="Product catalog">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}

export default ProductPage