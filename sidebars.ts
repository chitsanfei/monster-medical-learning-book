import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // 妇产科学的目录配置
  docsNoteObgyn: {
    '妇产科学': [
      {
        type: 'autogenerated',
        dirName: 'note-obgyn',
      },
    ],
  },

  // 儿科学的目录配置
  docsNotePed: {
    '儿科学': [
      {
        type: 'autogenerated',
        dirName: 'note-ped',
      },
    ],
  },

  docsNoteSurg: {
    '外科学': [
      {
        type: 'autogenerated',
        dirName: 'note-surg',
      },
    ],
  },

  docsNoteSurgGS: {
    '普外科': [
      {
        type: 'autogenerated',
        dirName: 'note-surg/gs',
      },
    ],
  },

};

export default sidebars;
