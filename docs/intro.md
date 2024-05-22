---
sidebar_position: 1
---

# 介绍

本项目是由 @chitsanfei 发起的一个旨在让医学知识更为开源传播的项目，实际上，这也是个人的笔记本。

您必须同意：本项目作为一个专业知识库，不能替代专业医生就诊，只适用于医学院学生快速参考和记忆知识点。违背该规则的任何后果作者和所有其他开源贡献者不负有任何责任。

## 本地部署

在特别的情况下，您可能无法在线访问到本笔记，因而，您可以尝试在本地部署。

### 环境

- [Node.js](https://nodejs.org/en/download/) 不低于版本 18.0；
- NPM 不低于版本 10.8.0；
- Git。

### 获取笔记本内容

从 [Github](https://github.com/chitsanfei/monster-medical-learning-book) 获取我们的笔记本的文件。

```bash
git clone https://github.com/chitsanfei/monster-medical-learning-book.git
```

请注意，若您需要对笔记进行修改，您应该使用 SSH 方式进行克隆，因为现在 Github 基本禁用 HTTPS 推送。

### 运行笔记本文件

```bash
cd monster-medical-learning-book
npm run start
```
`cd` 命令会改变你当前的工作目录。为了运行怪物书，你需要在终端中导航到该目录。

`npm run start` 命令会本地构建怪物书，并通过一个开发服务器提供服务，请在 http://localhost:3000/ 进行查看。
