--- 
layout: post
title: Install Git client on lore.cs.purdue.edu
published: false
meta: 
  aktt_notify_twitter: "yes"
  _edit_last: "1"
  _wp_trash_meta_time: "1315341412"
  _wp_trash_meta_status: draft
tags: 
- Hacking
- Tools
type: post
status: trash
---
A few semesters ago I compiled <a href="http://git-scm.com/" target="_blank">Git</a> version 1.7.2.2 for use on <a href="http://www.cs.purdue.edu/resources/facilities/access/remote-announce2.sxhtml" target="_blank">Lore</a> at <a href="http://www.purdue.edu/" target="_blank">Purdue</a> so that I could keep all of my classwork backed up on <a href="https://github.com/" target="_blank">GitHub</a> with a <a href="https://github.com/edu" target="_blank">student account</a>. Storing my schoolwork on GitHub allows me to easily synchronize work that I do at home with work that I do in lab or elsewhere on campus.

To install this for your user account on Lore, just issue the following commands from a terminal:

[gist id=1198732]

Known issues:
<ul>
	<li>Occasionally, you may get an email from CS administrators warning you that you have used up a lot of disk space. This package is 54mb installed. Clean up your home directory on Lore and this shouldn't be an issue.</li>
	<li>When logged in on the lab machines in LWSN and HAAS, you will receive an error if you try to execute Git from the built-in terminals. Open up a new terminal and <a href="http://en.wikipedia.org/wiki/Secure_Shell" target="_blank">SSH</a> into <a href="ssh://lore.cs.purdue.edu" target="_blank">lore.cs.purdue.edu</a> and execute Git there. This package was built specifically for the <a href="http://en.wikipedia.org/wiki/SPARC" target="_blank">Sparc</a> architecture that Lore runs on.</li>
</ul>
Because this package was built from source, it does not stay up to date when a new version of Git is released. I will try to update this post every month or so when a new version of Git is released. Use this script at your own risk. While this package has been tested thoroughly, on the above requirements, your mileage may vary. I take no responsibility for any harmful actions this package might cause.
