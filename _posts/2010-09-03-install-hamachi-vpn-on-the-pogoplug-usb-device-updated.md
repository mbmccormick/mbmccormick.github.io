--- 
layout: post
title: Install Hamachi VPN on the PogoPlug USB Device (Updated)
published: true
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
<em>Update: Thanks to <a target="_blank" href="http://stevejobsisadouche.com/">George Lerdsuwanrut</a> for all of his help with this guide, the instructions below should now work with the latest PogoPlug Firmware. (10/15/2010)</em>

Just over a month ago, I wrote a <a href="http://mbmccormick.com/2010/07/install-hamachi-vpn-on-the-pogoplug-usb-device/" target="_blank">post</a> about how to install Hamachi on the PogoPlug USB device, effectively bringing your hard drives and (eventually printers) to the Hamachi network. I've recently moved all of the source code for this <a href="http://github.com/mbmccormick/hamachi-pogoplug" target="_blank">project</a> over to <a href="http://github.com" target="_blank">GitHub</a> where you can download the source, contribute, or fork the project.

I repackaged all of the necessary installation files and included a helpful readme file for installation. You can find the updated installation procedure below. First, you need to enable write access to the device:

[sourcecode language="bash" gutter="false"]
mount -o rw,remount /
[/sourcecode]

Next, you will need to download the packaged source code from GitHub and extract it:

[sourcecode language="bash" gutter="false"]
wget http://github.com/downloads/mbmccormick/hamachi-pogoplug/hamachi-pogoplug.tar.gz
tar -zxvf hamachi-pogoplug.tar.gz
[/sourcecode]

Next, copy the included files to their respective directories:

[sourcecode language="bash" gutter="false"]
cp etc/ /etc -r
cp root/.hamachi /root -r
cp sbin/ /sbin -r
cp usr/ /usr -r
cp var/ /var -r
[/sourcecode]

Next we need to link some of the libraries together and modify permissions:

[sourcecode language="bash" gutter="false"]
ln -sf /usr/lib/libstdc++.so.6.0.9 /usr/lib/libstdc++.so.6
ln -sf /usr/lib/libcrypto.so.0.9.8 /usr/lib/libcrypto.so.0.9.7
ln -sf /usr/bin/hamachi /usr/bin/hamachi-init
chmod 755 /usr/bin/hamachi
chmod 700 /sbin/tuncfg
[/sourcecode]

Next, we need to modify our path variables to point to the Hamachi binaries.

[sourcecode language="bash" gutter="false"]
cd
echo &quot;PATH=$PATH:/usr/sbin:/bin:/sbin&quot; &gt;&gt; .bash_profile
[/sourcecode]

Now we need to prepare our VPN drivers and start Hamachi:

[sourcecode language="bash" gutter="false"]
tuncfg
hamachi-init
hamachi start
hamachi login
[/sourcecode]

Lastly, we need to setup our device to enable write access and start Hamachi on boot:

[sourcecode language="bash" gutter="false"]
chmod 777 hamachi.sh
echo &quot;/etc/init.d/hamachi.sh start&quot; &gt;&gt; /etc/init.d/rcS
[/sourcecode]

You should now be able to access the Hamachi network using the legacy Linux commands. The Hamachi service should also be set to run when the device boots.
