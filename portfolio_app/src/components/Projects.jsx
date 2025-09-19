import { projects } from '../data/projects.js'

function Projects() {
  return (
    <div className="projects">
      <div className="section__header">
        <p className="section__eyebrow">Projects</p>
        <h2 className="section__title">Selected work that balances craft and results.</h2>
        <p className="section__lead">
          A mix of product experiments, production features, and polished marketing sites. Each one pushed my
          understanding of user experience, performance, and team workflows.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <header className="project-card__header">
              <h3>{project.title}</h3>
              <span>{project.year}</span>
            </header>
            <p>{project.description}</p>
            <ul className="project-card__tags">
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="project-card__links">
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noreferrer">
                  Live demo
                </a>
              )}
              {project.links.repo && (
                <a href={project.links.repo} target="_blank" rel="noreferrer">
                  Source code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects
