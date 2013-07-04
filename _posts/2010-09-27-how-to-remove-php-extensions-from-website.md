---
layout: post
title: How To Remove PHP Extensions From Website
date: 2010-09-27 00:00
comments: true
categories: []
---
<p>This problem always comes up and I can never remember what to put in my .htaccess file. Just drop this into a file called &ldquo;.htaccess&rdquo; and place the file in the root directory of your website. Be sure that your file and directory names don't conflict. You will also need to have the <code>mod-rewrite</code> extension enabled in Apache for this to work. Here's the code I use to accomplish this task:</p>

<script src="https://gist.github.com/628543.js.js"> </script>
