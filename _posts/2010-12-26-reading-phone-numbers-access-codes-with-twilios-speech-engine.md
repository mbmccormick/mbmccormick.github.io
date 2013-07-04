---
layout: post
title: Reading Phone Numbers, Access Codes with Twilio&#039;s Speech Engine
date: 2010-12-26 00:00
comments: true
categories: []
---
<p>Here's a quick tip on how to get <a href="http://www.twilio.com" target="_blank">Twilio</a> to read a phone number, access code, or how to spell out a word to users with the Twilio <a href="http://www.twilio.com/docs/api/2010-04-01/twiml/say" target="_blank">speech engine</a>. The Python function below will take in any string, split the string into multiple characters, and then add a space and comma between each character. The result is that Twilio will say each letter or number separately at a slower speed.</p>

<script src="https://gist.github.com/758022.js"> </script>


<p></p>

<p>Without separating the characters, Twilio's speech engine understands &ldquo;ABC123&rdquo; as a word and attempts to read it. But when you send &ldquo;A, B, C, 1, 2, 3,&rdquo; in your TwiML, Twilio will read this naturally, at a speed slow enough that the caller can write it down. This is useful when reading phone numbers or access codes, depending on your service. This is a little tricky in Python, so I thought I'd share this.</p>
