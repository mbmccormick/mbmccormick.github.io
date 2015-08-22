---
layout: post
title: "Ditching WordPress for Jekyll and GitHub"
---

I recently switched my blog engine from [WordPress](http://www.wordpress.org/) to [Jekyll](https://github.com/mojombo/jekyll) using [GitHub](https://github.com/) as the hosting provider. I was getting tired of WordPress and all of it's bloat: load times were unnecessarily long for a very simple website. For a while I had been interested in trying out Jekyll using GitHub, so I decided to pull the trigger and do it.

My blog is now hosted on GitHub, using [GitHub Pages](http://pages.github.com/) to generate my blog from a set of markdown files in a special Git repository using an open source project called Jekyll. Jekyll was originally developed by the [founder of GitHub](http://tom.preston-werner.com/) and offers many of the same features you'd expect from WordPress, without the friendly user interface, of course. The nice part about Jekyll is that you have full control over the design and development of your website. You create a few template files and then write your posts in markdown format and Jekyll handles the rest of the work like tag clouds, categorizing, etc. One notable item is that Jekyll does not have support for commenting. Honestly, I'm OK with not having comments on my blog. In this day in age, comments should be directed to me via Twitter and if it's something I feel needs to be posted, I will append it to the original post.

Back to a point I made earlier about full control over the design and development, Jekyll is completely [configurable](https://github.com/mojombo/jekyll/wiki/Configuration) to offer many of the features you'd expect in a blog. But rather than being dependent on a data source, Jekyll actually generates your website as HTML from a series of Markdown files. GitHub Pages handles this automation by running Jekyll every time you push to a special GitHub repository.

My old website, which was running on WordPress, had an average load time of 3.14 seconds. My new website, which is running on Jekyll, has an average load time of 782 milliseconds. Clearly this made a huge improvement to page speed performance. The reasoning behind this is because my website is essentially a bunch of HTML files for each of my pages and blog posts. Whereas with my old website, it was a few PHP files that then downloaded the content from a separate database server. By removing this additional component in my website setup and cutting out the cost of querying the database server on every page request, the page load time greatly reduced.

![website download performance before](/images/2012/05/old.png)![website download performance after](/images/2012/05/new.png)

You can take a look at the source code for my blog at GitHub [here](https://github.com/mbmccormick/mbmccormick.github.com) to get a better idea of how the backend looks. Overall I'm very satisfied with using Jekyll as my blog engine and the hosting that GitHub Pages offers. The founder of GitHub and lead developer for Jekyll has a great post entitled [Blogging Like a Hacker](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html) which details the inspiration for this project.
