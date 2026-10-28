import CelestialArt from '../components/CelestialArt'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'

const experiences = [
  {
    role: 'marketing coordinator',
    company: 'hammerhacks 2025',
    period: '2024-2025',
  },
  {
    role: 'hybrid designer/developer',
    company: 'acnecura',
    period: '2025',
  },
  {
    role: 'freelance graphic designer',
    company: 'self-employed',
    period: 'since 2019',
  },
]

export default function Works() {
  return (
    <Layout title="works">
      <section className="panel page-panel" aria-label="Experience">

        <div className="panel-bar">
          <span className="tag">02 / works</span>
        </div>

        <div className="page-top">
          <div className="page-heading">
            <h1 className="page-title">
              experience<span className="accent">.</span>
            </h1>
            <p className="page-lede mono">selected roles / 2019 — 2025</p>
          </div>

          <figure className="art-frame page-art">
            <CelestialArt body="neptune" />
            <figcaption>
              <span className="label">fig. 02 / neptune</span>
              <span className="label">winds / 2,100 km/h</span>
            </figcaption>
          </figure>
        </div>

        <ul className="work-list">
          {experiences.map((exp, i) => (
            <Reveal
              as="li"
              key={`${exp.role}-${exp.company}`}
              className="work-block"
              delay={i * 70}
            >
              <span className="work-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="work-role">{exp.role}</span>
              <span className="work-company">{exp.company}</span>
              <span className="work-period">{exp.period}</span>
            </Reveal>
          ))}
        </ul>

        <div className="panel-base">
          <span className="label">linkedin / full profile</span>
          <a
            className="button button-ghost"
            href="https://linkedin.com/in/mikael-a-gomez"
            target="_blank"
            rel="noopener noreferrer"
          >
            more on linkedin <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>
    </Layout>
  )
}
