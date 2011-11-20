--- 
layout: post
title: HTTP Basic Authorization with Python and Google AppEngine
excerpt:
  This code snippet shows how to make an outbound POST request over HTTP using Python and Google AppEngine's urlfetch method. You need to encode the username and password using Base 64 as shown below.
---
This code snippet shows how to make an outbound POST request over HTTP using Python and Google AppEngine's <code>urlfetch</code> method. You need to encode the username and password using Base 64 as shown below.

<script src="https://gist.github.com/642640.js"> </script> 

Unfortunately, Google AppEngine does not support the <code>http://username:password@yourserver.com/page/init.php</code> URL format like most HTTP libraries.
