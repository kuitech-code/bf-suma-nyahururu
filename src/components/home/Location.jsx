function Location() {
  return (
    <section
      className="home-section location"
      id="location"
      aria-labelledby="location-title"
    >
      <p className="location__eyebrow">Visit us</p>
      <h2 id="location-title">Find BF Suma Nyahururu</h2>
      <p className="location__address">
        Find us at Mbaria Complex, Kenyatta Road, Nyahururu.
      </p>
      <div className="location__map">
        <iframe
          title="Map to Mbaria Complex, Kenyatta Road, Nyahururu"
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
