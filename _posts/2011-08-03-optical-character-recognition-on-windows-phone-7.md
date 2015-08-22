---
layout: post
title: "Optical Character Recognition on Windows Phone 7"
---

I'm working on a new [Windows Phone](http://www.microsoft.com/windowsphone/en-us/default.aspx) application that uses some new [Mango features](http://www.engadget.com/2011/05/24/microsoft-announces-windows-phone-mango-update-early-and-in/), which has been a pretty fun project thus far. Mango has some new functionality that I need access to, namely the [ability to save contacts](http://www.windowsphonegeek.com/tips/8-How-to-use-SaveContactTask-in-Windows-Phone-Mango) to the phone's address book. However, this post is going to talk about some additional functionality available for Windows Phone 7 that is enabled through [Project Hawaii](http://research.microsoft.com/en-us/um/redmond/projects/hawaii/), developed by [Microsoft Research](http://research.microsoft.com/en-us/).

The Hawaii Cloud Services SDK for WP7 has several cloud-based services including a [Relay Service](http://research.microsoft.com/en-us/um/redmond/projects/hawaii/download/HowToUseTheHawaiiRelayService.pdf), Rendezvous Service, [Speech to Text](http://research.microsoft.com/en-us/um/redmond/projects/hawaii/download/HowToUseTheSpeechToTextService.pdf), and [Optical Character Reading (OCR) Service](http://research.microsoft.com/en-us/um/redmond/projects/hawaii/download/HowToUseTheHawaiiRelayService.pdf). You can read up on what each of these can do, but for now I will focus on the OCR service. My new Windows Phone 7 application is called Carded and will allow you to take a picture of a business card and import the contact information from that card into your phone's contacts list. To do that, I am using the OCR service from Project Hawaii to read an image and return the text in that image.

To get access to Project Hawaii, you first need to download and install the Hawaii Cloud Services SDK for WP7 for use in your project. Next, you need to generate an API key at the [Project Hawaii Signup](http://hawaiiguidgen.cloudapp.net/) page. Here, you will login with your Live ID and the website will generate a GUID for you to use in your application.

{% gist mbmccormick/1121868 %}

Now to actually take a picture on Windows Phone 7, you need to use the `CameraCaptureTask` as shown below.

{% gist mbmccormick/1121897 %}

Once the application has the picture, it's time to call the OCR service. Here's where the Hawaii SDK comes into play, in the code below we convert the image into a byte stream and submit this to the Hawaii Service.

{% gist mbmccormick/1121901 %}

Once the Hawaii OCR service returns with our results, we can then parse this text data.

{% gist mbmccormick/1121905 %}

And with that, we can begin to further parse this text data into relevant information. This is where the fun part of my application exists: trying to parse phone nubmers, email address, job titles, names, company names, etc. and distinguish this in a way that makes sense to the user in the form of a contact entry. I'm sure another blog post will ensue once I figure out how to accomplish this.
