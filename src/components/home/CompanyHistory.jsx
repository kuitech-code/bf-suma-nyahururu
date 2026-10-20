import productRange from '../../assets/products-banner-bg.png'
import { companyMilestones } from '../../data/company.js'

function CompanyHistory() {
  return (
    <section
      className="home-section company-history"
      aria-labelledby="company-history-title"
    >
      <div className="company-history__heading">
        <p className="company-history__eyebrow">Our product partner</p>
        <h2 id="company-history-title">About BF Suma</h2>
        <p className="company-history__subtitle">
          A wellness company with a global story
        </p>
      </div>

      <div className="company-history__body">
        <div className="company-history__copy">
          <p>
            Suma Health and Wellness offers products from BF Suma, a company
            that began in 1993 as a pharmaceutical manufacturer and later
            expanded into health products. The company entered African markets
            in 2004 and the Kenyan market in 2011.
          </p>
          <p>
            Its approach brings together Eastern and Western health
            perspectives, with products across cardiovascular, bone and joint,
            digestive, immune, personal care and skincare wellness categories.
          </p>
          <p>
            Company information lists GMP certification in 2000, a Class A
            certificate in 2012, and KEBS certification for products in Kenya.
          </p>
        </div>

        <figure className="company-history__visual">
          <img src={productRange} alt="A selection of BF Suma products" />
          <figcaption>Products across a range of wellness categories</figcaption>
        </figure>
      </div>

      <ol className="company-history__timeline" aria-label="BF Suma history">
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

export default CompanyHistory
