import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function Homepage() {
  return (
    <Layout
      title="Netfos Arcfra Hub"
      description="Cloud Native Architecture · AI Empowerment · Containerized Deployment">
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.avatarWrapper}>
                <img src="/img/logo.png" alt="Netfos Arcfra Hub" className={styles.avatar} />
              </div>
              <h1 className={styles.name}>Netfos Arcfra Hub</h1>
              <p className={styles.title}>Cloud Native Architecture · AI Empowerment · Containerized Deployment</p>
            </div>
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className="container">
            <p className={styles.aboutText}>
              Netfos Arcfra Hub is a technology center focused on cloud-native technology, 
              AI empowerment, and containerized deployment.
            </p>
          </div>
        </section>

        <section className={styles.skillsSection}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>Core Technologies</Heading>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>☁️</div>
                <Heading as="h3" className={styles.skillTitle}>Cloud Native & Kubernetes</Heading>
                <p className={styles.skillDesc}>Deep Kubernetes architecture and GitOps practices.</p>
              </div>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>🤖</div>
                <Heading as="h3" className={styles.skillTitle}>Enterprise AI Empowerment</Heading>
                <p className={styles.skillDesc}>Design robust AI platforms for enterprise environments.</p>
              </div>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>🐳</div>
                <Heading as="h3" className={styles.skillTitle}>Containerized Deployment</Heading>
                <p className={styles.skillDesc}>Simplify deployment with Docker and Kubernetes.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Homepage;
