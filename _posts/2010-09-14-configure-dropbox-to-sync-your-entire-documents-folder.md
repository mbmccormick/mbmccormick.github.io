---
layout: post
title: "Configure Dropbox to Sync Your Entire Documents Folder"
---

I recently decided to switch my online backup solution from [Syncplicity](http://syncplicity.com/) to [Dropbox](http://www.dropbox.com/). The web interface that Dropbox has is just beautiful and well worth the switch, not to mention that it seems to be much more lightweight and sync my files a lot faster. The only thing I did not like about Dropbox is that I was forced to use the "My Dropbox" folder for all of my syncing, something I did not want to do.

There are several methods for overcoming this issue. Some articles [recommended](http://storecrowd.com/blog/dropbox-hacks/) moving my Documents folder, which I tried. But I was really uncomfortable with moving my documents elsewhere on my hard drive, so I opted out. The other [recommendation](http://wiki.dropbox.com/TipsAndTricks/SyncOtherFolders) I saw was to use symlinks, but the downside to that is the low-level Windows API does not report file modification notifications, so incremental backups would be out. No thanks.

The option that worked for me was a third-party tool called [pyDropboxPath](http://forums.dropbox.com/topic.php?id=9665). This let me set my Dropbox path to my Documents folder. A quick restart of Dropbox and voila! I was able to sync my Documents to Dropbox without any hiccups. You can see for yourself below:

![dropbox syncing documents folder](/images/2012/05/cap.png)

However, the main reason I'm switching is because I love the web interface of Dropbox. Check out my Documents folder, synced to the web in this image:

![dropbox website](/images/2012/05/cap21.png)

Ahh, there's peace once again on my laptop. Dropbox has several different [plans](http://www.dropbox.com/pricing) for your backup needs. The free plan, which is what I use, gives you 2GB of storage. You can also take the tour of Dropbox for an extra 256MB free. If you haven't set up an account on Dropbox, do it now. You'll thank me later. Use this [link](http://www.dropbox.com/referrals/NTQ4NjEzOQ), and we'll both get extra space for free.
