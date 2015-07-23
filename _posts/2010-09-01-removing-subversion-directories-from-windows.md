---
layout: post
title: 'Removing Subversion Directories from Windows'
comments: true
---
<p>While I'm in the middle of my conversion from Subversion to Git, I ran across a somewhat annoying problem. I have all of these projects on my local workstation that I need to strip of <code>.svn</code> directories. While I could do this using Subversion's <code>export</code> command, that would require a lot of moving and deleting and I just didn't want to do that.</p>

<p>Thanks to posts from several different blogs, I found a quick batch file that accomplishes just that. View the source below:</p>

{% gist mbmccormick/1272822 %}

<p>Simply drop this batch file in the root of your Subversion project's local directory and execute it. You'll be left with a fresh, clean project file structure, free of <code>.svn</code> directories.</p>
