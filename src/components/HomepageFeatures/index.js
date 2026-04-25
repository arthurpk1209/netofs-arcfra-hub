import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '雲端原生架構',
    icon: '☁️',
    description: (
      <>
        深入探索 Kubernetes、容器化技術與微服務架構，
        協助企業建立可擴展、高可用性的雲端平台。
      </>
    ),
  },
  {
    title: 'AI 賦能',
    icon: '🤖',
    description: (
      <>
        設計穩健的 AI 平台，加速模型開發並滿足嚴格的治理與
        資料主權要求，推動生成式 AI 工作負載。
      </>
    ),
  },
  {
    title: '容器化部署',
    icon: '🐳',
    description: (
      <>
        使用 Docker 與 Docker Compose 簡化部署流程，
        確保開發、測試與生產環境的一致性與可靠性。
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('feature-card', styles.featureCard)}>
      <div className="feature-icon">
        <span style={{fontSize: '2rem'}}>{icon}</span>
      </div>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <div key={idx} className={clsx('col col--4')}>
              <Feature {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
