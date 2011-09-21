--- 
layout: post
title: Removing Subversion Directories from Windows
published: true
meta: 
  aktt_notify_twitter: "no"
  _edit_last: "1"
  _efficient_related_posts: "a:6:{i:0;a:4:{s:2:\"ID\";s:2:\"48\";s:10:\"post_title\";s:65:\"The Subversion Fanboy\xE2\x80\x99s Guide to Git, Part 2: Pushing to GitHub\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:101:\"http://mbmccormick.com/2010/09/the-subversion-fanboy%e2%80%99s-guide-to-git-part-2-pushing-to-github/\";}i:1;a:4:{s:2:\"ID\";s:2:\"43\";s:10:\"post_title\";s:63:\"The Subversion Fanboy's Guide to Git, Part 1: Why Git is Better\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:92:\"http://mbmccormick.com/2010/08/the-subversion-fanboys-guide-to-git-part-1-why-git-is-better/\";}i:2;a:4:{s:2:\"ID\";s:2:\"83\";s:10:\"post_title\";s:51:\"Deploying an Application to AppHarbor in 10 Minutes\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:83:\"http://mbmccormick.com/2011/03/deploying-an-application-to-appharbor-in-10-minutes/\";}i:3;a:4:{s:2:\"ID\";s:3:\"158\";s:10:\"post_title\";s:35:\"Install Windows 8 on a Google Cr-48\";s:7:\"matches\";s:1:\"1\";s:9:\"permalink\";s:67:\"http://mbmccormick.com/2011/09/install-windows-8-on-a-google-cr-48/\";}i:4;a:4:{s:2:\"ID\";s:3:\"145\";s:10:\"post_title\";s:50:\"Early Look at Mojito: Mint.com for Windows Phone 7\";s:7:\"matches\";s:1:\"1\";s:9:\"permalink\";s:81:\"http://mbmccormick.com/2011/08/early-look-at-mojito-mint-com-for-windows-phone-7/\";}i:5;a:4:{s:2:\"ID\";s:2:\"95\";s:10:\"post_title\";s:34:\"Enable Apple AirPrint on Windows 7\";s:7:\"matches\";s:1:\"1\";s:9:\"permalink\";s:66:\"http://mbmccormick.com/2011/04/enable-apple-airprint-on-windows-7/\";}}"
  _wp_old_slug: ""
  _syntaxhighlighter_encoded: "1"
  _relation_threshold: "1"
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
