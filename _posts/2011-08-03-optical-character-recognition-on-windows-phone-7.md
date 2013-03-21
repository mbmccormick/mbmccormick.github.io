---
title: Optical Character Recognition on Windows Phone 7
author: Matt
layout: post
permalink: /2011/08/optical-character-recognition-on-windows-phone-7/
categories:
  - Projects
tags:
  - csharp
  - windowsphone
---

I'm working on a new [Windows Phone][1] application that uses some new [Mango features][2], which has been a pretty fun project thus far. Mango has some new functionality that I need access to, namely the [ability to save contacts][3] to the phone's address book. However, this post is going to talk about some additional functionality available for Windows Phone 7 that is enabled through [Project Hawaii][4], developed by [Microsoft Research][5].

 [1]: http://www.microsoft.com/windowsphone/en-us/default.aspx
 [2]: http://www.engadget.com/2011/05/24/microsoft-announces-windows-phone-mango-update-early-and-in/
 [3]: http://www.windowsphonegeek.com/tips/8-How-to-use-SaveContactTask-in-Windows-Phone-Mango
 [4]: http://research.microsoft.com/en-us/um/redmond/projects/hawaii/
 [5]: http://research.microsoft.com/en-us/

The Hawaii Cloud Services SDK for WP7 has several cloud-based services including a [Relay Service][6], Rendezvous Service, [Speech to Text][7], and [Optical Character Reading (OCR) Service][6]. You can read up on what each of these can do, but for now I will focus on the OCR service. My new Windows Phone 7 application is called Carded and will allow you to take a picture of a business card and import the contact information from that card into your phone's contacts list. To do that, I am using the OCR service from Project Hawaii to read an image and return the text in that image.

 [6]: http://research.microsoft.com/en-us/um/redmond/projects/hawaii/download/HowToUseTheHawaiiRelayService.pdf
 [7]: http://research.microsoft.com/en-us/um/redmond/projects/hawaii/download/HowToUseTheSpeechToTextService.pdf

To get access to Project Hawaii, you first need to download and install the Hawaii Cloud Services SDK for WP7 for use in your project. Next, you need to generate an API key at the [Project Hawaii Signup][8] page. Here, you will login with your Live ID and the website will generate a GUID for you to use in your application.

 [8]: http://hawaiiguidgen.cloudapp.net/



Now to actually take a picture on Windows Phone 7, you need to use the `CameraCaptureTask` as shown below.



Once the application has the picture, it's time to call the OCR service. Here's where the Hawaii SDK comes into play, in the code below we convert the image into a byte stream and submit this to the Hawaii Service.



Once the Hawaii OCR service returns with our results, we can then parse this text data.



And with that, we can begin to further parse this text data into relevant information. This is where the fun part of my application exists: trying to parse phone nubmers, email address, job titles, names, company names, etc. and distinguish this in a way that makes sense to the user in the form of a contact entry. I'm sure another blog post will ensue once I figure out how to accomplish this.