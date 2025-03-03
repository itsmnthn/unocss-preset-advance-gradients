# UnoCSS Preset Advance Gradients

A UnoCSS preset that provides advanced gradient utilities for borders and text.

[Read the documentation](https://unocss-preset-advance-gradients.itsmnthn.dev/) for detailed usage examples and API reference.

## Features

- Border gradients with customizable angles and colors
- Text gradients with multiple color stops
- Compatible with UnoCSS v0.66+

## Installation

In your project, you can install the unocss-preset-advance-gradients using:

```bash
pnpm add -D unocss-preset-advance-gradients
```

## Usage

Add preset to your unocss.config.ts file under presets

```typescript
import { defineConfig } from 'unocss'
import presetAdvanceGradients from 'unocss-preset-advance-gradients'

export default defineConfig({
  presets: [
    presetAdvanceGradients(),
  ],
})
```
