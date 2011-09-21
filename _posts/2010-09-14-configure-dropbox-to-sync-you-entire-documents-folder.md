--- 
layout: post
title: Configure Dropbox to Sync Your Entire Documents Folder
published: true
meta: 
  aktt_notify_twitter: "yes"
  _edit_last: "1"
  _efficient_related_posts: "a:6:{i:0;a:4:{s:2:\"ID\";s:3:\"145\";s:10:\"post_title\";s:50:\"Early Look at Mojito: Mint.com for Windows Phone 7\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:81:\"http://mbmccormick.com/2011/08/early-look-at-mojito-mint-com-for-windows-phone-7/\";}i:1;a:4:{s:2:\"ID\";s:2:\"95\";s:10:\"post_title\";s:34:\"Enable Apple AirPrint on Windows 7\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:66:\"http://mbmccormick.com/2011/04/enable-apple-airprint-on-windows-7/\";}i:2;a:4:{s:2:\"ID\";s:3:\"158\";s:10:\"post_title\";s:35:\"Install Windows 8 on a Google Cr-48\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:67:\"http://mbmccormick.com/2011/09/install-windows-8-on-a-google-cr-48/\";}i:3;a:4:{s:2:\"ID\";s:2:\"83\";s:10:\"post_title\";s:51:\"Deploying an Application to AppHarbor in 10 Minutes\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:83:\"http://mbmccormick.com/2011/03/deploying-an-application-to-appharbor-in-10-minutes/\";}i:4;a:4:{s:2:\"ID\";s:2:\"48\";s:10:\"post_title\";s:65:\"The Subversion Fanboy\xE2\x80\x99s Guide to Git, Part 2: Pushing to GitHub\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:101:\"http://mbmccormick.com/2010/09/the-subversion-fanboy%e2%80%99s-guide-to-git-part-2-pushing-to-github/\";}i:5;a:4:{s:2:\"ID\";s:2:\"43\";s:10:\"post_title\";s:63:\"The Subversion Fanboy's Guide to Git, Part 1: Why Git is Better\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:92:\"http://mbmccormick.com/2010/08/the-subversion-fanboys-guide-to-git-part-1-why-git-is-better/\";}}"
  _wp_old_slug: ""
  aktt_tweeted: "1"
  _relation_threshold: "2"
tags: 
- automation
- downloads
- home
- internet
- Tools
- Web
- windows
type: post
status: publish
---
I recently decided to switch my online backup solution from <a href="http://syncplicity.com/" target="_blank">Syncplicity</a> to <a href="http://www.dropbox.com/" target="_blank">Dropbox</a>. The web interface that Dropbox has is just beautiful and well worth the switch, not to mention that it seems to be much more lightweight and sync my files a lot faster. The only thing I did not like about Dropbox is that I was forced to use the "My Dropbox" folder for all of my syncing, something I did not want to do.

There are several methods for overcoming this issue. Some articles <a href="http://storecrowd.com/blog/dropbox-hacks/" target="_blank">recommended</a> moving my Documents folder, which I tried. But I was really uncomfortable with moving my documents elsewhere on my hard drive, so I opted out. The other <a href="http://wiki.dropbox.com/TipsAndTricks/SyncOtherFolders" target="_blank">recommendation</a> I saw was to use symlinks, but the downside to that is the low-level Windows API does not report file modification notifications, so incremental backups would be out. No thanks.

The option that worked for me was a third-party tool called <a href="http://forums.dropbox.com/topic.php?id=9665" target="_blank">pyDropboxPath</a>. This let me set my Dropbox path to my Documents folder. A quick restart of Dropbox and voila! I was able to sync my Documents to Dropbox without any hiccups. You can see for yourself below:

<a href="http://mbmccormick.com/wp-content/uploads/2010/09/cap.png"><img class="alignnone size-full wp-image-54" title="Dropbox Syncing my Documents folder" src="http://mbmccormick.com/wp-content/uploads/2010/09/cap.png" alt="" width="853" height="364" /></a>

However, the main reason I'm switching is because I love the web interface of Dropbox. Check out my Documents folder, synced to the web in this image:

<a href="http://mbmccormick.com/wp-content/uploads/2010/09/cap21.png"><img class="alignnone size-full wp-image-55" title="Documents synced to Dropbox web interface" src="http://mbmccormick.com/wp-content/uploads/2010/09/cap21.png" alt="" width="552" height="285" /></a>

Ahh, there's peace once again on my laptop. Dropbox has several different <a href="http://www.dropbox.com/pricing" target="_blank">plans</a> for your backup needs. The free plan, which is what I use, gives you 2GB of storage. You can also take the tour of Dropbox for an extra 256MB free. If you haven't set up an account on Dropbox, do it now. You'll thank me later. Use this <a href="http://www.dropbox.com/referrals/NTQ4NjEzOQ" target="_blank">link</a>, and we'll both get extra space for free.
