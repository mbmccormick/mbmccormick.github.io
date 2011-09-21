--- 
layout: post
title: How To Geolocate Users by IP Address or Zip Code
published: true
meta: 
  aktt_notify_twitter: "yes"
  _edit_last: "1"
  _efficient_related_posts: "a:6:{i:0;a:4:{s:2:\"ID\";s:2:\"24\";s:10:\"post_title\";s:31:\"Telephony Made Easy with Twilio\";s:7:\"matches\";s:1:\"5\";s:9:\"permalink\";s:63:\"http://mbmccormick.com/2010/05/telephony-made-easy-with-twilio/\";}i:1;a:4:{s:2:\"ID\";s:2:\"83\";s:10:\"post_title\";s:51:\"Deploying an Application to AppHarbor in 10 Minutes\";s:7:\"matches\";s:1:\"4\";s:9:\"permalink\";s:83:\"http://mbmccormick.com/2011/03/deploying-an-application-to-appharbor-in-10-minutes/\";}i:2;a:4:{s:2:\"ID\";s:2:\"87\";s:10:\"post_title\";s:55:\"How I Launched 4sqtransit in Two Weeks on Windows Azure\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:87:\"http://mbmccormick.com/2011/04/how-i-launched-4sqtransit-in-two-weeks-on-windows-azure/\";}i:3;a:4:{s:2:\"ID\";s:3:\"161\";s:10:\"post_title\";s:42:\"Bulk INSERT to SQL Azure using LINQ to SQL\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:74:\"http://mbmccormick.com/2011/09/bulk-insert-to-sql-azure-using-linq-to-sql/\";}i:4;a:4:{s:2:\"ID\";s:3:\"158\";s:10:\"post_title\";s:35:\"Install Windows 8 on a Google Cr-48\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:67:\"http://mbmccormick.com/2011/09/install-windows-8-on-a-google-cr-48/\";}i:5;a:4:{s:2:\"ID\";s:3:\"145\";s:10:\"post_title\";s:50:\"Early Look at Mojito: Mint.com for Windows Phone 7\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:81:\"http://mbmccormick.com/2011/08/early-look-at-mojito-mint-com-for-windows-phone-7/\";}}"
  _wp_old_slug: how-to-geolocate-users-by-ip-address
  aktt_tweeted: "1"
  _relation_threshold: "2"
tags: 
- api
- Development
- fun
- geo
- git
- google
- internet
- php
- Projects
- twilio
- Web
- xml
type: post
status: publish
---
The inspiration for my latest project comes from a web service called <a href="http://www.umbrellatoday.com/" target="_blank">Umbrella Today</a>. If you haven't checked out their website yet, it's worth a look. Their service gathers forecast information for your area and determines whether or not you need an umbrella today. You can sign up to receive text message notifications on the days you need an umbrella. Recently, Umbrella Today has been letting me down. I've been receiving late notifications or sometimes not at all on days when I clearly need my umbrella. I'm not quite sure how they determine whether or not I need an umbrella and for this reason I decided to write my own umbrella-reminder service.

I wanted my service to have the same functionality as Umbrella Today, but with more reliability, robustness, and a some unique new features. First and foremost, I wanted to get my information from <a href="http://www.wunderground.com/" target="_blank">WeatherUnderground</a>. Their forecast information is updated hourly and provides dependable results, and most importantly, their API let's me retrieve the probability of precipitation for specific days. I decided to use this "probability of precipitation" variable as my determining factor. Next, I wanted the web interface for my service to be very intuitive.

I stumbled onto another simple weather service, <a href="http://goingtorain.com/" target="_blank">goingtorain.com</a>. What I like most about this service is that it automatically knows where you are as soon as you visit the page. I couldn't figure out how they did it, but I had a hunch that it had to do with the user's IP address. I did some research and found that, while there isn't a specific "web service" to accomplish this, there was a database of geocoded IP addresses called <a href="http://www.maxmind.com/app/ip-location" target="_blank">GeoIP</a> by <a href="http://www.maxmind.com/" target="_blank">MaxMind</a>. So I downloaded their database to my server and added some code snippets to my website that would lookup the user's IP address and return a zipcode, city, and state. Have a look:

[gist id=627449]

The GeoIP service is extremely accurate, but there are some occasions where the location returned is not quite where the user is. For example, if the user's ISP is located in an urban area, the GeoIP result may not be correct. So I wanted to allow the user to enter in their zip code as a failsafe. I used the Google GeoCode API to return the city and state for this zip code, along with a bunch of other information. Here's how I'm parsing that information:

[gist id=628268]

I then use the zip code from these APIs to return the forecast information from WeatherUnderground. The forecast information had a lot of cool things that I could show, so I decided to display a simple forecast including current conditions and temperature as an added bonus. Based on the probability of precipitation, I then determine whether an umbrella is needed for a given day.

The end result of this web service mashup is a simple, intuitive user interface that presents the user with what they want, and fast. The last thing I needed to do was allow my user's to signup for text message notification. For this, I used my new-favorite web service, Twilio. Umbrella Today uses some SMS short code service, but it warns its users that their text messages might be delayed because their service provider limits their API calls. The beauty of Twilio is that it does not do this, and I had my text message notifications set up in about 10 minutes.

I just wanted to highlight how easy it was to "locate" my users by IP address or zip code. You can visit this project live at <a target="_blank" href="http://dontforgetyourumbrella.com">http://dontforgetyourumbrella.com</a> and view the source code over at its <a target="_blank" href="http://github.com/mbmccormick/dontforgetyourumbrella">GitHub repository</a>.
