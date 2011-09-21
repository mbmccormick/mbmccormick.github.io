--- 
layout: post
title: Crash Course in iTunes Library Administration
published: true
meta: 
  _edit_last: "1"
  _efficient_related_posts: "a:6:{i:0;a:4:{s:2:\"ID\";s:2:\"95\";s:10:\"post_title\";s:34:\"Enable Apple AirPrint on Windows 7\";s:7:\"matches\";s:1:\"4\";s:9:\"permalink\";s:66:\"http://mbmccormick.com/2011/04/enable-apple-airprint-on-windows-7/\";}i:1;a:4:{s:2:\"ID\";s:2:\"18\";s:10:\"post_title\";s:56:\"Making Bonjour, Airport Express, and Windows 7 play nice\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:86:\"http://mbmccormick.com/2010/04/making-bonjour-airport-express-and-windows-7-play-nice/\";}i:2;a:4:{s:2:\"ID\";s:3:\"145\";s:10:\"post_title\";s:50:\"Early Look at Mojito: Mint.com for Windows Phone 7\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:81:\"http://mbmccormick.com/2011/08/early-look-at-mojito-mint-com-for-windows-phone-7/\";}i:3;a:4:{s:2:\"ID\";s:2:\"93\";s:10:\"post_title\";s:46:\"Remove OEM Login Screen Wallpaper on Windows 7\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:78:\"http://mbmccormick.com/2011/04/remove-oem-login-screen-wallpaper-on-windows-7/\";}i:4;a:4:{s:2:\"ID\";s:1:\"3\";s:10:\"post_title\";s:49:\"Enabling Remote Desktop on Windows 7 Home Premium\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:81:\"http://mbmccormick.com/2010/03/enabling-remote-desktop-on-windows-7-home-premium/\";}i:5;a:4:{s:2:\"ID\";s:3:\"158\";s:10:\"post_title\";s:35:\"Install Windows 8 on a Google Cr-48\";s:7:\"matches\";s:1:\"1\";s:9:\"permalink\";s:67:\"http://mbmccormick.com/2011/09/install-windows-8-on-a-google-cr-48/\";}}"
  _wp_old_slug: ""
  has_been_twittered: "yes"
  _relation_threshold: "1"
tags: 
- apple
- itunes
- mac
- music
- summer
- Support
- tips
- windows
type: post
status: publish
---
For about the seventh time this year I have had to help my dad reorganize, move, expand or do something that involved his iTunes Library. To most people this would seem like a fairly straight-forward process, but, in fact it is quite a lengthy and in-depth hackery performance. So let's go over the process of moving the iTunes Library from one location (old computer, current computer, etc.) to another location (new computer, external drive, etc.).

First you'll want to move your actual iTunes media files, this being the "iTunes Media" or "iTunes Music" folder, depending on your current version of iTunes. And depending on the size of your library, this could take several hours. Not the file paths of your previous iTunes location and your new location, we will need these a little later.

Next, close down iTunes. Copy your "iTunes Music Library.xml" file to the desktop. We need to open this file and edit the file paths that reference each individual music file. Change the file paths, using find and replace of course, to the new file path (such as an external drive). Save your changes to this file on the desktop, and close your text editor. Next, delete the "iTunes Library.itl" file.

Open up iTunes again. Because we deleted the iTunes Library file, we should see a fresh copy of iTunes with no music added. Click on "File &gt; Library &gt; Import Playlist" and select the "iTunes Music Library.xml" file from the desktop that we just edited. iTunes will now rebuild it's Library database and re-add all of your music, and your ratings, playcounts, and playlists!

For more advanced procedures, you may want to relocate the entire iTunes Library operation. To do this, simply move your entire iTunes folder (depending on your setup) to the new location. Hold down the shift key while clicking on the iTunes shortcut. A window will open up, allowing you to select a new iTunes Library file. Navigate to your newly moved iTunes files, and there you go.
