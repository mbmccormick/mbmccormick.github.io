---
title: Install Hamachi VPN on the PogoPlug USB Device
author: Matt
layout: post
permalink: /2010/07/install-hamachi-vpn-on-the-pogoplug-usb-device/
categories:
  - Projects
tags:
  - linux
  - tutorial
---

*Update: A newer version of this article has recently been [posted][1]. The information in this post may be obsolete!*  
   
I picked up the Seagate FreeAgent DockStar USB PogoPlug-enabled network adapter off of [Woot!][2] the other day with hopes off putting some of the unused external hard drives in this house to good, network-attached use. Since I'm away at school for about 75% of the year, our home network lives and breathes [LogMeIn Hamachi][3]. The device runs a custom build of Linux, which makes its current feature set possible. Tonight I decided to see what kind of potential this network adapter really had, and was able to (with a lot of hacking, of course) get the old [Linux version][4] of Hamachi up and running on the device. This post assumes your very familiar with Linux and command line environments.

 [1]: http://mbmccormick.com/2010/09/install-hamachi-vpn-on-the-pogoplug-usb-device-updated/
 [2]: http://woot.com/Forums/ViewPost.aspx?PostID=4000272
 [3]: https://secure.logmein.com/products/hamachi2/
 [4]: http://files.hamachi.cc/linux/nokia-770/

First, you need to enable SSH access on your [PogoPlug][5]-enabled device. You can do this by logging in to the [My PogoPlug][6] website and enabling this setting under Security Settings. Once you've done that, you can SSH into your PogoPlug device using any SSH client and login as root with the password you configured on the site. Before we can do anything with the device, we need to remount the file system to make it writable. After you've logged in, execute this command:

 [5]: http://pogoplug.com/
 [6]: http://my.pogoplug.com/



Our file system should now writable. Next, we need to install some  libraries. I unpacked the [libstdc ][7] and [openssl][8] library files from the OpenPogo [repository][9] and reorganized them for easy installation. Download the two files to your device using the following commands:

 [7]: http://gcc.gnu.org/libstdc  /
 [8]: http://www.openssl.org/
 [9]: http://openpogo.com/repo/



Next, we need to unpack these archives and copy the library files to their respective locations on the PogoPlug device. Here's how to do that:





The libraries should now be installed on our PogoPlug. Next, we need to install Hamachi. While the Hamachi 2 software is now developed by LogMeIn and no longer supports the Linux or Mac operating systems, you can still access the original Hamachi [source code][10]. The PogoPlug device uses an ARM processor and lucky for us, Hamachi has an ARM build for the Nokia N770 phone which works perfectly for this. Download and install it with the following commands:

 [10]: http://files.hamachi.cc/linux/



Now that all of the pieces of this puzzle are in place, its time to set things in motion. Next we will configure the [tun driver][11] and setup Hamachi, and if all succeeds we should be online. Here we go:

 [11]: http://en.wikipedia.org/wiki/TUN/TAP



For some reason the Nokia N770 build of the Hamachi client has a tendency to fall asleep, after which the device won't be reachable over the Hamachi network. To avoid this, we need to create the Hamachi config file like this:



You can set this setting to any value, in seconds, or 0 to disable it. When finished, save the file and exit vi by pressing the escape key, then "wq" and hit enter. Once you've saved the file restart the Hamachi service. Lastly, we need to create a startup script to keep execute the Hamachi script when our PogoPlug device boots up. Execute the following lines:



And with that, our Hamachi client should now be working when you boot your PogoPlug device and you can join or create a new Hamachi network and securely access your USB drives from anywhere in the world!