---
sidebar_label: '如何发送一个更新状态'
sidebar_position: 3
---

```angular2html
本文多数取自官方的说明，用于告诉有贡献想法的如何添加或修改页面。
```

# 发送更新状况

我们使用 Docusaurus 的博客系统发送更新，并且这个系统存在 Tag，也可以使用 RSS 采集。

## 如何发送更新

在 `blog/2021-02-28-greetings.md` 创建文件，并添加以下内容:

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

您可以在 [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings) 查看内容。
