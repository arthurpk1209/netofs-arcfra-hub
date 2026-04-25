# syntax=docker/dockerfile:1
# ============================================================
# Dockerfile for Docusaurus 3.10.0 — 本地開發用
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
CMD [ -d "node_modules" ] && npm run start -- --poll 1000 || npm install && npm run start -- --poll 1000
