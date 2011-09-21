--- 
layout: post
title: Enabling Remote Desktop on Windows 7 Home Premium
published: true
meta: 
  _edit_last: "1"
  _efficient_related_posts: "a:6:{i:0;a:4:{s:2:\"ID\";s:2:\"95\";s:10:\"post_title\";s:34:\"Enable Apple AirPrint on Windows 7\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:66:\"http://mbmccormick.com/2011/04/enable-apple-airprint-on-windows-7/\";}i:1;a:4:{s:2:\"ID\";s:3:\"158\";s:10:\"post_title\";s:35:\"Install Windows 8 on a Google Cr-48\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:67:\"http://mbmccormick.com/2011/09/install-windows-8-on-a-google-cr-48/\";}i:2;a:4:{s:2:\"ID\";s:3:\"145\";s:10:\"post_title\";s:50:\"Early Look at Mojito: Mint.com for Windows Phone 7\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:81:\"http://mbmccormick.com/2011/08/early-look-at-mojito-mint-com-for-windows-phone-7/\";}i:3;a:4:{s:2:\"ID\";s:2:\"93\";s:10:\"post_title\";s:46:\"Remove OEM Login Screen Wallpaper on Windows 7\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:78:\"http://mbmccormick.com/2011/04/remove-oem-login-screen-wallpaper-on-windows-7/\";}i:4;a:4:{s:2:\"ID\";s:2:\"53\";s:10:\"post_title\";s:54:\"Configure Dropbox to Sync Your Entire Documents Folder\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:85:\"http://mbmccormick.com/2010/09/configure-dropbox-to-sync-you-entire-documents-folder/\";}i:5;a:4:{s:2:\"ID\";s:2:\"37\";s:10:\"post_title\";s:45:\"Crash Course in iTunes Library Administration\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:77:\"http://mbmccormick.com/2010/06/crash-course-in-itunes-library-administration/\";}}"
  _relation_threshold: "2"
tags: 
- downloads
- tips
- Tools
- windows
type: post
status: publish
---
My reasoning for this post is two-fold: I wanted to get Remote Desktop enabled on my new laptop, so that I can connect remotely from my Android phone. I also wanted to enable concurrent sessions for the laptop computers at home, in the common event that my family members need assistance from me while I'm at home.

On the main computer/server/multimedia powerhouse at home, I had previously used Sala's Terminal Server Patch to accomplish this. But because of the architecture changes made to the Windows operating system since Windows XP, Sala's patch was not going to make the cut.

I recently ran across a <a href="http://thegreenbutton.com/forums/t/79427.aspx?PageIndex=1" target="_blank">forum post</a>, which makes this process so much easier. If you want, you can skip forum post and download the utility <a href="http://www.mediafire.com/file/hzz2l5mznzm/Concurrent_RDP_Win7_RTM_patcher_v1.1.zip" target="_blank">here</a>. Not only does this tool enable Remote Desktop on any version of Windows 7, it also allows for concurrent sessions.

Once you download and extract the utility, run the COM script as an administrator. You will be prompted with certain tweaks that you might find useful. Once the script patches the proper executables, it restarts the Remote Desktop service and voila!
