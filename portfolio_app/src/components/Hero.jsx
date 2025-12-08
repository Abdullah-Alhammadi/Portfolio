const navItems = [
  { href: 'about', label: 'About' },
  { href: 'skills', label: 'Skills' },
  { href: 'projects', label: 'Projects' },
  { href: 'contact', label: 'Contact' },
]

function Hero() {
  return (
    <div className="hero">
      <nav className="hero__nav">
        <span className="hero__brand">Abdullah Al Hammadi</span>
        <div className="hero__links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="hero__content">
        <p className="hero__eyebrow">Frontend Developer</p>
        <h1 className="hero__headline">I craft fast, thoughtful web experiences.</h1>
        <p className="hero__summary">
          I translate ideas into polished products with clean architecture, inclusive design, and smooth
          collaboration across teams.
        </p>

        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            View projects
          </a>
          <a className="button button--ghost" href="#contact">
            Let&apos;s collaborate
          </a>
        </div>

        <dl className="hero__meta">
          <div>
            <dt>Based in</dt>
            <dd>Abu Dhabi, UAE</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>React ecosystems & UX engineering</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Hero
