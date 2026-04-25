# Netfos Arcfra Hub — Docusaurus 3.10 Docker 部署

參考 [Docusaurus Community 官方 Docker 部署指南](https://docusaurus.community/knowledge/deployment/docker/)。

## 版本資訊

| 項目 | 版本 |
|------|------|
| Docusaurus | **3.10.0** (最新穩定版) |
| React | **19.1.0** |
| Node.js | ≥ 20.0 |

## 設計風格

- 🌙 **深色主題** — 現代化深色背景搭配藍色漸層
- ✨ **玻璃擬態卡片** — 毛玻璃效果的專業卡片設計
- 🎯 **漸層文字** — 標題使用藍白漸層效果

## 快速開始

### 前置需求

```bash
docker --version        # Docker v20.10+
docker compose version  # Docker Compose v2.0+
```

### 步驟 1：建立專案目錄

```bash
mkdir docusaurus-docker-site
cd docusaurus-docker-site
```

### 步驟 2：建置並執行

```bash
# 開發模式 (熱重載)
docker compose --file dev.docker-compose.yml up -d --build

# 生產模式 (Docusaurus serve)
docker compose --file serve.docker-compose.yml up -d --build

# 生產模式 (Caddy + 自動 HTTPS)
docker compose --file caddy.docker-compose.yml up -d --build
```

## Docker 部署方式一覽

| 方式 | Compose 檔案 | 埠號 | HTTPS | 適用場景 |
|------|-------------|------|-------|---------|
| **dev** | `dev.docker-compose.yml` | 3000 | ❌ | 本地開發 |
| **serve** | `serve.docker-compose.yml` | 3000 | ❌ | 簡易生產 |
| **caddy** | `caddy.docker-compose.yml` | 80/443 | ✅ 自動 | 正式生產 |

## 專案結構

```
docusaurus-docker-site/
├── Dockerfile                    # 多階段建置 (dev / serve / caddy)
├── Caddyfile                     # Caddy 伺服器設定
├── dev.docker-compose.yml        # 開發環境 Compose
├── serve.docker-compose.yml      # 生產環境 Compose (serve)
├── caddy.docker-compose.yml      # 生產環境 Compose (caddy)
├── .dockerignore                 # Docker 忽略檔案
├── docusaurus.config.js          # Docusaurus 3.10 設定
├── package.json                  # 依賴 (最新版本)
├── sidebars.js                   # 側邊欄設定
├── docs/                         # 文件內容
├── blog/                         # 部落格文章
├── src/
│   ├── components/               # React 元件
│   ├── css/custom.css            # 深色主題樣式
│   └── pages/
│       ├── index.js              # 首頁
│       └── deploy.js             # Docker 部署指南頁面
└── static/img/                   # Logo 與圖示
```

## 多階段建置架構

```
Stage 1: base    → node:lts (共用基礎，啟用 corepack)
Stage 2a: dev    → 開發伺服器 (port 3000, 熱重載)
Stage 2b: prod   → 安裝依賴 + npm run build
Stage 3a: serve  → Docusaurus serve (port 3000)
Stage 3b: caddy  → Caddy + 自動 HTTPS (port 80/443)
```

## 完整指令速查

```bash
# 建置映像檔
docker build --target dev    -t docusaurus-dev    .
docker build --target serve  -t docusaurus-serve  .
docker build --target caddy  -t docusaurus-caddy  .

# Docker Compose 啟動
docker compose --file dev.docker-compose.yml    up -d --build
docker compose --file serve.docker-compose.yml  up -d --build
docker compose --file caddy.docker-compose.yml  up -d --build

# Docker Compose 關閉
docker compose -f ./dev.docker-compose.yml down
docker compose -f ./serve.docker-compose.yml down
docker compose -f ./caddy.docker-compose.yml down 

# 管理指令
docker ps
docker images
docker compose logs -f
docker compose down
docker compose down --rmi all
```

## 技術棧

- [Docusaurus 3.10](https://docusaurus.io/) — 靜態網站生成器
- [React 19](https://react.dev/) — UI 框架
- [Docker](https://www.docker.com/) — 容器化平台
- [Caddy](https://caddyserver.com/) — 現代化網頁伺服器 (自動 HTTPS)

## 參考資料

- [Docusaurus Community Docker 部署指南](https://docusaurus.community/knowledge/deployment/docker/)
- [Docusaurus 3.10 發布說明](https://docusaurus.io/blog/releases/3.10)

## 授權

MIT License
