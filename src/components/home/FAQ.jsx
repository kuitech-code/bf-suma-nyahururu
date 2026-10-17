import { faqs } from '../../data/faqs.js'

function FAQ() {
  return (
    <section
      className="home-section faq"
      id="faq"
      aria-labelledby="faq-title"
    >
      <p className="faq__eyebrow">Helpful information</p>
      <h2 id="faq-title">Frequently asked questions</h2>

      <div className="faq__list">
        {faqs.map((faq) => (
          <details className="faq__item" key={faq.id}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FAQ