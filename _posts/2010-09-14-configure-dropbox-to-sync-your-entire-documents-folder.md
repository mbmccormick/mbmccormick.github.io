---
title: Configure Dropbox to Sync Your Entire Documents Folder
author: Matt
layout: post
permalink: /2010/09/configure-dropbox-to-sync-your-entire-documents-folder/
categories:
  - Miscellaneous
tags:
  - tutorial
---
# 

I recently decided to switch my online backup solution from [Syncplicity][1] to [Dropbox][2]. The web interface that Dropbox has is just beautiful and well worth the switch, not to mention that it seems to be much more lightweight and sync my files a lot faster. The only thing I did not like about Dropbox is that I was forced to use the “My Dropbox” folder for all of my syncing, something I did not want to do.

 [1]: http://syncplicity.com/
 [2]: http://www.dropbox.com/

There are several methods for overcoming this issue. Some articles [recommended][3] moving my Documents folder, which I tried. But I was really uncomfortable with moving my documents elsewhere on my hard drive, so I opted out. The other [recommendation][4] I saw was to use symlinks, but the downside to that is the low-level Windows API does not report file modification notifications, so incremental backups would be out. No thanks.

 [3]: http://storecrowd.com/blog/dropbox-hacks/
 [4]: http://wiki.dropbox.com/TipsAndTricks/SyncOtherFolders

The option that worked for me was a third-party tool called [pyDropboxPath][5]. This let me set my Dropbox path to my Documents folder. A quick restart of Dropbox and voila! I was able to sync my Documents to Dropbox without any hiccups. You can see for yourself below:

 [5]: http://forums.dropbox.com/topic.php?id=9665

[![][7]][7]

 []: /wp-content/uploads/2012/05/cap.png
 [7]: /wp-content/uploads/2012/05/cap.png

However, the main reason I’m switching is because I love the web interface of Dropbox. Check out my Documents folder, synced to the web in this image:

[![][9]][9]

 []: /wp-content/uploads/2012/05/cap21.png
 [9]: /wp-content/uploads/2012/05/cap21.png

Ahh, there’s peace once again on my laptop. Dropbox has several different [plans][10] for your backup needs. The free plan, which is what I use, gives you 2GB of storage. You can also take the tour of Dropbox for an extra 256MB free. If you haven’t set up an account on Dropbox, do it now. You’ll thank me later. Use this [link][11], and we’ll both get extra space for free.

 [10]: http://www.dropbox.com/pricing
 [11]: http://www.dropbox.com/referrals/NTQ4NjEzOQ