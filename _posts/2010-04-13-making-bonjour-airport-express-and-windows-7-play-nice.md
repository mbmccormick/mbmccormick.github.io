--- 
layout: post
title: Making Bonjour, Airport Express, and Windows 7 play nice
published: true
meta: 
  _edit_last: "1"
  _efficient_related_posts: "a:6:{i:0;a:4:{s:2:\"ID\";s:2:\"95\";s:10:\"post_title\";s:34:\"Enable Apple AirPrint on Windows 7\";s:7:\"matches\";s:1:\"7\";s:9:\"permalink\";s:66:\"http://mbmccormick.com/2011/04/enable-apple-airprint-on-windows-7/\";}i:1;a:4:{s:2:\"ID\";s:2:\"37\";s:10:\"post_title\";s:45:\"Crash Course in iTunes Library Administration\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:77:\"http://mbmccormick.com/2010/06/crash-course-in-itunes-library-administration/\";}i:2;a:4:{s:2:\"ID\";s:3:\"158\";s:10:\"post_title\";s:35:\"Install Windows 8 on a Google Cr-48\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:67:\"http://mbmccormick.com/2011/09/install-windows-8-on-a-google-cr-48/\";}i:3;a:4:{s:2:\"ID\";s:3:\"145\";s:10:\"post_title\";s:50:\"Early Look at Mojito: Mint.com for Windows Phone 7\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:81:\"http://mbmccormick.com/2011/08/early-look-at-mojito-mint-com-for-windows-phone-7/\";}i:4;a:4:{s:2:\"ID\";s:2:\"93\";s:10:\"post_title\";s:46:\"Remove OEM Login Screen Wallpaper on Windows 7\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:78:\"http://mbmccormick.com/2011/04/remove-oem-login-screen-wallpaper-on-windows-7/\";}i:5;a:4:{s:2:\"ID\";s:2:\"87\";s:10:\"post_title\";s:55:\"How I Launched 4sqtransit in Two Weeks on Windows Azure\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:87:\"http://mbmccormick.com/2011/04/how-i-launched-4sqtransit-in-two-weeks-on-windows-azure/\";}}"
  _relation_threshold: "2"
tags: 
- apple
- mac
- microsoft
- networking
- printing
- Support
- windows
- wireless
type: post
status: publish
---
So I have an Airport Express which I use as my wireless router and print server. The first week or so, this was wonderful. I was printing using Windows 7 from anywhere on my network. They could print any time they wanted, for free! Recently, though, I've been having some headaches with Bonjour.

Airport Express depends on Bonjour to print over the wireless network. Clients need to install Bonjour for Windows (or be running Mac OS X) in order to print. For some reason though, my print jobs would never make it to the printer. I tried restarting the Bonjour service, rebooting the router, rebooting my computer, everything! I just recently ran across this <a href="http://social.answers.microsoft.com/Forums/en-US/w7hardware/thread/e1a0e074-c844-4982-b353-ea7d859a554a" target="_blank">forum post</a>, which covers how to fix this. The solution is detailed below:
<ol>
	<li>Open up Printers and Faxes from the Control Panel.</li>
	<li>Right click on the Bonjour Printer, and click Properties.</li>
	<li>Click on the Ports tab.</li>
	<li>Find the Bonjour port, and click Configure Port.</li>
	<li>Replace the value in the Printer Name or IP Address box with "10.0.1.1".</li>
	<li>Click on OK.</li>
</ol>
The problem lied in the DNS lookups for the Bonjour printer. On occasion, Bonjour would not properly resolve the local network name for the printer to an IP address. By replacing the local network name with the IP address, Windows 7 no longer needs to rely on Bonjour to print properly.
