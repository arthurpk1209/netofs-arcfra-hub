import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function Homepage() {
  return (
    <Layout
      title="Netfos Arcfra Hub"
      description="雲端原生架構 · AI 賦能 · 容器化部署">
      <main className={styles.main}>
        {/* 頂部個人介紹區 */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.avatarWrapper}>
                <img
                  src="/img/logo.png"
                  alt="Netfos Arcfra Hub"
                  className={styles.avatar}
                />
              </div>
              <h1 className={styles.name}>Netfos Arcfra Hub</h1>
              <p className={styles.title}>雲端原生架構 · AI 賦能 · 容器化部署</p>
            </div>
          </div>
        </section>

        {/* 介紹文字 */}
        <section className={styles.aboutSection}>
          <div className="container">
            <p className={styles.aboutText}>
              Netfos Arcfra Hub 是一個專注於雲端原生技術、AI 賦能與容器化部署的技術中心。
              我們協助企業建立安全、可擴展且面向未來的現代化應用平台，
              涵蓋從基礎設施虛擬化到 Kubernetes 驅動的混合雲架構。
            </p>
            <p className={styles.aboutText}>
              擁有豐富的實戰經驗，技術棧橫跨企業基礎設施全領域——
              從早期的 VDI 部署與資料中心虛擬化，到今日的 Kubernetes 混合雲與生成式 AI 工作負載。
            </p>
          </div>
        </section>

        {/* 技能卡片區 */}
        <section className={styles.skillsSection}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>
              核心技術領域
            </Heading>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>☁️</div>
                <Heading as="h3" className={styles.skillTitle}>
                  雲端原生架構與 Kubernetes
                </Heading>
                <p className={styles.skillDesc}>
                  深入 Kubernetes 架構與 GitOps 實踐，協助企業建立可擴展、高可用性的雲端平台。
                  涵蓋容器化技術、微服務架構與混合雲部署策略。
                </p>
              </div>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>🤖</div>
                <Heading as="h3" className={styles.skillTitle}>
                  企業 AI 賦能
                </Heading>
                <p className={styles.skillDesc}>
                  設計穩健的 AI 平台，加速模型開發並滿足嚴格的治理與資料主權要求。
                  推動生成式 AI 工作負載在企業環境中的落地應用。
                </p>
              </div>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>🐳</div>
                <Heading as="h3" className={styles.skillTitle}>
                  容器化部署與自動化
                </Heading>
                <p className={styles.skillDesc}>
                  使用 Docker 與 Kubernetes 簡化部署流程，確保開發、測試與生產環境的一致性。
                  結合 GitHub Actions 實現 CI/CD 自動化。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 證書與資質 */}
        <section className={styles.credsSection}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>
              技術棧與資質
            </Heading>
            <ul className={styles.credsList}>
              <li>Docusaurus 3.10 — 現代化靜態網站生成器</li>
              <li>React 19 — 前端 UI 框架</li>
              <li>Docker & Docker Compose — 容器化部署</li>
              <li>GitHub Actions — CI/CD 自動化</li>
              <li>GitHub Pages — 免費靜態網站託管</li>
            </ul>
          </div>
        </section>

        {/* 底部描述 */}
        <section className={styles.footerSection}>
          <div className="container">
            <p className={styles.footerText}>
              當我們不在構建雲端架構或實驗最新的 LLM 框架時，
              可以在技術部落格、開源社群貢獻、錄製教學影片與撰寫技術文章中看到我們的身影。
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Homepage;
