---
layout: post
title: Flashing Windows Phone Mango (build 8107) onto HTC Mazaa
date: 2012-04-09 00:00
comments: true
categories: []
---
<p>If you follow me on Twitter, you may have noticed that my beloved <a href="http://www.htc.com/us/products/trophy-verizon/" target="_blank">HTC Trophy</a> and I went swimming in the Gulf of Mexico. I have been without a Windows Phone device ever since and what&rsquo;s worse, I was forced to use an Android device. Without getting into a heated post here, I&rsquo;ll just say that having to use an Android device after using a Windows Phone was absolute torture! Thankfully, <a href="http://twitter.com/benlower" target="_blank">Ben Lower</a> sent me a <a href="http://www.xda-developers.com/windows-mobile/xda-developers-exclusive-first-leaked-pics-of-htc-mazaa/" target="_blank">HTC Mazaa</a> to use last week.</p>

<p>The HTC Mazaa is nearly identical to the HTC Trophy, except it has a gyroscope sensor inside. The Mazaa was used by Microsoft internally for development by the Windows Phone team. As I had expected, my device came pre-installed with an older build of Windows Phone on it and some development &ldquo;zApps&rdquo; that Microsoft must have used internally. Because the HTC Mazaa was never released as a commercial device, it is not able to receive updates from Microsoft using Zune. This post will walk through how to manually flash a stock Windows Phone Mango ROM onto the HTC Mazaa and then update it to the latest 8107 build of Mango.</p>

<h3>Download Windows Phone Update Tool and FFU</h3>

<p>To begin, download this <a href="http://files.mbmccormick.com/HTC Mazaa - Stock Mango.zip" target="_blank">package</a> that I have created which includes the Windows Phone Update Tool and the HTC Mazaa FFU for Windows Phone Mango build 7720. Extract this package and then move the FFU file into the appropriate directory depending on your computer&rsquo;s architecture, either 32-bit or 64-bit.</p>

<p>You are now ready to flash Windows Phone Mango build 7720 onto your HTC Mazaa.</p>

<h3>Flash Windows Phone Mango build 7720</h3>

<p>Open up a command prompt in the directory you used in the last section, whichever folder matches your architecture. Connect your HTC Mazaa to your computer and close Zune after it opens. Issue the following command from the command prompt:</p>

<p><code>$ updatewp /ffu HTC Mazaa - Windows Phone 7720.ffu</code></p>

<p>The <code>updatewp</code> tool will reboot your device and apply the updates. It is important to note that this procedure will completely erase everything on your phone and install the new stock Windows Phone Mango build 7720 operating system to your device.</p>

<p>Once this process completes, you should have 7720 on your device. You are now ready to update your device to 8107.</p>

<h3>Update to Windows Phone build 8107</h3>

<p>Next, you need to download a series of CAB updates from Microsoft in order to get your device up to 8107. Here&rsquo;s the list of updates you need to download:</p>

<p><a href="http://download.windowsupdate.com/msdownload/update/software/dflt/2011/10/diff-7.10.7720.68-7.10.7740.16-armv7-retail-microsoft.pks_2cb1bfdd82133914239b8ee1a78e61e9000d124a.cab" target="_blank">diff-7.10.7720.68-7.10.7740.16-armv7-retail-microsoft.pks_2cb1bfdd82133914239b8ee1a78e61e9000d124a.cab</a></p>

<p><a href="http://download.windowsupdate.com/msdownload/update/software/dflt/2011/12/diff-7.10.7740.16-7.10.8107.79-armv7-retail-microsoft.pks_c9b7f3bc5bb340ba30473b566b4557de0cf3322e.cab" target="_blank">diff-7.10.7740.16-7.10.8107.79-armv7-retail-microsoft.pks_c9b7f3bc5bb340ba30473b566b4557de0cf3322e.cab</a></p>

<p><a href="http://download.windowsupdate.com/msdownload/update/software/dflt/2011/12/diff-7.10.7740.16-7.10.8107.79-armv7-retail-microsoft.lang_0409.pks_bfd9c047a7b27c28208c8a717f8d7511fb2586f1.cab" target="_blank">diff-7.10.7740.16-7.10.8107.79-armv7-retail-microsoft.lang_0409.pks_bfd9c047a7b27c28208c8a717f8d7511fb2586f1.cab</a></p>

<p>Move these files from wherever you downloaded them into the folder we were using in the previous sections. Then, issue the following commands to apply these updates to your device.</p>

<p><code>$ updatewp /iu diff-7.10.7720.68-7.10.7740.16-armv7-retail-microsoft.pks_2cb1bfdd82133914239b8ee1a78e61e9000d124a.cab</code></p>

<p><code>$ updatewp /iu diff-7.10.7740.16-7.10.8107.79-armv7-retail-microsoft.pks_c9b7f3bc5bb340ba30473b566b4557de0cf3322e.cab</code></p>

<p><code>$ updatewp /iu diff-7.10.7740.16-7.10.8107.79-armv7-retail-microsoft.lang_0409.pks_bfd9c047a7b27c28208c8a717f8d7511fb2586f1.cab</code></p>

<p>Your device will reboot when running each of these commands and it may take some time to complete. Once you finish installing these updates, your HTC Mazaa should be running Windows Phone Mango build 8107.</p>

<h3>Additional Information</h3>

<p>Credit for most of this information comes from the <a href="http://forum.xda-developers.com" target="_blank">xda-developers forum</a>. Here are some useful threads:</p>

<p><a href="http://forum.xda-developers.com/showthread.php?t=1306415" target="_blank">[CAB] Official WP7 Updates List: 7.10.8107 + ALL LANGUAGES complete + OEM updates</a></p>

<p><a href="http://forum.xda-developers.com/showthread.php?t=1447231 target="_blank">HTC Mazaa Stock ROM Mango [FFU]</a></p>
