---
applyTo: "**/*"
description: "Developer workflows and environment settings for ai-assisted-landing-demo."
---

# Workflows

## Development

- **Start dev server:** Open `index.html` with Live Server (VS Code extension, port 5500)
- **Build Tailwind CSS:** `npx tailwindcss -i ./src/input.css -o ./css/styles.css --watch`
- **Format code:** `npx prettier --write .`

## Testing

- **E2E tests (Playwright):** `npx playwright test` (if configured)
- No unit test framework is configured for this static site

## Code quality

- **Lint/Format check:** `npx prettier --check .`
- **Format:** `npx prettier --write .`

## Environment variables

No environment variables required for this static site.
