import { skills } from '../data/resume'
import { Reveal, Stagger, StaggerItem } from './Reveal'

const groups = [
  { title: 'Languages', items: skills.languages },
  { title: 'Frontend', items: skills.frontend },
  { title: 'Backend', items: skills.backend },
  { title: 'Data & Cloud', items: skills.data },
  { title: 'Tools', items: skills.tools },
]

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section__inner">
        <Reveal>
          <p className="eyebrow">Skills</p>
          <h2 className="section__title">Stack I work with.</h2>
        </Reveal>

        <Stagger className="skills">
          {groups.map((group) => (
            <StaggerItem key={group.title} className="skills__group">
              <h3 className="skills__heading">{group.title}</h3>
              <ul className="skills__list">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
