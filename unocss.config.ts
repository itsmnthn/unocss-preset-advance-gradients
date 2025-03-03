import extractorMdc from '@unocss/extractor-mdc'
import { defineConfig, presetWind3, transformerVariantGroup } from 'unocss'
import { presetGradientFn } from 'unocss-preset-gradient-fn'
import { presetAdvanceGradients } from './src/index.ts'

export default defineConfig({
  presets: [
    presetWind3(),
    presetAdvanceGradients(),
    presetGradientFn(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  extractors: [
    extractorMdc(),
  ],
})
