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

  /*
  * 接下来是内科学的目录集合配置
  * */
  // 内科学的目录配置
  docsNoteInternal: {
    '内科学': [
      {
        type: 'autogenerated',
        dirName: 'note-im',
      },
    ],
  },

  // 内科学呼吸内科子项目的目录配置
  docsNoteInternalBreath: {
    '呼吸内科': [
      {
        type: 'autogenerated',
        dirName: 'note-im/pmi',
      },
    ],
  },

  // 内科学消化内科子项目的目录配置
  docsNoteInternalDigest: {
    '消化内科': [
      {
        type: 'autogenerated',
        dirName: 'note-im/gi',
      },
    ],
  },

  /*
  * 接下来是外科学的目录集合配置
  * */
  // 外科学的目录配置
  docsNoteSurg: {
    '外科学': [
      {
        type: 'autogenerated',
        dirName: 'note-surg',
      },
    ],
  },

  // 外科学普外科子项目的目录配置
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
