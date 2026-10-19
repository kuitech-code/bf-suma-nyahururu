function Location() {
  return (
    <section
      className="home-section location"
      id="location"
      aria-labelledby="location-title"
    >
      <div className="location__summary">
        <p className="location__eyebrow">Visit us</p>
        <h2 id="location-title">Find Suma Health and Wellness</h2>
        <p className="location__address">
          Find us at Mbaria Complex bld, Kenyatta Road, Nyahururu.
        </p>
        <dl className="location__hours">
          <div>
            <dt>Monday–Friday</dt>
            <dd>9:00 AM–5:00 PM</dd>
          </div>
          <div>
            <dt>Saturday</dt>
            <dd>9:00 AM–3:00 PM</dd>
          </div>
          <div>
            <dt>Sunday</dt>
            <dd>Closed</dd>
          </div>
        </dl>
      </div>
      <aside className="location__visual" aria-label="Suma Health and Wellness is at Mbaria Complex on Kenyatta Road">
        <div className="location__visual-pin" aria-hidden="true">
          <svg viewBox="0 0 64 80" focusable="false">
            <path d="M32 2C15.4 2 2 15.3 2 31.8 2 53.6 32 78 32 78s30-24.4 30-46.2C62 15.3 48.6 2 32 2Z" />
            <circle cx="32" cy="31" r="10" />
          </svg>
        </div>
        <p className="location__visual-label">Your wellness clinic</p>
        <p className="location__visual-name">Suma Health and Wellness</p>
        <p className="location__visual-address">Mbaria Complex bld<br />Kenyatta Road</p>
      </aside>
      <div className="location__map">
        <iframe
          title="Map to Mbaria Complex bld, Kenyatta Road, Nyahururu"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817448538858!2d36.36186627364007!3d0.037876564390492765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178763c58c3ee0ab%3A0x505cd6ca46abb0ea!2sMbaria%20Complex%2C%20Kenyatta%20Rd%2C%20Nyahururu!5e0!3m2!1sen!2ske!4v1792217595387!5m2!1sen!2ske"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  )
}

export default Location
