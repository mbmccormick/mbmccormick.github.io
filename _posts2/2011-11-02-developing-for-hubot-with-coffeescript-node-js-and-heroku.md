---
title: Developing for Hubot with CoffeeScript, Node.js, and Heroku
author: Matt
layout: post
permalink: /2011/11/developing-for-hubot-with-coffeescript-node-js-and-heroku/
categories:
  - Development
tags:
  - github
  - tutorial
---

Over the weekend I started playing around with [Hubot][1], [GitHub][2]'s [recently][3] open-sourced robot written in [CoffeeScript][4] and [Node.js][5]. Hubot is made up of three main components: the robot engine itself, the communication adapters, and the command scripts. Hubot has multiple communication adapters that allow you to talk to Hubot through [Campfire][6], [XMPP][7], [HipChat][8], [Twitter][9], [SMS][10], email, and many more. These communication adapters feed messages to different command scripts for weather, news, stocks, and other useful information. And these scripts are also very extensible, making it easy for people to build customized scripts for their own Hubot installation. The robot engine is the glue that brings these two components together to form a friendly, integrated robot.

 [1]: http://hubot.github.com/
 [2]: http://github.com/
 [3]: https://github.com/blog/968-say-hello-to-hubot
 [4]: http://jashkenas.github.com/coffee-script/
 [5]: http://nodejs.org/
 [6]: http://campfirenow.com/
 [7]: http://xmpp.org/
 [8]: https://www.hipchat.com/
 [9]: http://twitter.com/
 [10]: http://www.twilio.com

Hubot is written in Coffeescript and Node.js, two very powerful technologies that are mainly used for server-side I/O applications. Node.js is a JavaScript-based framework and CoffeeScript is a lightweight language that compiles into JavaScript. Because these two technologies are based on JavaScript, the syntax for both of these should be very similar. Hubot also relies on a [Node Package Manager][11], or NPM, for installing dependencies and for installing publicly-available script extensions for Hubot.

 [11]: http://npmjs.org/

Hubot can be easily deployed to [Heroku][12], a cloud hosting platform for [Ruby][13]-based applications. Heroku also offers some basic [deployment environments][14], including an [Ubuntu-based environment][15] with Node.js support. I will spare you the [deployment details][16] as these are pretty straightforward. Needless to say, I had a Hubot installation up and running on Heroku in about 10 minutes. Once you get Hubot installed, the real fun begins.

 [12]: http://www.heroku.com/
 [13]: http://www.ruby-lang.org/en/
 [14]: http://devcenter.heroku.com/articles/stack
 [15]: http://devcenter.heroku.com/articles/cedar
 [16]: https://github.com/github/hubot/blob/master/src/templates/README.md

This weekend I made two contributions to Hubot over on GitHub. The first was modifying the [Google Talk][17] adapter for Hubot to change the default status from "Chatty" to "Available". This [was happening][18] because the adapter, which relies on XMPP to communicate with Google Talk, was sending a `chat` stanza unnecessarily. I did some research on the XMPP protocol and found that when establishing presence with an XMPP server, the user's default status will be available and that sending a `<status />` stanza was not needed. I forked the Hubot [repository][19] on GitHub and these changes were later [pulled][20] into the master branch.

 [17]: https://github.com/github/hubot/blob/8f36df033d3f63d2aee239cb5fe44c2c02a1a241/src/hubot/gtalk.coffee
 [18]: https://github.com/github/hubot/blob/31302370537600a52f6ed64bc8480e286156b26c/src/hubot/gtalk.coffee
 [19]: https://github.com/github/hubot
 [20]: https://github.com/github/hubot/pull/134

The second contribution that I made to Hubot was on the [weather script][21]. Originally, when you asked Hubot for [weather information][22], the script would merely dump the data to you in an instant message. Keeping with the "friendly" personality that Hubot has, I decided to revamp the formatting to provide a more "natural language" in Hubot's replies and add some additional features to this script. This post wouldn't be complete without some code, so take a look at the snippet below:

 [21]: https://github.com/github/hubot-scripts/blob/141f19e4c8d83d54b027f9a5dc0f791bd2ff011a/src/scripts/weather.coffee
 [22]: https://github.com/github/hubot-scripts/blob/6f5cbe66a7c242523f22f40b1b8e885891143eed/src/scripts/weather.coffee

<script src="https://gist.github.com/mbmccormick/1335716.js"> </script>

So what I'm doing in the script above is downloading the weather data from a hidden Google API, for simplicity's sake, and parsing this data when the robot engine hears the words "weather me ..". Unfortunately, this Google API only responds in XML format, which requires some additional legwork to extract the data. You can also see how Hubot responds in a "natural" format, making him seem more like a "person" rather than a command line. I forked the Hubot scripts [repository][23] on GitHub and these changes were later [pulled][24] into the master branch.

 [23]: https://github.com/github/hubot-scripts
 [24]: https://github.com/github/hubot-scripts/pull/78

All in all, Hubot is a very powerful robot with a lot of community support behind it. I really think that we're going to see some pretty amazing things come out of GitHub's move to open-source their once-internal tool. There are hundreds of scenarios where Hubot can make an impact in a company, no matter what the size. And with such an extensible and easy-to-use framework for building custom plugins and scripts that interact with different APIs and web services, Hubot is hugely powerful.
