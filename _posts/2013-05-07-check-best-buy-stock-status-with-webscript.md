---
layout: post
title: "Check Best Buy stock status with Webscript"
---

[Fitbit](http://www.fitbit.com) recently launched the latest update to their line of wireless activity trackers, the [Fitbit Flex](http://www.fitbit.com/flex). I’ve been an avid Fitbit user since last August and I love their devices. Fitbit has a great end-to-end experience with their products and I’ve been eagerly waiting to get my hands on (or in?) the Fitbit Flex wristband. However, Fitbit is notorious for poor logistics when launching a new product and as a result, the device is hard to come by right now.

I’ve been actively checking the [Best Buy](http://www.bestbuy.com) website to see if any of my local stores had the device in stock. After hours of pinging their site for updates, I decided to automate this task using [Webscript](http://www.webscript.io):

{% gist mbmccormick/5534903 %} 

In about 15 minutes, I had a cron job running every half hour that would query the [Best Buy API](https://bbyopen.com/developer) and send me a text message as soon as a local store had the device in stock. I was impressed with Best Buy’s open API and the functionality that it provides and I was satisfied, yet again, with Webscript’s ability to make complex tasks like this so easy.
