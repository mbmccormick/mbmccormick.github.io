--- 
layout: post
title: Removing Subversion Directories from Windows
published: true
tags: 
- git
- Hacking
- svn
- Tools
- windows
type: post
status: publish
---
While I'm in the middle of my conversion from Subversion to Git, I ran across a somewhat annoying problem. I have all of these projects on my local workstation that I need to strip of <code>.svn</code> directories. While I could do this using Subversion's <code>export</code> command, that would require a lot of moving and deleting and I just didn't want to do that.

Thanks to posts from several different blogs, I found a quick batch file that accomplishes just that. View the source below:

[sourcecode language="text" gutter="false"]
for /f &quot;tokens=* delims=&quot; %%i in ('dir /s /b /a:d *svn') do (
  rd /s /q &quot;%%i&quot;
)
[/sourcecode]

Simply drop this batch file in the root of your Subversion project's local directory and execute it. You'll be left with a fresh, clean project file structure, free of <code>.svn</code> directories.
