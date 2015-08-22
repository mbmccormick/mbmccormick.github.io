---
layout: post
title: "Connect Your Google Cr-48 Laptop to PAL2.0 at Purdue"
---

If you're one of the lucky people at Purdue to have received a [Google Cr-48](http://www.google.com/chromeos/pilot-program-cr48.html) laptop like myself, then you may have realized that Chrome OS currently does not have support for WPA Enterprise wireless networks, the same protocol that Purdue uses to connect to PAL2.0\. Thanks to this [wiki post](https://wiki.utah.edu/confluence/display/~u0226271/UConnect+on+Chrome+OS) at the University of Utah, I have put together a working script with the necessary configurations to connect to PAL2.0 on your Google Cr-48.

In order for this to work, you will need to put your Cr-48 laptop into Developer Mode, which is detailed [here](http://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/cr-48-chrome-notebook-developer-information). Once you do that, launch the Crosh terminal by hitting CTRL + ALT + T and issue the following commands:

{% gist mbmccormick/811480 %}

My field tests have shown that after moving from HSSE to STEW (changing PAL2.0 access points), I did not need to re-execute the above commands. However, because these commands are stored in memory, I was required to re-execute the above commands in order to reconnect after a full reboot. Just going into standby, however, did not require me to re-execute.

Thanks to some help from [Nate Radebaugh](http://naterad.com/) with his [modifications](http://pastebin.com/3zhLb8qw) using the above configurations to the [scripting format](http://pastebin.com/G3ta4zsa) by [teraflop](http://www.reddit.com/user/teraflop) on [Reddit](http://www.reddit.com/r/CR48/comments/fcxhw/any_workarounds_for_wpa2_with_certificate/), I now have an automated script for the above commands, which can be [downloaded](http://pastebin.com/3zhLb8qw) to your Google Cr-48 laptop using the commands below from a fresh Crosh terminal:

{% gist mbmccormick/827025 %}

Once installed, you can run the script by opening up a Crosh terminal and executing:

{% gist mbmccormick/827049 %}

You'll then be prompted for your Purdue network login credentials and, upon successful authentication, be connected to PAL2.0.
