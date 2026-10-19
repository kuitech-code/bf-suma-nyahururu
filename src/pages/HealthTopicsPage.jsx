import { Link } from 'react-router-dom'
import { healthTopics } from '../data/healthTopics'
import { healthConcerns } from '../data/healthConcerns'
import '../styles/health-topics.css'

function HealthTopicsPage() {
  return (
    <main className="health-topics-page">
      <section className="health-topics-page__intro health-topics-page__intro--banner">
        <p className="health-topics-page__eyebrow health-topics-page__eyebrow--brand">Suma Health and Wellness</p>
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
      <section className="health-concerns" aria-labelledby="health-concerns-title">
        <p className="health-topics-page__eyebrow">Screening and guidance</p>
        <h2 id="health-concerns-title">Health concerns we support</h2>
        <p className="health-concerns__intro">
          Our clinic welcomes people seeking screening and wellness guidance for
          a range of health concerns. Contact us to discuss your needs and the
          support available.
        </p>
        <ul className="health-concerns__list">
          {healthConcerns.map((concern) => (
            <li key={concern}>{concern}</li>
          ))}
        </ul>
        <p className="health-concerns__disclaimer">
          Screening and wellness guidance do not replace diagnosis or treatment
          from a qualified health professional. Do not stop prescribed care. For
          a suspected stroke or another emergency, seek emergency medical care
          immediately.
        </p>
      </section>
    </main>
  )
}

export default HealthTopicsPage
