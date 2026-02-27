---
applyTo: "**/*"
description: "Project architecture and data flow for ai-assisted-landing-demo."
---

# ai-assisted-landing-demo architecture

- **Framework:** Plain HTML/CSS/JS (no framework)
- **Language:** HTML5/CSS3/JavaScript (ES6+)
- Entry point: index.html

## Directory structure

- `css/` - Stylesheet files (Tailwind output + custom CSS)
- `js/` - JavaScript files (main.js + utilities)
- `assets/images/` - Image assets
- `index.html` - Main entry point

## Data flow

- Static HTML pages with no server-side rendering
- Tailwind CSS for styling via CDN or Tailwind CLI build
- Vanilla JavaScript handles interactivity (scroll, animations, form handling)

## Authentication

- No authentication required (public static site)

## API integration

- No dedicated server API
- External services can be integrated via `<script>` tags or `fetch()` calls (e.g., contact forms via Formspree, analytics via Google Analytics)
