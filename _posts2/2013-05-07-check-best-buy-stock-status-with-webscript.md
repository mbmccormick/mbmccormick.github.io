---
title: 'Check Best Buy stock status with Webscript'
author: Matt
layout: post
permalink: /2013/05/check-best-buy-stock-status-with-webscript/
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

[Fitbit][1] recently launched the latest update to their line of wireless activity trackers, the [Fitbit Flex][2]. I've been an avid Fitbit user since last August and I love their devices. Fitbit has a great end-to-end experience with their products and I've been eagerly waiting to get my hands on (or in?) the Fitbit Flex wristband. However, Fitbit is notorious for poor logistics when launching a new product and as a result, the device is hard to come by right now. 

 [1]: http://www.fitbit.com
 [2]: http://www.fitbit.com/flex

I've been actively checking the [Best Buy][3] website to see if any of my local stores had the device in stock. After hours of pinging their site for updates, I decided to automate this task using [Webscript][4]: 

 [3]: http://www.bestbuy.com
 [4]: http://www.webscript.io

{% gist 5534903 %} 

In about 15 minutes, I had a cron job running every half hour that would query the [Best Buy API][5] and send me a text message as soon as local store had the device in stock. I was impressed with Best Buy's open API and the functionality that it provides and I was satisfied, yet again, with Webscript's ability to make complex tasks like this so easy.

 [5]: https://bbyopen.com/developer