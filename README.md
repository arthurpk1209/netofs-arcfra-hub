# Netfos Arcfra Hub — Docusaurus 3.10

使用 **GitHub Pages 自動部署** + **Docker 本地開發**。

## 版本資訊

| 項目 | 版本 |
|------|------|
| Docusaurus | **3.10.0** (最新穩定版) |
| React | **19.1.0** |
| Node.js | ≥ 20.0 |

## 部署方式

| 方式 | 說明 | 適用場景 |
|------|------|---------|
| **GitHub Actions** ⭐ | 推送到 main 自動部署到 GitHub Pages | 推薦！公開儲存庫最佳選擇 |
| **手動 deploy** | 執行 `npm run deploy` 手動推送 | 需要控制部署時機 |
| **Docker dev** | 本地開發伺服器，支援熱重載 | 本地開發與預覽 |

## 🚀 快速開始：GitHub Pages 部署

### 步驟 1：Fork 或複製此專案

```bash
git clone https://github.com/your-username/netfos-arcfra-hub.git
cd netfos-arcfra-hub
```

### 步驟 2：修改 GitHub 設定

編輯 `docusaurus.config.js`，將以下設定改為你的資訊：

```javascript
export default {
  url: 'https://your-github-username.github.io',
  baseUrl: '/netfos-arcfra-hub/',
  organizationName: 'your-github-username',
  projectName: 'netfos-arcfra-hub',
};
```

### 步驟 3：推送到 GitHub

```bash
git add .
git commit -m "Initial setup"
git remote add origin https://github.com/your-github-username/netfos-arcfra-hub.git
git push -u origin main
```

### 步驟 4：啟用 GitHub Pages

1. 前往儲存庫 **Settings → Pages**
2. **Build and deployment** → Source：選擇 `GitHub Actions`
3. 等待 Actions 自動建置並部署

### 步驟 5：訪問網站

部署完成後，網站將位於：
```
https://your-github-username.github.io/netfos-arcfra-hub/
```

## 🐳 Docker 本地開發

```bash
# 啟動開發伺服器
docker compose --file dev.docker-compose.yml up

# 網站位於 http://localhost:3000
```

## 📁 專案結構

```
netfos-arcfra-hub/
├── .github/workflows/
│   ├── deploy.yml              # GitHub Actions：自動部署
│   └── test-deploy.yml         # GitHub Actions：PR 測試建置
├── Dockerfile                  # Docker 開發環境
├── dev.docker-compose.yml      # Docker Compose 開發
├── .dockerignore
├── docusaurus.config.js        # Docusaurus 設定
├── package.json                # 依賴 (Docusaurus 3.10.0)
├── docs/                       # 文件內容
├── blog/                       # 部落格文章
├── src/
│   ├── components/             # React 元件
│   ├── css/custom.css          # 深色主題樣式
│   └── pages/
│       ├── index.js            # 首頁
│       └── deploy.js           # 部署指南頁面
└── static/
    ├── .nojekyll               # 禁用 Jekyll
    └── img/                    # Logo 與圖示
```

## 🎨 設計風格

- 🌙 **深色主題** — 參考 wskn.ai 專業風格
- ✨ **玻璃擬態卡片** — 毛玻璃效果
- 🎯 **漸層文字** — 藍白漸層標題

## 技術棧

- [Docusaurus 3.10](https://docusaurus.io/) — 靜態網站生成器
- [React 19](https://react.dev/) — UI 框架
- [GitHub Pages](https://pages.github.com/) — 免費靜態網站託管
- [Docker](https://www.docker.com/) — 本地開發環境

## 參考資料

- [Docusaurus GitHub Pages 部署官方文件](https://docusaurus.io/docs/deployment#github-pages)
- [Docusaurus Community Docker 部署指南](https://docusaurus.community/knowledge/deployment/docker/)

## 授權

MIT License
