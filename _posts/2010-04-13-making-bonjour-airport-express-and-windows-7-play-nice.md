---
layout: post
title: "Making Bonjour, Airport Express, and Windows 7 play nice"
---

So I have an Airport Express which I use as my wireless router and print server. The first week or so, this was wonderful. I was printing using Windows 7 from anywhere on my network. They could print any time they wanted, for free! Recently, though, I've been having some headaches with Bonjour.

Airport Express depends on Bonjour to print over the wireless network. Clients need to install Bonjour for Windows (or be running Mac OS X) in order to print. For some reason though, my print jobs would never make it to the printer. I tried restarting the Bonjour service, rebooting the router, rebooting my computer, everything! I just recently ran across this [forum post](http://social.answers.microsoft.com/Forums/en-US/w7hardware/thread/e1a0e074-c844-4982-b353-ea7d859a554a), which covers how to fix this. The solution is detailed below:

1.  Open up Printers and Faxes from the Control Panel.
2.  Right click on the Bonjour Printer, and click Properties.
3.  Click on the Ports tab.
4.  Find the Bonjour port, and click Configure Port.
5.  Replace the value in the Printer Name or IP Address box with "10.0.1.1".
6.  Click on OK.

The problem lied in the DNS lookups for the Bonjour printer. On occasion, Bonjour would not properly resolve the local network name for the printer to an IP address. By replacing the local network name with the IP address, Windows 7 no longer needs to rely on Bonjour to print properly.
