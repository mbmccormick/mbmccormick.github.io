---
layout: post
title: Personal API
date: '2015-07-26 06:00:00'
---

**I've long been a follower of the quantified self.** I've been wearing a [Fitbit](http://fitbit.com) daily for the last four years, tracking every step I take, every hour of sleep, and every fluctuation in my body weight. I regularly request updated copies of my medical records and store them in my [HealthVault](http://healthvault.com). I recently received an [Automatic](http://automatic.com) Link to track every mile I drive, every hard brake, and every fast acceleration. I have all of this interesting data - about me - but it's all isolated and scattered across the web. 

A few years ago, [Naveen Selvadurai](http://naveen.com) launched his very own Personal API: [api.naveen.com](http://api.naveen.com). As far as I can tell, this was the very first API of it's kind. It collected all of his various data streams from Fitbit, Withings, Foursquare, and others and surfaced this in the form of a REST API. A single endpoint through which you could access everything you wanted to know about Naveen. I was fascinated by this idea and decided to build my own Personal API. 

### Introducing [api.mbmccormick.com](http://api.mbmccormick.com): my very own Personal API.

My implementation of the Personal API is built using [node.js](http://nodejs.org) + [Express](http://expressjs.com) and is running on [Heroku](http://heroku.com). It's simple, clean, and well organized. The data streams for each method are aggregated in real-time from the upstream API provider and cached in my application for a short period of time to reduce latency. The raw data is then scrubbed prior to rendering in order to remove any sensitive information.

So what can you do with my Personal API? It currently provides access to the following data:

*  My basic profile information, education history, and work history from Facebook
*  My step activity, sleep time, and body weight data from Fitbit
*  My workout activity from Strava
*  My tweets from Twitter
*  My development activity from GitHub
*  My recent blog posts from RSS
*  My driving activity from Automatic

Here's an example response from my `GET /v0/activity` method:

```
{
    "steps": {
        "step_goal": 10000,
        "steps": 883
    },
    "sleep": {
        "sleeps": 1,
        "minutes_asleep": 418
    }
}
```

You can check out the full documentation for my Personal API at [api.mbmccormick.com](http://api.mbmccormick.com) and view the [source code](http://github.com/mbmccormick/api) on GitHub. *The API is currently limited to `GET` requests only, for now -- I'm still working out how to make `POST /body/arm/left/raise` a reality.*