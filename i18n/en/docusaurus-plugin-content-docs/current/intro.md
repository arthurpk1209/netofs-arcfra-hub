# Welcome to Netfos Arcfra Hub

This is a modern technical documentation website built with **Docusaurus 3.10** + **GitHub Pages**.

## Version Info

| Item | Version |
|------|---------|
| Docusaurus | **3.10.0** |
| React | **19.1.0** |
| Node.js | ≥ 20.0 |

## Quick Start

### GitHub Pages Deployment (Recommended)

1. Fork this project to your GitHub account
2. Edit `docusaurus.config.js` with your `url`, `baseUrl`, `organizationName`, `projectName`
3. Push to the `main` branch
4. Go to **Settings → Pages → Source**: Select `GitHub Actions`
5. Wait for automatic deployment to complete

### Docker Local Development

```bash
docker compose --file dev.docker-compose.yml up
```

The site will be available at http://localhost:3000

## Deployment Methods

This site supports three deployment methods:

| Method | Automation | Cost | Description |
|--------|-----------|------|-------------|
| **GitHub Actions** | ✅ Auto-deploy on push to main | Free | Recommended! |
| **Manual deploy** | ❌ Manual execution | Free | Use `npm run deploy` |
| **Docker dev** | ❌ Local only | Free | Local development preview |

For detailed steps, please refer to the [Deployment Guide](/deploy).

## Tech Stack

- [Docusaurus 3.10](https://docusaurus.io/)
- [React 19](https://react.dev/)
- [GitHub Pages](https://pages.github.com/)
- [Docker](https://www.docker.com/)
