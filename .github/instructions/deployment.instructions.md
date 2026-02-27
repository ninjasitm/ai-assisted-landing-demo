---
applyTo: "**/*"
description: "Deployment configuration and commands for ai-assisted-landing-demo."
---

# Deployment

## Target Platform

- **Platform:** GitHub Pages
- **Environment:** Production

## Deploy Commands

```bash
# Deploy to GitHub Pages (push to main branch triggers deployment)
git push origin main

# Build Tailwind CSS for production
npx tailwindcss -i ./src/input.css -o ./css/styles.css --minify
```

## Environment Variables

No environment variables required (public static site).

## CI/CD

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## Pre-Deployment Checklist

- [ ] All HTML validates (W3C Validator)
- [ ] Tailwind CSS built and minified
- [ ] Images optimized
- [ ] Responsive layout tested on mobile/tablet/desktop
- [ ] Links and CTAs working correctly
