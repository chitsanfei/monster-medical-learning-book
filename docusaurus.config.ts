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
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
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
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '全书浏览',
        },
        { to: 'docs/note-obgyn/intro', label: '妇产科学', position: 'left'},
        { to: 'blog', label: '更新', position: 'left' },
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
              label: 'Kook 频道',
              href: 'https://kook.top/y1mQnk',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '作者博客',
              to: 'https://emu.ac.cn',
            },
            {
              label: 'GitHub',
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
