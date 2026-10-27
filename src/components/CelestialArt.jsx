import { EARTH, MOON, NEPTUNE, SATURN, SUN } from './celestialBodies'

const bodies = { earth: EARTH, saturn: SATURN, neptune: NEPTUNE }

export default function CelestialArt({ body, className = '' }) {
  if (body === 'moon-sun') {
    return (
      <div className={`celestial-swap ${className}`} aria-hidden="true">
        <pre className="ascii-art art-moon">{MOON}</pre>
        <pre className="ascii-art art-sun">{SUN}</pre>
      </div>
    )
  }

  return (
    <pre className={`ascii-art ${className}`} aria-hidden="true">
      {bodies[body]}
    </pre>
  )
}
