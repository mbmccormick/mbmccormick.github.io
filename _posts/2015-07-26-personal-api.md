---
layout: post
title: "Personal API"
---

A few years ago, [Fourquare](http://foursquare.com)'s @naveen launched his very own Personal API - [api.naveen.com](http://api.naveen.com). It's an API for interfacing with his real-time personal statistics from data sources like Fitbit, Withings, Foursquare, Jawbone Up, Nike Fuelband, and some other apps that he's written for this purpose. Ever since I saw this, "Create a Personal API" has been on my project backlog and I finally got around to doing it.

I did a bunch of research on GitHub before starting this project, to get an idea of the different architectures that people are using for their Personal API projects. There were several platforms for showing static data (name, email addresses, work history, etc.) like @DevMountain's [personal-api](http://github.com/DevMountain/personal-api), @azer's [personal-api](http://github.com/azer/personal-api), and @tlongren's [personal-api](http://github.com/tlongren/personal-api). But I wanted something that showed real-time data aggregated from a variety of data sources.

After looking a bit further, I found @ahmetalpbalkan's [personal-dashboard](http://github.com/ahmetalpbalkan/personal-dashboard) project which actually collects and stores a private copy of his personal data in [Azure Table Storage](http://azure.microsoft.com/en-us/documentation/services/storage/). This was closer to what I wanted, but I didn't think it was necessary to maintain my own copy of this data. Arguably, this is probably the safest route, given that data privacy is a hot topic lately. More digging finally led me to @danfang's [me-api](http://github.com/danfang/me-api) project. It was a simple, extensible [node.js](http://nodejs.org/) application for serving personal statistics data in real-time from a variety of data sources. I used this project as inspiration for creating my very own Personal API platform.

**_Introducing [api.mbmccormick.com](http://api.mbmccormick.com): my Personal API.** My implementation of this concept is a node.js application using the [Express.js](http://expressjs.com/) framework, running on [Heroku](http://heroku.com). It's simple, clean, and well organized. Information in my API is aggregated in real-time from a variety of data sources and then cached for a short period of time in memory to reduce latency when querying for the same data in succession. In addition, the raw data from each upstream API is scrubbed in my application prior to rendering it to the client. This allows me to clean up the data and hide any sensitive information that I don't wish to share.

So what can you do with api.mbmccormick.com? I'm providing real-time access to the following datasets:

*  My basic profile information, education history, and work history from Facebook
*  My step activity, sleep time, and body weight data from Fitbit
*  My workout activity from Strava
*  My tweets from Twitter
*  My development activity from GitHub
*  My recent blog posts from RSS
*  My driving activity from Automatic

Here's an example response from my `GET /v0/activity` method:

{% gist mbmccormick/c3c2908eaccf4e80aa01 %}

I plan on adding more datasets as this project (an my online presence) evolves. You can check out the full documentation for my Personal API at [api.mbmccormick.com](http://api.mbmccormick.com) and view the [source code](http://github.com/mbmccormick/api) on GitHub. The API is limited to `GET` requests only, for now. Someday I'll figure out how to make `POST /body/arm/left/raise` a reality.
