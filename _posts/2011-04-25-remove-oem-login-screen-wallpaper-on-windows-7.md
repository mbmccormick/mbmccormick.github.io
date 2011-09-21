--- 
layout: post
title: Remove OEM Login Screen Wallpaper on Windows 7
published: true
meta: 
  aktt_notify_twitter: "yes"
  _edit_last: "1"
  _efficient_related_posts: "a:6:{i:0;a:4:{s:2:\"ID\";s:2:\"95\";s:10:\"post_title\";s:34:\"Enable Apple AirPrint on Windows 7\";s:7:\"matches\";s:1:\"4\";s:9:\"permalink\";s:66:\"http://mbmccormick.com/2011/04/enable-apple-airprint-on-windows-7/\";}i:1;a:4:{s:2:\"ID\";s:3:\"158\";s:10:\"post_title\";s:35:\"Install Windows 8 on a Google Cr-48\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:67:\"http://mbmccormick.com/2011/09/install-windows-8-on-a-google-cr-48/\";}i:2;a:4:{s:2:\"ID\";s:3:\"145\";s:10:\"post_title\";s:50:\"Early Look at Mojito: Mint.com for Windows Phone 7\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:81:\"http://mbmccormick.com/2011/08/early-look-at-mojito-mint-com-for-windows-phone-7/\";}i:3;a:4:{s:2:\"ID\";s:2:\"87\";s:10:\"post_title\";s:55:\"How I Launched 4sqtransit in Two Weeks on Windows Azure\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:87:\"http://mbmccormick.com/2011/04/how-i-launched-4sqtransit-in-two-weeks-on-windows-azure/\";}i:4;a:4:{s:2:\"ID\";s:2:\"83\";s:10:\"post_title\";s:51:\"Deploying an Application to AppHarbor in 10 Minutes\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:83:\"http://mbmccormick.com/2011/03/deploying-an-application-to-appharbor-in-10-minutes/\";}i:5;a:4:{s:2:\"ID\";s:2:\"79\";s:10:\"post_title\";s:52:\"Connect Your Google Cr-48 Laptop to PAL2.0 at Purdue\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:84:\"http://mbmccormick.com/2011/02/connect-your-google-cr-48-laptop-to-pal2-0-at-purdue/\";}}"
  aktt_tweeted: "1"
  _relation_threshold: "2"
tags: 
- hardware
- microsoft
- Support
- tips
- windows
type: post
status: publish
---
If you follow me on <a href="http://twitter.com/mbmccormick" target="_blank">Twitter</a>, then I'm sure you're aware of my current <a href="http://twitter.com/mbmccormick/status/58600614942355456" target="_blank">computer difficulties</a>. Long story short, Dell sent someone out to replace my motherboard and hard drive and now I'm left with a fresh copy of Windows 7 that I need to restore to my working standards. One of those standards is removing the Dell wallpaper from the Windows 7 login screen. To do that, you just need to modify the following registry entry. Just change this <a href="http://en.wikipedia.org/wiki/Word_%28computing%29" target="_blank">DWORD</a> value from <code>1</code> to <code>0</code>.

[gist id=941666] 
