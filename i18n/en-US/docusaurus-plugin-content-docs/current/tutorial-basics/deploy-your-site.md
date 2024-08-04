---
sidebar_label: 'Manual Deployment'
sidebar_position: 4
---

:::warning
This article is mostly derived from the official documentation, intended to guide contributors on how to add or modify pages.
:::

# Deploying the Website

Generally, you do not need to deploy manually when you make changes. You just need to submit a Pull Request (PR) in Github. After we review, we will merge your content. The changes you made will be automatically pushed through the CI process.

If you need to build manually, please install the following.

## Manual Build

Build the production version.

```bash
npm run build
```

The static files built will be saved in the build folder.

## Manual Deployment

Test your production locally for availability.

```bash
npm run serve
```

The built build folder is now accessible via http://localhost:3000/.

You can now easily deploy the build folder almost anywhere.