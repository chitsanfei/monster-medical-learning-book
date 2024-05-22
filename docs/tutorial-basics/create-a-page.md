---
sidebar_label: '如何新建一个页面'
sidebar_position: 1
---

```angular2html
本文多数取自官方的说明，用于告诉有贡献想法的如何添加或修改页面。
```

# 如何新建一个页面

对于本项目，通常来讲并不需要新建独立页面，docusaura 新建的独立页面并不会有 navbar，因而请避免进行这个改动，除非您需要通过独立页面强调内容。

添加 **Markdown 或者 React** 文件到 `src/pages` 来创建独立页面。

映射表如下：

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## 创建 React 文件的示例

文件创建到 `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

这样，你就可以独立访问页面了： [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page)。

## 创建 Markdown 文件的示例

文件创建到 `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

这样，你就可以独立访问页面了： [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page)。