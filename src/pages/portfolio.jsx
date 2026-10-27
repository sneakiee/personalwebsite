import CelestialArt from '../components/CelestialArt'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import Starfield from '../components/Starfield'

const projects = [
  {
    title: 'hackclubtcg',
    description: 'web-based trading card game for hack club (currently a pack opening simulator)',
    link: 'https://hackclubtcg.netlify.app/',
  },
  {
    title: 'rhythmpad',
    description: 'a macropad designed for music and rhythm games',
    link: 'https://github.com/sneakiee/rhythmpad',
  },
  {
    title: 'pokemon card launcher',
    description: 'launches pokemon cards like its money (its expensive)',
    link: 'https://github.com/sneakiee/pokemon-card-launcher',
  },
]

export default function Portfolio() {
  return (
    <Layout title="projects">
      <section className="panel page-panel" aria-label="Projects">
        <Starfield variant="c" className="panel-stars" />
        <Starfield variant="wide" className="panel-stars panel-stars-b" />

        <div className="panel-bar">
          <span className="tag">03 / projects</span>
          <span className="tag">03 entries</span>
        </div>

        <div className="page-top">
          <div className="page-heading">
            <h1 className="page-title">
              projects<span className="accent">.</span>
            </h1>
            <p className="page-lede mono">selected builds / external links</p>
          </div>

          <figure className="art-frame page-art">
            <CelestialArt body="moon-sun" />
            <figcaption>
              <span className="label art-label-moon">fig. 03 / moon</span>
              <span className="label art-label-sun">fig. 03 / sun</span>
              <span className="label">local sky / 2026.10</span>
            </figcaption>
          </figure>
        </div>

        <ul className="project-list">
          {projects.map((project, i) => (
            <Reveal as="li" key={project.title} delay={i * 70}>
              <a
                className="project-block"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="project-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="project-title">{project.title}</span>
                <span className="project-desc">{project.description}</span>
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Reveal>
          ))}
        </ul>

        <div className="panel-base">
          <span className="label">archive / github</span>
          <a
            className="button button-ghost"
            href="https://github.com/sneakiee?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            view more on github <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>
    </Layout>
  )
}
