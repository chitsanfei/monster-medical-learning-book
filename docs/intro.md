---
sidebar_position: 1
---

# 介绍

本项目是由 @chitsanfei 发起的一个旨在让医学知识更为开源传播的项目，实际上，这也是个人的笔记本。

您必须同意：本项目作为一个专业知识库，不能替代专业医生就诊，只适用于医学院学生快速参考和记忆知识点。违背该规则的任何后果作者和所有其他开源贡献者不负有任何责任。

## 本地部署

在特别的情况下，您可能无法在线访问到本笔记，因而，您可以尝试在本地部署。

### 环境

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

### 获取笔记本内容

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
