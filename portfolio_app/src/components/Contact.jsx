import { CONTACT_METHODS } from '../data/links.js'

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
          {CONTACT_METHODS.map((method) => {
            const isExternal = method.href?.startsWith('http')

            return (
              <li key={method.label}>
                <span>{method.label}</span>
                {method.href ? (
                  <a href={method.href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined}>
                    {method.value}
                  </a>
                ) : (
                  <span>{method.value}</span>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Contact
