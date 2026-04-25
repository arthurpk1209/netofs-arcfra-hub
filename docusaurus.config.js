// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Netfos Arcfra Hub',
  tagline: 'Fighting',
  favicon: 'img/favicon.ico',

  // GitHub Pages 設定：請修改為你的 GitHub 使用者名稱與儲存庫名稱
  url: 'https://arthurpk1209.github.io',
  baseUrl: '/',

  // GitHub Pages 必要設定
  organizationName: 'arthurpk1209',
  projectName: 'netfos-arcfra-hub',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  onDuplicateRoutes: 'warn',

  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
    localeConfigs: {
      'zh-Hant': {
        label: '繁體中文',
        htmlLang: 'zh-Hant',
      },
    },
  },

  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
    faster: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/arthurpk1209/netfos-arcfra-hub/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/arthurpk1209/netfos-arcfra-hub/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Netfos Arcfra Hub',
        logo: {
          alt: 'Netfos Arcfra Hub Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文件',
          },
          {to: '/blog', label: '部落格', position: 'left'},
          {
            to: '/deploy',
            label: '部署指南',
            position: 'left',
          },
          {
            href: 'https://github.com/arthurpk1209/netfos-arcfra-hub',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文件',
            items: [
              {label: '快速入門', to: '/docs/intro'},
              {label: '部署指南', to: '/deploy'},
            ],
          },
          {
            title: '社群',
            items: [
              {label: 'GitHub', href: 'https://github.com/arthurpk1209/netfos-arcfra-hub'},
            ],
          },
          {
            title: '更多',
            items: [
              {label: '部落格', to: '/blog'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Netfos Arcfra Hub. Built with Docusaurus 3.10.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
