// Seeded, hand-tuned ASCII star fields. Fixed compositions with intended clusters, gaps, and density changes.
// The random seed only supplies the irregular placement; the density fields define the composition.

const FIELDS = {
  wide: ` +             .  :                  .
                      '        '      .   :         :
                                         .    '  :
                       .       .     * +.+.    *
     :  .           :     :.     + + + . +   +    .       .
                     *. .  .  .*   *  .. . +* '.
  .       ..     +:  + :      .   .+      .
      .       :   ..+' '   .       .
        . +       .   . .'   .'.:
 ..  +++   .   .:  .        . .  +  .`,
  cluster: `     .
                                          *
       *    '  +            .
     .  *   . . .     . +         .
  :         :   : .    ' .
.     :   + +: +.. :      .
 : '     .    +.*   +
.      *     .*            .`,
  knot: `          .    ' .        .
       .    +  '+    .
   :   + . .   .
     .    +   .
    .       +      .`,
}

export default function Starfield({ variant = 'wide', className = '' }) {
  return (
    <pre className={`starfield ${className}`} aria-hidden="true">
      {FIELDS[variant]}
    </pre>
  )
}
