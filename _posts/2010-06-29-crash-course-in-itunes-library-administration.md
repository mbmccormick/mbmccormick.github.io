---
title: Crash Course in iTunes Library Administration
author: Matt
layout: post
permalink: /2010/06/crash-course-in-itunes-library-administration/
categories:
  - Miscellaneous
tags:
  - tutorial
---
# 

For about the seventh time this year I have had to help my dad reorganize, move, expand or do something that involved his iTunes Library. To most people this would seem like a fairly straight-forward process, but, in fact it is quite a lengthy and in-depth hackery performance. So let’s go over the process of moving the iTunes Library from one location (old computer, current computer, etc.) to another location (new computer, external drive, etc.).

First you’ll want to move your actual iTunes media files, this being the “iTunes Media” or “iTunes Music” folder, depending on your current version of iTunes. And depending on the size of your library, this could take several hours. Not the file paths of your previous iTunes location and your new location, we will need these a little later.

Next, close down iTunes. Copy your “iTunes Music Library.xml” file to the desktop. We need to open this file and edit the file paths that reference each individual music file. Change the file paths, using find and replace of course, to the new file path (such as an external drive). Save your changes to this file on the desktop, and close your text editor. Next, delete the “iTunes Library.itl” file.

Open up iTunes again. Because we deleted the iTunes Library file, we should see a fresh copy of iTunes with no music added. Click on “File > Library > Import Playlist” and select the “iTunes Music Library.xml” file from the desktop that we just edited. iTunes will now rebuild it’s Library database and re-add all of your music, and your ratings, playcounts, and playlists!

For more advanced procedures, you may want to relocate the entire iTunes Library operation. To do this, simply move your entire iTunes folder (depending on your setup) to the new location. Hold down the shift key while clicking on the iTunes shortcut. A window will open up, allowing you to select a new iTunes Library file. Navigate to your newly moved iTunes files, and there you go.