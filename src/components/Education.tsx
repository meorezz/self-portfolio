import { education } from '../data/resume'
import { Reveal, Stagger, StaggerItem } from './Reveal'

export function Education() {
  return (
    <section className="section section--tint" id="education">
      <div className="section__inner">
        <Reveal>
          <p className="eyebrow">Education</p>
          <h2 className="section__title">Academic path.</h2>
        </Reveal>

        <Stagger className="edu">
          {education.map((item) => (
            <StaggerItem key={item.school} className="edu__item">
              <time className="edu__period">{item.period}</time>
              <h3 className="edu__program">{item.program}</h3>
              <p className="edu__school">{item.school}</p>
              <p className="edu__detail">{item.detail}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
