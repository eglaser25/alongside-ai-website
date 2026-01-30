# Alongside AI Branding Guidelines

When working on UI, styling, or design-related tasks for this project, follow these brand guidelines.

## Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Vivid Blue** | `#1335F2` | rgb(19, 53, 242) | Primary brand color, CTAs, links, accents |
| **Midnight Edition** | `#091017` | rgb(9, 16, 23) | Dark backgrounds, text on light backgrounds |
| **First Shade** | `#C9DFF2` | rgb(201, 223, 242) | Light backgrounds, subtle accents, cards |
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Backgrounds, text on dark surfaces |

### CSS Variables (recommended)

```css
:root {
  --color-vivid-blue: #1335F2;
  --color-midnight: #091017;
  --color-first-shade: #C9DFF2;
  --color-white: #FFFFFF;
}
```

### Tailwind Custom Colors

When updating Tailwind config, use these values:

```js
colors: {
  'vivid-blue': '#1335F2',
  'midnight': '#091017',
  'first-shade': '#C9DFF2',
}
```

## Typography

### Primary Font: Urbanist

- **Use for**: Headlines, titles, navigation, buttons, primary UI text
- **Characteristics**: Low-contrast, geometric sans-serif, modern and neutral
- **Available weights**: Thin (100), Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800), Black (900)
- **Google Fonts**: `https://fonts.google.com/specimen/Urbanist`

```css
font-family: 'Urbanist', sans-serif;
```

### Secondary Font: Darker Grotesque

- **Use for**: Body text, paragraphs, secondary content, captions
- **Characteristics**: Contemporary sans-serif, post-modern/brutalist inspired
- **Available weights**: Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800), Black (900)
- **Google Fonts**: `https://fonts.google.com/specimen/Darker+Grotesque`

```css
font-family: 'Darker Grotesque', sans-serif;
```

### Font Import (Next.js/Google Fonts)

```tsx
import { Urbanist, Darker_Grotesque } from 'next/font/google';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
});

const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  variable: '--font-darker-grotesque',
});
```

## Implementation Guidelines

1. **Buttons & CTAs**: Use Vivid Blue (`#1335F2`) background with White text
2. **Headings**: Use Urbanist font in SemiBold or Bold weight
3. **Body Text**: Use Darker Grotesque in Regular weight
4. **Dark Sections**: Use Midnight Edition (`#091017`) background with White or First Shade text
5. **Cards/Containers**: Consider First Shade (`#C9DFF2`) for subtle background differentiation
6. **Links**: Use Vivid Blue for interactive elements
7. **Hover States**: Darken Vivid Blue slightly or use opacity changes

## Do's and Don'ts

**Do:**
- Maintain high contrast for accessibility
- Use Vivid Blue as the primary accent color
- Keep typography hierarchy clear with weight variations

**Don't:**
- Mix too many colors outside the palette
- Use light text on light backgrounds
- Use weights below Medium (500) for important UI text at small sizes
