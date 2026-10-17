const platforms = ['Facebook', 'Instagram', 'TikTok', 'YouTube']

function SocialLinks() {
  function keepPlaceholderFromNavigating(event) {
    event.preventDefault()
  }

  return (
    <div className="social-links" aria-labelledby="social-links-title">
      <h3 id="social-links-title">Follow the clinic</h3>

      <ul className="social-links__list">
        {platforms.map((platform) => (
          <li key={platform}>
            <a href="#" onClick={keepPlaceholderFromNavigating}>
              {platform}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks