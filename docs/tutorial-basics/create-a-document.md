---
sidebar_label: '如何新建一个文档'
sidebar_position: 2
---

```angular2html
本文多数取自官方的说明，用于告诉有贡献想法的如何添加或修改页面。
```

# 如何创建一个文档

文档是**一组页面**，通过以下方式组织：

- **侧边栏**
- **前后页导航**
- **版本管理**

## 创建你的第一个文档

在`docs/hello.md`创建一个Markdown文件：

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## 配置侧边栏

Docusaurus会自动**生成侧边栏**自`docs`文件夹。

添加元数据以自定义侧边栏标签和位置：

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

也可以在`sidebars.js`中明确创建侧边栏：

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```

特别的，本项目使用 ts，所以侧边栏
