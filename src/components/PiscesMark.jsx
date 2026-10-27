export default function PiscesMark({ className = '' }) {
  return (
    <svg
      className={`pisces ${className}`}
      viewBox="0 0 480 200"
      fill="none"
      aria-hidden="true"
    >
      {/* ecliptic */}
      <path
        d="M18 158H462"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeDasharray="1 7"
        opacity="0.25"
      />

      <g stroke="currentColor" strokeWidth="0.9" opacity="0.55">
        {/* circlet: the western fish head */}
        <path d="M72 86L92 96L98 114L86 132L66 136L48 124L46 104Z" />
        {/* southern cord: circlet to the knot */}
        <path d="M98 114L135 126L172 134L205 128L230 112L255 92" />
        {/* northern cord: knot to Alpherg */}
        <path d="M255 92L280 68L305 45L330 30L350 24" />
        {/* northern fish: an open chain around Alpherg */}
        <path d="M350 24L380 14L408 24L432 44L444 68L436 92L414 108L388 116L362 112" />
      </g>

      <g fill="currentColor">
        {/* knot and cord stars */}
        <circle className="pisces-knot" cx="255" cy="92" r="2.7" />
        <circle cx="135" cy="126" r="1.5" />
        <circle cx="172" cy="134" r="1.5" />
        <circle cx="205" cy="128" r="1.5" />
        <circle cx="230" cy="112" r="1.5" />
        <circle cx="280" cy="68" r="1.5" />
        <circle cx="305" cy="45" r="1.5" />
        <circle cx="330" cy="30" r="1.5" />

        {/* circlet stars */}
        <circle cx="72" cy="86" r="1.5" />
        <circle cx="92" cy="96" r="1.5" />
        <circle cx="98" cy="114" r="1.5" />
        <circle cx="86" cy="132" r="1.5" />
        <circle cx="66" cy="136" r="1.5" />
        <circle cx="48" cy="124" r="1.5" />
        <circle cx="46" cy="104" r="1.5" />

        {/* Alpherg and the northern fish */}
        <circle cx="350" cy="24" r="2.1" />
        <circle cx="380" cy="14" r="1.5" />
        <circle cx="408" cy="24" r="1.5" />
        <circle cx="432" cy="44" r="1.5" />
        <circle cx="444" cy="68" r="1.5" />
        <circle cx="436" cy="92" r="1.5" />
        <circle cx="414" cy="108" r="1.5" />
        <circle cx="388" cy="116" r="1.5" />
        <circle cx="362" cy="112" r="1.5" />
      </g>

      <g stroke="currentColor" strokeWidth="1" opacity="0.9">
        <path d="M255 86v12M249 92h12" />
        <path d="M350 18v12M344 24h12" />
      </g>
    </svg>
  )
}
