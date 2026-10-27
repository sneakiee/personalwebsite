const ticks = Array.from({ length: 72 }, (_, i) => {
  const angle = (i * 5 * Math.PI) / 180
  const outer = 172
  const inner = i % 6 === 0 ? 162 : 167

  return {
    x1: 200 + outer * Math.cos(angle),
    y1: 200 + outer * Math.sin(angle),
    x2: 200 + inner * Math.cos(angle),
    y2: 200 + inner * Math.sin(angle),
  }
})

export default function OrbitMark() {
  return (
    <figure className="orbit-figure">
      <svg className="orbit" viewBox="0 0 400 400" fill="none" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="0.6" opacity="0.45">
          {ticks.map((tick, i) => (
            <line key={i} {...tick} />
          ))}
        </g>

        <g className="orbit-rings" stroke="currentColor" strokeWidth="0.8">
          <circle cx="200" cy="200" r="152" opacity="0.5" />
          <ellipse
            cx="200"
            cy="200"
            rx="152"
            ry="62"
            transform="rotate(-22 200 200)"
            opacity="0.45"
            strokeDasharray="2 5"
          />
          <ellipse
            cx="200"
            cy="200"
            rx="98"
            ry="152"
            transform="rotate(28 200 200)"
            opacity="0.4"
          />
          <circle cx="200" cy="48" r="3.5" fill="var(--accent)" stroke="none" />
        </g>

        <g stroke="currentColor" opacity="0.6">
          <line x1="200" y1="186" x2="200" y2="214" />
          <line x1="186" y1="200" x2="214" y2="200" />
          <circle cx="200" cy="200" r="1.6" fill="currentColor" stroke="none" />
        </g>

        <g stroke="currentColor" opacity="0.5">
          <path d="M60 322h6M63 319v6" />
          <path d="M336 84h6M339 81v6" />
          <path d="M312 330h4M314 328v4" />
        </g>
      </svg>

      <figcaption className="orbit-caption">
        <span className="label">fig. 01 — orbital plot</span>
        <span className="label">epoch 2026.10</span>
      </figcaption>
    </figure>
  )
}
