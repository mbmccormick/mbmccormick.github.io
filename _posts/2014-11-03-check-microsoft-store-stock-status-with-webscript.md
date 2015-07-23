---
layout: post
title: 'Check Microsoft Store stock status with Webscript'
---

[Microsoft](http://www.microsoft.com) launched their first wearable device last week, the [Microsoft Band](http://www.microsoft.com/microsoft-band/en-us). I picked one up last week at my local Microsoft Store and absolutely love it. Call me a fanboy, but I am loving the Microsoft kool-aid right now. The device has been getting great reviews from the press and is currently out of stock online and in stores.

A [while back](http://mbmccormick.com/2013/05/check-best-buy-stock-status-with-webscript/), I created a [Webscript](http://www.webscript.io) that would check the [Best Buy](http://www.bestbuy.com) website to see if any of my local stores had a particular device in stock. Today I have an update for that script which checks some hidden Microsoft Store APIs for stock status of the Microsoft Band:

{% gist mbmccormick/c0de323bce4846a5c6c0 %} 

If you set this up as a cron job running every half hour, it will query the Microsoft Store catalog and send you a text message as soon as a local store has the Microsoft Band in stock.
