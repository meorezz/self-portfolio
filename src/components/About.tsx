import { profile } from '../data/resume'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section className="section" id="about">
      <div className="section__inner">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 className="section__title">Engineer focused on impact.</h2>
        </Reveal>

        <div className="about">
          <Reveal delay={0.06}>
            <p className="about__text">{profile.summary}</p>
          </Reveal>

          <Reveal delay={0.12} className="about__meta">
            <div>
              <span className="about__label">Based in</span>
              <p>{profile.location}</p>
            </div>
            <div>
              <span className="about__label">Currently</span>
              <p>B. Software Engineering, UNIMAS</p>
            </div>
            <div>
              <span className="about__label">Open to</span>
              <p>Internships &amp; full-time roles</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
