---
title: 'Continuous Deployment to Webscript from GitHub, Using Webscript'
author: Matt
layout: post
permalink: /2013/04/continuous-deployment-to-webscript-from-github-using-webscript/
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

I love [Webscript][1]. It's a cloud service that makes it extremely easy to create small scripts on the web in Lua. I've been using this service for a while now for a lot of different things:
- Scanning my calendar for birthdays and adding them to my Rememeber The Milk reminders list
- Checking forecasts to see if I need an umbrella for the next day and adding that to my Remember The Milk list
- Reminding me to charge my Fitbit if the battery gets low using the Fitbit API
- Feeding weather data as a PNG to my Kindle display

 [1]: https://www.webscript.io/

You can find the source code to all of the above scripts on my [GitHub page][2]. But as you can see, Webscript is a fun tool for all sorts of hacky things. Recently, I was playing around with GitHub webhooks and wanted to create a continuous deployment mechanism for Webscript. I took a look at the GitHub documentation and the Webscript API documentation and found everything I needed to do this. I created a small script, on Webscript, that reads the GitHub post-receive hook payload and makes a few HTTP requests to the Webscript API to sync the changes. Take a look at the code below:

<script src="https://gist.github.com/mbmccormick/5447302.js"> </script>

 [2]: https://www.github.com/mbmccormick

