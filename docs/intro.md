# 歡迎來到 Netfos Arcfra Hub

這是一個使用 **Docusaurus 3.10** + **GitHub Pages** 部署的現代化技術文件網站。

## 版本資訊

| 項目 | 版本 |
|------|------|
| Docusaurus | **3.10.0** |
| React | **19.1.0** |
| Node.js | ≥ 20.0 |

## 快速開始

### GitHub Pages 部署（推薦）

1. Fork 此專案到你的 GitHub 帳號
2. 修改 `docusaurus.config.js` 中的 `url`、`baseUrl`、`organizationName`、`projectName`
3. 推送到 `main` 分支
4. 前往 Settings → Pages → Source：選擇 `GitHub Actions`
5. 等待自動部署完成

### Docker 本地開發

```bash
docker compose --file dev.docker-compose.yml up
```

網站位於 http://localhost:3000

## 部署方式

本站支援三種部署方式：

| 方式 | 自動化 | 成本 | 說明 |
|------|--------|------|------|
| **GitHub Actions** | ✅ 推送到 main 自動部署 | 免費 | 推薦！ |
| **手動 deploy** | ❌ 需手動執行 | 免費 | 使用 `npm run deploy` |
| **Docker dev** | ❌ 僅本地 | 免費 | 本地開發預覽 |

詳細步驟請參考 [部署指南](/deploy)。

## 技術棧

- [Docusaurus 3.10](https://docusaurus.io/)
- [React 19](https://react.dev/)
- [GitHub Pages](https://pages.github.com/)
- [Docker](https://www.docker.com/)
