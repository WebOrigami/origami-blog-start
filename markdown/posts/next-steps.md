---
title: Next Steps
description: Alter your site config
date: 2021-06-20
---

Earlier you added a new post and it appeared at the end of the list–if you're keeping a blog you probably want newer posts to appear first! Let's customize your site.

### Change the order of posts

Open any of the blog posts in `/posts`. In the front matter, each one has a `date` property we can use to specify the order posts appear in the site.

Take a look in `src/site.vfiles` – there's a formula in there that determines how your site builds and functions. Scroll down to the formula that starts `sorted=`. This is where the site sorts the collection of blog posts by date.

If you'd like posts to appear with _newest_ posts first, comment out the first `sorted` formula and uncomment the second.

Take a look at the Home or Posts page in the preview!
