---
slug: github-pages-deploy-docusaurus-310
title: 使用 GitHub Pages 部署 Docusaurus 3.10
authors: [winson]
tags: [github-pages, docusaurus, deployment, docusaurus-310]
---

# 使用 GitHub Pages 部署 Docusaurus 3.10

Docusaurus 3.10 是 v3.x 系列的最後一個版本。本文介紹如何使用 GitHub Actions 自動部署到 GitHub Pages。

## 為什麼選擇 GitHub Pages？

- **完全免費** — 公開儲存庫無限制使用
- **自動化部署** — 推送到 main 分支即自動建置並部署
- **HTTPS 內建** — 無需額外設定 SSL
- **全球 CDN** — GitHub 全球節點加速

## 部署步驟

1. **建立儲存庫** — 在 GitHub 建立新儲存庫
2. **修改設定** — 編輯 `docusaurus.config.js` 中的 `url`、`baseUrl`、`organizationName`、`projectName`
3. **推送程式碼** — `git push origin main`
4. **啟用 Pages** — Settings → Pages → Source：GitHub Actions
5. **完成！** — 等待 Actions 自動建置部署

## 專案已包含

- `.github/workflows/deploy.yml` — 自動部署 Workflow
- `.github/workflows/test-deploy.yml` — PR 測試 Workflow
- `static/.nojekyll` — 禁用 Jekyll 處理

詳細步驟請參考 [部署指南](/deploy)。
