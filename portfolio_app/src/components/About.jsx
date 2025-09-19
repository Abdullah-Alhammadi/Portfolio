const highlights = [
  {
    title: 'Product thinking',
    description: 'Translate business goals into intuitive flows grounded in user research.',
  },
  {
    title: 'Design systems',
    description: 'Build scalable component libraries with consistent interaction patterns.',
  },
  {
    title: 'Technical leadership',
    description: 'Mentor teams, review code with care, and keep delivery predictable.',
  },
]

function About() {
  return (
    <div className="about">
      <div className="section__header">
        <p className="section__eyebrow">About</p>
        <h2 className="section__title">Blending craft with collaboration.</h2>
        <p className="section__lead">
          Over the last few years I have partnered with startups and agencies to ship websites, dashboards,
          and internal tools that feel effortless to use.
        </p>
      </div>

      <div className="about__grid">
        {highlights.map((item) => (
          <article key={item.title} className="about__card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default About
