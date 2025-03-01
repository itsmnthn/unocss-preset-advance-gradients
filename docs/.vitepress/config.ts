import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Advance Gradients',
  description: 'UnoCSS preset for advance gradients for border and text.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Usage', link: '/usage' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Why Use This Preset?', link: '/getting-started/why-use-this-preset' },
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Configuration', link: '/getting-started/configuration' },
        ],
      },
      {
        text: 'Gradient Borders',
        items: [
          { text: 'Getting Started', link: '/border/getting-started' },
          { text: 'Sides', link: '/border/sides' },
          { text: 'Animation', link: '/border/animation' },
        ],
      },
      {
        text: 'Gradient Text',
        items: [
          { text: 'Basic Usage', link: '/gradient-text/basic-usage' },
          { text: 'Animation', link: '/gradient-text/animation' },
        ],
      },
      {
        text: 'Pre-Defined Gradients',
        items: [
          { text: 'Basic Usage', link: '/pre-defined-gradients/basic-usage' },
          { text: 'Animation', link: '/pre-defined-gradients/animation' },
          { text: 'Glassmorphism', link: '/pre-defined-gradients/glassmorphism' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/itsmnthn/unocss-preset-advance-gradients' },
    ],
  },
  vite: {
    plugins: [
      UnoCSS({
        configFile: '../../unocss.config.ts',
      }) as any,
    ],
  },
})
