--- 
layout: post
title: Enable Apple AirPrint on Windows 7
published: true
meta: 
  aktt_notify_twitter: "yes"
  _edit_last: "1"
  _efficient_related_posts: "a:6:{i:0;a:4:{s:2:\"ID\";s:2:\"18\";s:10:\"post_title\";s:56:\"Making Bonjour, Airport Express, and Windows 7 play nice\";s:7:\"matches\";s:1:\"7\";s:9:\"permalink\";s:86:\"http://mbmccormick.com/2010/04/making-bonjour-airport-express-and-windows-7-play-nice/\";}i:1;a:4:{s:2:\"ID\";s:3:\"158\";s:10:\"post_title\";s:35:\"Install Windows 8 on a Google Cr-48\";s:7:\"matches\";s:1:\"4\";s:9:\"permalink\";s:67:\"http://mbmccormick.com/2011/09/install-windows-8-on-a-google-cr-48/\";}i:2;a:4:{s:2:\"ID\";s:2:\"93\";s:10:\"post_title\";s:46:\"Remove OEM Login Screen Wallpaper on Windows 7\";s:7:\"matches\";s:1:\"4\";s:9:\"permalink\";s:78:\"http://mbmccormick.com/2011/04/remove-oem-login-screen-wallpaper-on-windows-7/\";}i:3;a:4:{s:2:\"ID\";s:2:\"37\";s:10:\"post_title\";s:45:\"Crash Course in iTunes Library Administration\";s:7:\"matches\";s:1:\"4\";s:9:\"permalink\";s:77:\"http://mbmccormick.com/2010/06/crash-course-in-itunes-library-administration/\";}i:4;a:4:{s:2:\"ID\";s:3:\"145\";s:10:\"post_title\";s:50:\"Early Look at Mojito: Mint.com for Windows Phone 7\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:81:\"http://mbmccormick.com/2011/08/early-look-at-mojito-mint-com-for-windows-phone-7/\";}i:5;a:4:{s:2:\"ID\";s:2:\"98\";s:10:\"post_title\";s:27:\"Getting Ready for Microsoft\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:59:\"http://mbmccormick.com/2011/05/getting-ready-for-microsoft/\";}}"
  aktt_tweeted: "1"
  _relation_threshold: "3"
tags: 
- apple
- downloads
- Hacking
- hardware
- home
- mac
- microsoft
- networking
- printing
- server
- Support
- tips
- windows
- wireless
type: post
status: publish
---
About a month ago, I bought the new <a href="http://www.apple.com/ipad/" target="_blank">Apple iPad 2</a>. I'll spare you the details, but in short, I love it. One of the neat features available to new Apple iOS devices is <a href="http://www.apple.com/ipad/features/airprint.html" target="_blank">AirPrint</a>, which allows you to wirelessly print to AirPrint-enabled printers or printers attached to a Mac. I have neither a Mac nor an AirPrint-enabled printer. Nonetheless, there is a <a href="http://jaxov.com/2010/11/how-to-enable-airprint-service-on-windows/" target="_blank">leaked beta</a> of the Apple AirPrint software for Windows that brings this functionality to Windows users. Here's what you need to do to run it on your own computer:
<ol>
	<li>If you haven't already, download and install the latest <a href="http://www.apple.com/itunes/download/" target="_blank">iTunes</a>. You will need at least iTunes 10.1.</li>
	<li>Download this leaked <a href="http://www.mediafire.com/?yadd9be20rkdpe5" target="_blank">AirPrint for Windows installer</a> and run it as an administrator to install.</li>
	<li>Once installed, you will need to allow the executable at <code>C:\Program Files (x86)\AirPrint\airprint.exe</code> access in your firewall. Depending on your firewall, you may need to allow access to the ports <code>TCP 3689</code> and <code>UDP 5353</code>.</li>
	<li>Lastly, share your printer over your network.</li>
</ol>
Assuming you follow the steps above correctly and your printer is properly shared on your network, you should be able to access your printer from any <a href="http://www.apple.com/ios/" target="_blank">iOS 4.2.1 or greater</a> device. Depending on your network security settings, you may be prompted for your local computer login to access the printer remotely. More information on using AirPrint can be found <a href="http://www.apple.com/pr/library/2010/11/22ios.html" target="_blank">here</a>.
