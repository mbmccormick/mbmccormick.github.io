---
layout: post
title: Install Windows 8 on a Google Cr-48
date: 2011-09-14 00:00
comments: true
categories: []
---
Clearly <a href="http://mbmccormick.com/2011/08/install-ubuntu-11-04-on-a-google-cr-48/" target="_blank">I&rsquo;m trying</a> to find a good use for my <a href="http://www.google.com/chromebook/" target="_blank">Google Cr-48</a>. Today I was able to get the <a href="http://www.microsoft.com/presspass/press/2011/sep11/09-13FutureofComputingPR.mspx" target="_blank">Windows 8 Developer Preview</a> installed on a Google Cr-48. It is somewhat involved, but nonetheless I will detail my steps here. This is not for the faint of heart, and I take no responsibility for what you do to your laptop. This guide assumes that you have backed up any important information from your existing OS on your Google Cr-48, whether that is Chrome OS, Ubuntu, or something else. The instructions below will completely erase the data on your laptop and overwrite with Windows 8.


**Disable BIOS protection:**

1. To do this, you will need to crack open the shell of your Google Cr-48.
2. Flip your laptop over and remove the battery.
3. If you have not already done so, now is a good time to flip the switch to enable <a href="http://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/cr-48-chrome-notebook-developer-information" target="_blank">developer mode</a>.
4. Remove the two rubber feet on the underside of the laptop using a knife or flat-head screwdriver.
5. Remove the two screws underneath the two rubber feet.
6. Next, remove all of the remaining screws that you can see.
7. Once you have removed all of the screws, carefully pry off the bottom case. Start at the back under the screen hinge and work your way around the laptop, moving to the VGA port first and ending with the USB and headphone ports.


**Flash the InsydeH2O BIOS:**

1. With the case still removed and your device in developer mode, turn on your Google Cr-48.
2. At the unhappy Chrome face screen, press CTRL + D to bypass the warning.
3. Let Chrome erase the stateful partition and, at the setup screen, select a wireless network and agree to the terms of service. Stop when you get to the login screen.
4. Press CTRL + ALT + => (where => is where the F2 key would be) to launch a shell.
5. Login as the user <code>chronos</code>, no password is needed.
6. Elevate your permissions to root with <code>sudo su</code>.
7. Next, download the <a href="http://www.insydesw.com/solutions/pc/insydeh2o.cfm" target="_blank">InsydeH2O BIOS</a> with <code>wget http://mbmc.co/oAGPNk</code>.
8. Extract the archive with <code>tar -xvzf oAGPNk</code>.
9. Flash the BIOS with <code>flashrom -w cr48.bin</code>, ignoring any error output.
10. Restart the computer to boot to the new BIOS, removing your installation media.


**Install Windows 8:**

1. Create a <a href="http://www.ghacks.net/2011/09/14/how-to-install-windows-8-from-usb-key/" target="_blank">bootable USB drive with Windows 8 Developer Preview installed</a>.
2. Insert the drive to your laptop and power it on.
3. The laptop should automatically detect your USB drive and boot to it.
4. Follow the on-screen instructions to begin setup.
5. When prompted, select the Custom Installation option and NOT the Upgrade option.
6. When prompted, delete all of the existing partitions until one Unallocated Space item exists in the list of partitions. Select this partition as the installation destination.
7. At this point, you should allow the installer to finish and reboot your computer. Follow the on-screen guide to complete the installation.


**Install Hardware Drivers:**

1. Install the following hardware drivers in order.
2. Increase SSD I/O performance with <a href="http://downloadcenter.intel.com/Product_Filter.aspx?ProductID=2101&amp;lang=eng&amp;FamilyId=40" target="_blank">Intel Rapid Storage Technology</a>.
3. Update the chipset firmware with <a href="http://downloadcenter.intel.com/SearchResult.aspx?lang=eng&amp;ProductFamily=Chipsets&amp;ProductLine=Chipset+Software&amp;ProductProduct=Intel%C2%AE+Chipset+Software+Installation+Utility&amp;ProdId=816&amp;LineId=1090&amp;FamilyId=40" target="_blank">Intel Chipset Installation Utility</a>.
4. Improve graphics performance with <a href="http://downloadcenter.intel.com/SearchResult.aspx?lang=eng&amp;ProductFamily=Graphics&amp;ProductLine=Netbook+and+Tablet+Graphics&amp;ProductProduct=Intel%C2%AE+Graphics+Media+Accelerator+3150+%28Intel%C2%AE+GMA+3150%29" target="_blank">Intel Graphics Media Accelerator 3150</a>.
5. Enable multitouch support, including two-finger scrolling, with <a href="http://www.synaptics.com/support/drivers" target="_blank">Synaptics Gesture Suite</a>.
6. Lastly, enable bluetooth with <a href="https://docs.google.com/leaf?id=0B9rTgRm4OkZwNWI4ZmMyOTUtYmZmOC00ODQ0LWExY2YtNTZjMmIyOTZiYTg5&amp;hl=en" target="_blank">Atheros Bluetooth</a>.

Most of the hardware works out of the box, with the exception of the drivers listed above. My device was reporting a Windows Experience Index of 2.2 and the OS was running very smoothly, with Metro UI loading properly. One **important** tip is that because the Google Cr-48 does not have a Windows key, you will need to press either the Search key or CTRL + ESC to return to the start menu when using the Metro UI.

To restore your Cr-48 back to the default Chrome OS, follow this <a href="http://support.google.com/chromeos/bin/answer.py?hl=en&amp;answer=1080595" target="_blank">Recovery Guide</a> from Google. Feel free to get in touch with me about any questions or concerns via Twitter.
