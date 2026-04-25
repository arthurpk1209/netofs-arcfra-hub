// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Netfos Arcfra Hub',
  tagline: '雲端原生架構 · AI 賦能 · 容器化部署',
  favicon: 'img/favicon.png',

  url: 'https://your-github-username.github.io',
  baseUrl: '/',
  organizationName: 'your-github-username',
  projectName: 'netfos-arcfra-hub',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',
  onDuplicateRoutes: 'warn',

  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant', 'en'],
    localeConfigs: {
      'zh-Hant': {
        label: '繁體中文',
        htmlLang: 'zh-Hant',
      },
      'en': {
        label: 'English',
        htmlLang: 'en',
      },
    },
  },

  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
    faster: true,
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["zh", "en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/your-github-username/netfos-arcfra-hub/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/your-github-username/netfos-arcfra-hub/tree/main/',
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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Netfos Arcfra Hub',
        logo: {
          alt: 'Netfos Arcfra Hub Logo',
          src: 'img/logo.png',
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
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/your-github-username/netfos-arcfra-hub',
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
              {label: 'GitHub', href: 'https://github.com/your-github-username/netfos-arcfra-hub'},
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
