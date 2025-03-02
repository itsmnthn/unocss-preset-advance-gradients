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
      { text: 'Border', link: '/border/getting-started' },
      { text: 'Text', link: '/text/getting-started' },
      { text: 'Gradients', link: '/gradients/getting-started' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        link: '/getting-started',
      },
      {
        text: 'Gradient Borders',
        items: [
          { text: 'Getting Started', link: '/border/getting-started' },
          { text: 'Sides & Sizes', link: '/border/sides-and-sizes' },
          { text: 'Rounded', link: '/border/rounded' },
        ],
      },
      {
        text: 'Gradient Text',
        items: [
          { text: 'Getting Started', link: '/text/getting-started' },
        ],
      },
      {
        text: 'Pre-Defined Gradients',
        items: [
          { text: 'Getting Started', link: '/gradients/getting-started' },
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
