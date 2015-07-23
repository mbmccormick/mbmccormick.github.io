---
layout: post
title: 'Install Hamachi VPN on the PogoPlug USB Device (Updated)'
---

_**UPDATE**: Thanks to [George Lerdsuwanrut](http://stevejobsisadouche.com/) for all of his help with this guide, the instructions below should now work with the latest PogoPlug Firmware. (10/15/2010)_

Just over a month ago, I wrote a [post](http://mbmccormick.com/2010/07/install-hamachi-vpn-on-the-pogoplug-usb-device/) about how to install Hamachi on the PogoPlug USB device, effectively bringing your hard drives and (eventually printers) to the Hamachi network. I've recently moved all of the source code for this [project](http://github.com/mbmccormick/hamachi-pogoplug) over to [GitHub](http://github.com) where you can download the source, contribute, or fork the project.

I repackaged all of the necessary installation files and included a helpful readme file for installation. You can find the updated installation procedure below. First, you need to enable write access to the device:

{% gist mbmccormick/1273098 %}

Next, you will need to download the packaged source code from GitHub and extract it:

{% gist mbmccormick/1273099 %}

Next, copy the included files to their respective directories:

{% gist mbmccormick/1273100 %}

Next we need to link some of the libraries together and modify permissions:

{% gist mbmccormick/1273102 %}

Next, we need to modify our path variables to point to the Hamachi binaries.

{% gist mbmccormick/1273103 %}

Now we need to prepare our VPN drivers and start Hamachi:

{% gist mbmccormick/1273105 %}

Lastly, we need to set up our device to enable write access and start Hamachi on boot:

{% gist mbmccormick/1273107 %}

You should now be able to access the Hamachi network using the legacy Linux commands. The Hamachi service should also be set to run when the device boots.
