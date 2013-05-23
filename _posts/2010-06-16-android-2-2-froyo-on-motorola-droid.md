---
layout: post
title: Android 2.2 Froyo on Motorola Droid
author: Matt
permalink: /2010/06/android-2-2-froyo-on-motorola-droid/
categories:
  - Miscellaneous
tags:
  - tutorial
---

After I couldn't stand not having Froyo on my Motorola Droid, I finally gave in. I decided it was time to upgrade after seeing this blog [post](http://www.droid-life.com/2010/06/08/download-newer-motorola-droid-froyo-leak-frf57/), indicating that a very stable port of Android 2.2 was available for the Droid. This post will walk through the process of going from stock Android 2.1, without root, to Android 2.2, with root. Fasten your seat belts, as this is somewhat of a bumpy ride. Let's begin…

First, you need to flash a new recovery system (SPRecovery) onto your device. To do that, we're going to be using some tools that Motorola uses to install software onto your phone. Here's what you do:

1.  Download the SPRecovery [file][2].
2.  Download and install the Motorola USB drivers to your PC, for either [32-bit][3] or [64-bit][4].
3.  Download and install RSD Lite 4.6 from [here][5].
4.  Connect your phone to your PC, and power it off.
5.  Open RSD Lite as an Administrator.
6.  Slide open the keyboard on your Motorola Droid and, while holding the "up" key on the D-pad, press and hold the power button for 5 seconds. You should see a blank screen with some white text on it. This is the boot loader.
7.  Click the "…" next to the file name box in RSD Lite and select the SPRecovery SBF file that you downloaded earlier.
8.  Click "Start" to begin the flashing process. This should not take very long.
9.  Your phone should reboot and RSD Lite should indicate that the process is complete.
10. Power off your phone.

 [2]: http://www.mediafire.com/?jgt1gjgx5gv
 [3]: http://direct.motorola.com/hellomoto/Common/Drivers and Plug ins/USB_Drivers_32_bit_4.2.0.zip
 [4]: http://direct.motorola.com/hellomoto/Common/Drivers and Plug ins/USB_Drivers_64_bit_4.2.0.zip
 [5]: http://www.megaupload.com/?d=HBOOU08Y

Next, we need to install the ported Android 2.2 software to your device. We simply need to copy this software to your phone's microSD card and reboot into the newly-flashed recovery system and install this. Here's what to do:

1.  Download the ported Android 2.2 software from [here][6].
2.  Unzip the archive and copy that folder to the "/nandroid" folder on your phone's microSD card.
3.  Next, we need to reboot your phone in recovery mode. To do this, hold the "x" key on the keyboard while pressing the power button, keep holding these keys until you see the recovery menu.
4.  Scroll down to "Wipe Data/Factory Reset", using the volume up/down keys. Select this option, using the camera button.
5.  When the process finishes, scroll to "Backup/Restore". Select this option.
6.  Next select "Advanced Nandroid Restore".
7.  Then select "Choose Backup", and select the "droidlifefroyo-BS-20100608-0521″ folder that you copied to your device earlier.
8.  Select "Perform Restore". This may take some time.
9.  When everything finishes, use the power button to return to the top menu.
10. Select "Reboot" from this menu.
11. Your phone may take longer than normal to boot this first time, and if all goes according to plan you should be running Android 2.2.
12. You may have reactivate your phone with Verizon's network and re-add your accounts, but it is well worth the new features of Froyo.

 [6]: http://www.megaupload.com/?d=5X0248JI