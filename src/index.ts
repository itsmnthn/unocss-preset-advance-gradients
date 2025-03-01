import type { Preset } from 'unocss'
import presetAdvanceGradientsBorder from './border.ts'

export function presetAdvanceGradients(): Preset {
  return {
    name: 'unocss-preset-advance-gradients',
    presets: [
      presetAdvanceGradientsBorder(), // Gradient border
    ],
  }
}

export default presetAdvanceGradients
