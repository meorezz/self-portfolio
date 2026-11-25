import fypArt from '../assets/fyp.jpg'
import { education, reference } from '../data/resume'
import { Icon } from './Icon'
import { Reveal, Stagger, StaggerItem } from './Reveal'

export function Education() {
  return (
    <section className="section" id="education">
      <div className="section__inner">
        <Reveal>
          <p className="eyebrow">Education</p>
          <h2 className="section__title">Academic path.</h2>
        </Reveal>

        <div className="edu-layout">
          <Stagger className="edu">
            {education.map((item) => (
              <StaggerItem key={item.school} className="edu__item">
                <time className="edu__period">
                  <Icon name="classFormat" className="icon icon--sm" />
                  {item.period}
                </time>
                <h3 className="edu__program">{item.program}</h3>
                <p className="edu__school">{item.school}</p>
                <p className="edu__detail">{item.detail}</p>
              </StaggerItem>
            ))}

            <StaggerItem className="edu__item edu__item--ref">
              <p className="edu__period">
                <Icon name="alumni" className="icon icon--sm" />
                Academic reference
              </p>
              <h3 className="edu__program">{reference.name}</h3>
              <p className="edu__school">
                {reference.title} — {reference.org}
              </p>
              <a className="edu__detail edu__mail" href={`mailto:${reference.email}`}>
                {reference.email}
              </a>
            </StaggerItem>
          </Stagger>

          <Reveal delay={0.12} className="edu__art">
            <img src={fypArt} alt="Final year project artwork" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
