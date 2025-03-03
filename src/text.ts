import type { Preset, Rule } from 'unocss'

/**
 * Collection of UnoCSS rules for gradient text effects
 */
export const rules: Rule[] = [
  // Base rule for gradient text with background clipping
  // Usage: [variant-]gt or [variant-]gradient-text
  // Example: gt, gradient-text, g-text
  [/^(gradient-text|g-text|gradient-t|gt|g-t)$/, () => {
    return {
      /* Make the text itself transparent so the background shows through */
      'color': 'transparent',

      /* Clip the background gradient to the text shape */
      '-webkit-background-clip': 'text',
      'background-clip': 'text',

      /* For smoother text rendering across browsers */
      '-webkit-text-fill-color': 'transparent',
      '-webkit-font-smoothing': 'antialiased',

      /* Support gradient across multiple lines */
      'display': 'inline-block',
      'width': 'fit-content',
    }
  }, {
    autocomplete: '(gradient-text|g-text|gradient-t|gt|g-t)',
  }],
]

/**
 * UnoCSS preset providing gradient text utilities
 * Allows creating text with gradient background effects
 *
 * @example
 * // Basic gradient text
 * <span class="gradient-text bg-gradient-to-r from-blue-500 to-purple-500">
 *   Gradient Text
 * </span>
 */
export function presetAdvanceGradientsText(): Preset {
  return {
    name: 'unocss-preset-advance-gradients-text',
    rules,
  }
}

export default presetAdvanceGradientsText
