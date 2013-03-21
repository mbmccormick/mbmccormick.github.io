---
title: Install Windows 8 on a Google Cr-48
author: Matt
layout: post
permalink: /2011/09/install-windows-8-on-a-google-cr-48/
categories:
  - Development
tags:
  - chromeos
  - tutorial
---
# 

Clearly [I’m trying][1] to find a good use for my [Google Cr-48][2]. Today I was able to get the [Windows 8 Developer Preview][3] installed on a Google Cr-48. It is somewhat involved, but nonetheless I will detail my steps here. This is not for the faint of heart, and I take no responsibility for what you do to your laptop. This guide assumes that you have backed up any important information from your existing OS on your Google Cr-48, whether that is Chrome OS, Ubuntu, or something else. The instructions below will completely erase the data on your laptop and overwrite with Windows 8.

 [1]: http://mbmccormick.com/2011/08/install-ubuntu-11-04-on-a-google-cr-48/
 [2]: http://www.google.com/chromebook/
 [3]: http://www.microsoft.com/presspass/press/2011/sep11/09-13FutureofComputingPR.mspx

**Disable BIOS protection:**

1.  To do this, you will need to crack open the shell of your Google Cr-48.
2.  Flip your laptop over and remove the battery.
3.  If you have not already done so, now is a good time to flip the switch to enable [developer mode][4].
4.  Remove the two rubber feet on the underside of the laptop using a knife or flat-head screwdriver.
5.  Remove the two screws underneath the two rubber feet.
6.  Next, remove all of the remaining screws that you can see.
7.  Once you have removed all of the screws, carefully pry off the bottom case. Start at the back under the screen hinge and work your way around the laptop, moving to the VGA port first and ending with the USB and headphone ports.

 [4]: http://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/cr-48-chrome-notebook-developer-information

**Flash the InsydeH2O BIOS:**

1.  With the case still removed and your device in developer mode, turn on your Google Cr-48.
2.  At the unhappy Chrome face screen, press CTRL D to bypass the warning.
3.  Let Chrome erase the stateful partition and, at the setup screen, select a wireless network and agree to the terms of service. Stop when you get to the login screen.
4.  Press CTRL ALT => (where => is where the F2 key would be) to launch a shell.
5.  Login as the user `chronos`, no password is needed.
6.  Elevate your permissions to root with `sudo su`.
7.  Next, download the [InsydeH2O BIOS][5] with `wget http://mbmc.co/oAGPNk`.
8.  Extract the archive with `tar -xvzf oAGPNk`.
9.  Flash the BIOS with `flashrom -w cr48.bin`, ignoring any error output.
10. Restart the computer to boot to the new BIOS, removing your installation media.

**Install Windows 8:**

1.  Create a [bootable USB drive with Windows 8 Developer Preview installed][6].
2.  Insert the drive to your laptop and power it on.
3.  The laptop should automatically detect your USB drive and boot to it.
4.  Follow the on-screen instructions to begin setup.
5.  When prompted, select the Custom Installation option and NOT the Upgrade option.
6.  When prompted, delete all of the existing partitions until one Unallocated Space item exists in the list of partitions. Select this partition as the installation destination.
7.  At this point, you should allow the installer to finish and reboot your computer. Follow the on-screen guide to complete the installation.

**Install Hardware Drivers:**

1.  Install the following hardware drivers in order.
2.  Increase SSD I/O performance with [Intel Rapid Storage Technology][7].
3.  Update the chipset firmware with [Intel Chipset Installation Utility][8].
4.  Improve graphics performance with [Intel Graphics Media Accelerator 3150][9].
5.  Enable multitouch support, including two-finger scrolling, with [Synaptics Gesture Suite][10].
6.  Lastly, enable bluetooth with [Atheros Bluetooth][11].

Most of the hardware works out of the box, with the exception of the drivers listed above. My device was reporting a Windows Experience Index of 2.2 and the OS was running very smoothly, with Metro UI loading properly. One **important** tip is that because the Google Cr-48 does not have a Windows key, you will need to press either the Search key or CTRL ESC to return to the start menu when using the Metro UI.

To restore your Cr-48 back to the default Chrome OS, follow this [Recovery Guide][12] from Google. Feel free to get in touch with me about any questions or concerns via Twitter.

 [5]: http://www.insydesw.com/solutions/pc/insydeh2o.cfm
 [6]: http://www.ghacks.net/2011/09/14/how-to-install-windows-8-from-usb-key/
 [7]: http://downloadcenter.intel.com/Product_Filter.aspx?ProductID=2101&lang=eng&FamilyId=40
 [8]: http://downloadcenter.intel.com/SearchResult.aspx?lang=eng&ProductFamily=Chipsets&ProductLine=Chipset Software&ProductProduct=Intel® Chipset Software Installation Utility&ProdId=816&LineId=1090&FamilyId=40
 [9]: http://downloadcenter.intel.com/SearchResult.aspx?lang=eng&ProductFamily=Graphics&ProductLine=Netbook and Tablet Graphics&ProductProduct=Intel® Graphics Media Accelerator 3150 (Intel® GMA 3150)
 [10]: http://www.synaptics.com/support/drivers
 [11]: https://docs.google.com/leaf?id=0B9rTgRm4OkZwNWI4ZmMyOTUtYmZmOC00ODQ0LWExY2YtNTZjMmIyOTZiYTg5&hl=en
 [12]: http://support.google.com/chromeos/bin/answer.py?hl=en&answer=1080595