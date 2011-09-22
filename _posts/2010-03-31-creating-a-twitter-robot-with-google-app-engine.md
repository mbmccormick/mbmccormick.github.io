--- 
layout: post
title: Creating a Twitter Robot using Google App Engine
excerpt:
 I love Twitter and in fact, I find myself spending more time on this social network than any other. It's quick, it's simple, and above all else it's a very unique platform through which to consume information. I follow my friends, favorite blogs, news outlets, software products, local businesses, etc. As a Purdue student, I am also able to get updates about student organizations, campus news, and even emergency alerts.
---
I love <a href="http://www.twitter.com/" target="_blank">Twitter</a> and in fact, I find myself spending more time on this social network than any other. It's quick, it's simple, and above all else it's a very unique platform through which to consume information. I follow my friends, favorite blogs, news outlets, software products, local businesses, etc. As a Purdue student, I am also able to get updates about student organizations, campus news, and even emergency alerts. For me, it has evolved from a fun social network to an essential tool.

The cool thing about Twitter is the recent increase in the "robot" population on the community. I can interact with my <a href="http://www.rememberthemilk.com/" target="_blank">Remember The Milk</a> task manager right from my timeline or see the latest deals on <a href="http://www.woot.com/" target="_blank">Woot!</a>. During basketball games when I'm too busy studying (yet somehow have enough time to be on the Internet), I can even get live score updates. One thing that I didn't like was how the current weather robots worked. They all required me to send direct messages to the robot with my zip code and wait for a response, something I didn't want to do. I just wanted to see a forecast of my local weather in my timeline throughout the day. And that leads me to this post.

I initially created this robot using bash scripting and cron jobs. However, I recently migrated the application to <a href="http://appengine.google.com/" target="_blank">Google App Engine</a>, something I've wanted to experiment with for a long time. At first glance, Google App Engine is quite intimidating. But after a small learning curve, I was able to easily deploy my first application. Google App Engine has a lot to offer, aside from the ridiculous amount of processing power that this beast offers to developers, including CGI interaction, databases, cron jobs, OAuth, Google Account integration, and much more. For this application I utilized the databases, or "GQL datastores" as they're called, and cron jobs.

Google App Engine requires that applications be written in either Python or Java. I chose Python, one of the easiest and most powerful languages that I have ever used, because it has less overhead to install on the developer machine than Java. After installing the necessary runtimes for Python and following the Google App Engine <a href="http://code.google.com/appengine/docs/python/overview.html" target="_blank">documentation</a> to setup my application on Google's servers, install the App Engine SDK and the App Engine Launcher utility, I was ready to begin coding.

After researching several different providers for the weather forecast information, I decided to go with <a href="http://www.wunderground.com/" target="_blank">Weather Underground</a>. Them main reason for this was because their forecasts were updated about 4 or 5 times per day, and I could consume this information in a friendly 160 character format. Using their iCal feeds, I was able to easily strip out the information that I wanted to publish. Below you will find an excerpt containing the core functions contained in the main.py file of the application:

[sourcecode language="python" firstline="19"]
class Update(webapp.RequestHandler):
 def get(self):
 botlist = db.GqlQuery('SELECT * FROM Weatherbot ORDER BY zipcode ASC')

 failed = False

 try:
 for bot in botlist:
  tweet = self.get_feed(bot.wundurl)
  payload = {'status' : tweet,  'source' : &quot;tweatherbot&quot;}
  payload = urllib.urlencode(payload)
  base64string = base64.encodestring('%s:%s' % (bot.username, bot.password))[:-1]
  headers = {'Authorization': &quot;Basic %s&quot; % base64string}
  url = 'http://twitter.com/statuses/update.xml'
  result = urlfetch.fetch(url, payload=payload, method=urlfetch.POST, headers=headers)
  bot.lastupdate = datetime.now()
  self.response.out.write(result.content)
 except Exception, detail:
  self.response.out.write('An error occurred while accessing Twitter.\n\nException: %s' % detail)
  failed = True

 if failed == False:
 db.put(botlist)
 self.redirect('/')

def get_feed(self, url):
 result = urlfetch.fetch(url)
 for line in result.content.splitlines():
 if line.startswith('DESCRIPTION:'):
  return line.replace('DESCRIPTION:', '').replace('\\n', '').strip()

def get_status(self, id):
 current = urlfetch.fetch('http://twitter.com/statuses/user_timeline/%s.xml' % id)
 for line in current.content.splitlines():
 if line.strip().startswith('&lt;text&gt;'):
  return line.replace('&lt;text&gt;', '').replace('\\n', '').replace('&lt;/text&gt;', '').strip()

def get_updatetime(self, id):
 current = urlfetch.fetch('http://twitter.com/statuses/user_timeline/%s.xml' % id)
 for line in current.content.splitlines():
 if line.strip().startswith('&lt;created_at&gt;'):
  return line.replace('&lt;created_at&gt;', '').replace('\\n', '').replace('&lt;/created_at&gt;', '').strip()
[/sourcecode]

One of the key requirements for this service is that it needed to check for new forecasts throughout the day. So I took advantage of the cron jobs on the Google App Engine servers. A quick look at the documentation, a change to my configuration file, and a fresh deployment later, my service was living and breathing on its own. I was amazed at how simple this was. You can check out the cron.yaml file below:

[sourcecode language="text"]
cron:
- description: twitter weather forecast update
 url: /update
 schedule: every 30 minutes synchronized
[/sourcecode]

I also wanted to store my Twitter robots' login information and Weather Underground feeds in the database, so I didn't have to re-deploy my application whenever I wanted to add a new robot. Easy enough, thanks to the GQL datastores. Setting up the database for this was extremely simple, check out this excerpt from the main.py file:

[sourcecode language="python" firstline="12"]
﻿﻿class Weatherbot(db.Model):
 username = db.StringProperty()
 password = db.StringProperty()
 zipcode = db.StringProperty()
 wundurl = db.StringProperty()
 lastupdate = db.DateTimeProperty(auto_now = True)
[/sourcecode]

Overall, I was completely impressed with how usable and scalable the Google App Engine platform was. I really have a hard time understanding why this environment is so hidden. Pairing this monster with the likes of the Python language, anything is possible. You can expect more applications from me to be built with this platform.

You can find the full source code to this project at Google Code <a href="http://code.google.com/p/tweatherbot" target="_blank">here</a> or view the application live on Google AppSpot <a href="http://tweatherbot.appspot.com/" target="_blank">here</a>.
