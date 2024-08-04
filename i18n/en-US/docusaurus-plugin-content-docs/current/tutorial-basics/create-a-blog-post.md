---
sidebar_label: 'How to Send a Status Update'
sidebar_position: 3
---

:::warning
This article is mostly derived from the official documentation, intended to guide contributors on how to add or modify pages.
:::

# Sending Status Updates

We use Docusaurus's blog system to send updates, and this system supports tags and RSS feeds.

## How to Send an Update

Create a file at `blog/2021-02-28-greetings.md` and add the following content:

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much as you like.
```

You can view the content at http://localhost:3000/blog/greetings.