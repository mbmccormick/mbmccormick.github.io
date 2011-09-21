--- 
layout: post
title: Connect Your Google Cr-48 Laptop to PAL2.0 at Purdue
published: true
meta: 
  aktt_notify_twitter: "yes"
  _edit_last: "1"
  _efficient_related_posts: a:6:{i:0;a:4:{s:2:"ID";s:3:"155";s:10:"post_title";s:38:"Install Ubuntu 11.04 on a Google Cr-48";s:7:"matches";s:1:"3";s:9:"permalink";s:70:"http://mbmccormick.com/2011/08/install-ubuntu-11-04-on-a-google-cr-48/";}i:1;a:4:{s:2:"ID";s:2:"95";s:10:"post_title";s:34:"Enable Apple AirPrint on Windows 7";s:7:"matches";s:1:"3";s:9:"permalink";s:66:"http://mbmccormick.com/2011/04/enable-apple-airprint-on-windows-7/";}i:2;a:4:{s:2:"ID";s:2:"70";s:10:"post_title";s:57:"HTTP Basic Authorization with Python and Google AppEngine";s:7:"matches";s:1:"3";s:9:"permalink";s:89:"http://mbmccormick.com/2010/10/http-basic-authorization-with-python-and-google-appengine/";}i:3;a:4:{s:2:"ID";s:2:"67";s:10:"post_title";s:41:"How To Remove PHP Extensions From Website";s:7:"matches";s:1:"3";s:9:"permalink";s:73:"http://mbmccormick.com/2010/09/how-to-remove-php-extensions-from-website/";}i:4;a:4:{s:2:"ID";s:2:"46";s:10:"post_title";s:56:"Install Hamachi VPN on the PogoPlug USB Device (Updated)";s:7:"matches";s:1:"3";s:9:"permalink";s:86:"http://mbmccormick.com/2010/09/install-hamachi-vpn-on-the-pogoplug-usb-device-updated/";}i:5;a:4:{s:2:"ID";s:2:"39";s:10:"post_title";s:46:"Install Hamachi VPN on the PogoPlug USB Device";s:7:"matches";s:1:"3";s:9:"permalink";s:78:"http://mbmccormick.com/2010/07/install-hamachi-vpn-on-the-pogoplug-usb-device/";}}
  _wp_old_slug: connecting-your-google-cr-48-laptop-to-pal2-0-at-purdue
  aktt_tweeted: "1"
  _relation_threshold: "3"
tags: 
- google
- Hacking
- hardware
- internet
- linux
- networking
- purdue
- Support
- tips
type: post
status: publish
---
If you're one of the lucky people at Purdue to have received a <a href="http://www.google.com/chromeos/pilot-program-cr48.html" target="_blank">Google Cr-48</a> laptop like myself, then you may have realized that Chrome OS currently does not have support for WPA Enterprise wireless networks, the same protocol that Purdue uses to connect to PAL2.0. Thanks to this <a href="https://wiki.utah.edu/confluence/display/~u0226271/UConnect+on+Chrome+OS" target="_blank">wiki post</a> at the University of Utah, I have put together a working script with the necessary configurations to connect to PAL2.0 on your Google Cr-48.

In order for this to work, you will need to put your Cr-48 laptop into Developer Mode, which is detailed <a href="http://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/cr-48-chrome-notebook-developer-information" target="_blank">here</a>. Once you do that, launch the Crosh terminal by hitting CTRL + ALT + T and issue the following commands:

[gist id=811480]

My field tests have shown that after moving from HSSE to STEW (changing PAL2.0 access points), I did not need to re-execute the above commands. However, because these commands are stored in memory, I was required to re-execute the above commands in order to reconnect after a full reboot. Just going into standby, however, did not require me to re-execute.

Thanks to some help from <a href="http://naterad.com/" target="_blank">Nate Radebaugh</a> with his <a href="http://pastebin.com/3zhLb8qw" target="_blank">modifications</a> using the above configurations to the <a href="http://pastebin.com/G3ta4zsa" target="_blank">scripting format</a> by <a href="http://www.reddit.com/user/teraflop" target="_blank">teraflop</a> on <a href="http://www.reddit.com/r/CR48/comments/fcxhw/any_workarounds_for_wpa2_with_certificate/" target="_blank">Reddit</a>, I now have an automated script for the above commands, which can be <a href="http://mbmccormick/files/pal2.sh" target="_blank">downloaded</a> to your Google Cr-48 laptop using the commands below from a fresh Crosh terminal:

[gist id=827025]

Once installed, you can run the script by opening up a Crosh terminal and executing:

[gist id=827049]

You'll then be prompted for your Purdue network login credentials and, upon successful authentication, be connected to PAL2.0.
