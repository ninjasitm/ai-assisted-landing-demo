---
applyTo: "**/*"
description: "Coding standards, patterns, and conventions for ai-assisted-landing-demo."
---

# Coding Standards

## Primary Pattern: HTML Document Structure

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Page Title</title>
		<!-- Tailwind CSS via CDN -->
		<script src="https://cdn.tailwindcss.com"></script>
		<link rel="stylesheet" href="css/styles.css" />
	</head>
	<body>
		<!-- sections go here -->
		<script src="js/main.js"></script>
	</body>
</html>
```

**Rules:**

- Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`, etc.)
- Apply Tailwind CSS utility classes for styling; avoid writing custom CSS unless necessary
- Keep JavaScript minimal, vanilla, and scoped to specific interactive behaviors

## Data Access Pattern

```html
<!-- No server-side data — static files only -->
<!-- For dynamic data, use fetch() with public APIs -->
<script>
	fetch("https://api.example.com/data")
		.then((res) => res.json())
		.then((data) => {
			// Update DOM
		});
</script>
```

## API / Route Pattern

```html
<!-- N/A — static site with no server routes -->
<!-- Use GitHub Pages for deployment; all pages are .html files -->
```

## Naming Conventions

- Files: `kebab-case` (e.g., `about-page.html`, `hero-section.css`)
- Sections/Components: Descriptive class names (e.g., `hero`, `features`, `cta`)
- Functions: `camelCase` (e.g., `initCarousel`, `handleFormSubmit`)
- Variables: `camelCase` (e.g., `heroSection`, `ctaButton`)

## Code Quality

- Follow HTML5/CSS3 and JavaScript (ES6+) best practices
- Run linting before committing: `npx prettier --check .`
- Format code consistently: `npx prettier --write .`
