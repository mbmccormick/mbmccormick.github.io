---
title: HTTP Basic Authorization with Python and Google AppEngine
author: Matt
layout: post
permalink: /2010/10/http-basic-authorization-with-python-and-google-appengine/
categories:
  - Development
tags:
  - python
---
# 

This code snippet shows how to make an outbound POST request over HTTP using Python and Google AppEngine’s `urlfetch` method. You need to encode the username and password using Base 64 as shown below.



Unfortunately, Google AppEngine does not support the `http://username:password@yourserver.com/page/init.php` URL format like most HTTP libraries.