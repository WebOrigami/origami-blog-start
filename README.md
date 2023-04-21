_Note: The goal of this project is to take a simple blog created in the Eleventy static site generator and rewrite it in Graph Origami. This project copies the original [Hello Eleventy](https://glitch.com/edit/#!/glitch-hello-eleventy) blog starter project, preserving its visual design and blog content, changing only what is necessary to make the blog work in Graph Origami. The crux of the Eleventy blog project is its `.eleventy.js` configuration script; here, the crux is the set of virtual files defined in `src/site.graph`._

# Hello Graph Origami!

This project is a blog powered by [Graph Origami](https://graphorigami.org), a static site generator. That means you get all the power of a server-side framework but it builds plain HTML files for fast loading by your visitors. This project includes some default posts and layouts you can use as a foundation, and you can customize how your site builds in the JavaScript code. 📚

_While you're working on the content in the editor your changes will happen ✨ immediately in the preview window. As you code the site is serving files from a local build directory. When you close the editor your site will run a `build` script then serve the output as a fast and always-on static site._

## Prerequisites

You'll get best use out of this project if you're familiar with basic HTML and JavaScript. This is a static site, which means the server builds it using the content of the `src` folder, then is able to serve it to your users quickly. The posts are in Markdown, which is similar to HTML (markup) but with a lot less syntax!

## What's in this project?

← `README.md`: That’s this file, where you can tell people what your cool website does and how you built it.

← `src/`: This folder contains all the files Graph Origami will use to build your site.

← `src/assets/style.css`: The styling rules for your pages and posts.

← `src/site.graph`: Here you can configure how Graph Origami builds your content into the site. Read through the initial blog posts in the site for steps on extending this code.

← `package.json`: Your project's dependencies, where you will also find the start command to run the Graph Origami server or build the static files.

### Working in the `markdown/` folder 📁

← `index.md`, `posts.md`, `about.md`: These Markdown files include the content for your Home, Posts, and About pages.

← `posts/`: These are the Markdown files for the posts that make up your blog–you can add new posts here and remove any you don't want. Each one includes front matter that Eleventy uses to build the content into the site, passing the data into the template referenced as `layout` at the top of the file.

## Try this next 🏗️

With the site preview open on the right and the Glitch editor open on the left, navigate through the initial blog posts to learn more and carry out some development on your Graph Origami site!

Check out `TODO.md` for some more optional next steps.

![Glitch](https://cdn.glitch.com/a9975ea6-8949-4bab-addb-8a95021dc2da%2FLogo_Color.svg?v=1602781328576)

## You built this with Glitch!

[Glitch](https://glitch.com) is a friendly community where millions of people come together to build web apps and websites.

- Need help? [Check out our Help Center](https://help.glitch.com/) for answers to any common questions.
- Ready to make it official? [Become a paid Glitch member](https://glitch.com/pricing) to boost your app with private sharing, more storage and memory, domains and more.
