import { useRef } from 'react'
import { BODY_MOTION, cellHash, shouldTwinkle, STARFIELD_SALT } from './asciiMotion'
import useMotionPause from './useMotionPause'

function pushText(nodes, text) {
  if (text) nodes.push(text)
}

function renderAnimatedText(text, motion) {
  const lines = text.split('\n')
  const nodes = []

  lines.forEach((line, y) => {
    let pending = ''

    for (let x = 0; x < line.length; x += 1) {
      const ch = line[x]
      const alt = motion.alt[ch]
      const selected =
        alt !== undefined &&
        motion.select({ ch, x, y, lines }) &&
        cellHash(x, y, motion.salt) % motion.stride === 0

      if (!selected) {
        pending += ch
        continue
      }

      pushText(nodes, pending)
      pending = ''

      const jitter =
        ((cellHash(x, y, motion.salt + 5) % 1000) / 1000) * motion.jitter
      const phase = (motion.delay(x, y) + jitter) % motion.duration
      const shift = motion.shift?.(x, y)

      nodes.push(
        <span
          key={`glyph-${y}-${x}`}
          className="ascii-glyph"
          style={{
            '--glyph-duration': `${motion.duration}s`,
            '--glyph-delay': `-${phase.toFixed(2)}s`,
            '--glyph-dx': shift?.dx ?? '0ch',
            '--glyph-dy': shift?.dy ?? '0em',
          }}
        >
          <span className="ascii-glyph-base">{ch}</span>
          <span className="ascii-glyph-alt" aria-hidden="true">
            {alt}
          </span>
        </span>,
      )
    }

    pushText(nodes, pending)
    if (y < lines.length - 1) nodes.push('\n')
  })

  return nodes
}

function renderTwinklingText(text, variant) {
  const lines = text.split('\n')
  const nodes = []

  lines.forEach((line, y) => {
    let pending = ''

    for (let x = 0; x < line.length; x += 1) {
      const ch = line[x]
      const selected = ch !== ' ' && shouldTwinkle(x, y, variant)

      if (!selected) {
        pending += ch
        continue
      }

      pushText(nodes, pending)
      pending = ''

      const seed = cellHash(x, y, STARFIELD_SALT[variant] ?? 5)
      const duration = 9 + (seed % 500) / 100
      const delay = ((seed >>> 9) % 1200) / 100

      nodes.push(
        <span
          key={`star-${y}-${x}`}
          className="ascii-twinkle"
          style={{
            '--twinkle-duration': `${duration.toFixed(2)}s`,
            '--twinkle-delay': `-${(delay % duration).toFixed(2)}s`,
          }}
        >
          {ch}
        </span>,
      )
    }

    pushText(nodes, pending)
    if (y < lines.length - 1) nodes.push('\n')
  })

  return nodes
}

export default function AnimatedAscii({ body, text, className = '' }) {
  const ref = useRef(null)
  useMotionPause(ref)
  const motion = BODY_MOTION[body]

  return (
    <pre ref={ref} className={`ascii-art ${className}`} aria-hidden="true">
      {motion ? renderAnimatedText(text, motion) : text}
    </pre>
  )
}

export function AnimatedStars({ text, variant = 'wide', className = '' }) {
  const ref = useRef(null)
  useMotionPause(ref)

  return (
    <pre ref={ref} className={`starfield ${className}`} aria-hidden="true">
      {renderTwinklingText(text, variant)}
    </pre>
  )
}
