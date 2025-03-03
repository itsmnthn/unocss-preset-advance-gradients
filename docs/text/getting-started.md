# Gradient Text

Easily create stunning text with gradient color effects. This feature provides both static and interactive hover transitions—perfect for highlighting titles, headings, or any text needing extra flair.

## Basic Usage

To apply gradient text, add the `gradient-text` class along with UnoCSS gradient utility classes:

<span class="gradient-text text-4xl bg-gradient-to-r from-blue-500 via-blue-300 to-blue-700 hover:(from-red-300 to-red-700)">
Text with gradient
</span>

```html
<span
  class="gradient-text text-4xl bg-gradient-to-r from-blue-500 via-blue-300 to-blue-700 hover:(from-red-300 to-red-700)"
>
  Text with gradient
</span>
```

Tip: Using [`unocss-preset-gradient-fn`](https://github.com/onmax/unocss-preset-gradient-fn) enables smooth gradient transitions or write your own.

## Smooth Transitions with `unocss-preset-gradient-fn`

A **highly fluid** gradient text effect with animated transitions.

<span class="gradient-text text-4xl bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/2 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s">
Text with gradient
</span>

```html
<span
  class="gradient-text text-4xl bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/2 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  Text with gradient
</span>
```

## Important Notes

- **Use Inline Elements**: The `gradient-text` rule sets `display: inline-block` and `width: fit-content` so the gradient background is clipped exactly to the text. If you switch to a block element or remove these properties, the gradient area will stretch beyond the text, so only part of the gradient might be visible.

### Example: Block Element

<div class="mt-4 !block !w-full gradient-text text-4xl bg-gradient-fn-to-r bg-gradient-fn-ease-in-expo/20 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s">
Block element
</div>

```html
<div
  class="!block !w-full gradient-text text-4xl bg-gradient-fn-to-r bg-gradient-fn-ease-in-expo/20 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  Block element
</div>
```

## Example usages

### Single-Line Text

Ideal for short words, phrases, or headings:

<span class="mt-4 gradient-text text-4xl bg-gradient-fn-to-r bg-gradient-fn-ease-in-expo/20 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s">
Inline Element
</span>

```html
<span
  class="gradient-text text-4xl bg-gradient-fn-to-r bg-gradient-fn-ease-in-expo/20 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  Inline Element
</span>
```

### Multi-Line Text (X-Axis Gradient)

The gradient extends left-to-right across multiple lines:

<span class="mt-4 gradient-text text-xl bg-gradient-fn-to-r bg-gradient-fn-ease-in-expo/20 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</span>

```html
<span
  class="gradient-text text-xl bg-gradient-fn-to-r bg-gradient-fn-ease-in-expo/20 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</span>
```

### Multi-Line, Non-X-Axis Gradient

Similarly, you can use bg-gradient-fn-to-tl, bg-gradient-fn-to-br, etc. to control the direction.

<span class="gradient-text text-xl bg-gradient-fn-to-tl bg-gradient-fn-ease-in-expo/20 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</span>

```html
<span
  class="gradient-text text-xl bg-gradient-fn-to-tl bg-gradient-fn-ease-in-expo/20 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</span>
```

### Multi-Line, Non-X-Axis Gradient

For vertical or diagonal gradients across multiple lines, you might encounter a large bounding box. You can either:

1. Allow a continuous gradient to span across lines
2. Repeat the gradient per line with `bg-repeat` and `background-size: 100% line-height`

<span class="gradient-text text-xl bg-repeat bg-gradient-to-br from-blue-500 via-blue-300 via-orange-300 to-red-600" style="background-size: 100% 28px;" >
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</span>

```html
<span
  class="gradient-text text-xl bg-repeat bg-gradient-to-br from-blue-500 via-blue-300 via-orange-300 to-red-600"
  style="background-size: 100% 28px"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</span>
```

### Multi-Line, Manual Line Splitting

If you want a fresh gradient on each line instead of one continuous span, you can manually split the text into separate `<span>` elements:

<span class="mt-4 gradient-text text-xl bg-gradient-fn-to-tl bg-gradient-fn-ease-in-expo/20 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
</span>
<span class="gradient-text text-xl bg-gradient-fn-to-tl bg-gradient-fn-ease-in-expo/20 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s">
 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
</span>
<span class="gradient-text text-xl bg-gradient-fn-to-tl bg-gradient-fn-ease-in-expo/20 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s">
 veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
</span>
<span class="gradient-text text-xl bg-gradient-fn-to-tl bg-gradient-fn-ease-in-expo/20 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s">
 commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
</span>
<span class="gradient-text text-xl bg-gradient-fn-to-tl bg-gradient-fn-ease-in-expo/20 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s">
 velit esse cillum dolore eu fugiat nulla pariatur.
</span>

Each `<span>` restarts the gradient, so each line uses the entire color range again.

```html
<span
  class="gradient-text text-xl bg-gradient-fn-to-tl bg-gradient-fn-ease-in-expo/20 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
</span>
<span
  class="gradient-text text-xl bg-gradient-fn-to-tl bg-gradient-fn-ease-in-expo/20 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
</span>
<span
  class="gradient-text text-xl bg-gradient-fn-to-tl bg-gradient-fn-ease-in-expo/20 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
</span>
<span
  class="gradient-text text-xl bg-gradient-fn-to-tl bg-gradient-fn-ease-in-expo/20 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
</span>
<span
  class="gradient-text text-xl bg-gradient-fn-to-tl bg-gradient-fn-ease-in-expo/20 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  velit esse cillum dolore eu fugiat nulla pariatur.
</span>
```
