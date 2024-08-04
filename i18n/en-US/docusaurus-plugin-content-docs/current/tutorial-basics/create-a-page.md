---
sidebar_label: 'How to Create a New Page'
sidebar_position: 1
---

:::warning
This article is mostly derived from the official documentation, intended to guide contributors on how to add or modify pages.
:::

# How to Create a New Page

For this project, it is generally not necessary to create standalone pages. Standalone pages created by Docusaurus will not have a navbar, so please avoid making this change unless you need to emphasize content through a standalone page.

Add **Markdown or React** files to `src/pages` to create standalone pages.

The mapping table is as follows:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Example of Creating a React File

Create the file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page.</p>
    </Layout>
  );
}
```

This way, you can access the page independently: http://localhost:3000/my-react-page.

## Example of Creating a Markdown File

Create the file at src/pages/my-markdown-page.md:

```markdown
# My Markdown page

This is a Markdown page.
```

This way, you can access the page independently: http://localhost:3000/my-markdown-page.