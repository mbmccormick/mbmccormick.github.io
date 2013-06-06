---
title: Secure Shell Access on the Kindle 4
author: Matt
layout: post
permalink: /2013/04/secure-shell-access-on-the-kindle-4/
categories:
  - Projects
tags:
  - webscript
  - github
  - lua
  - cloud
  - hack
  - code
---

<p>I bought a used <a href="http://en.wikipedia.org/wiki/Amazon_Kindle">Kindle 4</a> the other day because I want to build a dashboard-type display for my apartment. The e-paper display is perfect for this because it is low-power and non-intrusive, which is great for displaying the weather or a calendar. I'll talk more about this project in another post, but today I wanted to share how to get root <a href="http://en.wikipedia.org/wiki/Secure_Shell">SSH access</a> on the Kindle 4 and how to interact with the e-paper display.</p>

<p>To do this, you will need to jailbreak your Kindle. I used the black non-touch Kindle 4 that was released in 2012 and retails on <a href="http://www.amazon.com/dp/B007HCCNJU">Amazon.com for $69</a>. Here's what you need to do:</p>

<ol>
<li>Begin by connecting your Kindle to your computer with a USB cable. The device should appear as a mass storage device.</li>
<li>Download and extract the appropriate jailbreak package for your device. I used the <a href="http://www.mobileread.com/forums/showthread.php?t=191158">kindle-jailbreak-k4-1.6.N</a> package developed by <a href="http://www.mobileread.com/forums/member.php?u=69624">NiLuJe</a>.</li>
<li>Copy the <code>ENABLE_DIAGS</code> and <code>data.tar.gz</code> files to the root of your Kindle.</li>
<li>Eject your Kindle from your computer and reboot the device by navigating to Menu > Settings > Menu > Restart.</li>
<li>The device will then boot into diagnostics mode (Tequila). From there, select <code>D) Exit, Reboot or Disable Diags</code>.</li>
<li>Then select <code>R) Reboot System</code> and <code>Q) To continue</code>. Wait about 20 seconds and your Kindle should begin flashing the jailbreak exploit. You may need to follow steps 5 and 6 a few times to get the device to reboot.</li>
<li>After the Kindle restarts, you should see a new book titled "You are Jailbroken". If you see that, then your device has been successfully jailbroken.</li>
</ol>

<p>The next part of this process is to enable USB networking on the device and use that to gain shell access. Here's how you do that:</p>

<ol>
<li>Begin by connecting your Kindle to your computer with a USB cable. The device should appear as a mass storage device.</li>
<li>Download and extract the appropriate USB networking package for your device. I used the <a href="http://www.mobileread.com/forums/showthread.php?t=88004">kindle-usbnet-0.47.N</a> package developed by <a href="http://www.mobileread.com/forums/member.php?u=69624">NiLuJe</a>.</li>
<li>Copy the appropriate <code>update_usbnetwork_0.47.N_XX_install.bin</code> file to the root of your Kindle.</li>
<li>Eject your Kindle from your computer and update the device by navigating to Menu > Settings > Menu > Update Your Kindle.</li>
<li>The device will then restart.</li>
<li>After the Kindle restarts, your device will have USB networking capabilities. The next section will discuss how to use it.</li>
</ol>

<p>The last part of this process is to connect to the Kindle via USB networking and launch a secure shell. Here's how you do that:</p>

<ol>
<li>Write down the serial number for your Kindle. You can find this on the last page of the Settings menu.</li>
<li>Bring up the search bar on your Kindle and type in <code>;debugon</code> and press enter. Then, bring up the search bar again and type in <code>~usbnetwork</code>. This will turn on the USB networking daemon that you installed in the previous section.</li>
<li>Connect your Kindle to your computer with a USB cable. The device should not appear as a mass storage device as it previously did. Instead, your computer should detect a new USB Ethernet/RDIS Gadget. </li>
<li>After the drivers are automatically installed, right click on the new network adapter and configure it to have a static IP address of <code>192.168.2.1</code> and a subnet mask of <code>255.255.255.0</code>.</li>
<li>Next, launch a secure shell using a program like <a href="http://www.chiark.greenend.org.uk/~sgtatham/putty/">PuTTY</a>. Launch a SSH session on port 22 to your Kindle at IP address <code>192.168.2.2</code>.</li>
<li>You should be prompted for login information. The username is <code>root</code> and the password can be found by entering the serial number for your device (from Step 1) into the <a href="http://members.ping.de/~sven/kindle.html">Kindle Password Calculator</a>.</li>
<li>At this point, you should have shell access to the device.</li>
</ol>

<p>You can mount the filesystem by typing <code>mntroot rw</code>. You can also play around with the e-paper display with the <code>eips</code> utility. To clear the screen, type <code>eips -c</code> and to display an image type <code>eips -g myimage.png</code>. You can read more about hacking the Kindle over on the <a href="http://www.mobileread.com/forums/showthread.php?t=88004">MobileRead Forums</a> and I'll leave it up to you to tinker with the operating system. You can expect to see a couple more posts on this soon.</p>
