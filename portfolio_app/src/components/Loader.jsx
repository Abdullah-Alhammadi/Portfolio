const rotations = Array.from({ length: 10 }, (_, index) => index)

const ICONS = {
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 3h3.2l4.8 6.4L16.8 3H20l-6.6 9L20 21h-3.2l-5-6.7L6.8 21H4l6.6-9z" fill="currentColor" />
    </svg>
  ),
  dribbble: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.2 6.4c2.1 1.6 4.9 2.4 8 2.2m4 8.6c-.8-3.9-2.7-7.3-5.2-10.2m-6.8 7.8c2.2-3.7 6.1-5.4 11.7-4.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  ),
  codepen: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 4 4 9v6l8 5 8-5V9l-8-5zm0 0v16m8-11-8 5-8-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="m5 7 7 6 7-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  discord: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 5c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h1.4l.6 2.2 2.6-2.2h5.4l2.6 2.2.6-2.2H20c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H6zm3.6 6.2c.7 0 1.3.7 1.3 1.5s-.6 1.5-1.3 1.5-1.3-.7-1.3-1.5.6-1.5 1.3-1.5zm4.8 0c.7 0 1.3.7 1.3 1.5s-.6 1.5-1.3 1.5-1.3-.7-1.3-1.5.6-1.5 1.3-1.5z"
        fill="currentColor"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.52 1.06 1.52 1.06.89 1.52 2.34 1.08 2.9.83.09-.64.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.39.2 2.4.1 2.67.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.58 4.93.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.49A10 10 0 0 0 12 2z"
        fill="currentColor"
      />
    </svg>
  ),
  telegram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m20.3 4.3-16 6.4c-1 .4-1 1.8 0 2.2l4.4 1.7 1.7 5.3c.3 1 1.6 1.1 2.1.1l2.4-5.7 5-8.6c.5-.9-.3-2-.6-1.4z"
        fill="currentColor"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" />
      <path
        d="M7.1 9.3h2.5V18H7.1zm1.3-1.9a1.45 1.45 0 1 0-1.44-1.45 1.44 1.44 0 0 0 1.44 1.45zM11.5 9.3H14v1.2h.03c.34-.63 1.18-1.3 2.44-1.3 2.6 0 3.08 1.66 3.08 3.8V18h-2.5v-4c0-1-.02-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V18h-2.5z"
        fill="#ffffff"
      />
    </svg>
  ),
}

const SOCIAL_LINKS = [
  { id: 'instagram', label: 'Instagram', href: null, color: '#cc39a4' },
  { id: 'twitter', label: 'Twitter / X', href: null, color: '#03a9f4' },
  { id: 'dribbble', label: 'Dribbble', href: null, color: '#ffb5d2' },
  { id: 'codepen', label: 'CodePen', href: null, color: '#1e1f26' },
  { id: 'email', label: 'Email', href: 'mailto:alhmadi.business@gmail.com', color: '#8b5cf6' },
  { id: 'discord', label: 'Discord', href: null, color: '#8c9eff' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/abdullah-alhammadi', color: '#111827' },
  { id: 'telegram', label: 'Telegram', href: null, color: '#29b6f6' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdullah-alhammadi', color: '#0a66c2' },
]

const isExternal = (href) => href.startsWith('http')

function Loader() {
  return (
    <div className="loader-screen" role="status" aria-live="polite">
      <div className="loader-screen__inner">
        <div className="main">
          <div className="loaders">
            {rotations.map((idx) => (
              <span key={`loader-${idx}`} className="loader" />
            ))}
          </div>
          <div className="loadersB">
            {rotations.map((idx) => (
              <span key={`loaderA-${idx}`} className="loaderA">
                <span className="ball" style={{ animationDelay: `${idx * 0.2}s` }} />
              </span>
            ))}
          </div>
        </div>
        <p className="loader-screen__label">Loading portfolio experience…</p>
        <div className="loader-social" aria-label="Social media links">
          <div className="loader-social__back" />
          <span className="loader-social__text">Stay connected</span>
          <div className="loader-social__grid">
            {SOCIAL_LINKS.map((item) => {
              const icon = <span className="loader-social__icon" aria-hidden="true">{ICONS[item.id]}</span>
              const commonProps = {
                key: item.id,
                className: `loader-social__card loader-social__card--${item.id}`,
                style: {
                  '--card-color': item.color,
                },
                'aria-label': item.label,
              }

              if (!item.href) {
                return (
                  <span {...commonProps} aria-disabled="true" tabIndex={-1}>
                    {icon}
                  </span>
                )
              }

              return (
                <a
                  {...commonProps}
                  href={item.href}
                  target={isExternal(item.href) ? '_blank' : undefined}
                  rel={isExternal(item.href) ? 'noreferrer' : undefined}
                >
                  {icon}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
