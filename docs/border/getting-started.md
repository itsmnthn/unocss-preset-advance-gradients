# Gradient Border

A **lightweight UnoCSS preset** that enables **dynamic gradient borders** using pseudo-elements (`:after` and `:before`). Unlike traditional CSS border gradients, this approach **preserves border-radius**, allowing smooth **animations and transitions** between different gradient states.

## ✨ Features

- **True border-radius support** without distortion or artifacts
- **Single (`:after`) and Double (`:before & :after`) borders** for advanced gradient effects
- **Smooth animations & transitions** on hover/focus
- **Fully configurable border width** (from `1px` to any size)
- **Precise side control with intuitive shortcuts:**
  - `t` → top border
  - `b` → bottom border
  - `l` → left border
  - `r` → right border
  - `x` → horizontal borders (left & right)
  - `y` → vertical borders (top & bottom)
  - **Combine multiple sides:** `tb`, `lr`, `tl`, etc.
- **Works seamlessly** with `unocss-preset-gradient-fn` for enhanced **gradient control**
- **Zero dependencies & Autocomplete support out of the box** 🚀

## Single (`:after`) Gradient Border

A simple **single-gradient border** using the `:after` pseudo-element.

<div
  class="p-1 rounded-lg gradient-border after:(bg-gradient-to-r from-blue-500 via-blue-300 to-blue-100 hover:to-blue-500)"
>

```html
<div
  class="p-1 rounded-lg gradient-border after:(bg-gradient-to-r from-blue-500 via-blue-300 to-blue-100 hover:to-blue-500)"
>
  Single (`:after`) Gradient
</div>
```

</div>

🔗 **Enhance your gradients!** Use [`unocss-preset-gradient-fn`](https://github.com/onmax/unocss-preset-gradient-fn) for **smooth gradient transitions.**

## Smooth Transitions with `unocss-preset-gradient-fn`

A **highly fluid** gradient border effect with animated transitions.

<div
  class="p-1 rounded-xl gradient-border gb-2 after:bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/5 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>

```html
<div
  class="p-1 rounded-xl gradient-border gb-2 after:bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/5 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  Smooth transition using `unocss-preset-gradient-fn`
</div>
```

</div>

## Double (`:before` & `:after`) Gradient for Smooth Transitions

For **advanced effects**, apply a **gradient to both pseudo-elements (`:before` & `:after`)**. This allows for **smooth fade-out/in transitions**.

<div
  class="p-1 rounded-xl ab-gb gradient-border-2 after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>

```html
<div
  class="p-1 rounded-xl ab-gb gradient-border-2 after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>
  Double (`:after` & `:before`) Gradient for smooth transition
</div>
```

</div>

## 🛠 Additional Customizations

- **Increase border width**: `gradient-border-4` (4px width)
- **Only top border**: `gradient-border-t-2`
- **Horizontal (left & right) borders**: `gradient-border-x-3`
- **Both pseudo-elements + bottom border**: `ab-gradient-border-b-2`

**Now, apply gradient borders with ease!** 🚀🔥
Let me know if you'd like any further improvements! 😃
