---
layout: post
title: "Dynamically Loading GitHub Gists with jQuery and Server-Side Caching"
---

In case you haven't noticed, I [moved my website](http://mbmccormick.com/2011/10/ditching-wordpress-for-jekyll-and-github/) to [GitHub Pages](http://pages.github.com/) last month. During the transition, I decided to redesign my website and upgrade it to [HTML5](http://www.html5rocks.com/en/). One of the coolest features of HTML5 is the [History API](http://html5demos.com/history). Today I'd like to focus on why I am using the History API and the challenges that I've come across while using it.

The HTML5 History API makes it easy for web developers to dynamically load content for similar pages, like a blog, where only part of the page changes, without losing the user's browsing history. On my website, I dynamically load changes to the "content" pane whenever you use the main navigation on the left or page through my list of blog posts with a [GitHub-esque tree slider](https://github.com/blog/760-the-tree-slider). When you click a link and fire the navigation event, I [save the history](https://developer.mozilla.org/en/DOM/Manipulating_the_browser_history#The_pushState().C2.A0method) using the `history.pushState(...)` method and then I download the requested content and render a transition to replace the existing content on the screen. You can view source on my website or take a look at the snippet below to get a better understanding:

{% gist 1345302 %}

Now, this only covers the forward-navigation scenarios. HTML5 has a [separate JavaScript event](https://developer.mozilla.org/en/DOM/Manipulating_the_browser_history#The_popstate_event) for handling the browser's back button. For this, the browser will fire a `popstate` event when the user clicks the back button. In this scenario, the browser has already updated the history for us and we just need to update the content accordingly. You can see how I'm doing that by viewing the source for my website or by taking a look at the snippet below:

{% gist 1345316 %}

With these two scenarios covered, my website is able to dynamically load content and only update the parts of a page that truly change during navigation. And this all works great, however because my blog is mostly technical, you'll often find code snippets like the one's I'm using in this post in other posts on my website. I use [GitHub Gists](https://gist.github.com/) to embed my code snippets because GitHub does all of the syntax highlighting and formatting for me and it also encourages my readers to help contribute to my code. GitHub Gists are embedded using some inline `<script src="..."> </script>` tags, which jQuery's `load()` function does not like.

After doing some [research](http://stackoverflow.com/questions/889967/jquery-load-call-doesnt-execute-javascript-in-loaded-html-file), I found that jQuery's `load()` function will load inline `<script />` tags and execute them, but jQuery moves the content to either the beginning or end of the document, inconsistently. This was a problem, as I needed these inline `<script />` tags to be rendered, inline. I decided to see what exactly the JavaScript files that GitHub was using to embed these Gists and to my surprise, it was just two `document.write(...)` calls. The first call wrote the `<style />` tag for the syntax highlighting and the second call wrote the code snippet itself to the page. Take a look at [this](https://gist.github.com/1345302.js) example.

With two simple calls like that, I decided to write a [server-side proxy](https://github.com/mbmccormick/gist-proxy) that would take in a Gist ID as a URL string parameter and then parse this JavaScript file and render the result to the browser. Then, I could replace the `<script src="http://gist.github.com/123456.js"> </script>` tags with a much simpler `<div class='gist' id='123456'> </div>` and have jQuery make a second `load()` call to my server side proxy, just like I am doing above, to render the GitHub Gists. To add to this functionality, I also implemented some server-side caching of the Gist files. Rather than making a request to GitHub every time I need to render a Gist, I first check to see if I have a local copy of the file before I render it. The caching and download logic is shown below:

{% gist 1345367 %}

This allowed me to dynamically load my content using the new HTML5 features and still keep my source code examples in GitHub Gists. The source code for my [gist-proxy](https://github.com/mbmccormick/gist-proxy) project can be found on GitHub along with the full source code for my [website](https://github.com/mbmccormick/mbmccormick.github.com).
