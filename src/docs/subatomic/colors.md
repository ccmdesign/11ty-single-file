---
layout: component.njk
title: Colors
description: Color palette for the design system
eleventyNavigation:
  key: Colors
  parent: Subatomic
metadata:
  status: "Stable"
  usage: "Our color system is built on a core palette with tints and shades for each color. Use these colors consistently throughout the application to maintain visual harmony and accessibility."
  accessibility: |
    - Ensure sufficient contrast ratios between text and background colors (WCAG AA compliance)
    - Don't rely solely on color to convey meaning; use additional visual cues
    - Consider color blindness when designing interfaces
    - Use semantic colors appropriately to maintain consistent meaning
  related:
    - title: "Typography"
      url: "/docs/subatomic/typography/"
    - title: "Spacing"
      url: "/docs/subatomic/spacing/"
examples:
  - title: "Base Colors"
    description: "The foundation of our color system."
    rendered: |
      <div class="color-grid">
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--white-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">White</div>
            <div class="swatch-var">--white-color</div>
            <div class="swatch-hex">hsla(255, 100%, 100%, 1)</div>
          </div>
        </div>
        
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--black-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Black</div>
            <div class="swatch-var">--black-color</div>
            <div class="swatch-hex">hsla(0, 0%, 7%, 1)</div>
          </div>
        </div>
      </div>
  - title: "Primary Colors"
    description: "The main colors that represent our brand identity."
    rendered: |
      <div class="color-grid">
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--base-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Base</div>
            <div class="swatch-var">--base-color</div>
            <div class="swatch-hex">hsla(229, 19%, 22%, 1)</div>
          </div>
        </div>
        
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--primary-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Primary</div>
            <div class="swatch-var">--primary-color</div>
            <div class="swatch-hex">hsla(148, 57%, 24%, 1)</div>
          </div>
        </div>
        
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--secondary-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Secondary</div>
            <div class="swatch-var">--secondary-color</div>
            <div class="swatch-hex">hsla(218, 19%, 38%, 1)</div>
          </div>
        </div>
        
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--accent-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Accent</div>
            <div class="swatch-var">--accent-color</div>
            <div class="swatch-hex">hsla(15, 74%, 53%, 1)</div>
          </div>
        </div>
      </div>
  - title: "Supporting Colors"
    description: "Additional colors used for specific purposes."
    rendered: |
      <div class="color-grid">
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--red-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Red</div>
            <div class="swatch-var">--red-color</div>
            <div class="swatch-hex">hsla(352, 59%, 55%, 1)</div>
          </div>
        </div>
        
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--yellow-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Yellow</div>
            <div class="swatch-var">--yellow-color</div>
            <div class="swatch-hex">hsla(36, 83%, 61%, 1)</div>
          </div>
        </div>
        
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--blue-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Blue</div>
            <div class="swatch-var">--blue-color</div>
            <div class="swatch-hex">hsla(208, 50%, 38%, 1)</div>
          </div>
        </div>
        
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--navy-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Navy</div>
            <div class="swatch-var">--navy-color</div>
            <div class="swatch-hex">hsla(201, 100%, 18%, 1)</div>
          </div>
        </div>
        
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--green-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Green</div>
            <div class="swatch-var">--green-color</div>
            <div class="swatch-hex">hsla(188, 97%, 28%, 1)</div>
          </div>
        </div>
      </div>
  - title: "Semantic Colors"
    description: "Colors that convey specific meanings."
    rendered: |
      <div class="color-grid">
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--success-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Success</div>
            <div class="swatch-var">--success-color</div>
            <div class="swatch-hex">var(--blue-color)</div>
          </div>
        </div>
        
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--error-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Error</div>
            <div class="swatch-var">--error-color</div>
            <div class="swatch-hex">var(--red-color)</div>
          </div>
        </div>
        
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--warning-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Warning</div>
            <div class="swatch-var">--warning-color</div>
            <div class="swatch-hex">var(--yellow-color)</div>
          </div>
        </div>
        
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--info-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Info</div>
            <div class="swatch-var">--info-color</div>
            <div class="swatch-hex">var(--navy-color)</div>
          </div>
        </div>
      </div>
  - title: "Color Aliases"
    description: "Alternative names for common colors."
    rendered: |
      <div class="color-grid">
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--dark-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Dark</div>
            <div class="swatch-var">--dark-color</div>
            <div class="swatch-hex">var(--base-color)</div>
          </div>
        </div>
        
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--light-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Light</div>
            <div class="swatch-var">--light-color</div>
            <div class="swatch-hex">var(--base-color-02)</div>
          </div>
        </div>
        
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--text-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Text</div>
            <div class="swatch-var">--text-color</div>
            <div class="swatch-hex">var(--base-color)</div>
          </div>
        </div>
        
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--link-color)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Link</div>
            <div class="swatch-var">--link-color</div>
            <div class="swatch-hex">var(--primary-color)</div>
          </div>
        </div>
      </div>
  - title: "Base Color Tints & Shades"
    description: "Lighter and darker variations of the base color."
    rendered: |
      <div class="color-grid">
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--base-color-50)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Base 50</div>
            <div class="swatch-var">--base-color-50</div>
          </div>
        </div>
        
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--base-color-500)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Base 500</div>
            <div class="swatch-var">--base-color-500</div>
          </div>
        </div>
        
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--base-color-900)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Base 900</div>
            <div class="swatch-var">--base-color-900</div>
          </div>
        </div>
      </div>
  - title: "Primary Color Tints & Shades"
    description: "Lighter and darker variations of the primary color."
    rendered: |
      <div class="color-grid">
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--primary-color-50)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Primary 50</div>
            <div class="swatch-var">--primary-color-50</div>
          </div>
        </div>
        
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--primary-color-500)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Primary 500</div>
            <div class="swatch-var">--primary-color-500</div>
          </div>
        </div>
        
        <div class="color-swatch">
          <div class="swatch" style="background-color: var(--primary-color-900)"></div>
          <div class="swatch-info">
            <div class="swatch-name">Primary 900</div>
            <div class="swatch-var">--primary-color-900</div>
          </div>
        </div>
      </div>
---

# Color System

Our color system is designed to provide a consistent visual language across all interfaces. It consists of base colors, primary brand colors, supporting colors, and their tints and shades.

## Usage Guidelines

- Use base colors for text and backgrounds
- Use primary colors for main UI elements and actions
- Use secondary colors for supporting elements
- Use accent colors for highlighting and drawing attention
- Use semantic colors to convey meaning (success, error, warning, info)
- Use tints and shades to create visual hierarchy and depth

## CSS Variables

All colors are available as CSS variables and can be used in your CSS:

```css
.my-element {
  color: var(--text-color);
  background-color: var(--primary-color-100);
  border: 1px solid var(--secondary-color-300);
}
```

## Color Mixing

The tints and shades are created using the CSS `color-mix()` function, which allows for consistent color variations:

```css
/* Example of how tints are created */
--primary-color-100: color-mix(in srgb, var(--primary-color) 10%, white 90%);

/* Example of how shades are created */
--primary-color-600: color-mix(in srgb, var(--primary-color) 90%, black 10%);
```

## Complete Color Scale

Each main color (base, primary, secondary, accent) has a complete scale of tints and shades:

- 50-400: Tints (lighter variations)
- 500: The main color
- 600-900: Shades (darker variations)

This provides a comprehensive palette for creating depth and hierarchy in your designs.