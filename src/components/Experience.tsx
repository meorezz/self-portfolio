import { experience } from '../data/resume'
import { Reveal, Stagger, StaggerItem } from './Reveal'

export function Experience() {
  return (
    <section className="section section--tint" id="experience">
      <div className="section__inner">
        <Reveal>
          <p className="eyebrow">Experience</p>
          <h2 className="section__title">Where I&apos;ve shipped work.</h2>
        </Reveal>

        <Stagger className="timeline" as="ul">
          {experience.map((item) => (
            <StaggerItem key={`${item.org}-${item.period}`} as="li" className="timeline__item">
              <div className="timeline__rail" aria-hidden="true" />
              <div className="timeline__body">
                <div className="timeline__head">
                  <div>
                    <h3 className="timeline__title">{item.title}</h3>
                    <p className="timeline__org">{item.org}</p>
                  </div>
                  <div className="timeline__meta">
                    {item.highlight && (
                      <span className="badge">{item.highlight}</span>
                    )}
                    <time className="timeline__period">{item.period}</time>
                  </div>
                </div>
                <ul className="timeline__bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 48)}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
