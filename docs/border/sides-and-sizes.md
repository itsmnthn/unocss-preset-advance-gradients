# Gradient Border Sides & Widths

The Gradient Border preset offers convenient utilities to control **which sides** of an element have a gradient border, as well as **how wide** those borders should be.

## Usage & Defaults

- **Default width**: `1px` if no `{width}` is specified
- **Base Class**: `gb` (gradient border)

## **Side Shorthands & Examples**

1. **All Sides**

   - `gb` → all sides at `1px`
   - `gb-{width}` → all sides at `{width}px` (e.g. `gb-2`)

2. **Single Side**

   - `gb-t` / `gb-t-{width}` → **top** only
   - `gb-b` / `gb-b-{width}` → **bottom** only
   - `gb-l` / `gb-l-{width}` → **left** only
   - `gb-r` / `gb-r-{width}` → **right** only

3. **Horizontal & Vertical**

   - `gb-x` / `gb-x-{width}` → **left + right**
   - `gb-y` / `gb-y-{width}` → **top + bottom**

4. **Combining Multiple Sides**
   You can **mix** any sides for custom combinations:
   - `gb-tb` / `gb-tb-{width}` → **top + bottom**
   - `gb-lr` / `gb-lr-{width}` → **left + right**
   - `gb-tl` / `gb-tl-{width}` → **top + left**
   - `gb-tr` / `gb-tr-{width}` → **top + right**
   - `gb-bl` / `gb-bl-{width}` → **bottom + left**
   - `gb-br` / `gb-br-{width}` → **bottom + right**
   - `gb-yr` / `gb-yr-{width}` → **top, bottom + right**
   - `gb-xt` / `gb-xt-{width}` → **left, right + top**

### Examples

- `gb-2` → all sides, **2px** wide
- `gb-t-3` → **top** only, **3px** wide
- `gb-y-4` → **vertical** (top + bottom), **4px** wide
- `gb-tb-2` → **top + bottom** only, **2px** wide

Use these side & width utilities in combination with the gradient border classes (`gradient-border`, `gb`, etc.) to quickly apply exact borders where you need them, with any width you prefer.

#### Default Border

<div
  class="p-2 rounded mt-4 ab-gradient-border after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>

```html
<div
  class="p-2 rounded mt-4 ab-gradient-border after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>
  <!-- code block -->
</div>
```

</div>

#### `t` - Top Border

<div
  class="p-1 mt-4 ab-g-border gb-t after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>

```html
<div
  class="p-1 mt-4 ab-g-border gb-t after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>
  <!-- code block -->
</div>
```

</div>

#### `x` - Left and Right Borders

<div
  class="p-1 mt-4 ab-gradient-border gb-x after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>

```html
<div
  class="p-1 mt-4 ab-gradient-border gb-x after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>
  <!-- code block -->
</div>
```

</div>

#### `b` - Bottom Border

<div
  class="p-1 mt-4 rounded-lg ab-gradient-border gb-b hover:gb after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>

```html
<div
  class="p-1 mt-4 rounded-lg ab-gradient-border gb-b hover:gb after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>
  <!-- code block -->
</div>
```

</div>

#### `l-3` - Left Border with `3px` Width

<div
  class="p-1 mt-4 ab-gradient-border gb-l-3 hover:gb-ly-3 after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>

```html
<div
  class="p-1 mt-4 ab-gradient-border gb-l-3 hover:gb-ly-3 after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>
  <!-- code block -->
</div>
```

</div>

#### `r` - Right Border

<div
  class="p-1 mt-4 ab-gradient-border gb-r after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>

```html
<div
  class="p-1 mt-4 ab-gradient-border gb-r after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>
  <!-- code block -->
</div>
```

</div>

#### `y` - Top & Bottom Borders

<div
  class="p-1 mt-4 ab-gradient-border gb-y after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>

```html
<div
  class="p-1 mt-4 ab-gradient-border gb-y after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>
  <!-- code block -->
</div>
```

</div>

#### `tb-2` - Top & Bottom Borders, `2px` Wide

<div class="p-1 mt-4 ab-gradient-border gb-tb-2 after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)" >

```html
<div
  class="p-1 mt-4 ab-gradient-border gb-tb-2 after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>
  <!-- code block -->
</div>
```

</div>

#### `lr-4` - Left & Right Borders, `4px` Wide

<div class="p-1 mt-4 ab-gradient-border gb-lr-4 after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)" >

```html
<div
  class="p-1 mt-4 ab-gradient-border gb-lr-4 after:(bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:op-0) before:(bg-gradient-to-rt from-blue-500 via-blue-100 to-blue-500)"
>
  <!-- code block -->
</div>
```

</div>
