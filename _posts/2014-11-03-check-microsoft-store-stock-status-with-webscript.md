---
layout: post
title: 'Check Microsoft Store stock status with Webscript'
author: Matt
permalink: /2014/11/check-microsoft-store-stock-status-with-webscript/
categories:
  - Development
tags:
  - webscript
  - github
  - lua
  - cloud
  - hack
  - code
---

[Microsoft][1] launched their first wearable device last week, the [Microsoft Band][2]. I picked one up last week at my local Microsoft Store and absolutely love it. Call me a fanboy, but I am loving the Microsoft kool-aid right now. The device has been getting great reviews from the press and is currently out of stock online and in stores. 

 [1]: http://www.microsoft.com
 [2]: http://www.microsoft.com/microsoft-band/en-us

A [while back][3], I created a [Webscript][4] that would check the [Best Buy][5] website to see if any of my local stores had a particular device in stock. Today I have an update for that script which checks some hidden Microsoft Store APIs for stock status of the Microsoft Band:

 [3]: http://mbmccormick.com/2013/05/check-best-buy-stock-status-with-webscript/
 [4]: http://www.webscript.io
 [5]: http://www.bestbuy.com

{% gist c0de323bce4846a5c6c0 %} 

If you set this up as a cron job running every half hour, it will query the Microsoft Store catalog and send you a text message as soon as a local store has the Microsoft Band in stock.
