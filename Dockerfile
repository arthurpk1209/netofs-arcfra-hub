# syntax=docker/dockerfile:1
# ============================================================
# Dockerfile for Docusaurus 3.10.0 — 本地開發用
# 支援多語言：繁體中文 (zh-Hant) 與英文 (en)
# 參考: https://docusaurus.community/knowledge/deployment/docker/
# ============================================================

# Stage 1: Base
FROM node:lts AS base
ENV FORCE_COLOR=0
RUN corepack enable
WORKDIR /opt/docusaurus

# Stage 2: Development
FROM base AS dev
WORKDIR /opt/docusaurus
EXPOSE 3000

# 透過環境變數 DOCS_LOCALE 切換語言（預設 zh-Hant）
ENV DOCS_LOCALE=zh-Hant

# 安裝依賴並啟動開發伺服器
CMD ["sh", "-c", "npm install && npm run start -- --host 0.0.0.0 --poll 1000 --locale ${DOCS_LOCALE}"]
