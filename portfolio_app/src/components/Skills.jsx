const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Next.js', 'Zustand'],
  },
  {
    title: 'UI & Styling',
    items: ['Tailwind CSS', 'CSS Modules', 'Framer Motion', 'Design systems'],
  },
  {
    title: 'Tooling',
    items: ['Git & GitHub', 'Jest', 'Playwright', 'Storybook', 'Figma'],
  },
]

function Skills() {
  return (
    <div className="skills">
      <div className="section__header">
        <p className="section__eyebrow">Skills</p>
        <h2 className="section__title">Focused on clarity, performance, and accessibility.</h2>
        <p className="section__lead">
          I lean on modern frameworks and proven workflows to build experiences that scale with your roadmap.
        </p>
      </div>

      <div className="skills__grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skills__card">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Skills
