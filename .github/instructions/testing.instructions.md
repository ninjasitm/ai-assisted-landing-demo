---
applyTo: "**/*"
description: "Testing standards and conventions for ai-assisted-landing-demo."
---

# Testing Standards

## Commands

```bash
# Run E2E tests (if Playwright is configured)
npx playwright test

# Run tests with coverage
# N/A — no unit test framework configured

# Open Playwright UI
npx playwright test --ui
```

## Test Structure

```js
// Playwright E2E example
import { test, expect } from "@playwright/test";

test("hero section renders correctly", async ({ page }) => {
	await page.goto("/");
	await expect(page.locator(".hero")).toBeVisible();
	await expect(page.locator(".cta-button")).toHaveText("Get Started");
});
```

## Test File Naming

- Unit tests: `*.test.js`
- Integration tests: `*.spec.js`
- E2E tests: `*.e2e.js` or in `tests/e2e/`

## Test Location

- Unit tests live alongside source files or in `tests/`
- Integration tests in `tests/integration/`
- E2E tests in `tests/e2e/`

## Coverage Requirements

- No minimum coverage threshold configured (static site)
- Critical user flows (hero CTA, contact form, navigation) must have E2E coverage
- New interactive features should include E2E tests before merging
