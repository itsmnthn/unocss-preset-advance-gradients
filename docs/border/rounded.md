# Rounded Border Guide

When adding a **gradient border** around an element (using `::before` or `::after`), the **border-radius** of the
pseudo-element automatically inherits from the parent. However, there are two key considerations to get a perfectly
rounded inner and outer edge:

1. **Border Radius vs. Border Width**
   - If your **border-width** (e.g. `gb-20`) is greater than or close to your element’s **border-radius** (e.g.
     `rounded-lg` ≈ `rounded-8`), the **inside corner** of the border will appear **squared** while the outside remains rounded.
   - **Best Practice**: Ensure your **border-radius** is noticeably larger than the **border-width** to maintain a
     fully rounded inner edge.
   - **Example**:
     - **Imperfect**: `rounded-lg (≈8px)` + `gb-20` → The large 20px border outgrows the 8px corner, giving a squared inner edge.
     - **Better**: `rounded-lg (≈8px)` + `gb-4` → The 4px border nestles neatly inside the 8px corner, maintaining a consistent curve.
     - **Even Better**: `rounded-10 (≈10px)` + `gb-20` → Here, 20px is large, so you increase the radius to 10px or m
       ore, ensuring the inner curve remains smooth.
1. **Parent Padding vs. Border Inset**
   - Since the **gradient border** lives in a **pseudo-element** that sits at the edges of the parent, you need
     **enough padding** to prevent the child content from overlapping or cutting into the border area.
   - **Best Practice**: Make sure the element’s `padding` is greater than or equal to your border thickness. This way,
     the content “inside” the border has enough space and won’t cover or overlap the gradient edges.
   - **Example**:
     - **Imperfect**: `p-1` + `gb-20` → The content might visually collide with the thick border since there’s only 4px
       of padding vs. a 20px border inset.
     - **Better**: `p-5` + `gb-20` → The 20px border has enough spacing (20px border + 20px radius). The content stays
       comfortably within the middle area, and the corners stay fully rounded.

## Examples

### 1. Imperfect Use (Inside corners squared off)

<div class="p-1 mt-4 rounded-lg gradient-border gb-20 after:(bg-gradient-to-r from-red-500 via-red-300 to-red-200)">

```html
<div class="p-1 rounded-lg gradient-border gb-20 after:(bg-gradient-to-r from-red-500 via-red-300 to-red-200)">
  <!-- Code Block -->
</div>
```

</div>

- **Issue**: `rounded-lg` ≈ 8px radius while the border is 20px wide → squared inner edge, minimal corner rounding
  inside. Also, `p-1` might not be enough padding if the border is thick.

### 2. Better Use (Balanced width & radius)

<div class="p-1.5 mt-4 rounded-lg gradient-border gb-4 after:(bg-gradient-to-r from-green-500 via-green-300 to-green-500)">

```html
<div class="p-1.5 rounded-lg gradient-border gb-4 after:(bg-gradient-to-r from-green-500 via-green-300 to-green-500)">
  <!-- Code Block -->
</div>
```

</div>

- **Why it’s better**: The 4px border sits comfortably within an ~8px corner radius. You still see a fully rounded
  corner without a jarring square.

### 3. Best Use (Large radius & adequate padding)

<div class="p-5 mt-4 rounded-10 gradient-border gb-20 after:(bg-gradient-to-r from-green-500 via-green-300 to-green-500)">

```html
<div class="p-5 rounded-10 gradient-border gb-20 after:(bg-gradient-to-r from-green-500 via-green-300 to-green-500)">
  <!-- Code Block -->
</div>
```

</div>

- **Why it’s best**: The 10px (or greater) corner radius accommodates a 20px gradient border, and `p-5` ensures content
  stays well within the border area, so you get a fully rounded shape with no overlap.

## Key Takeaways

1. **Match or exceed** your border-radius to your desired border-width to keep inner edges rounded.
2. Provide **enough padding** so the content doesn’t clash with the pseudo-element’s border.
3. Experiment with **larger radii** and **thicker borders**—just remember to keep them balanced.

With these tips, you can achieve beautiful, **perfectly rounded** gradient borders that look great and keep
content aligned!
