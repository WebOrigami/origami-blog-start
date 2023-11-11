---
template: !ori templates/page.orit
---

<div class="illo-container">
  <img src="/assets/bird.svg" class="illustration" style="transform: none" alt="Graph Origami">
</div>

# Hello Graph Origami!

Welcome to the Glitch [Graph Origami](https://graphorigami.org) starter, where you can create a blog or landing page that generates a static site.

Each of the initial blog posts has special tips to help you get the most out of your new site–work through them all, learning how to add posts and customize how your site builds along the way. Once you've mastered the basics, you can delete all these posts and continue writing your own!

### Posts

<ul>
  {{ templates/postList.orit() }}
  <li><a href="/posts">View all posts</a></li>
</ul>
