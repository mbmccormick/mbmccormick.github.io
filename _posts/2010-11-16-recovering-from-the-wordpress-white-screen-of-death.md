--- 
layout: post
title: Recovering From the WordPress White Screen of Death
published: true
meta: 
  aktt_notify_twitter: "yes"
  _edit_last: "1"
  _efficient_related_posts: a:6:{i:0;a:4:{s:2:"ID";s:2:"29";s:10:"post_title";s:30:"Show Hidden Files in FileZilla";s:7:"matches";s:1:"2";s:9:"permalink";s:67:"http://mbmccormick.com/2010/06/show-hidden-unix-files-in-filezilla/";}i:1;a:4:{s:2:"ID";s:2:"95";s:10:"post_title";s:34:"Enable Apple AirPrint on Windows 7";s:7:"matches";s:1:"1";s:9:"permalink";s:66:"http://mbmccormick.com/2011/04/enable-apple-airprint-on-windows-7/";}i:2;a:4:{s:2:"ID";s:2:"93";s:10:"post_title";s:46:"Remove OEM Login Screen Wallpaper on Windows 7";s:7:"matches";s:1:"1";s:9:"permalink";s:78:"http://mbmccormick.com/2011/04/remove-oem-login-screen-wallpaper-on-windows-7/";}i:3;a:4:{s:2:"ID";s:2:"79";s:10:"post_title";s:52:"Connect Your Google Cr-48 Laptop to PAL2.0 at Purdue";s:7:"matches";s:1:"1";s:9:"permalink";s:84:"http://mbmccormick.com/2011/02/connect-your-google-cr-48-laptop-to-pal2-0-at-purdue/";}i:4;a:4:{s:2:"ID";s:2:"75";s:10:"post_title";s:63:"Reading Phone Numbers, Access Codes with Twilio's Speech Engine";s:7:"matches";s:1:"1";s:9:"permalink";s:93:"http://mbmccormick.com/2010/12/reading-phone-numbers-access-codes-with-twilios-speech-engine/";}i:5;a:4:{s:2:"ID";s:2:"70";s:10:"post_title";s:57:"HTTP Basic Authorization with Python and Google AppEngine";s:7:"matches";s:1:"1";s:9:"permalink";s:89:"http://mbmccormick.com/2010/10/http-basic-authorization-with-python-and-google-appengine/";}}
  _wp_old_slug: ""
  aktt_tweeted: "1"
  _relation_threshold: "1"
tags: 
- mysql
- Support
- tips
- wordpress
type: post
status: publish
---
At some point in your tenure with WordPress, you may be faced with the "white screen of death" from time to time. Over the weekend I was updating a plugin on this blog and something, somewhere went wrong. WordPress was unresponsive and I couldn't get to my website or the administration panel, it was as if my website never existed. Initially, I was intimidated by the utter size of WordPress and didn't know where to begin debugging this problem. I decided to see if I could disable the plugin that I was trying to upgrade from the backend, in the database. I fired up phpMyAdmin and opened up the <code>wp_options</code> table. I then found a record called <code>active_plugins</code>. Here's an example of my website's <code>option_value</code> cell: 

[gist id=755764]

I copied the contents of this record's <code>option_value</code> cell to my desktop as a backup. I then deleted the contents of this cell, so that WordPress would disable all plugins on my blog. When I reloaded my website, I was back in business! I then reinstalled the out-dated plugin manually and reactivated my other plugins.
