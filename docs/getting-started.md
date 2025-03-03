# Getting Started

A UnoCSS preset that provides utilities for creating advanced gradient effects. This preset aims to be a comprehensive solution for all your gradient needs, from borders to text effects and pre-defined gradient themes.

Currently Available Features:

- [Gradient Borders](./border/getting-started.md)

  - Gradient borders with smooth transitions
  - Full border-radius support
  - Configurable border sides and widths
  - Hover/focus animations
  - Seamless compatibility with other gradient utilities

- [Gradient Text](./text/getting-started.md)

  - Animated gradient text effects
  - Text Gradient guid

Coming Soon:

- Pre-defined Gradients
  - Collection of beautiful gradient presets
  - Glassmorphism effects with gradient borders
  - Easy-to-use gradient themes
  - Animated Gradients

Key Benefits:

- Zero dependencies
- Lightweight implementation
- TypeScript support
- Simple and intuitive API

## Installation

In your project, you can install the `unocss-preset-advance-gradients` using:

:::code-group

```Bash [npm]
$ npm install -D unocss-preset-advance-gradients
```

```Bash [yarn]
$ yarn add -D unocss-preset-advance-gradients
```

```Bash [pnpm]
$ pnpm add -D unocss-preset-advance-gradients
```

```Bash [bun]
$ bun add -D unocss-preset-advance-gradients
```

:::

## Usage

Add preset to your `unocss.config.ts` file under presets

```Typescript
import { defineConfig } from 'unocss'
import presetAdvanceGradients from 'unocss-preset-advance-gradients'

export default defineConfig({
  presets: [
    presetAdvanceGradients(),
  ],
})
```
