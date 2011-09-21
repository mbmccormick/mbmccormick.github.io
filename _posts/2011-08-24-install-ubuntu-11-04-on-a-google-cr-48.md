--- 
layout: post
title: Install Ubuntu 11.04 on a Google Cr-48
published: true
meta: 
  aktt_notify_twitter: "yes"
  _edit_last: "1"
  _efficient_related_posts: a:6:{i:0;a:4:{s:2:"ID";s:2:"79";s:10:"post_title";s:52:"Connect Your Google Cr-48 Laptop to PAL2.0 at Purdue";s:7:"matches";s:1:"3";s:9:"permalink";s:84:"http://mbmccormick.com/2011/02/connect-your-google-cr-48-laptop-to-pal2-0-at-purdue/";}i:1;a:4:{s:2:"ID";s:3:"158";s:10:"post_title";s:35:"Install Windows 8 on a Google Cr-48";s:7:"matches";s:1:"2";s:9:"permalink";s:67:"http://mbmccormick.com/2011/09/install-windows-8-on-a-google-cr-48/";}i:2;a:4:{s:2:"ID";s:2:"58";s:10:"post_title";s:46:"Fix VirtualBox Guest Additions in Ubuntu 10.10";s:7:"matches";s:1:"2";s:9:"permalink";s:78:"http://mbmccormick.com/2010/10/fix-virtualbox-guest-additions-in-ubuntu-10-10/";}i:3;a:4:{s:2:"ID";s:2:"46";s:10:"post_title";s:56:"Install Hamachi VPN on the PogoPlug USB Device (Updated)";s:7:"matches";s:1:"2";s:9:"permalink";s:86:"http://mbmccormick.com/2010/09/install-hamachi-vpn-on-the-pogoplug-usb-device-updated/";}i:4;a:4:{s:2:"ID";s:2:"39";s:10:"post_title";s:46:"Install Hamachi VPN on the PogoPlug USB Device";s:7:"matches";s:1:"2";s:9:"permalink";s:78:"http://mbmccormick.com/2010/07/install-hamachi-vpn-on-the-pogoplug-usb-device/";}i:5;a:4:{s:2:"ID";s:2:"26";s:10:"post_title";s:35:"Android 2.2 Froyo on Motorola Droid";s:7:"matches";s:1:"2";s:9:"permalink";s:71:"http://mbmccormick.com/2010/06/android-2-2-aka-froyo-on-motorola-droid/";}}
  aktt_tweeted: "1"
  _relation_threshold: "2"
tags: 
- google
- Hacking
- hardware
- linux
- ubuntu
type: post
status: publish
---
If you remember <a href="http://mbmccormick.com/2011/02/connect-your-google-cr-48-laptop-to-pal2-0-at-purdue/" target="_blank">earlier this year</a>, I was lucky enough to receive a <a href="http://www.google.com/chromebook/" target="_blank">Google Cr-48 laptop</a>. They're still pretty useful devices, however they're pretty restricted and, as a developer, it would be great to get more functionality out of this thing. Below is a re-post of <a href="http://www.blogger.com/profile/00619758583418639317" target="_blank">Jay Lee</a>'s <a href="http://chromeos-cr48.blogspot.com/2011/04/ubuntu-1104-for-cr-48-is-ready.html" target="_blank">instructions</a> on how to install <a href="http://www.ubuntu.com/" target="_blank">Ubuntu 11.04</a> on a Google Cr-48 laptop. I don't take credit or responsibility for these instructions, but I've found them very helpful and want to provide some more visibility.
<ol>
	<li><a href="http://chromeos-cr48.blogspot.com/2010/12/rooting-jailbreaking-your-new-google.html" target="_blank">Get root.</a> (also known as Developer mode)</li>
	<li>Reboot your Cr-48 but don't login. Make sure you have a WiFi or USB Ethernet connection at this point. 3G is not recommended. Press CTRL+ALT+=&gt; (=&gt; is the forward arrow where the F2 key used to be). Do not use the normal CTRL+ALT+T method to get a shell. Use the CTRL+ALT+=&gt; method.</li>
	<li>Login as user "chronos", no password is needed.</li>
	<li>As the chronos user, run <code>wget http://goo.gl/hnkxo; sudo sh hnkxo</code>. If you get a "not found" error, make sure you have Internet connectivity.</li>
	<li>The Chrome OS stateful partition where your data and settings are stored is just short of 11gb by default, the script shrinks the stateful partition to make room for Ubuntu. You can choose to give Ubuntu from 5gb up to 10gb in 1gb increments. I recommend not going higher than 9 though as 10 leaves Chrome OS with very little free space (less than 1gb). Once you've entered a number 5 through 10, your hard drive will be repartitioned. It may look like the Cr-48 is doing nothing for 10-15 minutes but let it be, after awhile it will reboot and re-initialize the stateful partition (told you it was going to wipe your data). This process takes about 5 minutes and then the Cr-48 reboots again and shows you the Welcome screen you got when you first turned on your Cr-48 out of the box.</li>
	<li>Go through the setup process until you get to the Google login page. You'll need to have a WiFi or Ethernet Connection again at this point. 3G is not recommended. Now follow steps 2 through 4 again. This time the script will see that you've already made room for Ubuntu and will start downloading the Ubuntu 11.04image and copying it to the SSD.</li>
	<li>There are 52 100mb files to be downloaded. Each is compressed so the actual download size ranges from less than 1mb in size to 90mb in size. The total size of all the files is about 1.1gb compressed and 5gb uncompressed so the download and install will take awhile. The files are named ubuntu.binXX.bz2 (where XX is aa, ab, ac, ad, ae, af... ba, bb, bc... all the way to bz). If you want to see how big each piece is, <a href="http://code.google.com/p/cr-48-ubuntu/downloads/list">take a look here</a>.</li>
	<li>The script keeps track of which of the 52 files have been successfully installed so if you lose Internet connectivity, or the battery dies (you should be plugged in BTW), etc, just re-run Step 4 and it should resume where it left off.</li>
	<li>After all 52 files have been downloaded and copied to the SSD, the script will make a few more updates to your Cr-48 and then reboot.</li>
	<li>You'll see Ubuntu 11.04 start up! The username is "user" and the password is "user" if you need to make changes.</li>
	<li>If you chose anything other than 5gb for the partition size, you'll need to "grow" the ext4 file system to fill the partition. Open a command prompt and run: <code>sudo resize2fs -p /dev/sda7</code>. This will grow the ext4 partition to fill the free partition space.</li>
	<li>Right now, you're in Ubuntu but if you reboot twice, you'll be back in Chrome OS. To make Ubuntu the default, run <code>sudo cgpt add -i 6 -P 5 -S 1 /dev/sda</code> (password is "user"). It should be possible to run this from Ubuntu or Chrome OS.</li>
	<li>To make Chrome OS the default again, either pull the battery and turn off Developer Mode, or run <code>sudo cgpt add -i 6 -P 0 -S 1 /dev/sda</code>.</li>
</ol>
