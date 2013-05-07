---
title: 'Secure Shell Access on the Kindle 4'
author: Matt
layout: post
permalink: /2013/04/secure-shell-access-on-the-kindle-4/
categories:
  - Projects
tags:
  - webscript
  - heroku
  - lua
  - kindle
  - hack
  - cloud
  - code
  - jailbreak
  - hardware
---

I bought a used [Kindle 4][1] the other day because I want to build a dashboard-type display for my apartment. The e-paper display is perfect for this because it is low-power and non-intrusive, which is great for displaying the weather or a calendar. I'll talk more about this project in another post, but today I wanted to share how to get root [SSH access][2] on the Kindle 4 and how to interact with the e-paper display.

 [1]: http://en.wikipedia.org/wiki/Amazon_Kindle
 [2]: http://en.wikipedia.org/wiki/Secure_Shell

To do this, you will need to jailbreak your Kindle. I used the black non-touch Kindle 4 that was released in 2012 and retails on [Amazon.com for $69][3]. Here's what you need to do:

 [3]: http://www.amazon.com/dp/B007HCCNJU

1. Begin by connecting your Kindle to your computer with a USB cable. The device should appear as a mass storage device.
2. Download and extract the appropriate jailbreak package for your device. I used the [kindle-jailbreak-k4-1.6.N][4] package developed by [NiLuJe][5].
3. Copy the `ENABLE_DIAGS` and `data.tar.gz` files to the root of your Kindle.
4. Eject your Kindle from your computer and reboot the device by navigating to Menu > Settings > Menu > Restart.
5. The device will then boot into diagnostics mode (Tequila). From there, select `D) Exit, Reboot or Disable Diags`.
6. Then select `R) Reboot System` and `Q) To continue`. Wait about 20 seconds and your Kindle should begin flashing the jailbreak exploit. You may need to follow steps 5 and 6 a few times to get the device to reboot.
7. After the Kindle restarts, you should see a new book titled "You are Jailbroken". If you see that, then your device has been successfully jailbroken.

 [4]: http://www.mobileread.com/forums/showthread.php?t=191158
 [5]: http://www.mobileread.com/forums/member.php?u=69624

The next part of this process is to enable USB networking on the device and use that to gain shell access. Here's how you do that:

1. Begin by connecting your Kindle to your computer with a USB cable. The device should appear as a mass storage device.
2. Download and extract the appropriate USB networking package for your device. I used the [kindle-usbnet-0.47.N][6] package developed by [NiLuJe][7].
3. Copy the appropriate `update_usbnetwork_0.47.N_XX_install.bin` file to the root of your Kindle.
4. Eject your Kindle from your computer and update the device by navigating to Menu > Settings > Menu > Update Your Kindle.
5. The device will then restart.
6. After the Kindle restarts, your device will have USB networking capabilities. The next section will discuss how to use it.

 [6]: http://www.mobileread.com/forums/showthread.php?t=88004
 [7]: http://www.mobileread.com/forums/member.php?u=69624

The last part of this process is to connect to the Kindle via USB networking and launch a secure shell. Here's how you do that:

1. Write down the serial number for your Kindle. You can find this on the last page of the Settings menu.
2. Bring up the search bar on your Kindle and type in `;debugon` and press enter. Then, bring up the search bar again and type in `~usbnetwork`. This will turn on the USB networking daemon that you installed in the previous section.
2. Connect your Kindle to your computer with a USB cable. The device should not appear as a mass storage device as it previously did. Instead, your computer should detect a new USB Ethernet/RDIS Gadget. 
3. After the drivers are automatically installed, right click on the new network adapter and configure it to have a static IP address of `192.168.2.1` and a subnet mask of `255.255.255.0`.
4. Next, launch a secure shell using a program like [PuTTY][8]. Launch a SSH session on port 22 to your Kindle at IP address `192.168.2.2`.
5. You should be prompted for login information. The username is `root` and the password can be found by entering the serial number for your device (from Step 1) into the [Kindle Password Calculator][9].
6. At this point, you should have shell access to the device.

 [8]: http://www.chiark.greenend.org.uk/~sgtatham/putty/
 [9]: http://members.ping.de/~sven/kindle.html

You can mount the filesystem by typing `mntroot rw`. You can also play around with the e-paper display with the `eips` utility. To clear the screen, type `eips -c` and to display an image type `eips -g myimage.png`. You can read more about hacking the Kindle over on the [MobileRead Forums][10] and I'll leave it up to you to tinker with the operating system. You can expect to see a couple more posts on this soon.

 [10]: http://www.mobileread.com/forums/showthread.php?t=88004
