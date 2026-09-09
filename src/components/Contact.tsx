import { profile } from '../data/resume'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section__inner contact">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="section__title">Let&apos;s build something.</h2>
          <p className="contact__lead">
            Open to software engineering roles, collaborations, and interesting problems.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="contact__links">
          <a className="contact__link" href={`mailto:${profile.email}`}>
            <span>Email</span>
            <strong>{profile.email}</strong>
          </a>
          <a
            className="contact__link"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <strong>meor-hazrul</strong>
          </a>
          <a
            className="contact__link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <strong>@meorezz</strong>
          </a>
          <a className="contact__link" href={`tel:${profile.phone.replace(/\D/g, '')}`}>
            <span>Phone</span>
            <strong>{profile.phone}</strong>
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.fullName}
      </p>
      <a href="#top">Back to top</a>
    </footer>
  )
}
