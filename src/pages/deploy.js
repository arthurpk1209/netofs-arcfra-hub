import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './deploy.module.css';

export default function DeployPage() {
  return (
    <Layout
      title="部署指南"
      description="Netfos Arcfra Hub 部署方式：GitHub Pages 自動部署 + Docker 本地開發 + i18n 國際化">
      <div className="deploy-section">
        <div className="container">
          <div className={styles.header}>
            <Heading as="h1">部署指南</Heading>
            <p className={styles.subtitle}>
              GitHub Pages 自動部署、Docker 本地開發、i18n 國際化
            </p>
          </div>

          {/* ====== Docker 功能啟用指南（重要！） ====== */}
          <div className="deploy-card" style={{borderColor: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)'}}>
            <Heading as="h2">⚠️ Docker 功能啟用指南（必讀）</Heading>
            <p>
              如果你在 Docker 上看不到 <strong>Dark/Light 模式</strong>、<strong>搜尋框</strong> 或 <strong>i18n 語言切換</strong>，
              這是因為 Docker 容器使用了<strong>舊的 node_modules 快取</strong>，新依賴沒有安裝。
            </p>

            <Heading as="h3">🔧 解決步驟：清除快取並重新啟動</Heading>
            <code>
{`# 1. 停止並移除現有容器
docker compose --file dev.docker-compose.yml down

# 2. 刪除舊的 Docker 映像檔（強制重建）
docker compose --file dev.docker-compose.yml down --rmi all

# 或手動刪除
docker rmi docusaurus-dev

# 3. 刪除本地 node_modules（如果存在）
rm -rf node_modules package-lock.json

# 4. 重新建置並啟動（會自動安裝最新依賴）
docker compose --file dev.docker-compose.yml up --build

# 5. 等待安裝完成（約 1-2 分鐘），看到以下訊息即成功：
# [INFO] Docusaurus website is running at: http://localhost:3000/`}
            </code>

            <Heading as="h3">✅ 各功能在 Docker 開發模式的表現</Heading>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th>功能</th>
                  <th>Docker 開發模式</th>
                  <th>生產模式 (npm run build)</th>
                  <th>說明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>🌙 Dark/Light 模式</td>
                  <td>✅ 可用</td>
                  <td>✅ 可用</td>
                  <td>導航列右上角月亮/太陽圖示</td>
                </tr>
                <tr>
                  <td>🔍 本地搜尋</td>
                  <td>⚠️ 搜尋框顯示但<strong>無結果</strong></td>
                  <td>✅ 完全可用</td>
                  <td>搜尋插件需要 build 後才能建立索引</td>
                </tr>
                <tr>
                  <td>🌍 i18n 語言切換</td>
                  <td>✅ 可用（需指定 --locale）</td>
                  <td>✅ 可用</td>
                  <td>預設只載入一種語言，需啟動多個容器</td>
                </tr>
                <tr>
                  <td>📱 響應式設計</td>
                  <td>✅ 可用</td>
                  <td>✅ 可用</td>
                  <td>自動適應手機/桌面</td>
                </tr>
              </tbody>
            </table>

            <Heading as="h3">🔍 為什麼 Docker 開發模式搜尋沒有結果？</Heading>
            <p>
              本地搜尋插件 <code>@easyops-cn/docusaurus-search-local</code> 需要在 <strong><code>npm run build</code></strong> 後才能建立搜尋索引。
              開發模式 (<code>npm run start</code>) 只會顯示搜尋框，但無法搜尋。
            </p>
            <p><strong>解決方案：</strong>在 Docker 中執行 build 後預覽</p>
            <code>
{`# 在 Docker 容器內執行 build
docker compose --file dev.docker-compose.yml exec dev npm run build

# 然後用 serve 預覽（搜尋功能正常）
docker compose --file dev.docker-compose.yml exec dev npm run serve -- --host 0.0.0.0`}
            </code>

            <Heading as="h3">🌍 為什麼 i18n 語言切換只顯示一種語言？</Heading>
            <p>
              Docusaurus 開發模式預設只載入 <strong>一種語言</strong>（由 <code>--locale</code> 指定）。
              要同時看到多語言切換，需要啟動多個容器：
            </p>
            <code>
{`# 終端機 1：繁體中文（port 3000）
docker compose --file dev.docker-compose.yml up

# 終端機 2：英文（port 3001）
docker compose --file dev-en.docker-compose.yml up`}
            </code>
          </div>

          {/* ====== i18n 國際化 ====== */}
          <div className="deploy-card">
            <Heading as="h2">🌍 i18n 國際化</Heading>
            <p>
              本站支援 <strong>繁體中文</strong> 與 <strong>英文</strong> 雙語言。
              導航列右上角有語言切換下拉選單，可隨時切換語言。
            </p>

            <Heading as="h3">支援語言</Heading>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th>語言</th>
                  <th>Locale Code</th>
                  <th>狀態</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>繁體中文</td>
                  <td><code>zh-Hant</code></td>
                  <td>✅ 預設語言</td>
                </tr>
                <tr>
                  <td>English</td>
                  <td><code>en</code></td>
                  <td>✅ 已翻譯</td>
                </tr>
              </tbody>
            </table>

            <Heading as="h3">Docker 中切換語言</Heading>
            <p>使用 Docker Compose 時，透過 <code>DOCS_LOCALE</code> 環境變數切換語言：</p>
            <code>
{`# 繁體中文（預設，port 3000）
docker compose --file dev.docker-compose.yml up

# 英文（port 3001）
docker compose --file dev-en.docker-compose.yml up

# 兩個版本可以同時執行！
# 繁體中文：http://localhost:3000
# 英文：http://localhost:3001`}
            </code>

            <Heading as="h3">Dockerfile 語言切換原理</Heading>
            <p><code>Dockerfile</code> 使用 <code>DOCS_LOCALE</code> 環境變數來決定啟動語言：</p>
            <code>
{`ENV DOCS_LOCALE=zh-Hant  # 預設繁體中文
CMD npm install && npm run start -- --host 0.0.0.0 --locale \${DOCS_LOCALE}`}
            </code>
            <p>你可以修改 <code>dev.docker-compose.yml</code> 中的 <code>DOCS_LOCALE</code> 來切換語言：</p>
            <code>
{`environment:
  - DOCS_LOCALE=en  # 改為英文`}
            </code>

            <Heading as="h3">本地開發時切換語言（非 Docker）</Heading>
            <code>
{`# 啟動繁體中文版本（預設）
npm run start

# 啟動英文版本
npm run start -- --locale en

# 建置所有語言版本
npm run build

# 建置特定語言版本
npm run build -- --locale en`}
            </code>

            <Heading as="h3">i18n 目錄結構</Heading>
            <code>
{`i18n/
├── en/                                    # 英文翻譯
│   ├── code.json                          # UI 文字翻譯
│   ├── docusaurus-theme-classic/
│   │   ├── navbar.json                    # 導航列翻譯
│   │   └── footer.json                    # 頁腳翻譯
│   ├── docusaurus-plugin-content-docs/
│   │   └── current/
│   │       └── intro.md                   # 英文版文件
│   ├── docusaurus-plugin-content-blog/
│   │   ├── authors.yml                    # 英文版作者
│   │   └── 2026-04-24-github-pages-deploy.md
│   └── docusaurus-plugin-content-pages/   # 英文版頁面`}
            </code>

            <Heading as="h3">新增語言步驟</Heading>
            <p>若要新增其他語言（例如簡體中文）：</p>
            <ol>
              <li>編輯 <code>docusaurus.config.js</code>，在 <code>locales</code> 陣列新增語言代碼：</li>
            </ol>
            <code>
{`i18n: {
  defaultLocale: 'zh-Hant',
  locales: ['zh-Hant', 'en', 'zh-Hans'],  // 新增 zh-Hans
  localeConfigs: {
    'zh-Hans': {
      label: '简体中文',
      htmlLang: 'zh-Hans',
      direction: 'ltr',
    },
  },
},`}
            </code>
            <ol start="2">
              <li>建立 <code>i18n/zh-Hans/</code> 目錄結構（同 en/）</li>
              <li>翻譯 <code>code.json</code>、<code>navbar.json</code>、<code>footer.json</code></li>
              <li>翻譯文件內容到 <code>i18n/zh-Hans/docusaurus-plugin-content-docs/</code></li>
              <li>建立 <code>dev-zh-hans.docker-compose.yml</code>（可選）</li>
              <li>重新建置即可看到新語言選項</li>
            </ol>
          </div>

          {/* ====== 重要提醒 ====== */}
          <div className="deploy-card" style={{borderColor: '#ef4444', background: 'rgba(239, 68, 68, 0.1)'}}>
            <Heading as="h2">⚠️ 部署前必讀：兩個最常見錯誤</Heading>

            <Heading as="h3">錯誤 1：baseUrl 設定錯誤</Heading>
            <p><code>baseUrl</code> 必須是 <code>/儲存庫名稱/</code>（前後都有斜線），且大小寫與 GitHub 儲存庫完全一致。</p>
            <ul>
              <li>✅ <code>baseUrl: '/'</code></li>
              <li>❌ <code>baseUrl: '/netfos-arcfra-hub'</code> — 缺少結尾斜線</li>
              <li>❌ <code>baseUrl: '/Netfos-Arcfra-Hub/'</code> — 大小寫不匹配</li>
            </ul>

            <Heading as="h3">錯誤 2：trailingSlash 設定錯誤（導致 "site did not load properly"）</Heading>
            <p><strong>這是「Your Docusaurus site did not load properly」錯誤的最常見原因！</strong></p>
            <p>GitHub Pages 會自動將 URL 重定向到帶尾部斜槓的版本。如果 <code>trailingSlash</code> 設為 <code>false</code>，會導致路由混亂。</p>
            <p><strong>解決方案：將 trailingSlash 設為 true</strong></p>
            <code>
{`export default {
  trailingSlash: true,  // ✅ GitHub Pages 建議設定
};`}
            </code>
          </div>

          {/* ====== 方案 A：GitHub Actions 直接部署 ====== */}
          <div className="deploy-card">
            <Heading as="h2">🚀 方案 A：GitHub Actions 直接部署</Heading>

            <Heading as="h3">步驟 1：確認 docusaurus.config.js 設定（關鍵！）</Heading>
            <code>
{`export default {
  organizationName: 'john-doe',
  projectName: 'netfos-arcfra-hub',
  url: 'https://john-doe.github.io',
  baseUrl: '/',
  trailingSlash: true,
};`}
            </code>

            <Heading as="h3">步驟 2：建立 GitHub 儲存庫並推送</Heading>
            <code>
{`git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/netfos-arcfra-hub.git
git push -u origin main`}
            </code>

            <Heading as="h3">步驟 3：設定 GitHub Pages</Heading>
            <p>前往儲存庫 <strong>Settings → Pages</strong>：</p>
            <ul>
              <li><strong>Build and deployment → Source</strong></li>
              <li>選擇 <code>GitHub Actions</code></li>
            </ul>

            <Heading as="h3">步驟 4：推送觸發部署</Heading>
            <code>
{`git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main`}
            </code>

            <Heading as="h3">步驟 5：驗證部署</Heading>
            <ul>
              <li>前往儲存庫的 <strong>Actions</strong> 分頁</li>
              <li>確認 workflow 顯示綠色勾勾 ✅</li>
              <li>等待約 1-3 分鐘</li>
              <li>訪問 <code>https://你的使用者名稱.github.io/netfos-arcfra-hub/</code></li>
            </ul>
          </div>

          {/* ====== 部署失敗排查 ====== */}
          <div className="deploy-card">
            <Heading as="h2">🔧 部署失敗排查指南</Heading>

            <Heading as="h3">問題：「Your Docusaurus site did not load properly」</Heading>
            <ol>
              <li>檢查 <code>docusaurus.config.js</code> 中的 <code>trailingSlash</code></li>
              <li>確認設為 <code>true</code></li>
              <li>修改後重新推送，等待重新部署</li>
              <li>清除瀏覽器快取後重新整理</li>
            </ol>

            <Heading as="h3">問題：Actions 顯示成功但網站空白或 404</Heading>
            <ul>
              <li>確認 <code>baseUrl</code> 格式為 <code>/儲存庫名稱/</code></li>
              <li>確認 <code>trailingSlash: true</code></li>
              <li>確認 Settings → Pages → Source = <code>GitHub Actions</code></li>
            </ul>

            <Heading as="h3">問題：CSS/圖片載入失敗（404）</Heading>
            <ul>
              <li>瀏覽器 F12 → Network → 查看 404 的資源路徑</li>
              <li>如果路徑缺少 <code>/netfos-arcfra-hub/</code> → <code>baseUrl</code> 錯誤</li>
              <li>確認 <code>static/.nojekyll</code> 檔案存在</li>
            </ul>
          </div>

          {/* ====== Docker 開發 ====== */}
          <div className="deploy-card">
            <Heading as="h2">🐳 Docker 本地開發</Heading>
            <code>
{`# 繁體中文（預設，port 3000）
docker compose --file dev.docker-compose.yml up

# 英文（port 3001）
docker compose --file dev-en.docker-compose.yml up`}
            </code>
          </div>
        </div>
      </div>
    </Layout>
  );
}
