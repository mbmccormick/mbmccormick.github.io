--- 
layout: post
title: HTTP Basic Authorization with Python and Google AppEngine
published: true
meta: 
  aktt_notify_twitter: "no"
  _edit_last: "1"
  _efficient_related_posts: a:6:{i:0;a:4:{s:2:"ID";s:2:"79";s:10:"post_title";s:52:"Connect Your Google Cr-48 Laptop to PAL2.0 at Purdue";s:7:"matches";s:1:"3";s:9:"permalink";s:84:"http://mbmccormick.com/2011/02/connect-your-google-cr-48-laptop-to-pal2-0-at-purdue/";}i:1;a:4:{s:2:"ID";s:2:"24";s:10:"post_title";s:31:"Telephony Made Easy with Twilio";s:7:"matches";s:1:"3";s:9:"permalink";s:63:"http://mbmccormick.com/2010/05/telephony-made-easy-with-twilio/";}i:2;a:4:{s:2:"ID";s:2:"75";s:10:"post_title";s:63:"Reading Phone Numbers, Access Codes with Twilio's Speech Engine";s:7:"matches";s:1:"2";s:9:"permalink";s:93:"http://mbmccormick.com/2010/12/reading-phone-numbers-access-codes-with-twilios-speech-engine/";}i:3;a:4:{s:2:"ID";s:2:"59";s:10:"post_title";s:48:"How To Geolocate Users by IP Address or Zip Code";s:7:"matches";s:1:"2";s:9:"permalink";s:80:"http://mbmccormick.com/2010/10/how-to-geolocate-users-by-ip-address-or-zip-code/";}i:4;a:4:{s:2:"ID";s:2:"67";s:10:"post_title";s:41:"How To Remove PHP Extensions From Website";s:7:"matches";s:1:"2";s:9:"permalink";s:73:"http://mbmccormick.com/2010/09/how-to-remove-php-extensions-from-website/";}i:5;a:4:{s:2:"ID";s:2:"29";s:10:"post_title";s:30:"Show Hidden Files in FileZilla";s:7:"matches";s:1:"2";s:9:"permalink";s:67:"http://mbmccormick.com/2010/06/show-hidden-unix-files-in-filezilla/";}}
  _wp_old_slug: ""
  _relation_threshold: "2"
tags: 
- Development
- google
- http
- internet
- python
- tips
- Web
type: post
status: publish
---
This code snippet shows how to make an outbound POST request over HTTP using Python and Google AppEngine's <code>urlfetch</code> method. You need to encode the username and password using Base 64 as shown below.

[gist id=642640]

Unfortunately, Google AppEngine does not support the <code>http://username:password@yourserver.com/page/init.php</code> URL format like most HTTP libraries.
