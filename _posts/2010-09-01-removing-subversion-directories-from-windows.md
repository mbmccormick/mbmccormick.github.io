---
title: Removing Subversion Directories from Windows
author: Matt
layout: post
permalink: /2010/09/removing-subversion-directories-from-windows/
categories:
  - Miscellaneous
tags:
  - tutorial
---

While I'm in the middle of my conversion from Subversion to Git, I ran across a somewhat annoying problem. I have all of these projects on my local workstation that I need to strip of `.svn` directories. While I could do this using Subversion's `export` command, that would require a lot of moving and deleting and I just didn't want to do that.

Thanks to posts from several different blogs, I found a quick batch file that accomplishes just that. View the source below:



Simply drop this batch file in the root of your Subversion project's local directory and execute it. You'll be left with a fresh, clean project file structure, free of `.svn` directories.