const contactMethods = [
  {
    label: 'Email',
    value: 'alhmadi.business@gmail.com',
    href: 'mailto:alhmadi.business@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/abdullah-alhammadi',
    href: 'https://www.linkedin.com/in/abdullah-alhammadi',
  },
  {
    label: 'GitHub',
    value: 'github.com/abdullah-alhammadi',
    href: 'https://github.com/abdullah-alhammadi',
  },
]

function Contact() {
  return (
    <div className="contact">
      <div className="section__header">
        <p className="section__eyebrow">Contact</p>
        <h2 className="section__title">Let&apos;s build something valuable.</h2>
        <p className="section__lead">
          Whether you need a brand new product interface or hands-on support refining an existing experience,
          I&apos;d love to hear about it.
        </p>
      </div>

      <div className="contact__card">
        <h3>Start a conversation</h3>
        <ul className="contact__list">
          {contactMethods.map((method) => (
            <li key={method.label}>
              <span>{method.label}</span>
              <a href={method.href}>{method.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Contact
