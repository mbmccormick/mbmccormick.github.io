--- 
layout: post
title: Install Hamachi VPN on the PogoPlug USB Device (Updated)
excerpt:
  Just over a month ago, I wrote a post about how to install Hamachi on the PogoPlug USB device, effectively bringing your hard drives and (eventually printers) to the Hamachi network. I've recently moved all of the source code for this project over to GitHub where you can download the source, contribute, or fork the project.
---
<em>Update: Thanks to <a target="_blank" href="http://stevejobsisadouche.com/">George Lerdsuwanrut</a> for all of his help with this guide, the instructions below should now work with the latest PogoPlug Firmware. (10/15/2010)</em>

Just over a month ago, I wrote a <a href="http://mbmccormick.com/2010/07/install-hamachi-vpn-on-the-pogoplug-usb-device/" target="_blank">post</a> about how to install Hamachi on the PogoPlug USB device, effectively bringing your hard drives and (eventually printers) to the Hamachi network. I've recently moved all of the source code for this <a href="http://github.com/mbmccormick/hamachi-pogoplug" target="_blank">project</a> over to <a href="http://github.com" target="_blank">GitHub</a> where you can download the source, contribute, or fork the project.

I repackaged all of the necessary installation files and included a helpful readme file for installation. You can find the updated installation procedure below. First, you need to enable write access to the device:

<script src="https://gist.github.com/1273098.js?file=gistfile1.sh"></script>

Next, you will need to download the packaged source code from GitHub and extract it:

<script src="https://gist.github.com/1273099.js?file=gistfile1.sh"></script>

Next, copy the included files to their respective directories:

<script src="https://gist.github.com/1273100.js?file=gistfile1.sh"></script>

Next we need to link some of the libraries together and modify permissions:

<script src="https://gist.github.com/1273102.js?file=gistfile1.sh"></script>

Next, we need to modify our path variables to point to the Hamachi binaries.

<script src="https://gist.github.com/1273103.js?file=gistfile1.sh"></script>

Now we need to prepare our VPN drivers and start Hamachi:

<script src="https://gist.github.com/1273105.js?file=gistfile1.sh"></script>

Lastly, we need to setup our device to enable write access and start Hamachi on boot:

<script src="https://gist.github.com/1273107.js?file=gistfile1.sh"></script>

You should now be able to access the Hamachi network using the legacy Linux commands. The Hamachi service should also be set to run when the device boots.
