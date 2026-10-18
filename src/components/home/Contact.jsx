import {
  CONTACT_EMAIL,
  DISPLAY_PHONE_NUMBER,
  WHATSAPP_NUMBER,
} from '../../data/contact.js'

function Contact() {
  const bookingMessage =
    'Hi, I’d like to book a consultation at BF Suma Nyahururu. Please let me know the available appointment times.'

  function handleBookingSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const message = [
      'Hello BF Suma Nyahururu, I would like to book a consultation.',
      `Name: ${formData.get('name')}`,
      `Phone: ${formData.get('phone')}`,
      `Preferred date: ${formData.get('date') || 'Flexible'}`,
      `Preferred time: ${formData.get('time') || 'Flexible'}`,
      `What I would like help with: ${formData.get('message') || 'I would like to discuss this during my appointment.'}`
    ].join('\n')

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section
      className="home-section contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact__intro">
        <p className="contact__eyebrow">Let’s plan your visit</p>
        <h2 id="contact-title">Book a consultation</h2>
        <p>
          Contact us using one of these buttons, or fill out the form.
          <br />
          We’ll get back to you to confirm your appointment.
        </p>
        <div className="contact__links" aria-label="Contact options">
          <a className="contact__link contact__link--call" href={`tel:${DISPLAY_PHONE_NUMBER.replaceAll(' ', '')}`}>
            Call
          </a>
          <a className="contact__link contact__link--sms" href={`sms:${DISPLAY_PHONE_NUMBER.replaceAll(' ', '')}?body=${encodeURIComponent(bookingMessage)}`}>
            SMS
          </a>
          <a
            className="contact__link contact__link--whatsapp"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bookingMessage)}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a className="contact__link contact__link--email" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Consultation appointment request')}&body=${encodeURIComponent(bookingMessage)}`}>
            Email
          </a>
        </div>
        {/* <p className="contact__email-note">
          Email address is a placeholder and will be updated when the clinic confirms it.
        </p> */}
        <div className="contact__fee">
          <span>Consultation fee</span>
          <strong>KSh 1,500</strong>
        </div>
      </div>

      <form className="contact__form" onSubmit={handleBookingSubmit}>
        <div className="contact__fields">
          <label>
            Your name
            <input name="name" autoComplete="name" required />
          </label>
          <label>
            Phone number
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="e.g. 0712 345 678"
              required
            />
          </label>
          <label>
            Preferred date
            <input name="date" type="date" />
          </label>
          <label>
            Preferred time
            <select name="time" defaultValue="">
              <option value="">Choose a time (optional)</option>
              <option>Morning</option>
              <option>Afternoon</option>
            </select>
          </label>
        </div>
        <label className="contact__message-label">
          What would you like help with?
          <textarea name="message" rows="4" />
        </label>
        <button className="contact__submit" type="submit">
          Book Appointment
        </button>
        <p className="contact__form-note">
          Pressing the button opens a prepared WhatsApp message for you to review and
          send. We will reply to arrange your visit.
        </p>
      </form>
    </section>
  )
}

export default Contact
