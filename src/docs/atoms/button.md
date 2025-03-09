---
layout: component.njk
title: Button
description: Buttons allow users to take actions and make choices with a single tap
eleventyNavigation:
  key: Button
  parent: Atoms
metadata:
  status: "Stable"
  usage: "Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars."
  props:
    - name: "data-color"
      type: "String"
      default: "base"
      description: "Sets the button color scheme (base, primary, secondary, accent, white, success, error, warning)"
    - name: "data-visual"
      type: "String"
      default: null
      description: "Sets the visual style (primary, secondary, unstyled)"
    - name: "data-size"
      type: "String"
      default: "default"
      description: "Sets the button size (s, default, l, xl, full-width)"
    - name: "data-full-width"
      type: "Boolean"
      default: "false"
      description: "Makes the button take up 100% of the available width"
    - name: "data-icon"
      type: "String"
      default: null
      description: "Adds an icon to the button (uses the icon font)"
    - name: "data-icon-before"
      type: "String"
      default: null
      description: "Adds an icon before the button text"
    - name: "data-icon-after"
      type: "String"
      default: null
      description: "Adds an icon after the button text"
    - name: "disabled"
      type: "Boolean"
      default: "false"
      description: "Disables the button, preventing user interaction"
    - name: "hidden"
      type: "Boolean"
      default: "false"
      description: "Hides the button"
    - name: "unstyled"
      type: "Boolean"
      default: "false"
      description: "Removes all styling from the button"
  accessibility: |
    - Use semantic HTML elements: `<button>` for actions that occur on the same page, `<a>` for navigation
    - Ensure buttons have accessible names that clearly describe their action
    - Maintain sufficient color contrast between button text and background
    - Provide focus states for keyboard navigation
    - Disable buttons only when necessary and communicate why they're disabled
  related:
    - title: "Link"
      url: "/docs/atoms/link/"
    - title: "Icon"
      url: "/docs/atoms/icon/"
examples:
  - title: "Default Button"
    description: "The standard button with default styling."
    rendered: |
      <button class="button">Default Button</button>
    code: |
      <button class="button">Default Button</button>
  - title: "Color Variants"
    description: "Buttons can have different colors to indicate different actions or importance."
    rendered: |
      <button class="button" data-color="base">Base</button>
      <button class="button" data-color="primary">Primary</button>
      <button class="button" data-color="secondary">Secondary</button>
      <button class="button" data-color="accent">Accent</button>
      <button class="button" data-color="white">White</button>
      <button class="button" data-color="success">Success</button>
      <button class="button" data-color="error">Error</button>
      <button class="button" data-color="warning">Warning</button>
    code: |
      <button class="button" data-color="base">Base</button>
      <button class="button" data-color="primary">Primary</button>
      <button class="button" data-color="secondary">Secondary</button>
      <button class="button" data-color="accent">Accent</button>
      <button class="button" data-color="white">White</button>
      <button class="button" data-color="success">Success</button>
      <button class="button" data-color="error">Error</button>
      <button class="button" data-color="warning">Warning</button>
  - title: "Visual Styles"
    description: "Buttons can have different visual styles while maintaining their semantic meaning."
    rendered: |
      <button class="button" data-color="primary" data-visual="primary">Primary Visual</button>
      <button class="button" data-color="primary" data-visual="secondary">Secondary Visual</button>
      <button class="button" data-color="primary" data-visual="unstyled">Unstyled Visual</button>
    code: |
      <button class="button" data-color="primary" data-visual="primary">Primary Visual</button>
      <button class="button" data-color="primary" data-visual="secondary">Secondary Visual</button>
      <button class="button" data-color="primary" data-visual="unstyled">Unstyled Visual</button>
  - title: "Size Variants"
    description: "Buttons come in different sizes to fit various UI contexts."
    rendered: |
      <button class="button" data-size="s">Small</button>
      <button class="button">Default</button>
      <button class="button" data-size="l">Large</button>
      <button class="button" data-size="xl">Extra Large</button>
    code: |
      <button class="button" data-size="s">Small</button>
      <button class="button">Default</button>
      <button class="button" data-size="l">Large</button>
      <button class="button" data-size="xl">Extra Large</button>
  - title: "Full Width Button"
    description: "Buttons can take up the full width of their container."
    rendered: |
      <div style="max-width: 300px;">
        <button class="button" data-full-width="true">Full Width Button</button>
      </div>
    code: |
      <button class="button" data-full-width="true">Full Width Button</button>
  - title: "Buttons with Icons"
    description: "Buttons can include icons before or after the text, or as the only content."
    rendered: |
      <button class="button" data-icon-before="★">Icon Before</button>
      <button class="button" data-icon-after="★">Icon After</button>
      <button class="button" data-icon="★"></button>
    code: |
      <button class="button" data-icon-before="★">Icon Before</button>
      <button class="button" data-icon-after="★">Icon After</button>
      <button class="button" data-icon="★"></button>
  - title: "Disabled Button"
    description: "Buttons can be disabled to indicate that they are not interactive."
    rendered: |
      <button class="button" disabled>Disabled Button</button>
    code: |
      <button class="button" disabled>Disabled Button</button>
  - title: "Hidden Button"
    description: "Buttons can be hidden while maintaining their place in the DOM."
    rendered: |
      <button class="button" hidden>Hidden Button (not visible)</button>
    code: |
      <button class="button" hidden>Hidden Button</button>
  - title: "Unstyled Button"
    description: "Buttons can be completely unstyled while maintaining their semantic meaning."
    rendered: |
      <button class="button" unstyled>Unstyled Button</button>
    code: |
      <button class="button" unstyled>Unstyled Button</button>
  - title: "Combined Properties"
    description: "Button properties can be combined to create custom buttons."
    rendered: |
      <button class="button" data-color="success" data-visual="primary" data-size="l" data-icon-before="★">
        Submit Form
      </button>
    code: |
      <button class="button" data-color="success" data-visual="primary" data-size="l" data-icon-before="★">
        Submit Form
      </button>
  - title: "Special Button Variants"
    description: "Special button variants for specific use cases."
    rendered: |
      <button class="button icon">☰</button>
      <button class="button mega-button" data-icon="★"></button>
    code: |
      <button class="button icon">☰</button>
      <button class="button mega-button" data-icon="★"></button>
  - title: "Link as Button"
    description: "Links can be styled as buttons while maintaining their navigation behavior."
    rendered: |
      <a href="#" class="button" data-color="primary" data-visual="primary">Link as Button</a>
    code: |
      <a href="#" class="button" data-color="primary" data-visual="primary">Link as Button</a>
  - title: "Input as Button"
    description: "Form inputs can be styled as buttons."
    rendered: |
      <input type="submit" class="button" data-color="primary" data-visual="primary" value="Submit">
      <input type="file">
    code: |
      <input type="submit" class="button" data-color="primary" data-visual="primary" value="Submit">
      <input type="file">
---

# Button Component

Buttons are interactive elements that allow users to trigger actions. They communicate what action will occur when the user interacts with them.

## Usage Guidelines

- Use buttons for important actions that you want users to take
- Label buttons with specific, action-oriented text that clearly describes what will happen when clicked
- Choose the appropriate button style based on the importance of the action
- Use primary visual style for the main action on a page or in a section
- Use secondary visual style for alternative or less important actions
- Maintain a consistent hierarchy of button styles throughout your interface

## Button Types

### Primary Buttons

Primary buttons should be used for the main action on a page or in a section. They have high visual prominence and should be used sparingly.

```html
<button class="button" data-color="primary" data-visual="primary">Primary Button</button>
```

### Secondary Buttons

Secondary buttons are used for alternative or less important actions. They have medium visual prominence.

```html
<button class="button" data-color="secondary" data-visual="secondary">Secondary Button</button>
```

### Text Buttons

Text buttons are used for the least important actions. They have low visual prominence and are often used for tertiary actions.

```html
<button class="button" data-visual="unstyled">Text Button</button>
```

## CSS Variables

The button component uses CSS variables for styling, which can be customized at the component level or globally:

```css
.button {
  --_button-hsl: var(--primary-hsl);
  --_button-text-color: var(--primary-color);
  --_button-padding-block: var(--size-0);
  --_button-padding-inline: var(--size-2);
  --_button-border-radius: var(--border-radius-m);
  --_button-border-width: 2px;
}
```

## Accessibility Considerations

- Use the appropriate semantic element: `<button>` for actions, `<a>` for navigation
- Ensure buttons have accessible names that clearly describe their action
- Maintain sufficient color contrast between button text and background
- Provide focus states for keyboard navigation
- Avoid using disabled buttons when possible, as they can be confusing for users
- If a button is disabled, make sure to communicate why it's disabled
