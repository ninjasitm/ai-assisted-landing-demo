---
applyTo: "**/*"
description: "Project-specific coding patterns and shared utilities for ai-assisted-landing-demo."
---

# Patterns and conventions

## State management

- State modules live in `js/`.
- Use Vanilla JavaScript for state management (no state library).
- Use the module pattern or closures to encapsulate state within JS files.

## API patterns

- API services live in `js/`.
- No server API exists (static site); use `fetch()` for any external API calls.
- Handle errors gracefully and show user-friendly messages.

## Component patterns

- Components follow HTML section pattern.
- Each section of the page is a distinct component using semantic HTML elements (e.g., `<section class="hero">`).
- Keep section-specific JavaScript in dedicated functions.

## Utilities

- Shared utilities live in `js/utils/`.
- Helper functions for animations, scroll handling, and DOM manipulation go here.
