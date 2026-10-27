export default function PiscesMark({ className = '' }) {
  return (
    <svg
      className={`pisces ${className}`}
      viewBox="0 0 640 320"
      fill="none"
      aria-hidden="true"
    >
      <g fill="currentColor" opacity="0.28">
        <circle cx="90" cy="86" r="1.1" />
        <circle cx="128" cy="238" r="1" />
        <circle cx="410" cy="92" r="1.1" />
        <circle cx="592" cy="76" r="1" />
        <circle cx="568" cy="302" r="1.1" />
        <circle cx="340" cy="300" r="1" />
      </g>

      <g stroke="currentColor" strokeWidth="0.9" opacity="0.55">
        {/* northern cord to the northern fish */}
        <path d="M200 285L215 245L230 205L245 165L260 125L278 90L300 58" />
        {/* northern fish head */}
        <path d="M300 58L318 36L340 48L332 72L310 78Z" />
        {/* southern cord to the circlet */}
        <path d="M200 285L245 274L295 263L350 256L405 252L455 250L490 252" />
        {/* circlet */}
        <path d="M490 252L512 228L538 236L550 258L538 282L512 288L493 274Z" />
      </g>

      <g fill="currentColor">
        <circle className="pisces-knot" cx="200" cy="285" r="2.8" />

        {/* northern cord */}
        <circle cx="215" cy="245" r="1.5" />
        <circle cx="230" cy="205" r="1.5" />
        <circle cx="245" cy="165" r="1.5" />
        <circle cx="260" cy="125" r="1.5" />
        <circle cx="278" cy="90" r="1.6" />
        <circle cx="300" cy="58" r="1.7" />

        {/* northern fish head */}
        <circle cx="318" cy="36" r="1.8" />
        <circle cx="340" cy="48" r="1.5" />
        <circle cx="332" cy="72" r="1.5" />
        <circle cx="310" cy="78" r="1.5" />

        {/* southern cord */}
        <circle cx="245" cy="274" r="1.5" />
        <circle cx="295" cy="263" r="1.5" />
        <circle cx="350" cy="256" r="1.5" />
        <circle cx="405" cy="252" r="1.7" />
        <circle cx="455" cy="250" r="1.5" />
        <circle cx="490" cy="252" r="1.6" />

        {/* circlet */}
        <circle cx="512" cy="228" r="1.7" />
        <circle cx="538" cy="236" r="1.5" />
        <circle cx="550" cy="258" r="1.8" />
        <circle cx="538" cy="282" r="1.5" />
        <circle cx="512" cy="288" r="1.5" />
        <circle cx="493" cy="274" r="1.5" />
      </g>

      <g stroke="currentColor" strokeWidth="1" opacity="0.9">
        <path d="M200 279v12M194 285h12" />
        <path d="M340 42v12M334 48h12" />
        <path d="M550 252v12M544 258h12" />
      </g>
    </svg>
  )
}
