import type { Preset, Rule } from 'unocss'

/**
 * Collection of UnoCSS rules for gradient borders
 */
const rules: Rule[] = [
  // Base rule for gradient-border with :after and :before handling
  // Usage: [variant-]gb or [variant-]gradient-border
  // Variants: a (after), b (before), ab/ba (both)
  // Example: gb (default after), b-gb (before only), ab-gb (both)
  [
    /^(a|b|ab|ba)?-?(gradient-border|g-border|gradient-b|gb|g-b)$/,
    ([match, variant]) => {
      const baseClass = `.${match}`
      const afterClass = `${baseClass}::after`
      const beforeClass = `${baseClass}::before`

      // Base styles applied to the container element
      const baseRules = `position: relative;overflow: hidden;background: transparent;`
        + `--unag-border-top-width: var(--un-border-top-width, 1px);`
        + `--unag-border-bottom-width: var(--un-border-bottom-width, 1px);`
        + `--unag-border-left-width: var(--un-border-left-width, 1px);`
        + `--unag-border-right-width: var(--un-border-right-width, 1px);`

      // Shared styles for pseudo-elements that create the gradient border effect
      const pseudoRules = `content: '';position: absolute;inset: 0;` /* Fill the container's area */
        + `box-sizing: border-box;` /* Important so padding respects the radius! */
        + `border-radius: inherit;` /* Match container's border radius */
        // + `background: transparent;` /* The gradient for the ring (adjust to your liking) */
        + `padding-top: var(--unag-border-top-width);padding-bottom: var(--unag-border-bottom-width);`
        + `padding-left: var(--unag-border-left-width);padding-right: var(--unag-border-right-width);` /* The "ring thickness" is how much you 'push in' from the edges
         to carve out the center. e.g., 10px = a 10px ring around the edges. */

        + `-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0) border-box;` /* The mask that excludes (XOR) the center box so the parent's
          background shows through. */
        + `mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0) border-box;` /* The "inner hole" uses content-box (area minus padding). The
          "outer shape" uses border-box (the full element). */
        + `-webkit-mask-composite: xor;` /* old WebKit syntax */
        + `mask-composite: exclude;`/* modern syntax (Chrome, Safari, Firefox) */
        + `pointer-events: none;`
        + `will-change: opacity, color, background-color, border-color;`
        + `transition-property: opacity, color, background-color, border-color;`
        + `transition-duration: 0.3s;transition-timing-function: ease-in-out;`

      // Default to only `::after` if no variant specified
      if (!variant) {
        return `${baseClass}{${baseRules}}${afterClass}{${pseudoRules}}`
      }

      // If 'b' or 'a' is specified, return respective pseudo-elements
      let style = `${baseClass}{${baseRules}}`

      if (variant.includes('b')) {
        style += `${beforeClass}{${pseudoRules}}`
      }

      if (variant.includes('a')) {
        style += `${afterClass}{${pseudoRules}}`
      }

      return style
    },
    {
      autocomplete: '(a|b|ab|ba)?-?(gradient-border|g-border|gradient-b|gb|g-b)',
    },
  ],

  // Rule for setting border widths on specific sides
  // Usage: gb-[sides]-[width] or gradient-border-[sides]-[width] or gb-[width]
  // Example: gb-t-2 (2px top border), gb-xy-4 (4px horizontal and vertical borders), gb-2 (2px all sides)
  [
    // /^(gradient-border|g-border|gradient-b|gb|g-b)(?:-([tblrxy]+)(?:-(\d+))?|-(\d+))$/,
    /^(gradient-border|g-border|gradient-b|gb|g-b)(?:-([tblrxy]+)(?:-(\d+(?:\.\d+)?))?|-(\d+(?:\.\d+)?))$/,
    ([_match, _selector, sides, sideValue, value]) => {
      // Handle case where value is directly specified without sides
      value = sideValue || value || '1'

      if (!sides) {
        // If no specific side is mentioned, apply to all sides
        return {
          '--un-border-top-width': `${value}px`,
          '--un-border-bottom-width': `${value}px`,
          '--un-border-left-width': `${value}px`,
          '--un-border-right-width': `${value}px`,
        }
      }

      // Default all borders to 0px first
      const styles = {
        '--un-border-top-width': '0px',
        '--un-border-bottom-width': '0px',
        '--un-border-left-width': '0px',
        '--un-border-right-width': '0px',
      }

      // Apply the specified sides
      // t = top, b = bottom, l = left, r = right
      // x = left + right, y = top + bottom
      if (sides.includes('t')) {
        styles['--un-border-top-width'] = `${value}px`
      }
      if (sides.includes('b')) {
        styles['--un-border-bottom-width'] = `${value}px`
      }
      if (sides.includes('l')) {
        styles['--un-border-left-width'] = `${value}px`
      }
      if (sides.includes('r')) {
        styles['--un-border-right-width'] = `${value}px`
      }
      if (sides.includes('x')) {
        styles['--un-border-left-width'] = `${value}px`
        styles['--un-border-right-width'] = `${value}px`
      }
      if (sides.includes('y')) {
        styles['--un-border-top-width'] = `${value}px`
        styles['--un-border-bottom-width'] = `${value}px`
      }

      return styles
    },
    {
      autocomplete: [
        '(gradient-border|g-border|gradient-b|gb|g-b)-<tblrxy>',
        '(gradient-border|g-border|gradient-b|gb|g-b)-<tblrxy>-<num>',
        '(gradient-border|g-border|gradient-b|gb|g-b)-<num>',
      ],
    },
  ],
]

/**
 * UnoCSS preset providing gradient border utilities:
 * 1. A single animated gradient border.
 * 2. A dual gradient border that fades on hover/focus.
 *
 * @example
 * // Single border on all sides with 2px width
 * <div class="gradient-border gb-2 after:(gradient)">...</div>
 *
 * // Gradient border only on top and bottom with 4px width
 * <div class="gradient-border gb-y-4 after:(gradient)">...</div>
 *
 * // Dual gradient borders using both pseudo-elements
 * <div class="ab-gradient-border gb-2 after:(gradient hover:op-0) before:(gradient)">...</div>
 */
export function presetAdvanceGradientsBorder(): Preset {
  return {
    name: 'unocss-preset-advance-gradients-border',
    rules,
  }
}
