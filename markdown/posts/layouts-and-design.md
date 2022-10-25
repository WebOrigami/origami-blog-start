---
title: Layouts & Design
description: How to edit layouts
date: 2021-04-12
---

We've included a few helpful templates to get you started, which you can find nested in the `src/_includes/layouts` folder. By default eleventy uses a templating language called [Nunjucks](https://mozilla.github.io/nunjucks/), with files ending in `.njk`.

You can use front matter to pass data about the content of your pages and posts into the template, which builds it into the page.

- Your default template is `base.njk`–the other templates extend this
- The `home.njk` template includes an intro section then lists the posts
- Your About page uses `page.njk`–you can add more pages and use this or another template
- Each individual post uses `post.njk`
- The Posts page uses `posts.njk` to list all posts
