import { Link } from 'react-router-dom'
import productRange from '../../assets/products-banner-bg.png'
import { companyMilestones } from '../../data/company.js'

function About() {
  return (
    <section
      className="home-section about"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about__story">
        <p className="about__eyebrow">About BF Suma</p>
        <h2 id="about-title">A wellness company with a global story</h2>
        <p>
          BF Suma began in 1993 as a pharmaceutical manufacturer and later
          expanded into health products. The company entered African markets in
          2004 and the Kenyan market in 2011.
        </p>
        <p>
          Its approach brings together Eastern and Western health perspectives,
          with products across areas such as cardiovascular, bone and joint,
          digestive, immune, personal care and skincare wellness.
        </p>
        <p className="about__standards">
          Company information lists GMP certification in 2000, a Class A
          certificate in 2012, and KEBS certification for products in Kenya.
        </p>
        {/* <Link className="about__technology-link" to="/#technologies">
          Explore BF Suma technologies <span aria-hidden="true">→</span>
        </Link> */}
      </div>

      <figure className="about__visual">
        <div className="about__image-wrap">
          <img src={productRange} alt="A selection of BF Suma products" />
        </div>
        <figcaption>Products across a range of wellness categories</figcaption>
      </figure>

      <ol className="about__milestones" aria-label="BF Suma company milestones">
        {companyMilestones.map((milestone) => (
          <li key={milestone.year}>
            <span>{milestone.year}</span>
            <p>{milestone.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default About
