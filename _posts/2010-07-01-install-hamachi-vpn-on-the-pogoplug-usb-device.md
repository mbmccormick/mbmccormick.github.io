--- 
layout: post
title: Install Hamachi VPN on the PogoPlug USB Device
published: true
meta: 
  aktt_notify_twitter: "no"
  _edit_last: "1"
  _efficient_related_posts: a:6:{i:0;a:4:{s:2:"ID";s:2:"46";s:10:"post_title";s:56:"Install Hamachi VPN on the PogoPlug USB Device (Updated)";s:7:"matches";s:1:"9";s:9:"permalink";s:86:"http://mbmccormick.com/2010/09/install-hamachi-vpn-on-the-pogoplug-usb-device-updated/";}i:1;a:4:{s:2:"ID";s:3:"158";s:10:"post_title";s:35:"Install Windows 8 on a Google Cr-48";s:7:"matches";s:1:"3";s:9:"permalink";s:67:"http://mbmccormick.com/2011/09/install-windows-8-on-a-google-cr-48/";}i:2;a:4:{s:2:"ID";s:2:"79";s:10:"post_title";s:52:"Connect Your Google Cr-48 Laptop to PAL2.0 at Purdue";s:7:"matches";s:1:"3";s:9:"permalink";s:84:"http://mbmccormick.com/2011/02/connect-your-google-cr-48-laptop-to-pal2-0-at-purdue/";}i:3;a:4:{s:2:"ID";s:2:"26";s:10:"post_title";s:35:"Android 2.2 Froyo on Motorola Droid";s:7:"matches";s:1:"3";s:9:"permalink";s:71:"http://mbmccormick.com/2010/06/android-2-2-aka-froyo-on-motorola-droid/";}i:4;a:4:{s:2:"ID";s:3:"155";s:10:"post_title";s:38:"Install Ubuntu 11.04 on a Google Cr-48";s:7:"matches";s:1:"2";s:9:"permalink";s:70:"http://mbmccormick.com/2011/08/install-ubuntu-11-04-on-a-google-cr-48/";}i:5;a:4:{s:2:"ID";s:3:"136";s:10:"post_title";s:37:"Microsoft Intern Signature Event 2011";s:7:"matches";s:1:"2";s:9:"permalink";s:69:"http://mbmccormick.com/2011/08/microsoft-intern-signature-event-2011/";}}
  _wp_old_slug: install-hamachi-vpn-on-the-pogoplug
  has_been_twittered: "yes"
  _syntaxhighlighter_encoded: "1"
  _relation_threshold: "2"
tags: 
- embedded
- fun
- Hacking
- hardware
- kernel
- linux
- networking
- pogoplug
- ssh
- summer
type: post
status: publish
---
<em>Update: A newer version of this article has recently been <a href="http://mbmccormick.com/2010/09/update-install-hamachi-vpn-on-the-pogoplug-usb-device/" target="_self">posted</a>. The information in this post may be obsolete!</em>
&nbsp;<br />
I picked up the Seagate FreeAgent DockStar USB PogoPlug-enabled network adapter off of <a href="http://woot.com/Forums/ViewPost.aspx?PostID=4000272" target="_blank">Woot!</a> the other day with hopes off putting some of the unused external hard drives in this house to good, network-attached use. Since I'm away at school for about 75% of the year, our home network lives and breathes <a href="https://secure.logmein.com/products/hamachi2/" target="_blank">LogMeIn Hamachi</a>. The device runs a custom build of Linux, which makes its current feature set possible. Tonight I decided to see what kind of potential this network adapter really had, and was able to (with a lot of hacking, of course) get the old <a href="http://files.hamachi.cc/linux/nokia-770/" target="_blank">Linux version</a> of Hamachi up and running on the device. This post assumes your very familiar with Linux and command line environments.

First, you need to enable SSH access on your <a href="http://pogoplug.com/" target="_blank">PogoPlug</a>-enabled device. You can do this by logging in to the <a href="http://my.pogoplug.com/" target="_blank">My PogoPlug</a> website and enabling this setting under Security Settings. Once you've done that, you can SSH into your PogoPlug device using any SSH client and login as root with the password you configured on the site. Before we can do anything with the device, we need to remount the file system to make it writable. After you've logged in, execute this command:

[sourcecode language="bash" gutter="false"]
mount -o rw,remount /
[/sourcecode]

Our file system should now writable. Next, we need to install some  libraries. I unpacked the <a href="http://gcc.gnu.org/libstdc++/" target="_blank">libstdc++</a> and <a href="http://www.openssl.org/" target="_blank">openssl</a> library files from the OpenPogo <a href="http://openpogo.com/repo/" target="_blank">repository</a> and reorganized them for easy installation. Download the two files to your device using the following commands:

[sourcecode language="bash" gutter="false"]
wget http://mbmccormick.com/files/pogoplug/libstdc++.tar.gz
wget http://mbmccormick.com/files/pogoplug/openssl.tar.gz
[/sourcecode]

Next, we need to unpack these archives and copy the library files to their respective locations on the PogoPlug device. Here's how to do that:

[sourcecode language="bash" gutter="false"]
tar -zxvf openssl.tar.gz
cp usr/lib/libcrypto.so /usr/lib/
cp usr/lib/libcrypto.so.0 /usr/lib/
cp usr/lib/libcrypto.so.0.9.8 /usr/lib/
cp usr/lib/libssl.so /usr/lib/
cp usr/lib/libssl.so.0 /usr/lib/
cp usr/lib/libssl.so.0.9.8 /usr/lib/
ln -sf /usr/lib/libcrypto.so.0.9.8 /usr/lib/libcrypto.so.0.9.7
[/sourcecode]

[sourcecode language="bash" gutter="false"]
tar -zxvf libstdc++.tar.gz
cp usr/lib/libstdc++.so /usr/lib/
cp usr/lib/libstdc++.so.6 /usr/lib/
cp usr/lib/libstdc++.so.6.0.9 /usr/lib/
[/sourcecode]

The libraries should now be installed on our PogoPlug. Next, we need to install Hamachi. While the Hamachi 2 software is now developed by LogMeIn and no longer supports the Linux or Mac operating systems, you can still access the original Hamachi <a href="http://files.hamachi.cc/linux/" target="_blank">source code</a>. The PogoPlug device uses an ARM processor and lucky for us, Hamachi has an ARM build for the Nokia N770 phone which works perfectly for this. Download and install it with the following commands:

[sourcecode language="bash" gutter="false"]
wget http://files.hamachi.cc/linux/nokia-770/hamachi-0.9.9.9-20-lnx-n770.tar.gz
tar -zxvf hamachi-0.9.9.9-20-lnx-n770.tar.gz
cp hamachi /usr/bin/hamachi
cp tuncfg/tuncfg /sbin/tuncfg
chmod 755 /usr/bin/hamachi
chmod 700 /sbin/tuncfg
ln -sf /usr/bin/hamachi /usr/bin/hamachi-init
mkdir /var/run/
[/sourcecode]

Now that all of the pieces of this puzzle are in place, its time to set things in motion. Next we will configure the <a href="http://en.wikipedia.org/wiki/TUN/TAP" target="_blank">tun driver</a> and setup Hamachi, and if all succeeds we should be online. Here we go:

[sourcecode language="bash" gutter="false"]
ln -sf /bin/ifconfig /sbin/ifconfig
tuncfg
hamachi-init
hamachi start
hamachi login
[/sourcecode]

For some reason the Nokia N770 build of the Hamachi client has a tendency to fall asleep, after which the device won't be reachable over the Hamachi network. To avoid this, we need to create the Hamachi config file like this:

[sourcecode language="bash" gutter="false"]
echo &quot;KeepAlive 20&quot; &gt;&gt; /root/.hamachi/config
[/sourcecode]

You can set this setting to any value, in seconds, or 0 to disable it. When finished, save the file and exit vi by pressing the escape key, then "wq" and hit enter. Once you've saved the file restart the Hamachi service. Lastly, we need to create a startup script to keep execute the Hamachi script when our PogoPlug device boots up. Execute the following lines:

[sourcecode language="bash" gutter="false"]
cd /etc/init.d/
wget http://mbmccormick.com/files/pogoplug/hamachi.sh
chmod 777 hamachi.sh
echo &quot;/etc/init.d/hamachi.sh start&quot; &gt;&gt; /etc/init.d/rcS
[/sourcecode]

And with that, our Hamachi client should now be working when you boot your PogoPlug device and you can join or create a new Hamachi network and securely access your USB drives from anywhere in the world!
