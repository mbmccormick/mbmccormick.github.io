---
layout: post
title: Install Hamachi VPN on the PogoPlug USB Device
date: 2010-07-01 00:00
comments: true
categories: []
---
<p><em><b>UPDATE:</b> A newer version of this article has recently been <a href="http://mbmccormick.com/2010/09/install-hamachi-vpn-on-the-pogoplug-usb-device-updated/" target="_self">posted</a>. The information in this post may be obsolete!</em>
</p>

<p>I picked up the Seagate FreeAgent DockStar USB PogoPlug-enabled network adapter off of <a href="http://woot.com/Forums/ViewPost.aspx?PostID=4000272" target="_blank">Woot!</a> the other day with hopes off putting some of the unused external hard drives in this house to good, network-attached use. Since I'm away at school for about 75% of the year, our home network lives and breathes <a href="https://secure.logmein.com/products/hamachi2/" target="_blank">LogMeIn Hamachi</a>. The device runs a custom build of Linux, which makes its current feature set possible. Tonight I decided to see what kind of potential this network adapter really had, and was able to (with a lot of hacking, of course) get the old <a href="http://files.hamachi.cc/linux/nokia-770/" target="_blank" data-proofer-ignore>Linux version</a> of Hamachi up and running on the device. This post assumes your very familiar with Linux and command line environments.</p>

<p>First, you need to enable SSH access on your <a href="http://pogoplug.com/" target="_blank">PogoPlug</a>-enabled device. You can do this by logging in to the <a href="http://my.pogoplug.com/" target="_blank">My PogoPlug</a> website and enabling this setting under Security Settings. Once you've done that, you can SSH into your PogoPlug device using any SSH client and login as root with the password you configured on the site. Before we can do anything with the device, we need to remount the file system to make it writable. After you've logged in, execute this command:</p>

<script src="https://gist.github.com/1273144.js"> </script>


<p>Our file system should now writable. Next, we need to install some  libraries. I unpacked the <a href="http://gcc.gnu.org/libstdc++/" target="_blank">libstdc++</a> and <a href="http://www.openssl.org/" target="_blank">openssl</a> library files from the OpenPogo <a href="http://openpogo.com/repo/" target="_blank">repository</a> and reorganized them for easy installation. Download the two files to your device using the following commands:</p>

<script src="https://gist.github.com/1273145.js"> </script>


<p>Next, we need to unpack these archives and copy the library files to their respective locations on the PogoPlug device. Here's how to do that:</p>

<script src="https://gist.github.com/1273146.js"> </script>




<script src="https://gist.github.com/1273148.js"> </script>


<p>The libraries should now be installed on our PogoPlug. Next, we need to install Hamachi. While the Hamachi 2 software is now developed by LogMeIn and no longer supports the Linux or Mac operating systems, you can still access the original Hamachi <a href="http://files.hamachi.cc/linux/" target="_blank">source code</a>. The PogoPlug device uses an ARM processor and lucky for us, Hamachi has an ARM build for the Nokia N770 phone which works perfectly for this. Download and install it with the following commands:</p>

<script src="https://gist.github.com/1273151.js"> </script>


<p>Now that all of the pieces of this puzzle are in place, its time to set things in motion. Next we will configure the <a href="http://en.wikipedia.org/wiki/TUN/TAP" target="_blank">tun driver</a> and setup Hamachi, and if all succeeds we should be online. Here we go:</p>

<script src="https://gist.github.com/1273152.js"> </script>


<p>For some reason the Nokia N770 build of the Hamachi client has a tendency to fall asleep, after which the device won't be reachable over the Hamachi network. To avoid this, we need to create the Hamachi config file like this:</p>

<script src="https://gist.github.com/1273155.js"> </script>


<p>You can set this setting to any value, in seconds, or 0 to disable it. When finished, save the file and exit vi by pressing the escape key, then "wq" and hit enter. Once you've saved the file restart the Hamachi service. Lastly, we need to create a startup script to keep execute the Hamachi script when our PogoPlug device boots up. Execute the following lines:</p>

<script src="https://gist.github.com/1273156.js"> </script>


<p>And with that, our Hamachi client should now be working when you boot your PogoPlug device and you can join or create a new Hamachi network and securely access your USB drives from anywhere in the world!</p>
