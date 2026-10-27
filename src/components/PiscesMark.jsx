export default function PiscesMark({ className = '' }) {
  return (
    <svg
      className={`pisces ${className}`}
      viewBox="0 0 480 220"
      fill="none"
      aria-hidden="true"
    >
      {/* ecliptic */}
      <path
        d="M18 205H462"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeDasharray="1 7"
        opacity="0.22"
      />

      <g stroke="currentColor" strokeWidth="0.9" opacity="0.55">
        {/* cord: circlet to the knot */}
        <path d="M103 68L118 78L142 96L172 120L205 150L240 184" />
        {/* cord: knot to the northern fish */}
        <path d="M240 184L275 150L308 120L338 96L362 78L377 68" />
        {/* left fish / circlet */}
        <path d="M103 68L92 42L70 28L44 38L36 62L52 82L78 84Z" />
        {/* northern fish */}
        <path d="M377 68L388 42L410 28L436 38L444 62L428 82L402 84Z" />
      </g>

      <g fill="currentColor">
        <circle className="pisces-knot" cx="240" cy="184" r="2.8" />

        {/* cord stars */}
        <circle cx="118" cy="78" r="1.5" />
        <circle cx="142" cy="96" r="1.5" />
        <circle cx="172" cy="120" r="1.5" />
        <circle cx="205" cy="150" r="1.5" />
        <circle cx="275" cy="150" r="1.5" />
        <circle cx="308" cy="120" r="1.5" />
        <circle cx="338" cy="96" r="1.5" />
        <circle cx="362" cy="78" r="1.5" />

        {/* circlet fish */}
        <circle cx="103" cy="68" r="1.6" />
        <circle cx="92" cy="42" r="1.5" />
        <circle cx="70" cy="28" r="1.6" />
        <circle cx="44" cy="38" r="1.5" />
        <circle cx="36" cy="62" r="1.5" />
        <circle cx="52" cy="82" r="1.5" />
        <circle cx="78" cy="84" r="1.5" />

        {/* northern fish */}
        <circle cx="377" cy="68" r="1.6" />
        <circle cx="388" cy="42" r="1.5" />
        <circle cx="410" cy="28" r="1.6" />
        <circle cx="436" cy="38" r="1.5" />
        <circle cx="444" cy="62" r="1.5" />
        <circle cx="428" cy="82" r="1.5" />
        <circle cx="402" cy="84" r="1.5" />
      </g>

      <g stroke="currentColor" strokeWidth="1" opacity="0.9">
        <path d="M240 178v12M234 184h12" />
        <path d="M70 22v12M64 28h12" />
        <path d="M410 22v12M404 28h12" />
      </g>
    </svg>
  )
}
