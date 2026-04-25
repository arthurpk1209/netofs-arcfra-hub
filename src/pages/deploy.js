import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './deploy.module.css';

export default function DeployPage() {
  return (
    <Layout
      title="部署指南"
      description="Netfos Arcfra Hub 部署方式：GitHub Pages + Docker 開發">
      <div className="deploy-section">
        <div className="container">
          <div className={styles.header}>
            <Heading as="h1">部署指南</Heading>
            <p className={styles.subtitle}>
              兩種部署方式：GitHub Pages 自動部署（推薦）與 Docker 本地開發
            </p>
          </div>

          {/* ====== GitHub Pages 部署 ====== */}
          <div className="deploy-card">
            <Heading as="h2">🚀 方式一：GitHub Pages 自動部署（推薦）</Heading>
            <p>
              使用 GitHub Actions 自動化部署，每次推送到 main 分支即自動建置並部署到 GitHub Pages。完全免費，適合公開儲存庫。
            </p>

            <Heading as="h3">步驟 1：建立 GitHub 儲存庫</Heading>
            <code>
{`# 在 GitHub 建立新儲存庫，名稱為 netfos-arcfra-hub
# 複製儲存庫網址（HTTPS 或 SSH）

# 本地初始化並推送
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/netfos-arcfra-hub.git
git push -u origin main`}
            </code>

            <Heading as="h3">步驟 2：修改 docusaurus.config.js</Heading>
            <p>將以下設定改為你的 GitHub 資訊：</p>
            <code>
{`export default {
  // 你的 GitHub Pages 網址
  url: 'https://your-github-username.github.io',

  // 儲存庫名稱（前面加斜線）
  baseUrl: '/netfos-arcfra-hub/',

  // GitHub 使用者名稱
  organizationName: 'your-github-username',

  // 儲存庫名稱
  projectName: 'netfos-arcfra-hub',

  // 部署分支（預設 gh-pages）
  deploymentBranch: 'gh-pages',

  // GitHub Pages 建議設定
  trailingSlash: false,
};`}
            </code>

            <Heading as="h3">步驟 3：設定 GitHub Pages</Heading>
            <p>在儲存庫的 Settings → Pages 中設定：</p>
            <ul>
              <li><strong>Build and deployment</strong> → Source：選擇 <code>GitHub Actions</code></li>
              <li>不需要選擇分支，Workflow 會自動處理</li>
            </ul>

            <Heading as="h3">步驟 4：推送觸發部署</Heading>
            <code>
{`git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main`}
            </code>
            <p>推送後，GitHub Actions 會自動：</p>
            <ul>
              <li>安裝 Node.js 20 與依賴</li>
              <li>執行 <code>npm run build</code> 建置網站</li>
              <li>上傳建置結果到 GitHub Pages</li>
              <li>部署到 <code>https://your-github-username.github.io/netfos-arcfra-hub/</code></li>
            </ul>

            <Heading as="h3">步驟 5：驗證部署</Heading>
            <ul>
              <li>前往儲存庫的 <strong>Actions</strong> 分頁查看建置狀態</li>
              <li>等待約 3 分鐘後，訪問你的 GitHub Pages 網址</li>
              <li>若顯示 "There isn't a GitHub Pages site here"，請檢查 Actions 日誌</li>
            </ul>
          </div>

          {/* ====== GitHub Actions 檔案說明 ====== */}
          <div className="deploy-card">
            <Heading as="h2">📁 GitHub Actions Workflow 檔案</Heading>
            <p>專案已包含兩個 Workflow 檔案，位於 <code>.github/workflows/</code>：</p>

            <Heading as="h3">deploy.yml — 自動部署</Heading>
            <code>
{`name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: build
  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4`}
            </code>

            <Heading as="h3">test-deploy.yml — PR 測試</Heading>
            <code>
{`name: Test deployment
on:
  pull_request:
    branches: [main]
jobs:
  test-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build`}
            </code>
          </div>

          {/* ====== 手動部署 ====== */}
          <div className="deploy-card">
            <Heading as="h2">🖥️ 方式二：手動部署（docusaurus deploy）</Heading>
            <p>如果不想使用 GitHub Actions，可以使用 Docusaurus 內建的 deploy 指令：</p>
            <code>
{`# 設定環境變數
export GIT_USER=your-github-username

# 執行部署（會自動建置並推送到 gh-pages 分支）
npm run deploy`}
            </code>
            <ul>
              <li>需要設定 <code>GIT_USER</code> 環境變數</li>
              <li>需要使用 Personal Access Token（2021 年 8 月起 GitHub 不再支援密碼登入）</li>
              <li>或使用 SSH：<code>USE_SSH=true npm run deploy</code></li>
            </ul>
          </div>

          {/* ====== Docker 開發 ====== */}
          <div className="deploy-card">
            <Heading as="h2">🐳 Docker 本地開發</Heading>
            <p>使用 Docker Compose 在本地啟動開發伺服器，支援熱重載：</p>

            <Heading as="h3">步驟 1：建立 dev.docker-compose.yml</Heading>
            <code>
{`name: "docusaurus"
services:
  dev:
    build:
      context: .
      target: dev
    ports:
      - "3000:3000"
    volumes:
      - .:/opt/docusaurus
    environment:
      - NODE_ENV=development`}
            </code>

            <Heading as="h3">步驟 2：啟動開發伺服器</Heading>
            <code>
{`docker compose --file dev.docker-compose.yml up

# 背景執行
docker compose --file dev.docker-compose.yml up -d

# 網站位於 http://localhost:3000`}
            </code>

            <Heading as="h3">Dockerfile（多階段建置）</Heading>
            <code>
{`# syntax=docker/dockerfile:1

# Stage 1: Base
FROM node:lts AS base
ENV FORCE_COLOR=0
RUN corepack enable
WORKDIR /opt/docusaurus

# Stage 2: Development
FROM base AS dev
WORKDIR /opt/docusaurus
EXPOSE 3000
CMD [ -d "node_modules" ] && npm run start -- --poll 1000 || npm install && npm run start -- --poll 1000`}
            </code>
          </div>

          {/* ====== 部署方式比較 ====== */}
          <div className="deploy-card">
            <Heading as="h2">部署方式比較</Heading>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th>方式</th>
                  <th>成本</th>
                  <th>自動化</th>
                  <th>HTTPS</th>
                  <th>適用場景</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GitHub Actions</td>
                  <td>免費</td>
                  <td>✅ 推送到 main 自動部署</td>
                  <td>✅</td>
                  <td>推薦！公開儲存庫最佳選擇</td>
                </tr>
                <tr>
                  <td>手動 deploy</td>
                  <td>免費</td>
                  <td>❌ 需手動執行</td>
                  <td>✅</td>
                  <td>需要控制部署時機</td>
                </tr>
                <tr>
                  <td>Docker dev</td>
                  <td>本地資源</td>
                  <td>❌ 僅本地開發</td>
                  <td>❌</td>
                  <td>本地開發與預覽</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ====== 常見問題 ====== */}
          <div className="deploy-card">
            <Heading as="h2">常見問題排解</Heading>

            <Heading as="h3">Q: 部署後顯示 "There isn't a GitHub Pages site here"</Heading>
            <ul>
              <li>等待約 3 分鐘，GitHub Pages 需要時間生效</li>
              <li>檢查 Actions 分頁是否有綠色勾勾（建置成功）</li>
              <li>確認 Settings → Pages → Source 設為 GitHub Actions</li>
              <li>確認 <code>baseUrl</code> 與儲存庫名稱一致</li>
            </ul>

            <Heading as="h3">Q: 圖片或資源 404</Heading>
            <ul>
              <li>確認 <code>baseUrl</code> 正確設定為 <code>/儲存庫名稱/</code></li>
              <li>確認 <code>static/.nojekyll</code> 存在（禁用 Jekyll）</li>
            </ul>

            <Heading as="h3">Q: 使用自訂域名</Heading>
            <ul>
              <li>在 <code>static</code> 目錄建立 <code>CNAME</code> 檔案，內容為你的域名</li>
              <li>在 DNS 設定 CNAME 記錄指向 <code>your-github-username.github.io</code></li>
              <li>在 Settings → Pages 中設定自訂域名</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
