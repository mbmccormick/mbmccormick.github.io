---
layout: post
title: The Subversion Fanboy&#039;s Guide to Git, Part 1&#058; Why Git is Better
date: 2010-08-30 00:00
comments: true
categories: []
---
<p>Over the weekend, I made the switch from <a href="http://en.wikipedia.org/wiki/Subversion_%28software%29" target="_blank">Subversion</a> to <a href="http://en.wikipedia.org/wiki/Git_%28software%29" target="_blank">Git</a>. After seeing so many developers and open source projects moving to this new version control system, I decided to do a little research for myself. As many of you might now, Git has recently taken the software development world by storm. It began development in April 2005 by <a href="http://en.wikipedia.org/wiki/Linus_Torvalds" target="_blank">Linus Torvalds</a>, the mastermind behind <a href="http://en.wikipedia.org/wiki/Linux" target="_blank">Linux</a>. After 8 months of development by Torvalds and several colleagues, the 1.0 release of Git came in December of that same year. As for the name, he has this to say: &ldquo;I&rsquo;m an egotistical bastard, and I name all my projects after myself. First Linux, now Git.&rdquo;</p>

<p>Now what makes Git so much better (in my opinion) than the rest is that it was designed around the pros and cons of the existing version control systems. Subversion has been around for over 10 years, and <a href="http://en.wikipedia.org/wiki/CVS_%28software%29" target="_blank">CVS</a> has been around for over 20 years. These systems are outdated and many features, such as branching, merging, etc. were added in after the fact. Git however, was built around this idea of branching and merging and makes it easy to visualize your software repository and to execute these functions.</p>

<p>One of the big reasons many developers are switching to Git is because of <a href="http://github.com/" target="_blank">Github</a>. GitHub has exploded with popularity, touting it&rsquo;s &ldquo;social coding&rdquo; tagline. At the time of writing, GitHub has a community of 361,000 developers hosting over 1,116,000 Git repositories. The website makes it easy to host source code, manage projects, collaborate with other developers, and explore different open source projects.</p>

<p>Enough about the background, let&rsquo;s talk about Git. Unlike Subversion, Git uses a local repository to store files. As a developer, you would work on some changes and then commit these changes to your local repository or &ldquo;staging area&rdquo; as many like to call it. When you are satisfied with all of the changes you&rsquo;ve committed to your &ldquo;staging area&rdquo;, you can then push these changes to a public/private server. Take a look at the image below to get a better idea of typical Git workflow.</p>

<a href="/images/2012/05/local-remote.png"><img src="/images/2012/05/local-remote.png" width="500" /></a>

<p>Another reason why I switched to Git is because it is much faster than Subversion. I no longer wait for a checkout, a commit, or an update. Git is nearly instant with all of these actions. Take a look at the comparison below:</p>

<a href="/images/2012/05/graph.png"><img src="/images/2012/05/graph.png" width="600" /></a>

<p>Now let&rsquo;s get into how Git differs from what we&rsquo;re used to in Subversion. Instead of <code>checkout</code> like we are used to, Git uses the command <code>clone</code> to make a copy of a public repository on our local workstation. To <code>update</code> our local copy like we did in Subversion, we would use <code>pull</code> in Git.</p>

<p>Like we discussed earlier, when you <code>commit</code> in Git, your changes are simply committed to your local repository. Your development team doesn&rsquo;t have access to these changes, yet. To make that happen, you have to <code>push</code> your changes. Instead of entering a login credential to access your Git repository, the server looks for a SSH public key.</p>

<p>Another very notable feature of Git is that it allows local branching of repositories. So say you are experimenting with a new feature, but it really isn&rsquo;t worth keeping on the central repository. You can <code>branch</code> on your local repository, something that we couldn&rsquo;t even fathom in Subversion. <code>switch</code>, <code>merge</code>, and <code>patch</code> away- all from your local repository. When you&rsquo;re ready to integrate your changes to the public repository, just <code>push</code> them out there.</p>

<p>Since Git was designed for Linux users, it's not too friendly for Windows users. However after using it for a while, I really took a liking to Git. It is faster, cleaner, and the features truly outweigh Subversion. My next post will talk about the actual switch, including step by step instructions on how I did it. Stay tuned!</p>
