import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  docs: {
    // 妇产科学的目录配置
    '妇产科学': [
      {
        type: 'autogenerated',
        dirName: 'note-obgyn', // 自动包含note-obgyn文件夹下的所有Markdown文档
      },
    ],

  },
};

export default sidebars;
