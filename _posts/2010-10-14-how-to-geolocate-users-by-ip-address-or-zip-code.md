---
title: How To Geolocate Users by IP Address or Zip Code
author: Matt
layout: post
permalink: /2010/10/how-to-geolocate-users-by-ip-address-or-zip-code/
categories:
  - Development
tags:
  - php
---

The inspiration for my latest project comes from a web service called [Umbrella Today](http://www.umbrellatoday.com/). If you haven't checked out their website yet, it's worth a look. Their service gathers forecast information for your area and determines whether or not you need an umbrella today. You can sign up to receive text message notifications on the days you need an umbrella. Recently, Umbrella Today has been letting me down. I've been receiving late notifications or sometimes not at all on days when I clearly need my umbrella. I'm not quite sure how they determine whether or not I need an umbrella and for this reason I decided to write my own umbrella-reminder service.

I wanted my service to have the same functionality as Umbrella Today, but with more reliability, robustness, and a some unique new features. First and foremost, I wanted to get my information from [WeatherUnderground][2]. Their forecast information is updated hourly and provides dependable results, and most importantly, their API let's me retrieve the probability of precipitation for specific days. I decided to use this "probability of precipitation" variable as my determining factor. Next, I wanted the web interface for my service to be very intuitive.

 [2]: http://www.wunderground.com/

I stumbled onto another simple weather service, [goingtorain.com][3]. What I like most about this service is that it automatically knows where you are as soon as you visit the page. I couldn't figure out how they did it, but I had a hunch that it had to do with the user's IP address. I did some research and found that, while there isn't a specific "web service" to accomplish this, there was a database of geocoded IP addresses called [GeoIP][4] by [MaxMind][5]. So I downloaded their database to my server and added some code snippets to my website that would lookup the user's IP address and return a zipcode, city, and state. Have a look:

 [3]: http://goingtorain.com/
 [4]: http://www.maxmind.com/app/ip-location
 [5]: http://www.maxmind.com/

<script src="https://gist.github.com/mbmccormick/627449.js"> </script>

The GeoIP service is extremely accurate, but there are some occasions where the location returned is not quite where the user is. For example, if the user's ISP is located in an urban area, the GeoIP result may not be correct. So I wanted to allow the user to enter in their zip code as a failsafe. I used the Google GeoCode API to return the city and state for this zip code, along with a bunch of other information. Here's how I'm parsing that information:

<script src="https://gist.github.com/mbmccormick/628268.js"> </script>

I then use the zip code from these APIs to return the forecast information from WeatherUnderground. The forecast information had a lot of cool things that I could show, so I decided to display a simple forecast including current conditions and temperature as an added bonus. Based on the probability of precipitation, I then determine whether an umbrella is needed for a given day.

The end result of this web service mashup is a simple, intuitive user interface that presents the user with what they want, and fast. The last thing I needed to do was allow my user's to signup for text message notification. For this, I used my new-favorite web service, Twilio. Umbrella Today uses some SMS short code service, but it warns its users that their text messages might be delayed because their service provider limits their API calls. The beauty of Twilio is that it does not do this, and I had my text message notifications set up in about 10 minutes.

I just wanted to highlight how easy it was to "locate" my users by IP address or zip code. You can visit this project live [here][6] and view the source code over at its [GitHub repository][7].

 [6]: http://apps.mbmccormick.com/dontforgetyourumbrella
 [7]: http://github.com/mbmccormick/dontforgetyourumbrella
