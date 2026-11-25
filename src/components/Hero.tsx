import { motion } from 'framer-motion'
import graduatePhoto from '../assets/graduate.jpg'
import { profile } from '../data/resume'
import { Icon } from './Icon'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero__content">
        <motion.p
          className="hero__role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease, delay: 0.15 }}
        >
          <Icon name="fire" className="icon icon--sm" />
          {profile.role}
        </motion.p>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.22 }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.34 }}
        >
          {profile.headline}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease, delay: 0.44 }}
        >
          <a className="btn btn--primary" href="#experience">
            View experience
          </a>
          <a className="btn btn--ghost" href={profile.cvPath} download>
            Download CV
          </a>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </motion.div>
      </div>

      <div className="hero__visual">
        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, x: 30, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.65, ease, delay: 0.35 }}
        >
          <img src={graduatePhoto} alt="Meor Hazrul at his graduation" />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        aria-label="Scroll to about"
      >
        <span className="hero__scroll-line" />
        Scroll
      </motion.a>
    </section>
  )
}
