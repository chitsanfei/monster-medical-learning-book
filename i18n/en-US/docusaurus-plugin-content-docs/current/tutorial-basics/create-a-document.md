---
sidebar_label: 'How to Create a Document'
sidebar_position: 2
---

:::warning
This article is mostly derived from the official documentation, intended to guide contributors on how to add or modify pages.
:::

# How to Create a Document

A document is a **collection of pages** organized in the following ways:

- **Sidebar**
- **Next and Previous Page Navigation**
- **Versioning**

## Creating Your First Document

Create a Markdown file at `docs/hello.md`:

```markdown title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at http://localhost:3000/docs/hello.

## Configuring the Sidebar

Docusaurus will automatically generate a sidebar from the docs folder.

Add metadata to customize the sidebar label and position:

```
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

You can also explicitly create a sidebar in sidebars.js:

```javascript
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