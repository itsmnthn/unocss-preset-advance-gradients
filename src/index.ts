import type { Preset } from 'unocss'
import { presetAdvanceGradientsBorder } from './border.ts'
import { presetAdvanceGradientsText } from './text.ts'

export function presetAdvanceGradients(): Preset {
  return {
    name: 'unocss-preset-advance-gradients',
    presets: [
      presetAdvanceGradientsBorder(), // Gradient border
      presetAdvanceGradientsText(), // Gradient text
    ],
  }
}
