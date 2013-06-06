---
layout: post
title: Enable Apple AirPrint on Windows 7
date: 2011-04-26 00:00
comments: true
categories: []
---
<p>About a month ago, I bought the new <a href="http://www.apple.com/ipad/" target="_blank">Apple iPad 2</a>. I&rsquo;ll spare you the details, but in short, I love it. One of the neat features available to new Apple iOS devices is <a href="http://www.apple.com/ipad/features/airprint.html" target="_blank">AirPrint</a>, which allows you to wirelessly print to AirPrint-enabled printers or printers attached to a Mac. I have neither a Mac nor an AirPrint-enabled printer. Nonetheless, there is a <a href="http://jaxov.com/2010/11/how-to-enable-airprint-service-on-windows/" target="_blank">leaked beta</a> of the Apple AirPrint software for Windows that brings this functionality to Windows users. Here&rsquo;s what you need to do to run it on your own computer:</p>

<ol>
    <li>If you haven't already, download and install the latest <a href="http://www.apple.com/itunes/download/" target="_blank">iTunes</a>. You will need at least iTunes 10.1.</li>
    <li>Download this leaked <a href="http://www.mediafire.com/?yadd9be20rkdpe5" target="_blank">AirPrint for Windows installer</a> and run it as an administrator to install.</li>
    <li>Once installed, you will need to allow the executable at <code>C:\Program Files (x86)\AirPrint\airprint.exe</code> access in your firewall. Depending on your firewall, you may need to allow access to the ports <code>TCP 3689</code> and <code>UDP 5353</code>.</li>
    <li>Lastly, share your printer over your network.</li>
</ol>


<p>Assuming you follow the steps above correctly and your printer is properly shared on your network, you should be able to access your printer from any <a href="http://www.apple.com/ios/" target="_blank">iOS 4.2.1 or greater</a> device. Depending on your network security settings, you may be prompted for your local computer login to access the printer remotely. More information on using AirPrint can be found <a href="http://www.apple.com/pr/library/2010/11/22ios.html" target="_blank">here</a>.</p>
