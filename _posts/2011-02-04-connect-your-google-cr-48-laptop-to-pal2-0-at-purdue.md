---
title: Connect Your Google Cr-48 Laptop to PAL2.0 at Purdue
author: Matt
layout: post
permalink: /2011/02/connect-your-google-cr-48-laptop-to-pal2-0-at-purdue/
categories:
  - Miscellaneous
tags:
  - chromeos
  - tutorial
---

If you're one of the lucky people at Purdue to have received a [Google Cr-48][1] laptop like myself, then you may have realized that Chrome OS currently does not have support for WPA Enterprise wireless networks, the same protocol that Purdue uses to connect to PAL2.0. Thanks to this [wiki post][2] at the University of Utah, I have put together a working script with the necessary configurations to connect to PAL2.0 on your Google Cr-48.

 [1]: http://www.google.com/chromeos/pilot-program-cr48.html
 [2]: https://wiki.utah.edu/confluence/display/~u0226271/UConnect on Chrome OS

In order for this to work, you will need to put your Cr-48 laptop into Developer Mode, which is detailed [here][3]. Once you do that, launch the Crosh terminal by hitting CTRL ALT T and issue the following commands:

 [3]: http://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/cr-48-chrome-notebook-developer-information



My field tests have shown that after moving from HSSE to STEW (changing PAL2.0 access points), I did not need to re-execute the above commands. However, because these commands are stored in memory, I was required to re-execute the above commands in order to reconnect after a full reboot. Just going into standby, however, did not require me to re-execute.

Thanks to some help from [Nate Radebaugh][4] with his [modifications][5] using the above configurations to the [scripting format][6] by [teraflop][7] on [Reddit][8], I now have an automated script for the above commands, which can be [downloaded][9] to your Google Cr-48 laptop using the commands below from a fresh Crosh terminal:

 [4]: http://naterad.com/
 [5]: http://pastebin.com/3zhLb8qw
 [6]: http://pastebin.com/G3ta4zsa
 [7]: http://www.reddit.com/user/teraflop
 [8]: http://www.reddit.com/r/CR48/comments/fcxhw/any_workarounds_for_wpa2_with_certificate/
 [9]: http://archive.mbmccormick/files/pal2.sh



Once installed, you can run the script by opening up a Crosh terminal and executing:



You'll then be prompted for your Purdue network login credentials and, upon successful authentication, be connected to PAL2.0.