import { DISPLAY_PHONE_NUMBER } from '../data/contact.js'

function FloatingCall() {
  return (
    <a
      className="floating-call"
      href={`tel:${DISPLAY_PHONE_NUMBER.replaceAll(' ', '')}`}
      aria-label={`Call BF Suma Nyahururu at ${DISPLAY_PHONE_NUMBER}`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 2.8 9.2 2c.7-.2 1.4.1 1.7.8l1.2 2.9c.2.6.1 1.2-.4 1.6l-1.6 1.3a14 14 0 0 0 5.3 5.3l1.3-1.6c.4-.5 1-.6 1.6-.4l2.9 1.2c.7.3 1 1 .8 1.7l-.8 2.6c-.2.7-.9 1.2-1.6 1.2C10.8 18.6 5.4 13.2 5.4 6.4c0-.7.5-1.4 1.2-1.6Z" />
      </svg>
    </a>
  )
}

export default FloatingCall
