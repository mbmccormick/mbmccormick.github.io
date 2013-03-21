---
title: Show Hidden Files in FileZilla
author: Matt
layout: post
permalink: /2010/06/show-hidden-files-in-filezilla/
categories:
  - Miscellaneous
tags:
  - tutorial
---

The much-anticipated (and now currently in operation on this blog) [WordPress 3.0][1] was released today. I had a minor hiccup during the upgrade process which prevented my blog from exiting "maintenance mode" after the upgrade finished. The way it works is WordPress will place a ".maintenance" file in the root of your blog, which will prevent all access to the front end and, stupidly, the administration panel. The only manual way to exit this mode is to delete this ".maintenance" file.

 [1]: http://wordpress.org/development/2010/06/thelonious/

In order to do this, I fired up my trusty FileZilla FTP client and connected to my server. In UNIX and Linux, hidden files are those files prefixed with a ".", such as the ".maintenance" file we're trying to delete. By default, FileZilla will obey the server's requests that these "." prefixed files not be shown.

To show hidden files in FileZilla, just go to "Server > Force showing hidden files". This will refresh your remote directory listing, with hidden files shown.