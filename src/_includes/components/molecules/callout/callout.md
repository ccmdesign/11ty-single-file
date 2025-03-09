---
layout: component.njk
title: Callout
description: The Callout component is used to highlight important information to users
eleventyNavigation:
  key: Callout
  parent: Molecules
metadata:
  status: "Stable"
  usage: "Use callouts to highlight important information, warnings, errors, or success messages to users. They can be used in forms, dashboards, or any context where you need to draw attention to specific content."
  props:
    - name: "color"
      type: "String"
      default: "info"
      description: "The semantic color of the callout (info, success, warning, error, primary, secondary, accent, green, yellow, red, blue)"
    - name: "title"
      type: "String"
      default: null
      description: "Optional title for the callout"
    - name: "content"
      type: "String"
      default: null
      description: "The content to display in the callout"
  accessibility: |
    - Use appropriate colors that maintain sufficient contrast for readability
    - Ensure that the callout content is meaningful and provides context
    - Don't rely solely on color to convey meaning; use clear, descriptive text
    - Consider using appropriate ARIA attributes for dynamic callouts
  related:
    - title: "Alert"
      url: "/docs/molecules/alert/"
    - title: "Banner"
      url: "/docs/molecules/banner/"
  scripts: |
    // No scripts required for this component
examples:
  - title: "Info (Default)"
    description: "Used for general information and neutral guidance."
    rendered: |
      <div class="callout" data-color="info">
        <h4><strong>Information</strong></h4>
        <p>This is an informational callout that provides neutral guidance or context.</p>
      </div>
    code: |
      <div class="callout" data-color="info">
        <h4><strong>Information</strong></h4>
        <p>This is an informational callout that provides neutral guidance or context.</p>
      </div>
  - title: "Success"
    description: "Used to confirm that a task has been completed successfully."
    rendered: |
      <div class="callout" data-color="success">
        <h4><strong>Success</strong></h4>
        <p>This is a success callout that confirms a task has been completed successfully.</p>
      </div>
    code: |
      <div class="callout" data-color="success">
        <h4><strong>Success</strong></h4>
        <p>This is a success callout that confirms a task has been completed successfully.</p>
      </div>
  - title: "Warning"
    description: "Used to alert users to a potentially negative outcome."
    rendered: |
      <div class="callout" data-color="warning">
        <h4><strong>Warning</strong></h4>
        <p>This is a warning callout that alerts users to a potentially negative outcome.</p>
      </div>
    code: |
      <div class="callout" data-color="warning">
        <h4><strong>Warning</strong></h4>
        <p>This is a warning callout that alerts users to a potentially negative outcome.</p>
      </div>
  - title: "Error"
    description: "Used to indicate that something has gone wrong."
    rendered: |
      <div class="callout" data-color="error">
        <h4><strong>Error</strong></h4>
        <p>This is an error callout that indicates something has gone wrong.</p>
      </div>
    code: |
      <div class="callout" data-color="error">
        <h4><strong>Error</strong></h4>
        <p>This is an error callout that indicates something has gone wrong.</p>
      </div>
  - title: "Primary"
    description: "Uses the primary brand color for emphasis."
    rendered: |
      <div class="callout" data-color="primary">
        <h4><strong>Primary</strong></h4>
        <p>This is a primary callout that uses the primary brand color.</p>
      </div>
    code: |
      <div class="callout" data-color="primary">
        <h4><strong>Primary</strong></h4>
        <p>This is a primary callout that uses the primary brand color.</p>
      </div>
  - title: "Secondary"
    description: "Uses the secondary brand color for emphasis."
    rendered: |
      <div class="callout" data-color="secondary">
        <h4><strong>Secondary</strong></h4>
        <p>This is a secondary callout that uses the secondary brand color.</p>
      </div>
    code: |
      <div class="callout" data-color="secondary">
        <h4><strong>Secondary</strong></h4>
        <p>This is a secondary callout that uses the secondary brand color.</p>
      </div>
  - title: "Accent"
    description: "Uses the accent brand color for emphasis."
    rendered: |
      <div class="callout" data-color="accent">
        <h4><strong>Accent</strong></h4>
        <p>This is an accent callout that uses the accent brand color for emphasis.</p>
      </div>
    code: |
      <div class="callout" data-color="accent">
        <h4><strong>Accent</strong></h4>
        <p>This is an accent callout that uses the accent brand color for emphasis.</p>
      </div>
  - title: "Without Title"
    description: "A callout can be displayed without a title, showing only the content."
    rendered: |
      <div class="callout" data-color="info">
        <p>This is a callout without a title.</p>
      </div>
    code: |
      <div class="callout" data-color="info">
        <p>This is a callout without a title.</p>
      </div>
  - title: "With Custom HTML Content"
    description: "Callouts can contain custom HTML content including formatted text, lists, and links."
    rendered: |
      <div class="callout" data-color="success">
        <h4><strong>Custom Content</strong></h4>
        <p>This callout contains <strong>custom HTML</strong> content.</p>
        <ul>
          <li>You can add lists</li>
          <li>Format text with <em>emphasis</em></li>
          <li>Include <a href="#">links</a></li>
        </ul>
      </div>
    code: |
      <div class="callout" data-color="success">
        <h4><strong>Custom Content</strong></h4>
        <p>This callout contains <strong>custom HTML</strong> content.</p>
        <ul>
          <li>You can add lists</li>
          <li>Format text with <em>emphasis</em></li>
          <li>Include <a href="#">links</a></li>
        </ul>
      </div>
---

# Implementation Details

## Usage with Nunjucks

```njk
{% raw %}
{% include "components/molecules/callout/callout.njk" with {
  color: "success",
  title: "Success Message",
  content: "Your action was completed successfully."
} %}
{% endraw %}
```

For more complex content:

```njk
{% raw %}
{% call "components/molecules/callout/callout.njk" with { color: "warning", title: "Warning" } %}
  <p>This is a custom warning message with <a href="#">a link</a>.</p>
{% endcall %}
{% endraw %}
```

## CSS Implementation

The callout component uses semantic CSS variables from our design system:

```css
.callout {
  /* Default styling (info) */
  --_callout-color: var(--status-info-text);
  --_callout-border-color: var(--status-info-border);
  --_callout-background-color: var(--status-info-bg);
}

.callout[data-color="primary"] {
  --_callout-color: var(--button-primary-text);
  --_callout-border-color: var(--button-primary-border);
  --_callout-background-color: var(--button-primary-bg);
}

/* Additional color variants... */
```

## Alternative Color Names

The component also supports alternative color names for backward compatibility:

- `green` (alias for `success`)
- `yellow` (alias for `warning`)
- `red` (alias for `error`)
- `blue` (alias for `info`)


