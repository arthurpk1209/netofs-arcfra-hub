# Netfos Arcfra Hub — Docusaurus 3.10

⚠️ **部署前必讀**：以下兩個設定錯誤是 GitHub Pages 部署失敗的**最常見原因**：

1. **`baseUrl`** 必須是 `/儲存庫名稱/`（前後都有斜線）
2. **`trailingSlash`** 必須設為 `true`（GitHub Pages 會自動添加尾部斜槓，設為 false 會導致「site did not load properly」錯誤）

## 版本資訊

| 項目 | 版本 |
|------|------|
| Docusaurus | **3.10.0** |
| React | **19.1.0** |
| Node.js | ≥ 20.0 |

## ✨ 功能特色

| 功能 | 說明 |
|------|------|
| 🌙 **Dark / Light 模式** | 導航列右上角切換按鈕，支援系統偏好自動切換 |
| 🔍 **本地搜尋** | 支援中文與英文全文搜尋，無需外部服務 |
| 🌍 **i18n 國際化** | 支援繁體中文（zh-Hant）與英文（en）雙語言 |
| 🚀 **GitHub Pages 自動部署** | 推送到 main 自動建置部署 |
| 🐳 **Docker 本地開發** | 一鍵啟動開發伺服器，支援多語言 |

## 🐳 Docker 本地開發（多語言）

### 繁體中文（預設，port 3000）

```bash
docker compose --file dev.docker-compose.yml up
# 網站位於 http://localhost:3000
```

### 英文（port 3001）

```bash
docker compose --file dev-en.docker-compose.yml up
# 網站位於 http://localhost:3001
```

### 兩個版本同時執行

```bash
# 終端機 1：繁體中文
docker compose --file dev.docker-compose.yml up

# 終端機 2：英文
docker compose --file dev-en.docker-compose.yml up

# 繁體中文：http://localhost:3000
# 英文：http://localhost:3001
```

### 切換語言原理

Dockerfile 使用 `DOCS_LOCALE` 環境變數決定啟動語言：

```dockerfile
ENV DOCS_LOCALE=zh-Hant  # 預設繁體中文
CMD npm run start -- --host 0.0.0.0 --locale ${DOCS_LOCALE}
```

你可以在 `dev.docker-compose.yml` 中修改 `DOCS_LOCALE` 來切換語言：

```yaml
environment:
  - DOCS_LOCALE=en  # 改為英文
```

## 🚀 快速開始：GitHub Pages 部署

### 步驟 1：確認 docusaurus.config.js（關鍵！）

```javascript
export default {
  organizationName: '你的-github-使用者名稱',
  projectName: 'netfos-arcfra-hub',
  url: 'https://你的-github-使用者名稱.github.io',
  baseUrl: '/netfos-arcfra-hub/',
  trailingSlash: true,  // ⚠️ 必須設為 true！
};
```

### 步驟 2：推送到 GitHub

```bash
git add .
git commit -m "Initial setup"
git remote add origin https://github.com/你的使用者名稱/netfos-arcfra-hub.git
git push -u origin main
```

### 步驟 3：啟用 GitHub Pages

1. 前往 **Settings → Pages**
2. **Source** → 選擇 `GitHub Actions`

### 步驟 4：訪問網站

```
https://你的使用者名稱.github.io/netfos-arcfra-hub/
```

## 🌍 i18n 國際化

本站支援 **繁體中文** 與 **英文** 雙語言：

| 語言 | Locale | 狀態 |
|------|--------|------|
| 繁體中文 | `zh-Hant` | ✅ 預設語言 |
| English | `en` | ✅ 已翻譯 |

### 本地開發時切換語言（非 Docker）

```bash
# 啟動繁體中文版本（預設）
npm run start

# 啟動英文版本
npm run start -- --locale en

# 建置所有語言版本
npm run build

# 建置特定語言版本
npm run build -- --locale en
```

### 新增語言

1. 編輯 `docusaurus.config.js`，在 `locales` 陣列新增語言代碼
2. 建立 `i18n/[語言代碼]/` 目錄結構
3. 翻譯 `code.json`、`navbar.json`、`footer.json`
4. 翻譯文件內容到 `i18n/[語言代碼]/docusaurus-plugin-content-docs/`

## 🔧 部署失敗排查

<<<<<<< HEAD
| 錯誤訊息 | 原因 | 解決方案 |
|---------|------|---------|
| "Your Docusaurus site did not load properly" | `trailingSlash` 設為 false | 改為 `trailingSlash: true` |
| CSS/圖片 404 | `baseUrl` 錯誤 | 確認格式為 `/儲存庫名稱/` |
| "There isn't a GitHub Pages site" | Pages Source 設定錯誤 | 確認 Source = GitHub Actions |

詳細排查請參考網站內的 [部署指南](/deploy)。
=======
- 🌙 **深色主題** — 參考深色專業風格
- ✨ **玻璃擬態卡片** — 毛玻璃效果
- 🎯 **漸層文字** — 藍白漸層標題
>>>>>>> 45ceab58486e6a9de5b991b7708c6b585a67f44b

## 技術棧

- [Docusaurus 3.10](https://docusaurus.io/)
- [React 19](https://react.dev/)
- [GitHub Pages](https://pages.github.com/)
- [Docker](https://www.docker.com/)

## 授權

MIT License
