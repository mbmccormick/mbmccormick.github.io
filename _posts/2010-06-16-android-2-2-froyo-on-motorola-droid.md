---
layout: post
title: Android 2.2 Froyo on Motorola Droid
date: 2010-06-16 00:00
comments: true
categories: []
---
<p>After I couldn't stand not having Froyo on my Motorola Droid, I finally gave in. I decided it was time to upgrade after seeing this blog <a href="http://www.droid-life.com/2010/06/08/download-newer-motorola-droid-froyo-leak-frf57/" target="_blank">post</a>, indicating that a very stable port of Android 2.2 was available for the Droid. This post will walk through the process of going from stock Android 2.1, without root, to Android 2.2, with root. Fasten your seat belts, as this is somewhat of a bumpy ride. Let's begin&amp;hellip;</p>

<p>First, you need to flash a new recovery system (SPRecovery) onto your device. To do that, we're going to be using some tools that Motorola uses to install software onto your phone. Here's what you do:</p>

<ol>
    <li>Download the SPRecovery <a href="http://www.mediafire.com/?jgt1gjgx5gv" target="_blank">file</a>.</li>
    <li>Download and install the Motorola USB drivers to your PC, for either <a href="http://direct.motorola.com/hellomoto/Common/Drivers%20and%20Plug%20ins/USB_Drivers_32_bit_4.2.0.zip" target="_blank">32-bit</a> or <a href="http://direct.motorola.com/hellomoto/Common/Drivers%20and%20Plug%20ins/USB_Drivers_64_bit_4.2.0.zip" target="_blank">64-bit</a>.</li>
    <li>Download and install RSD Lite 4.6 from <a href="http://www.megaupload.com/?d=HBOOU08Y" target="_blank">here</a>.</li>
    <li>Connect your phone to your PC, and power it off.</li>
    <li>Open RSD Lite as an Administrator.</li>
    <li>Slide open the keyboard on your Motorola Droid and, while holding the "up" key on the D-pad, press and hold the power button for 5 seconds. You should see a blank screen with some white text on it. This is the boot loader.</li>
    <li>Click the "..." next to the file name box in RSD Lite and select the SPRecovery SBF file that you downloaded earlier.</li>
    <li>Click "Start" to begin the flashing process. This should not take very long.</li>
    <li>Your phone should reboot and RSD Lite should indicate that the process is complete.</li>
    <li>Power off your phone.</li>
</ol>


<p>Next, we need to install the ported Android 2.2 software to your device. We simply need to copy this software to your phone's microSD card and reboot into the newly-flashed recovery system and install this. Here's what to do:</p>

<ol>
    <li>Download the ported Android 2.2 software from <a href="http://www.megaupload.com/?d=5X0248JI" target="_blank">here</a>.</li>
    <li>Unzip the archive and copy that folder to the "/nandroid" folder on your phone's microSD card.</li>
    <li>Next, we need to reboot your phone in recovery mode. To do this, hold the "x" key on the keyboard while pressing the power button, keep holding these keys until you see the recovery menu.</li>
    <li>Scroll down to "Wipe Data/Factory Reset", using the volume up/down keys. Select this option, using the camera button.</li>
    <li>When the process finishes, scroll to "Backup/Restore". Select this option.</li>
    <li>Next select "Advanced Nandroid Restore".</li>
    <li>Then select "Choose Backup", and select the "droidlifefroyo-BS-20100608-0521" folder that you copied to your device earlier.</li>
    <li>Select "Perform Restore". This may take some time.</li>
    <li>When everything finishes, use the power button to return to the top menu.</li>
    <li>Select "Reboot" from this menu.</li>
    <li>Your phone may take longer than normal to boot this first time, and if all goes according to plan you should be running Android 2.2.</li>
    <li>You may have reactivate your phone with Verizon's network and re-add your accounts, but it is well worth the new features of Froyo.</li>
</ol>
