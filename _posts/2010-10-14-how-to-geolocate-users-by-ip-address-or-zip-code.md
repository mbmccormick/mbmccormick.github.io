---
layout: post
title: How To Geolocate Users by IP Address or Zip Code
date: 2010-10-14 00:00
comments: true
categories: []
---
<p>The inspiration for my latest project comes from a web service called <a href="http://www.umbrellatoday.com/" target="_blank">Umbrella Today</a>. If you haven't checked out their website yet, it's worth a look. Their service gathers forecast information for your area and determines whether or not you need an umbrella today. You can sign up to receive text message notifications on the days you need an umbrella. Recently, Umbrella Today has been letting me down. I've been receiving late notifications or sometimes not at all on days when I clearly need my umbrella. I'm not quite sure how they determine whether or not I need an umbrella and for this reason I decided to write my own umbrella-reminder service.</p>

<p>I wanted my service to have the same functionality as Umbrella Today, but with more reliability, robustness, and a some unique new features. First and foremost, I wanted to get my information from <a href="http://www.wunderground.com/" target="_blank">WeatherUnderground</a>. Their forecast information is updated hourly and provides dependable results, and most importantly, their API let's me retrieve the probability of precipitation for specific days. I decided to use this "probability of precipitation" variable as my determining factor. Next, I wanted the web interface for my service to be very intuitive.</p>

<p>I stumbled onto another simple weather service, <a href="http://goingtorain.com/" target="_blank">goingtorain.com</a>. What I like most about this service is that it automatically knows where you are as soon as you visit the page. I couldn't figure out how they did it, but I had a hunch that it had to do with the user's IP address. I did some research and found that, while there isn't a specific "web service" to accomplish this, there was a database of geocoded IP addresses called <a href="http://www.maxmind.com/app/ip-location" target="_blank">GeoIP</a> by <a href="http://www.maxmind.com/" target="_blank">MaxMind</a>. So I downloaded their database to my server and added some code snippets to my website that would lookup the user's IP address and return a zipcode, city, and state. Have a look:</p>

<script src="https://gist.github.com/627449.js"> </script>


<p></p>

<p>The GeoIP service is extremely accurate, but there are some occasions where the location returned is not quite where the user is. For example, if the user's ISP is located in an urban area, the GeoIP result may not be correct. So I wanted to allow the user to enter in their zip code as a failsafe. I used the Google GeoCode API to return the city and state for this zip code, along with a bunch of other information. Here's how I'm parsing that information:</p>

<script src="https://gist.github.com/628268.js"> </script>


<p></p>

<p>I then use the zip code from these APIs to return the forecast information from WeatherUnderground. The forecast information had a lot of cool things that I could show, so I decided to display a simple forecast including current conditions and temperature as an added bonus. Based on the probability of precipitation, I then determine whether an umbrella is needed for a given day.</p>

<p>The end result of this web service mashup is a simple, intuitive user interface that presents the user with what they want, and fast. The last thing I needed to do was allow my user's to signup for text message notification. For this, I used my new-favorite web service, Twilio. Umbrella Today uses some SMS short code service, but it warns its users that their text messages might be delayed because their service provider limits their API calls. The beauty of Twilio is that it does not do this, and I had my text message notifications set up in about 10 minutes.</p>

<p>I just wanted to highlight how easy it was to "locate" my users by IP address or zip code. You can view the source code over at its <a target="_blank" href="http://github.com/mbmccormick/dontforgetyourumbrella">GitHub repository</a>.</p>
