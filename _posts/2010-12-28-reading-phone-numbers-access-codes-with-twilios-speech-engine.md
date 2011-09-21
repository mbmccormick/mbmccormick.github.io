--- 
layout: post
title: Reading Phone Numbers, Access Codes with Twilio's Speech Engine
published: true
meta: 
  aktt_notify_twitter: "yes"
  _edit_last: "1"
  _efficient_related_posts: "a:6:{i:0;a:4:{s:2:\"ID\";s:2:\"24\";s:10:\"post_title\";s:31:\"Telephony Made Easy with Twilio\";s:7:\"matches\";s:1:\"4\";s:9:\"permalink\";s:63:\"http://mbmccormick.com/2010/05/telephony-made-easy-with-twilio/\";}i:1;a:4:{s:2:\"ID\";s:2:\"87\";s:10:\"post_title\";s:55:\"How I Launched 4sqtransit in Two Weeks on Windows Azure\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:87:\"http://mbmccormick.com/2011/04/how-i-launched-4sqtransit-in-two-weeks-on-windows-azure/\";}i:2;a:4:{s:2:\"ID\";s:2:\"70\";s:10:\"post_title\";s:57:\"HTTP Basic Authorization with Python and Google AppEngine\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:89:\"http://mbmccormick.com/2010/10/http-basic-authorization-with-python-and-google-appengine/\";}i:3;a:4:{s:2:\"ID\";s:2:\"59\";s:10:\"post_title\";s:48:\"How To Geolocate Users by IP Address or Zip Code\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:80:\"http://mbmccormick.com/2010/10/how-to-geolocate-users-by-ip-address-or-zip-code/\";}i:4;a:4:{s:2:\"ID\";s:2:\"14\";s:10:\"post_title\";s:48:\"Creating a Twitter Robot using Google App Engine\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:79:\"http://mbmccormick.com/2010/03/creating-a-twitter-robot-with-google-app-engine/\";}i:5;a:4:{s:2:\"ID\";s:3:\"145\";s:10:\"post_title\";s:50:\"Early Look at Mojito: Mint.com for Windows Phone 7\";s:7:\"matches\";s:1:\"1\";s:9:\"permalink\";s:81:\"http://mbmccormick.com/2011/08/early-look-at-mojito-mint-com-for-windows-phone-7/\";}}"
  _wp_old_slug: ""
  aktt_tweeted: "1"
  _relation_threshold: "1"
tags: 
- api
- Development
- python
- robot
- tips
- twilio
type: post
status: publish
---
Here's a quick tip on how to get <a href="http://www.twilio.com" target="_blank">Twilio</a> to read a phone number, access code, or how to spell out a word to users with the Twilio <a href="http://www.twilio.com/docs/api/2010-04-01/twiml/say" target="_blank">speech engine</a>. The Python function below will take in any string, split the string into multiple characters, and then add a space and comma between each character. The result is that Twilio will say each letter or number separately at a slower speed.

[gist id=758022]

Without separating the characters, Twilio's speech engine understands "ABC123" as a word and attempts to read it. But when you send "A, B, C, 1, 2, 3," in your TwiML, Twilio will read this naturally, at a speed slow enough that the caller can write it down. This is useful when reading phone numbers or access codes, depending on your service. This is a little tricky in Python, so I thought I'd share this.
