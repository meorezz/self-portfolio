import { profile } from '../data/resume'
import type { IconName } from './Icon'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import gmailIcon from '../assets/google-gmail-svgrepo-com.svg'
import githubIcon from '../assets/github-svgrepo-com.svg'
import linkedinIcon from '../assets/linkedin-svgrepo-com.svg'

const links: { href: string; label: string; value: string; icon?: IconName; iconSrc?: string; external?: boolean }[] = [
  {
    href: `mailto:${profile.email}`,
    label: 'Email',
    value: profile.email,
    iconSrc: gmailIcon,
  },
  {
    href: profile.linkedin,
    label: 'LinkedIn',
    value: 'meor-hazrul',
    iconSrc: linkedinIcon,
    external: true,
  },
  {
    href: profile.github,
    label: 'GitHub',
    value: '@meorezz',
    iconSrc: githubIcon,
    external: true,
  },
  {
    href: `tel:${profile.phone.replace(/\D/g, '')}`,
    label: 'Phone',
    value: profile.phone,
    icon: 'collab',
  },
]

export function Contact() {
  return (
    <section className="section section--tint" id="contact">
      <div className="section__inner contact">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="section__title">Let&apos;s build something.</h2>
          <p className="contact__lead">
            Open to software engineering roles, collaborations, and interesting problems.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="contact__place">
          <Icon name="pin" className="icon" />
          <div>
            <span className="about__label">Location</span>
            <p>{profile.location}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="contact__links">
          {links.map((link) => (
            <a
              key={link.label}
              className="contact__link"
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
            >
              <span className="icon-wrap" aria-hidden="true">
                {link.iconSrc ? (
                  <img className="contact__brand-icon" src={link.iconSrc} alt="" />
                ) : link.icon ? (
                  <Icon name={link.icon} />
                ) : null}
              </span>
              <span>
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </span>
            </a>
          ))}
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
