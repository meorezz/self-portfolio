import { highlights, profile } from '../data/resume'
import { Icon } from './Icon'
import { Reveal, Stagger, StaggerItem } from './Reveal'

export function About() {
  return (
    <section className="section" id="about">
      <div className="section__inner">
        <Reveal>
          <p className="eyebrow">Overview</p>
          <h2 className="section__title">Engineer focused on impact.</h2>
        </Reveal>

        <div className="about">
          <Reveal delay={0.06}>
            <p className="about__text">{profile.summary}</p>
          </Reveal>

          <Stagger className="about__pills">
            {highlights.map((item) => (
              <StaggerItem key={item.label} className="about__pill">
                <span className="icon-wrap" aria-hidden="true">
                  <Icon name={item.icon} />
                </span>
                <span>
                  <span className="about__label">{item.label}</span>
                  <p>{item.value}</p>
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
