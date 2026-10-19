const platforms = [
  { name: 'Facebook', icon: 'f' },
  { name: 'Facebook Group', icon: 'group' },
  // { name: 'Instagram', icon: '◎' },
  { name: 'TikTok', icon: '♪' },
  // { name: 'YouTube', icon: '▶' },
]

function SocialLinks({ variant = 'default' }) {
  function keepPlaceholderFromNavigating(event) {
    event.preventDefault()
  }

  return (
    <div className={`social-links social-links--${variant}`}>
      <span className="social-links__label">Follow BF Suma</span>
      <ul className="social-links__list">
        {platforms.map((platform) => (
          <li key={platform.name}>
            <a
              href="#"
              onClick={keepPlaceholderFromNavigating}
              aria-label={platform.name}
              title={platform.name}
            >
              {platform.icon === 'group' ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  focusable="false"
                >
                  <circle cx="9" cy="8" r="3" fill="currentColor" />
                  <circle cx="17" cy="9" r="2.5" fill="currentColor" />
                  <path
                    d="M3.5 19c0-3 2.2-5 5.5-5s5.5 2 5.5 5v1h-11v-1Zm12.2-4.4c2.9.2 4.8 2 4.8 4.4v1h-4v-1c0-1.7-.6-3.2-1.7-4.3l.9-.1Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <span aria-hidden="true">{platform.icon}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
