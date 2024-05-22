This project offers you a starting point for building a blog in the [Origami](https://weborigami.org) language.

[View sample blog](https://pondlife.netlify.app)

## Structure of the site

The [site.ori](src/site.ori) file orchestrates the construction of the site:

<img src="docs/site.svg">

- Each blog post starts as a markdown file in the `content` folder.
- A series of transformations turns each post into an HTML page in the `posts` area.
- Posts are grouped into pages of 5 posts each in the `pages` area.
- The index page shows the same content as `pages/1.html`.
- Feeds are created for the posts in RSS and JSON Feed format.
