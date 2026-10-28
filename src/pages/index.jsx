import { Link } from 'react-router-dom'
import CelestialArt from '../components/CelestialArt'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'

const fieldIndex = [
  { to: '/about', name: 'about', desc: 'bio / tools / origin', index: '01' },
  { to: '/works', name: 'works', desc: 'roles / experience', index: '02' },
  { to: '/portfolio', name: 'projects', desc: 'built things / links', index: '03' },
]

export default function Home() {
  const { t, language } = useLanguage()

  return (
    <Layout>
      <section className="panel hero-panel" aria-label="Introduction">

        <div className="panel-bar">
          <span className="tag">index / 00</span>
          <span className="tag">design &amp; code</span>
        </div>

        <div className="hero-grid">
          <div className="hero-main">
            <h1 className="hero-title">
              <span className="line">mikael</span>
              <span className="line line-2">
                gomez<span className="accent">.</span>
              </span>
            </h1>

            <div className="hero-info">
              <div className="status-block">
                <span className="label">currently</span>
                <span className="status-line">cs student</span>
                <span className="status-line">mcmaster university</span>
                <span className="status-line mono">hamilton, ontario</span>
              </div>

              <div className="hero-bio">
                <p lang={language}>{t('bio1')}</p>
                <p lang={language}>{t('bio2')}</p>
              </div>
            </div>

            <div className="hero-actions">
              <Link to="/about" className="button">
                read the full bio <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <figure className="art-frame hero-art">
            <CelestialArt body="earth" />
            <figcaption>
              <span className="label">fig. 00 / earth</span>
              <span className="label">sol iii</span>
            </figcaption>
          </figure>
        </div>

        <div className="panel-base">
          <span className="label">43.2557° N / 79.8711° W</span>
          <span className="label">scroll / field index ↓</span>
        </div>
      </section>

      <section className="field-index" aria-labelledby="field-index-title">
        <Reveal className="section-head">
          <div className="section-heading">
            <h2 id="field-index-title" className="section-title">
              field index
            </h2>
          </div>
          <span className="label">03 entries / local</span>
        </Reveal>

        <ul className="index-list">
          {fieldIndex.map((item, i) => (
            <Reveal as="li" key={item.to} delay={i * 70}>
              <Link to={item.to} className="index-block">
                <span className="index-num">{item.index}</span>
                <span className="index-name">{item.name}</span>
                <span className="index-desc">{item.desc}</span>
                <span className="index-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
