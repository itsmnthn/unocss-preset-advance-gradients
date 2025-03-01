# Gradient Border

A UnoCSS preset that provides utilities for creating gradient borders to support smooth transitions and animations. This preset uses pseudo-elements (`:after` and `:before`) to enable gradient borders that support border-radius and hover/focus animations. Unlike traditional CSS border gradients, this approach allows for true border-radius support and smooth transitions between different gradient states.

Key features:

- Single gradient borders using `:after` pseudo-element for simple gradient effects
- Double gradient borders using both `:after` and `:before` pseudo-elements, enabling smooth cross-fade transitions between two different gradients
- Full support for border-radius without distortion or artifacts
- Smooth animations and transitions for hover/focus states
- Precise control over border widths (1px to any size)
- Configurable border sides with intuitive shortcuts:
  - `t` - top border
  - `b` - bottom border
  - `l` - left border
  - `r` - right border
  - `x` - horizontal borders (left + right)
  - `y` - vertical borders (top + bottom)
  - Combine multiple sides (e.g. `tb`, `lr`, `tl`, etc.)
- Seamless compatibility with other gradient utilities like `unocss-preset-gradient-fn` for enhanced gradient control
- Zero dependencies and lightweight implementation
- TypeScript support out of the box

## Single(`:after`) Gradient

<div
  class="p-1 rounded-lg gb gb-1 after:(bg-gradient-to-r from-blue-500 via-blue-300 to-blue-100 hover:to-blue-500)"
>

```html [Code]
<div class="p-1 rounded-lg gb gb-1 after:(bg-gradient-to-r from-blue-500 via-blue-300 to-blue-100 hover:to-blue-500)">
  Single(:after) Gradient
</div>
```

</div>

<br>

Use [`unocss-preset-gradient-fn`](https://github.com/onmax/unocss-preset-gradient-fn) for smooth gradient transition

<div
  class="p-1 rounded-xl gb gb-2 after:bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/5 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>

```html [Code]
<div
  class="p-1 rounded-xl gb gb-2 after:bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/5 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  Smooth transition using `unocss-preset-gradient-fn`
</div>
```

</div>

## Double(`:after` & `:before`) Gradient for smooth transition

<div
  class="p-1 rounded-xl gb-ba gb-2 after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>

```html [Code]
<div
  class="p-1 rounded-xl gb-ba gb-2 after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-red-500 via-red-300 to-red-100)"
>
  Double(`:after` & `:before`) Gradient for smooth transition
</div>
```

</div>
