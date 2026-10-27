const FIELDS = {
  a: `   .        +         .      .          .
       .         .        *       .
  +        .        .         .        +
      .        +        .       .   .
   .        .        *        +       .
        .        .         .       .`,
  b: `  .        *         .          +       .
       +        .        .     .        .
  .        .        +        *       .
        .         .       .        .   +
  +        .        .        .      .`,
  c: `        .       +          .        .
   .        .        .          *      .
 +       *        .       .        .  .
      .        .        +       .      .
   .        .       .        .      +`,
  wide: `   .        +          .                 .          .
        .        .          *      .        +        .
  +          .        .        .          .       *         .
       *        .        +          .        .        .     +
   .        .        .        .         *        .      .   .
          .        *       .        +        .       .      .
 +       .       .        .       .        .       *      .
      .        .        .        .       .       .      + .
   .        +        .        *        .        .       .  .
        .        .       .        .        .        +      .`,
  cluster: `            .  .  .                +
         .    *      .        .            .
    .        .   .       +          .   .
  +      .        .   .        .        *   .
      .       *        .   .        .        .
 .        .        +        .   .       .   .`,
}

export default function Starfield({ variant = 'a', className = '' }) {
  return (
    <pre className={`starfield ${className}`} aria-hidden="true">
      {FIELDS[variant]}
    </pre>
  )
}
