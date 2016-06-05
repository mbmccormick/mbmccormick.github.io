---
layout: post
title: Fitminder - Fitbit Idle Alert
date: '2015-07-09 06:00:00'
---

I love my [Fitbit](http://fitbit.com). The one thing that it's missing, though, is an idle alert. I wish that when my tracker detected that I've been sitting idle for too long, it would give me subtle nudge to get up and move with a vibration or other reminder. Fitbit has been reluctant to indicate whether or not this is on their roadmap, so I decided to create a third-party solution.

### Fitminder is a simple web service that monitors your Fitbit activity and sends you a text message when you haven't moved in a while.

![Fitminder screenshot](/content/images/2016/03/capture-1.png)

The application itself is built using [node.js](http://nodejs.org) + [Express](http://expressjs.com) and is running on [Microsoft Azure](http://azure.microsoft.com). I'm using [Twilio](http://twilio.com) as my SMS provider and [Stripe](http://stripe.com) as my payments provider.

When you connect your Fitbit account with Fitminder, the application creates a [subscription](http://wiki.fitbit.com/display/API/Fitbit+Subscriptions+API) with the [Fitbit API](http://dev.fitbit.com) against your Fitbit account. Then, anytime you sync your Fitbit tracker, the Fitbit subscriptions API will send a notification to Fitminder. The application then makes a subsequent request to fetch your latest activity data and analyzes it to determine whether or not you have been idle for too long. If you have, it sends you a text message reminder to get up and move. You can also hook it up to the [IFTTT Maker Channel](http://ifttt.com/maker) for custom reminders.

The results have been pretty surprising: *the average Fitbit user walks an average of 3,500 more steps per day in the 30 days after signing up for Fitminder than they do in the 30 days before they signed up.*

Check out the [source code](http://github.com/mbmccormick/fitminder) for Fitminder on GitHub or **sign up today at [fitminder.io](http://fitminder.io)**.
