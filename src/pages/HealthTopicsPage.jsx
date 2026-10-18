import { Link } from 'react-router-dom'
import { healthTopics } from '../data/healthTopics'
import '../styles/health-topics.css'

function HealthTopicsPage() {
  return (
    <main className="health-topics-page">
      <section className="health-topics-page__intro health-topics-page__intro--banner">
        <p className="health-topics-page__eyebrow">BF Suma Nyahururu</p>
        <h1>Health Topics</h1>
        <p>Explore health topics and discover products selected to support your wellness journey.</p>
      </section>
      <section className="health-topics-grid" aria-label="Health topics">
        {healthTopics.map((topic) => (
          <article
            className="health-topic-card"
            key={topic.id}
            style={{
              '--health-topic-card-background': `url("${topic.image}")`,
            }}
          >
            <h2>{topic.title}</h2>
            <p>{topic.shortDescription}</p>
            <Link to={`/health-topics/${topic.id}`}>Explore topic</Link>
          </article>
        ))}
      </section>
    </main>
  )
}

export default HealthTopicsPage
