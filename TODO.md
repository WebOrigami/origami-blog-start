# TODO 🚧

Your new site is all yours so it doesn't matter if you break it! Try making an edit.

The site posts walk you through making some initial edits, adding a post, and tweaking the script.

## Keep going! 🚀

If you take another look in your template for posts `src/postPage.ori` you'll see that the pages can include the post data from the front matter in the markdown files using Origami expressions. Each one of the posts includes a `description` property, so in `postPage.ori`, add that to the HTML template after the `h1`:

```
<p>
  <em>${ description }</em>
</p>
```

Take a look at one of your posts to see the result!
