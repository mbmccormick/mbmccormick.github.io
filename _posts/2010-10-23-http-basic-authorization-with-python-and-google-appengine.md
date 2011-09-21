--- 
layout: post
title: HTTP Basic Authorization with Python and Google AppEngine
published: true
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
