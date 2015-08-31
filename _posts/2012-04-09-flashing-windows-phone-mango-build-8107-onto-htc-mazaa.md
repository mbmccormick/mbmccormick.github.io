---
layout: post
title: "Flashing Windows Phone Mango (build 8107) onto HTC Mazaa"
---

If you follow me on Twitter, you may have noticed that my beloved [HTC Trophy](http://www.htc.com/us/products/trophy-verizon/) and I went swimming in the Gulf of Mexico. I have been without a Windows Phone device ever since and what's worse, I was forced to use an Android device. Without getting into a heated post here, I'll just say that having to use an Android device after using a Windows Phone was absolute torture! Thankfully, [Ben Lower](http://twitter.com/benlower) sent me a [HTC Mazaa](http://www.xda-developers.com/windows-mobile/xda-developers-exclusive-first-leaked-pics-of-htc-mazaa/) to use last week.

The HTC Mazaa is nearly identical to the HTC Trophy, except it has a gyroscope sensor inside. The Mazaa was used by Microsoft internally for development by the Windows Phone team. As I had expected, my device came pre-installed with an older build of Windows Phone on it and some development "zApps" that Microsoft must have used internally. Because the HTC Mazaa was never released as a commercial device, it is not able to receive updates from Microsoft using Zune. This post will walk through how to manually flash a stock Windows Phone Mango ROM onto the HTC Mazaa and then update it to the latest 8107 build of Mango.

## Download Windows Phone Update Tool and FFU

To begin, download this [package](http://files.mbmccormick.com/HTC Mazaa - Stock Mango.zip) that I have created which includes the Windows Phone Update Tool and the HTC Mazaa FFU for Windows Phone Mango build 7720\. Extract this package and then move the FFU file into the appropriate directory depending on your computer's architecture, either 32-bit or 64-bit.

You are now ready to flash Windows Phone Mango build 7720 onto your HTC Mazaa.

## Flash Windows Phone Mango build 7720

Open up a command prompt in the directory you used in the last section, whichever folder matches your architecture. Connect your HTC Mazaa to your computer and close Zune after it opens. Issue the following command from the command prompt:

`$ updatewp /ffu HTC Mazaa - Windows Phone 7720.ffu`

The `updatewp` tool will reboot your device and apply the updates. It is important to note that this procedure will completely erase everything on your phone and install the new stock Windows Phone Mango build 7720 operating system to your device.

Once this process completes, you should have 7720 on your device. You are now ready to update your device to 8107.

## Update to Windows Phone build 8107

Next, you need to download a series of CAB updates from Microsoft in order to get your device up to 8107. Here's the list of updates you need to download:

[diff-7.10.7720.68-7.10.7740.16-armv7-retail-microsoft.pks_2cb1bfdd82133914239b8ee1a78e61e9000d124a.cab](http://download.windowsupdate.com/msdownload/update/software/dflt/2011/10/diff-7.10.7720.68-7.10.7740.16-armv7-retail-microsoft.pks_2cb1bfdd82133914239b8ee1a78e61e9000d124a.cab)

[diff-7.10.7740.16-7.10.8107.79-armv7-retail-microsoft.pks_c9b7f3bc5bb340ba30473b566b4557de0cf3322e.cab](http://download.windowsupdate.com/msdownload/update/software/dflt/2011/12/diff-7.10.7740.16-7.10.8107.79-armv7-retail-microsoft.pks_c9b7f3bc5bb340ba30473b566b4557de0cf3322e.cab)

[diff-7.10.7740.16-7.10.8107.79-armv7-retail-microsoft.lang_0409.pks_bfd9c047a7b27c28208c8a717f8d7511fb2586f1.cab](http://download.windowsupdate.com/msdownload/update/software/dflt/2011/12/diff-7.10.7740.16-7.10.8107.79-armv7-retail-microsoft.lang_0409.pks_bfd9c047a7b27c28208c8a717f8d7511fb2586f1.cab)

Move these files from wherever you downloaded them into the folder we were using in the previous sections. Then, issue the following commands to apply these updates to your device.

`$ updatewp /iu diff-7.10.7720.68-7.10.7740.16-armv7-retail-microsoft.pks_2cb1bfdd82133914239b8ee1a78e61e9000d124a.cab`

`$ updatewp /iu diff-7.10.7740.16-7.10.8107.79-armv7-retail-microsoft.pks_c9b7f3bc5bb340ba30473b566b4557de0cf3322e.cab`

`$ updatewp /iu diff-7.10.7740.16-7.10.8107.79-armv7-retail-microsoft.lang_0409.pks_bfd9c047a7b27c28208c8a717f8d7511fb2586f1.cab`

Your device will reboot when running each of these commands and it may take some time to complete. Once you finish installing these updates, your HTC Mazaa should be running Windows Phone Mango build 8107.


## Additional Information

Credit for most of this information comes from the [xda-developers forum](http://forum.xda-developers.com). Here are some useful threads:

[[CAB] Official WP7 Updates List: 7.10.8107 + ALL LANGUAGES complete + OEM updates](http://forum.xda-developers.com/showthread.php?t=1306415)

[HTC Mazaa Stock ROM Mango [FFU]](http://forum.xda-developers.com/showthread.php?t=1447231)
