import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/products/ProductCard.jsx'
import { healthTopics } from '../data/healthTopics'
import { products } from '../data/product'
import '../styles/health-topics.css'
import '../styles/products.css'

function HealthTopicDetailPage() {
  const { topicId } = useParams()
  const topic = healthTopics.find((item) => item.id === topicId)

  if (!topic) {
    return (
      <main className="health-topics-page">
        <section className="health-topics-page__intro">
          <h1>Health topic not found</h1>
          <Link to="/health-topics">Back to Health Topics</Link>
        </section>
      </main>
    )
  }

  const relatedProducts = topic.productIds
    .map((productId) => products.find((product) => product.id === productId))
    .filter(Boolean)
    .slice(0, 3)

  return (
    <main className="health-topics-page">
      <section
        className="health-topics-page__intro health-topics-page__intro--detail"
        style={{
          '--health-topic-card-background': `url("${import.meta.env.BASE_URL}images/health-topics/health-topic-35.jpeg")`,
        }}
      >
        <div className="health-topic-detail__info">
          <p className="health-topics-page__eyebrow">BF Suma Nyahururu</p>
          <h1>{topic.title}</h1>
          <p>{topic.description}</p>
          <Link to="/health-topics">Back to all Health Topics</Link>
        </div>
        <div className="health-topic-detail__visual" aria-hidden="true" />
      </section>

      {relatedProducts.length > 0 && (
        <section className="products-related products-related--compact">
          <h2>Products related to this topic</h2>
          <div className="products-grid">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

export default HealthTopicDetailPage
