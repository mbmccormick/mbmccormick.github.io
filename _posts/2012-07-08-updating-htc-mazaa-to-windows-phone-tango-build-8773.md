---
layout: post
title: "Updating HTC Mazaa to Windows Phone \"Tango\" (build 8773)"
---

Microsoft recently released the Windows Phone "Tango" update for all Windows Phone devices. If you read my [previous post](http://mbmccormick.com/2012/04/flashing-windows-phone-mango-build-8107-onto-htc-mazaa/), you'll understand why I am using the HTC Mazaa and some of the challenges I have faced with this non-commercial device. Long story short, the Mazaa is not able to receive updates from Microsoft using Zune. This post will walk through how to manually update the Mazaa to the latest 8773 build of Windows Phone, known as "Tango".

### Download Windows Phone Update Tool

To begin, download this [package](http://files.mbmccormick.com/Windows Phone Update Tool.zip) that I have created which includes the Windows Phone Update Tool. Extract this package and open up the appropriate directory depending on your computer’s architecture, either 32-bit or 64-bit.

You are now ready to install the Windows Phone "Tango" build 8773 updates onto your HTC Mazaa.

### Update to Windows Phone build 8773

Next, you need to download a series of CAB updates from Microsoft in order to get your device up to 8773\. Here’s the list of updates you need to download:

[diff-7.10.8107.79-7.10.8112.7-armv7-retail-microsoft-pluspkr.pks_d500a10eeb11fb6c1913adac4759d67185474d3e.cab](http://download.windowsupdate.com/msdownload/update/software/dflt/2012/05/diff-7.10.8107.79-7.10.8112.7-armv7-retail-microsoft-pluspkr.pks_d500a10eeb11fb6c1913adac4759d67185474d3e.cab)

[diff-7.10.8107.79-7.10.8112.7-armv7-retail-microsoft.lang_0409.pks_ae068921fd637ba2e3e268b28e6ca1c9f3a9c11f.cab](http://download.windowsupdate.com/msdownload/update/software/dflt/2012/03/diff-7.10.8107.79-7.10.8112.7-armv7-retail-microsoft.lang_0409.pks_ae068921fd637ba2e3e268b28e6ca1c9f3a9c11f.cab)

[diff-7.10.8112.7-7.10.8773.98-armv7-retail-microsoft.pks_113460c78ac6233e3bb776ceddb6ac94e98c4221.cab](http://download.windowsupdate.com/msdownload/update/software/dflt/2012/05/diff-7.10.8112.7-7.10.8773.98-armv7-retail-microsoft.pks_113460c78ac6233e3bb776ceddb6ac94e98c4221.cab)

[diff-7.10.8112.7-7.10.8773.98-armv7-retail-microsoft.lang_0409.pks_3e940c840ee4815422610bb6da8f28ac327767cc.cab](http://download.windowsupdate.com/msdownload/update/software/dflt/2012/05/diff-7.10.8112.7-7.10.8773.98-armv7-retail-microsoft.lang_0409.pks_3e940c840ee4815422610bb6da8f28ac327767cc.cab)

Move these files from wherever you downloaded them into the folder we were using in the previous sections. Then, issue the following commands to apply these updates to your device.

`$ updatewp /iu diff-7.10.8107.79-7.10.8112.7-armv7-retail-microsoft-pluspkr.pks_d500a10eeb11fb6c1913adac4759d67185474d3e.cab diff-7.10.8107.79-7.10.8112.7-armv7-retail-microsoft.lang_0409.pks_ae068921fd637ba2e3e268b28e6ca1c9f3a9c11f.cab`

`$ updatewp /iu diff-7.10.8112.7-7.10.8773.98-armv7-retail-microsoft.pks_113460c78ac6233e3bb776ceddb6ac94e98c4221.cab diff-7.10.8112.7-7.10.8773.98-armv7-retail-microsoft.lang_0409.pks_3e940c840ee4815422610bb6da8f28ac327767cc.cab`

Your device will reboot when running each of these commands and it may take some time to complete. Once you finish installing these updates, your HTC Mazaa should be running Windows Phone "Tango" build 8773.

### Additional Information

Credit for most of this information comes from the [xda-developers forum](http://forum.xda-developers.com). Here are some useful threads:

[[CAB] Official WP7 Updates List: 7.10.8107 + ALL LANGUAGES complete + OEM updates](http://forum.xda-developers.com/showthread.php?t=1306415)
