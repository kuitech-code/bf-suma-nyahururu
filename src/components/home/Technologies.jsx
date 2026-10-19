import clinicShelves from '../../assets/clinic/clinic-shelves.jpeg'
import { technologies } from '../../data/company.js'

function Technologies() {
  return (
    <section
      className="home-section technologies"
      id="technologies"
      aria-labelledby="technologies-title"
    >
      <header className="technologies__heading">
        <p className="technologies__eyebrow">BF Suma high-tech</p>
        <h2 id="technologies-title">Technology behind the products</h2>
        <p>
          BF Suma describes a range of processing technologies used in its
          products, from mineral formulations to herbal extracts.
        </p>
      </header>

      <div className="technologies__layout">
        <figure className="technologies__visual">
          <img
            src={clinicShelves}
            alt="BF Suma products displayed on shelves at the clinic"
          />
          <figcaption>BF Suma products available in Nyahururu</figcaption>
        </figure>

        <div className="technologies__grid">
          {technologies.map((technology) => (
            <article
              className={`technology-card technology-card--${technology.color}`}
              key={technology.number}
            >
              <span className="technology-card__number">{technology.number}</span>
              <div>
                <h3>{technology.name}</h3>
                <p>{technology.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <p className="technologies__note">
        Descriptions summarize information supplied by BF Suma.
      </p>
    </section>
  )
}

export default Technologies
