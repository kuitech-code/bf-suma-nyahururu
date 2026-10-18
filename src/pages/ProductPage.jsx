import { Link } from 'react-router-dom'
import { products } from '../data/product'
import ProductCard from '../components/products/ProductCard.jsx'
import '../styles/products.css'

function ProductPage() {
  return (
    <main className="products-page">
      <section className="products-page__intro products-page__intro--banner">
        <p className="products-page__eyebrow">BF Suma Nyahururu</p>
        <h1>Our Products</h1>
        <p>
          Explore our clinic’s handpicked selection of therapeutic essentials. Formulated with high-quality active ingredients to help you look, feel and live your best every day.
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
