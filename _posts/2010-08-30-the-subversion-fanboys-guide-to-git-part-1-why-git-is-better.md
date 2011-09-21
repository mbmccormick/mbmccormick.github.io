--- 
layout: post
title: "The Subversion Fanboy's Guide to Git, Part 1: Why Git is Better"
published: true
meta: 
  aktt_notify_twitter: "no"
  _edit_last: "1"
  _efficient_related_posts: "a:6:{i:0;a:4:{s:2:\"ID\";s:2:\"48\";s:10:\"post_title\";s:65:\"The Subversion Fanboy\xE2\x80\x99s Guide to Git, Part 2: Pushing to GitHub\";s:7:\"matches\";s:1:\"7\";s:9:\"permalink\";s:101:\"http://mbmccormick.com/2010/09/the-subversion-fanboy%e2%80%99s-guide-to-git-part-2-pushing-to-github/\";}i:1;a:4:{s:2:\"ID\";s:2:\"83\";s:10:\"post_title\";s:51:\"Deploying an Application to AppHarbor in 10 Minutes\";s:7:\"matches\";s:1:\"4\";s:9:\"permalink\";s:83:\"http://mbmccormick.com/2011/03/deploying-an-application-to-appharbor-in-10-minutes/\";}i:2;a:4:{s:2:\"ID\";s:2:\"78\";s:10:\"post_title\";s:54:\"Creating GitHub Style Post-Receive Webhooks in Gitosis\";s:7:\"matches\";s:1:\"4\";s:9:\"permalink\";s:86:\"http://mbmccormick.com/2011/01/creating-github-style-post-receive-webhooks-in-gitosis/\";}i:3;a:4:{s:2:\"ID\";s:2:\"67\";s:10:\"post_title\";s:41:\"How To Remove PHP Extensions From Website\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:73:\"http://mbmccormick.com/2010/09/how-to-remove-php-extensions-from-website/\";}i:4;a:4:{s:2:\"ID\";s:2:\"45\";s:10:\"post_title\";s:44:\"Removing Subversion Directories from Windows\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:76:\"http://mbmccormick.com/2010/09/removing-subversion-directories-from-windows/\";}i:5;a:4:{s:2:\"ID\";s:2:\"29\";s:10:\"post_title\";s:30:\"Show Hidden Files in FileZilla\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:67:\"http://mbmccormick.com/2010/06/show-hidden-unix-files-in-filezilla/\";}}"
  _wp_old_slug: ""
  has_been_twittered: "yes"
  _relation_threshold: "3"
tags: 
- Development
- git
- internet
- linux
- server
- ssh
- svn
- windows
type: post
status: publish
---
Over the weekend, I made the switch from <a href="http://en.wikipedia.org/wiki/Subversion_%28software%29" target="_blank">Subversion</a> to <a href="http://en.wikipedia.org/wiki/Git_%28software%29" target="_blank">Git</a>. After seeing so many developers and open source projects moving to this new version control system, I decided to do a little research for myself. As many of you might now, Git has recently taken the software development world by storm. It began development in April 2005 by <a href="http://en.wikipedia.org/wiki/Linus_Torvalds" target="_blank">Linus Torvalds</a>, the mastermind behind <a href="http://en.wikipedia.org/wiki/Linux" target="_blank">Linux</a>. After 8 months of development by Torvalds and several colleagues, the 1.0 release of Git came in December of that same year. As for the name, he has this to say: "I'm an egotistical bastard, and I name all my projects after myself. First Linux, now Git."

Now what makes Git so much better (in my opinion) than the rest is that it was designed around the pros and cons of the existing version control systems. Subversion has been around for over 10 years, and <a href="http://en.wikipedia.org/wiki/CVS_%28software%29" target="_blank">CVS</a> has been around for over 20 years. These systems are outdated and many features, such as branching, merging, etc. were added in after the fact. Git however, was built around this idea of branching and merging and makes it easy to visualize your software repository and to execute these functions.

One of the big reasons many developers are switching to Git is because of <a href="http://github.com/" target="_blank">Github</a>. GitHub has exploded with popularity, touting it's "social coding" tagline. At the time of writing, GitHub has a community of 361,000 developers hosting over 1,116,000 Git repositories. The website makes it easy to host source code, manage projects, collaborate with other developers, and explore different open source projects.

Enough about the background, let's talk about Git. Unlike Subversion, Git uses a local repository to store files. As a developer, you would work on some changes and then commit these changes to your local repository or "staging area" as many like to call it. When you are satisfied with all of the changes you've committed to your "staging area", you can then push these changes to a public/private server. Take a look at the image below to get a better idea of typical Git workflow.

[caption id="" align="alignnone" width="500" caption="Photo by &quot;Why Git is Better Than X&quot;"]<img class="  " title="local repo to remote repo flowchart" src="http://whygitisbetterthanx.com/images/local-remote.png" alt="local repo to remote repo flowchart" width="500" height="410" />[/caption]

Another reason why I switched to Git is because it is much faster than Subversion. I no longer wait for a checkout, a commit, or an update. Git is nearly instant with all of these actions. Take a look at the comparison below:

[caption id="attachment_44" align="alignnone" width="600" caption="Photo by &quot;Why Git is Better Than X&quot;"]<a href="http://mbmccormick.com/wp-content/uploads/2010/08/graph.png"><img class="size-medium wp-image-44" title="status charts" src="http://mbmccormick.com/wp-content/uploads/2010/08/graph.png" alt="status charts" width="600" /></a>[/caption]

Now let's get into how Git differs from what we're used to in Subversion. Instead of <code>checkout</code> like we are used to, Git uses the command <code>clone</code> to make a copy of a public repository on our local workstation. To <code>update</code> our local copy like we did in Subversion, we would use <code>pull</code> in Git.

Like we discussed earlier, when you <code>commit</code> in Git, your changes are simply committed to your local repository. Your development team doesn't have access to these changes, yet. To make that happen, you have to <code>push</code> your changes. Instead of entering a login credential to access your Git repository, the server looks for a SSH public key.

Another very notable feature of Git is that it allows local branching of repositories. So say you are experimenting with a new feature, but it really isn't worth keeping on the central repository. You can <code>branch</code> on your local repository, something that we couldn't even fathom in Subversion. <code>switch</code>, <code>merge</code>, and <code>patch</code> away- all from your local repository. When you're ready to integrate your changes to the public repository, just <code>push</code> them out there.

Since Git was designed for Linux users, it's not too friendly for Windows users. However after using it for a while, I really took a liking to Git. It is faster, cleaner, and the features truly outweigh Subversion. My next post will talk about the actual switch, including step by step instructions on how I did it. Stay tuned!
