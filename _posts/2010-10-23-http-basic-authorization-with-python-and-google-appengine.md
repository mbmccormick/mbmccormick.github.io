---
layout: post
title: "HTTP Basic Authorization with Python and Google AppEngine"
---

This code snippet shows how to make an outbound POST request over HTTP using Python and Google AppEngine's `urlfetch` method. You need to encode the username and password using Base 64 as shown below.

{% gist 642640 %}

Unfortunately, Google AppEngine does not support the `http://username:password@yourserver.com/page/init.php` URL format like most HTTP libraries.
