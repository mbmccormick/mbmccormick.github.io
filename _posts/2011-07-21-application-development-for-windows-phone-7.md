---
title: Application Development for Windows Phone 7
author: Matt
layout: post
permalink: /2011/07/application-development-for-windows-phone-7/
categories:
  - Development
tags:
  - csharp
  - windowsphone
---
# 

Over the past couple of weeks, I have been working on my first [Windows Phone 7][1] application for my new [HTC Trophy][2] on [Verizon][3]. First off, I absolutely love my Windows Phone and no, I have not been drinking too much koolaid here in Redmond. I truly think that the Windows Phone software has a great user interface and is packed with features that just make life easier, with over [500 new features][4] coming in [Mango][5]. Back to the topic at hand, Windows Phone is a fantastic platform to develop on and for developers that already use [C#][6] and the [.NET Framework][7] for their applications, [Silverlight][8] applications for Windows Phone is a no brainer. Aside from the development aspect, actually going from code to [Marketplace][9] was extremely easy. I was able to launch my application in 24 hours, without any problems.

 [1]: http://www.microsoft.com/windowsphone/en-us/default.aspx
 [2]: http://www.htc.com/us/products/trophy-verizon?view=1-1&sort=0&filters=4-0-0
 [3]: http://www.verizonwireless.com/b2c/index.html
 [4]: http://techcrunch.com/2011/05/24/microsoft-officially-announces-windows-phone-7-1-mango-with-500-new-features/
 [5]: http://www.youtube.com/watch?v=OP30F3ZxTmw
 [6]: http://msdn.microsoft.com/en-us/vcsharp/aa336809
 [7]: http://www.microsoft.com/net/
 [8]: http://www.silverlight.net/
 [9]: http://www.microsoft.com/windowsphone/en-us/apps/default.aspx

[![][11]][11]

 []: /wp-content/uploads/2012/05/Screenshot1.png
 [11]: /wp-content/uploads/2012/05/Screenshot1.png

My application, [LaundryMinder][12], turns your phone into a laundry monitoring device. You simply place your device on your washer or dryer when you are doing your laundry and start the LaundryMinder application. When your laundry is done and the machine stops vibration, the application uses the phone’s [accelerometer][13] to detect this and then sends out an email, text message, or phone call to notify you. This application works for both the washer and dryer cycle and accounts for even the slightest changes in movement, to account for newer laundry machines that produce very little vibration. To keep from draining the battery, the accelerometer is only polled every 2 minutes to check for vibration. This also helps account for washing machine cycle changes when the tub is draining or filling.

 [12]: http://windowsphone.com/s?appid=2b36d281-9189-e011-986b-78e7d1fa76f8
 [13]: http://en.wikipedia.org/wiki/Accelerometer

[![][15]][15]

 []: /wp-content/uploads/2012/05/Desktop.png
 [15]: /wp-content/uploads/2012/05/Desktop.png

I developed this application using C# and Silverlight on .NET Framework 4, three technologies that I am very familiar with, which made development a breeze. After installing the [Windows Phone SDK][16] in [Visual Studio 2010][17], I was ready to begin development. In another post, I will go in depth with the code, but I will spare the details for now. Using the new SDK, I was able to run my application in an emulator that had support for the accelerometer. This allowed me to test the sensitivity of my accelerometer, without having to do 10 loads of laundry. Once I was happy with my application, I generated a clean build and uploaded this to the Marketplace.

 [16]: http://create.msdn.com/en-US/home/getting_started
 [17]: http://www.microsoft.com/visualstudio/en-us

Publishing my application to the Marketplace was really easy. After setting up my account, I created a new application where I uploaded my [XAP file][18], entered some version information, tags, description, screenshots, logos, etc. and I also had the option to select a price. I decided to release this application for free, so this step did not apply for me. After submitting my application for approval, I had about a 24 hour waiting period where my application was tested in an emulator and on several physical devices, someone reviewed my application and ensured that it did not violate any regulations, and alas my application was published.

 [18]: http://forums.asp.net/t/1277554.aspx

You can download LaundryMinder on the Marketplace [here][12] and you can check out the source code for this application on GitHub [here][19].

 [19]: https://github.com/mbmccormick/LaundryMinder