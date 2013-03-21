---
title: Install Hamachi VPN on the PogoPlug USB Device (Updated)
author: Matt
layout: post
permalink: /2010/09/install-hamachi-vpn-on-the-pogoplug-usb-device-updated/
categories:
  - Projects
tags:
  - linux
  - tutorial
---
# 

*Update: Thanks to [George Lerdsuwanrut][1] for all of his help with this guide, the instructions below should now work with the latest PogoPlug Firmware. (10/15/2010)*

 [1]: http://stevejobsisadouche.com/

Just over a month ago, I wrote a [post][2] about how to install Hamachi on the PogoPlug USB device, effectively bringing your hard drives and (eventually printers) to the Hamachi network. I’ve recently moved all of the source code for this [project][3] over to [GitHub][4] where you can download the source, contribute, or fork the project.

 [2]: http://mbmccormick.com/2010/07/install-hamachi-vpn-on-the-pogoplug-usb-device/
 [3]: http://github.com/mbmccormick/hamachi-pogoplug
 [4]: http://github.com

I repackaged all of the necessary installation files and included a helpful readme file for installation. You can find the updated installation procedure below. First, you need to enable write access to the device:



Next, you will need to download the packaged source code from GitHub and extract it:



Next, copy the included files to their respective directories:



Next we need to link some of the libraries together and modify permissions:



Next, we need to modify our path variables to point to the Hamachi binaries.



Now we need to prepare our VPN drivers and start Hamachi:



Lastly, we need to setup our device to enable write access and start Hamachi on boot:



You should now be able to access the Hamachi network using the legacy Linux commands. The Hamachi service should also be set to run when the device boots.