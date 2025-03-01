# Gradient Border Sides

The gradient border preset provides intuitive shortcuts for applying gradient borders to specific sides of an element. This allows for precise control over where the gradient borders appear.

## Available Side Shortcuts

- `gb` or `gb-{width}` - Border only (default 1px)
- `gb-t` or `gb-t-{width}` - Top border only (default 1px)
- `gb-b` or `gb-b-{width}` - Bottom border only (default 1px)
- `gb-l` or `gb-l-{width}` - Left border only (default 1px)
- `gb-r` or `gb-r-{width}` - Right border only (default 1px)
- `gb-x` or `gb-x-{width}` - Horizontal borders (left + right) (default 1px)
- `gb-y` or `gb-y-{width}` - Vertical borders (top + bottom) (default 1px)

You can also combine multiple sides using combinations like:

- `gb-tb` or `gb-tb-{width}` - Top and bottom borders (default 1px)
- `gb-lr` or `gb-lr-{width}` - Left and right borders (default 1px)
- `gb-tl` or `gb-tl-{width}` - Top and left borders (default 1px)
- `gb-tr` or `gb-tr-{width}` - Top and right borders (default 1px)
- `gb-bl` or `gb-bl-{width}` - Bottom and left borders (default 1px)
- `gb-br` or `gb-br-{width}` - Bottom and right borders (default 1px)
- `gb-yr` or `gb-yr-{width}` - Top, Bottom and right borders (default 1px)
- `gb-xt` or `gb-xt-{width}` - Left, Right and Top borders (default 1px)

## Preview

### Default Border

<div
  class="p-2 rounded mt-4 gb gb-4 after:bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/5 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>

```html [Code]
<div
  class="p-2 rounded mt-4 gb gb-4 after:bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/5 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  <!-- code block -->
</div>
```

</div>

### `t` - Top Border

<div
  class="p-1 mt-4 gb gb-t-2 after:bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/5 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>

```html [Code]
<div
  class="p-1 mt-4 gb gb-t-2 after:bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/5 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  <!-- code block -->
</div>
```

</div>

### `x` - Left and Right Borders

<div
  class="p-1 mt-4 gb gb-x-2 after:bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/5 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>

```html [Code]
<div
  class="p-1 mt-4 gb gb-x-2 after:bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/5 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  <!-- code block -->
</div>
```

</div>

### `b` - Bottom Border

<div
  class="p-1 mt-4 rounded-lg gb gb-b-2 hover:gb-2 after:bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/5 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>

```html [Code]
<div
  class="p-1 mt-4 rounded-lg gb gb-b-2 hover:gb-2 after:bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/5 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  <!-- code block -->
</div>
```

</div>

### `l` - Left Border

<div
  class="p-1 mt-4 gb gb-l-5 hover:gb-ly-5 after:bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/5 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>

```html [Code]
<div
  class="p-1 mt-4 gb gb-l-5 hover:gb-ly-5 after:bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/5 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  <!-- code block -->
</div>
```

</div>

### `r` - Right Border

<div
  class="p-1 mt-4 gb gb-r-2 hover:gb-r-4 after:bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/5 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>

```html [Code]
<div
  class="p-1 mt-4 gb gb-r-2 hover:gb-r-4 after:bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/5 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  <!-- code block -->
</div>
```

</div>

### `y` - Top & Bottom Borders

<div
  class="p-1 mt-4 gb gb-y-2 after:bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/5 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>

```html [Code]
<div
  class="p-1 mt-4 gb gb-y-2 after:bg-gradient-fn-to-lt bg-gradient-fn-ease-in-expo/5 bg-gradient-fn-from-[#ffd200] bg-gradient-fn-to-[#f0008b] hover:bg-gradient-fn-from-[#7800e1] hover:bg-gradient-fn-to-[#c2f3ff] transition-colors duration-1s"
>
  <!-- code block -->
</div>
```

</div>
