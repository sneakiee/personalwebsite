import CelestialArt from '../components/CelestialArt'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const { t, language } = useLanguage()
  const skills = t('skills').split(',').map((skill) => skill.trim())

  return (
    <Layout title="about">
      <section className="panel page-panel" aria-label="About Mikael">

        <div className="panel-bar">
          <span className="tag">01 / about</span>
        </div>

        <div className="page-top">
          <div className="page-heading">
            <h1 className="page-title">
              about<span className="accent">.</span>
            </h1>
            <p className="page-lede serif" lang={language}>
              {t('aboutBio1')}
            </p>
          </div>

          <figure className="art-frame page-art">
            <CelestialArt body="saturn" />
            <figcaption>
              <span className="label">fig. 01 / saturn</span>
              <span className="label">ring system</span>
            </figcaption>
          </figure>
        </div>

        <div className="about-body">
          <Reveal className="about-copy">
            <p lang={language}>{t('aboutBio2')}</p>
            <p lang={language}>{t('aboutBio3')}</p>
          </Reveal>

          <Reveal className="panel-inset about-tools" delay={80}>
            <div className="inset-bar">
              <span className="label">{t('skillsTitle')}</span>
              <span className="label">{skills.length} tools</span>
            </div>
            <ul className="tool-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="panel-base">
          <span className="label">mikael gomez / hamilton, on</span>
          <span className="label">fig. 01 — saturn</span>
        </div>
      </section>
    </Layout>
  )
}
