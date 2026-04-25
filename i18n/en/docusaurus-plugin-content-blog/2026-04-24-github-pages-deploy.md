---
slug: github-pages-deploy-docusaurus-310
title: Deploy Docusaurus 3.10 to GitHub Pages
authors: [winson]
tags: [github-pages, docusaurus, deployment, docusaurus-310]
---

# Deploy Docusaurus 3.10 to GitHub Pages

Docusaurus 3.10 is the final release in the v3.x series. This article explains how to automatically deploy to GitHub Pages using GitHub Actions.

## Why GitHub Pages?

- **Completely Free** — Unlimited use for public repositories
- **Automated Deployment** — Auto-build and deploy on push to main
- **HTTPS Built-in** — No additional SSL configuration needed
- **Global CDN** — Accelerated by GitHub's global nodes

## Deployment Steps

1. **Create Repository** — Create a new repository on GitHub
2. **Edit Settings** — Update `url`, `baseUrl`, `organizationName`, `projectName` in `docusaurus.config.js`
3. **Push Code** — `git push origin main`
4. **Enable Pages** — Settings → Pages → Source: GitHub Actions
5. **Done!** — Wait for Actions to auto-build and deploy

## Included in This Project

- `.github/workflows/deploy.yml` — Auto-deployment workflow
- `.github/workflows/test-deploy.yml` — PR test workflow
- `static/.nojekyll` — Disable Jekyll processing

For detailed steps, please refer to the [Deployment Guide](/deploy).
