import { projects } from '../data/resume'
import { Icon } from './Icon'
import { Reveal, Stagger, StaggerItem } from './Reveal'

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section__inner">
        <Reveal>
          <p className="eyebrow">Selected work</p>
          <h2 className="section__title">Things I&apos;ve built.</h2>
        </Reveal>

        <Stagger className="projects">
          {projects.map((project) => (
            <StaggerItem key={project.name} className="project-card">
              <span className="icon-wrap icon-wrap--lg" aria-hidden="true">
                <Icon name={project.icon} className="icon icon--md" />
              </span>
              <h3 className="project-card__title">{project.name}</h3>
              <p className="project-card__blurb">{project.blurb}</p>
              <ul className="project-card__stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
