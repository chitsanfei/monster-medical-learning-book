---
sidebar_label: '手动部署'
sidebar_position: 4
---

:::warning
本文多数取自官方的说明，用于告诉有贡献想法的如何添加或修改页面。
:::

# 部署网站

通常来讲，您修改内容并不需要进行手动部署。您只需要在 Github 中提出一个 Pull Request（即PR）请求，当我们完成审核后，我们将合并您的内容，您修改的内容会通过 CI 流程自动推送修改。

若您需要手动编译，请安装下面的内容进行。

## 手动构建

构建产品

```bash
npm run build
```

构建到的静态文件会保存在 `build` 文件夹。

## 手动部署

本地测试您的产品是否可用。

```bash
npm run serve
```

构建的build文件夹现可通过 http://localhost:3000/ 进行访问。

你现在可以轻松地将build文件夹部署到几乎任何地方。