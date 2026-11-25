import { skills } from '../data/resume'
import type { IconName } from './Icon'
import { Icon } from './Icon'
import { Reveal, Stagger, StaggerItem } from './Reveal'

const groups: { title: string; icon: IconName; items: string[] }[] = [
  { title: 'Languages', icon: 'document', items: skills.languages },
  { title: 'Frontend', icon: 'visuals', items: skills.frontend },
  { title: 'Backend', icon: 'system', items: skills.backend },
  { title: 'Data & Cloud', icon: 'cubes', items: skills.data },
  { title: 'AI & Agents', icon: 'ai', items: skills.ai },
  { title: 'Tools', icon: 'execution', items: skills.tools },
]

export function Skills() {
  return (
    <section className="section section--tint" id="skills">
      <div className="section__inner">
        <Reveal>
          <p className="eyebrow">Tech stack</p>
          <h2 className="section__title">Stack I work with.</h2>
        </Reveal>

        <Stagger className="skills">
          {groups.map((group) => (
            <StaggerItem key={group.title} className="skills__group">
              <h3 className="skills__heading">
                <Icon name={group.icon} className="icon icon--sm" />
                {group.title}
              </h3>
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
