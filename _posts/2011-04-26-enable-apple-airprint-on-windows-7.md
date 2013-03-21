---
title: Enable Apple AirPrint on Windows 7
author: Matt
layout: post
permalink: /2011/04/enable-apple-airprint-on-windows-7/
categories:
  - Miscellaneous
tags:
  - tutorial
---

About a month ago, I bought the new [Apple iPad 2][1]. I'll spare you the details, but in short, I love it. One of the neat features available to new Apple iOS devices is [AirPrint][2], which allows you to wirelessly print to AirPrint-enabled printers or printers attached to a Mac. I have neither a Mac nor an AirPrint-enabled printer. Nonetheless, there is a [leaked beta][3] of the Apple AirPrint software for Windows that brings this functionality to Windows users. Here's what you need to do to run it on your own computer:

 [1]: http://www.apple.com/ipad/
 [2]: http://www.apple.com/ipad/features/airprint.html
 [3]: http://jaxov.com/2010/11/how-to-enable-airprint-service-on-windows/

1.  If you haven't already, download and install the latest [iTunes][4]. You will need at least iTunes 10.1.
2.  Download this leaked [AirPrint for Windows installer][5] and run it as an administrator to install.
3.  Once installed, you will need to allow the executable at `C:Program Files (x86)AirPrintairprint.exe` access in your firewall. Depending on your firewall, you may need to allow access to the ports `TCP 3689` and `UDP 5353`.
4.  Lastly, share your printer over your network.

 [4]: http://www.apple.com/itunes/download/
 [5]: http://www.mediafire.com/?yadd9be20rkdpe5

Assuming you follow the steps above correctly and your printer is properly shared on your network, you should be able to access your printer from any [iOS 4.2.1 or greater][6] device. Depending on your network security settings, you may be prompted for your local computer login to access the printer remotely. More information on using AirPrint can be found [here][7].

 [6]: http://www.apple.com/ios/
 [7]: http://www.apple.com/pr/library/2010/11/22ios.html