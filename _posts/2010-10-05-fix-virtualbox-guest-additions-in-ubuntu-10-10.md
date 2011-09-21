--- 
layout: post
title: Fix VirtualBox Guest Additions in Ubuntu 10.10
published: true
meta: 
  aktt_notify_twitter: "yes"
  _edit_last: "1"
  _efficient_related_posts: a:6:{i:0;a:4:{s:2:"ID";s:3:"155";s:10:"post_title";s:38:"Install Ubuntu 11.04 on a Google Cr-48";s:7:"matches";s:1:"2";s:9:"permalink";s:70:"http://mbmccormick.com/2011/08/install-ubuntu-11-04-on-a-google-cr-48/";}i:1;a:4:{s:2:"ID";s:2:"79";s:10:"post_title";s:52:"Connect Your Google Cr-48 Laptop to PAL2.0 at Purdue";s:7:"matches";s:1:"2";s:9:"permalink";s:84:"http://mbmccormick.com/2011/02/connect-your-google-cr-48-laptop-to-pal2-0-at-purdue/";}i:2;a:4:{s:2:"ID";s:2:"67";s:10:"post_title";s:41:"How To Remove PHP Extensions From Website";s:7:"matches";s:1:"2";s:9:"permalink";s:73:"http://mbmccormick.com/2010/09/how-to-remove-php-extensions-from-website/";}i:3;a:4:{s:2:"ID";s:2:"29";s:10:"post_title";s:30:"Show Hidden Files in FileZilla";s:7:"matches";s:1:"2";s:9:"permalink";s:67:"http://mbmccormick.com/2010/06/show-hidden-unix-files-in-filezilla/";}i:4;a:4:{s:2:"ID";s:2:"26";s:10:"post_title";s:35:"Android 2.2 Froyo on Motorola Droid";s:7:"matches";s:1:"2";s:9:"permalink";s:71:"http://mbmccormick.com/2010/06/android-2-2-aka-froyo-on-motorola-droid/";}i:5;a:4:{s:2:"ID";s:2:"95";s:10:"post_title";s:34:"Enable Apple AirPrint on Windows 7";s:7:"matches";s:1:"1";s:9:"permalink";s:66:"http://mbmccormick.com/2011/04/enable-apple-airprint-on-windows-7/";}}
  _wp_old_slug: ""
  aktt_tweeted: "1"
  _syntaxhighlighter_encoded: "1"
  _relation_threshold: "1"
tags: 
- linux
- Support
- tips
- ubuntu
type: post
status: publish
---
I recently upgraded my <a href="http://releases.ubuntu.com/lucid/" target="_blank">Ubuntu 10.04</a> installation on VirtualBox to the <a href="http://releases.ubuntu.com/maverick/" target="_blank">Ubuntu 10.10</a> Beta. The upgrade process was pretty seamless, and I was able to do this unattended without any problems. From start to finish, it took about 10 minutes. However, after rebooting the VirtualBox machine, Guest Additions was not properly resizing the screen resolution. The problem is that the new xserver that is included in Ubuntu 10.10 is not supported by the previous installation of Guest Additions.

To resolve this conflict, issue the following three commands from the terminal on the VirtualBox machine:

[gist id=627462]

After rebooting your VirtualBox installation, your machine should be resizing the window like normal. More information about this fix can be found <a href="http://www.unixmen.com/linux-tutorials/1157-install-guest-addition-in-ubuntu-1010-maverick-meerkat-fix" target="_blank">here</a>.
