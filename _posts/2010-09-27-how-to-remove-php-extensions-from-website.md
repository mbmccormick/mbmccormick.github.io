--- 
layout: post
title: How To Remove PHP Extensions From Website
excerpt:
  This problem always comes up and I can never remember what to put in my .htaccess file. Just drop this into a file called .htaccess and place the file in the root directory of your website. Be sure that your file and directory names don't conflict. You will also need to have the mod-rewrite extension enabled in Apache for this to work. Here's the code I use to accomplish this task.
---
This problem always comes up and I can never remember what to put in my .htaccess file. Just drop this into a file called ".htaccess" and place the file in the root directory of your website. Be sure that your file and directory names don't conflict. You will also need to have the <code>mod-rewrite</code> extension enabled in Apache for this to work. Here's the code I use to accomplish this task:

<script src="https://gist.github.com/628543.js"> </script> 