import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '妖怪们的医学书',
  tagline: "Monster's Medical Book",
  favicon: 'img/favicon.ico',

  url: 'https://medi.emu.ac.cn',
  baseUrl: '/',

  organizationName: 'ShizukuWorld',
  projectName: 'monster-medical-learning-book',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'zh-TW', 'en-US', 'ja-JP'],
    localeConfigs: {
      'zh-CN': {
        htmlLang: 'zh-CN',
      },
      'zh-TW': {
        htmlLang: 'zh-TW',
      },
      'en-US': {
        htmlLang: 'en-US',
      },
      'ja-JP': {
        htmlLang: 'ja-JP',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/chitsanfei/monster-medical-learning-book/blob/master/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          editUrl: 'https://github.com/chitsanfei/monster-medical-learning-book/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '妖怪们的医学书',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '全书浏览',
        },
        {
          label: "内科学",
          type: "dropdown",
          to: "/docs/note-im/intro",
          items: [
            { label: "导读", to: '/docs/note-im/intro'},
            { label: "呼吸内科", to: '/docs/note-im/pmi/intro'},
            { label: "消化内科", to: '/docs/note-im/gi/intro'},
          ],
        },
        {
          label: "外科学",
          type: "dropdown",
          to: "/docs/note-surg/intro",
          items: [
            { label: "导读", to: '/docs/note-surg/intro'},
            { label: "普外科", to: '/docs/note-surg/gs/intro'},
          ],
        },
        { to: 'docs/note-obgyn/intro', label: '妇产科学', position: 'left'},
        { to: 'docs/note-ped/intro', label: '儿科学', position: 'left'},
        { to: 'docs/note-np/intro', label: '神经与精神病学', position: 'left'},
        { to: 'docs/note-cps/intro', label: '临床技能实践', position: 'left'},
        { to: 'blog', label: '更新', position: 'left' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/chitsanfei/monster-medical-learning-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '导览',
          items: [
            {
              label: '开始阅读',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: '学术站',
              href: 'https://emu.ac.cn',
            },
            {
              label: '知乎',
              href: 'https://www.zhihu.com/people/chitsanfei',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '梅冥子的博客',
              to: 'https://sekai.us.kg',
            },
            {
              label: '作者 GitHub',
              href: 'https://github.com/chitsanfei',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Monster's Medical Book, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
