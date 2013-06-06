---
layout: post
title: HTTP Basic Authorization with Python and Google AppEngine
date: 2010-10-23 00:00
comments: true
categories: []
---
<p>This code snippet shows how to make an outbound POST request over HTTP using Python and Google AppEngine&rsquo;s <code>urlfetch</code> method. You need to encode the username and password using Base 64 as shown below.</p>

<script src="https://gist.github.com/642640.js"> </script>


<p></p>

<p>Unfortunately, Google AppEngine does not support the <code>http://username:password@yourserver.com/page/init.php</code> URL format like most HTTP libraries.</p>
