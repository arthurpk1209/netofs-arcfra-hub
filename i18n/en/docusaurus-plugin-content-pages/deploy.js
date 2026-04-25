import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './deploy.module.css';

export default function DeployPage() {
  return (
    <Layout
      title="Deployment Guide"
      description="Netfos Arcfra Hub deployment: GitHub Pages auto-deploy + Docker local development">
      <div className="deploy-section">
        <div className="container">
          <div className={styles.header}>
            <Heading as="h1">Deployment Guide</Heading>
            <p className={styles.subtitle}>
              GitHub Pages auto-deployment, Docker local development, i18n internationalization
            </p>
          </div>

          <div className="deploy-card" style={{borderColor: '#ef4444', background: 'rgba(239, 68, 68, 0.1)'}}>
            <Heading as="h2">⚠️ Pre-Deployment: Common Errors</Heading>
            <Heading as="h3">Error 1: baseUrl</Heading>
            <p><code>baseUrl</code> must be <code>/repo-name/</code> (with leading and trailing slashes).</p>
            <Heading as="h3">Error 2: trailingSlash</Heading>
            <p>Set <code>trailingSlash: true</code> for GitHub Pages compatibility.</p>
          </div>

          <div className="deploy-card">
            <Heading as="h2">🚀 GitHub Pages Auto-Deployment</Heading>
            <code>
{`git init
git add .
git commit -m "Initial"
git push origin main`}
            </code>
          </div>

          <div className="deploy-card">
            <Heading as="h2">🐳 Docker Development</Heading>
            <code>
{`docker compose --file dev.docker-compose.yml up`}
            </code>
          </div>
        </div>
      </div>
    </Layout>
  );
}
