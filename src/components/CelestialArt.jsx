import AnimatedAscii from './AnimatedAscii'
import { EARTH, MOON, NEPTUNE, SATURN, SUN } from './celestialBodies'

const bodies = { earth: EARTH, saturn: SATURN, neptune: NEPTUNE }

export default function CelestialArt({ body, className = '' }) {
  if (body === 'moon-sun') {
    return (
      <div className={`celestial-swap ${className}`} aria-hidden="true">
        <AnimatedAscii body="moon" text={MOON} className="art-moon" />
        <AnimatedAscii body="sun" text={SUN} className="art-sun" />
      </div>
    )
  }

  return <AnimatedAscii body={body} text={bodies[body]} className={className} />
}
