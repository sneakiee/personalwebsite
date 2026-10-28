// Deterministic, character-level motion plans for the hand-composed ASCII art.
// Every phase is derived from a glyph's grid position, so frames are stable
// across renders and never rely on runtime randomness.

export function cellHash(x, y, salt = 0) {
  let h = Math.imul(x + 0x9e37, 0x85ebca6b) ^ Math.imul(y + 0x27d4, 0xc2b2ae35)
  h ^= Math.imul(salt + 1, 0x27d4eb2f)
  h = Math.imul(h ^ (h >>> 15), 0x2545f491)
  return (h ^ (h >>> 13)) >>> 0
}

function almostTouchesSpace(lines, x, y) {
  for (let dy = -1; dy <= 1; dy += 1) {
    for (let dx = -1; dx <= 1; dx += 1) {
      if (lines[y + dy]?.[x + dx] === ' ') return true
    }
  }
  return false
}

const EARTH_SURFACE = '@#%'
const SATURN_RING = '-=:.'
const NEPTUNE_WIND = '~=*+'
const MOON_SURFACE = '@#%'
const SUN_GLYPH = '*+@#%'

// The alt map intentionally cycles through glyphs of similar visual weight.
// The original silhouette, gaps, and crater shapes remain untouched.
export const BODY_MOTION = {
  earth: {
    salt: 11,
    stride: 2,
    duration: 18,
    alt: { '@': '#', '#': '%', '%': '@' },
    select: ({ ch, y }) => EARTH_SURFACE.includes(ch) && y >= 3 && y <= 17,
    delay: (x, y) => x * 0.7 + y * 0.15,
    jitter: 0.7,
    shift: (x, y) => {
      const limb = Math.sqrt(Math.max(0, 1 - ((x - 20) / 15) ** 2))
      return {
        dx: `${(-0.55 * limb).toFixed(3)}ch`,
        dy: `${(Math.sin((y - 3) * 0.8) * 0.1).toFixed(3)}em`,
      }
    },
  },
  saturn: {
    salt: 23,
    stride: 2,
    duration: 18,
    alt: { '-': '=', '=': '-', ':': '.', '.': ':' },
    select: ({ ch, x, y }) => {
      if (!SATURN_RING.includes(ch) || y < 3 || y > 17) return false
      // Keep the planet body itself calm; motion belongs to the rings.
      const body = x >= 13 && x <= 30 && y >= 6 && y <= 15
      return !body
    },
    delay: (x, y) => {
      const angle = Math.atan2(y - 10, x - 20)
      return ((angle + Math.PI) / (2 * Math.PI)) * 17 + y * 0.04
    },
    jitter: 0.5,
    shift: (x, y) => {
      const angle = Math.atan2(y - 10, x - 20)
      return {
        dx: `${(Math.sin(angle) * 0.28).toFixed(3)}ch`,
        dy: `${(-Math.cos(angle) * 0.32).toFixed(3)}em`,
      }
    },
  },
  neptune: {
    salt: 37,
    stride: 3,
    duration: 14,
    alt: { '~': '=', '=': '~', '*': '+', '+': '*', ':': '.' },
    select: ({ ch, x, y }) =>
      NEPTUNE_WIND.includes(ch) && x >= 7 && x <= 34 && y >= 4 && y <= 18,
    delay: (x, y) => x * 0.4 + y * 0.08,
    jitter: 0.8,
    shift: (x, y) => {
      const limb = Math.sqrt(Math.max(0, 1 - ((x - 20) / 14) ** 2))
      return {
        dx: `${(-0.6 * limb).toFixed(3)}ch`,
        dy: `${(Math.sin((y - 4) * 0.55) * 0.08).toFixed(3)}em`,
      }
    },
  },
  moon: {
    salt: 53,
    stride: 3,
    duration: 20,
    alt: { '@': '#', '#': '%', '%': '@' },
    select: ({ ch, x, y, lines }) =>
      MOON_SURFACE.includes(ch) &&
      y >= 3 &&
      y <= 17 &&
      !almostTouchesSpace(lines, x, y),
    delay: (x, y) => (x - 8) * 0.55 + (y - 3) * 0.3,
    jitter: 0.5,
    shift: (x, y) => ({
      dx: '-0.26ch',
      dy: `${(0.16 + (y - 3) * 0.006).toFixed(3)}em`,
    }),
  },
  sun: {
    salt: 71,
    stride: 3,
    duration: 16,
    alt: { '*': '+', '+': '*', '@': '#', '#': '@', '%': '*' },
    select: ({ ch }) => SUN_GLYPH.includes(ch),
    delay: (x, y) => x * 0.36 + y * 0.18,
    jitter: 0.6,
    shift: (x, y) => {
      const angle = Math.atan2(y - 10, x - 20)
      return {
        dx: `${(Math.cos(angle) * 0.3).toFixed(3)}ch`,
        dy: `${(Math.sin(angle) * 0.34).toFixed(3)}em`,
      }
    },
  },
}

export const STARFIELD_SALT = {
  wide: 5,
  cluster: 17,
  knot: 29,
}

export function shouldTwinkle(x, y, variant) {
  return cellHash(x, y, STARFIELD_SALT[variant] ?? 5) % 11 === 0
}
