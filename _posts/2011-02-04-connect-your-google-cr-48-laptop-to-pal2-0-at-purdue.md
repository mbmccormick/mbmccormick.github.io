--- 
layout: post
title: Connect Your Google Cr-48 Laptop to PAL2.0 at Purdue
excerpt:
  If you're one of the lucky people at Purdue to have received a Google Cr-48 laptop like myself, then you may have realized that Chrome OS currently does not have support for WPA Enterprise wireless networks, the same protocol that Purdue uses to connect to PAL2.0. Thanks to this wiki post at the University of Utah, I have put together a working script with the necessary configurations to connect to PAL2.0 on your Google Cr-48.
---
If you're one of the lucky people at Purdue to have received a <a href="http://www.google.com/chromeos/pilot-program-cr48.html" target="_blank">Google Cr-48</a> laptop like myself, then you may have realized that Chrome OS currently does not have support for WPA Enterprise wireless networks, the same protocol that Purdue uses to connect to PAL2.0. Thanks to this <a href="https://wiki.utah.edu/confluence/display/~u0226271/UConnect+on+Chrome+OS" target="_blank">wiki post</a> at the University of Utah, I have put together a working script with the necessary configurations to connect to PAL2.0 on your Google Cr-48.

In order for this to work, you will need to put your Cr-48 laptop into Developer Mode, which is detailed <a href="http://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/cr-48-chrome-notebook-developer-information" target="_blank">here</a>. Once you do that, launch the Crosh terminal by hitting CTRL + ALT + T and issue the following commands:

<script src="https://gist.github.com/811480.js"> </script> 

My field tests have shown that after moving from HSSE to STEW (changing PAL2.0 access points), I did not need to re-execute the above commands. However, because these commands are stored in memory, I was required to re-execute the above commands in order to reconnect after a full reboot. Just going into standby, however, did not require me to re-execute.

Thanks to some help from <a href="http://naterad.com/" target="_blank">Nate Radebaugh</a> with his <a href="http://pastebin.com/3zhLb8qw" target="_blank">modifications</a> using the above configurations to the <a href="http://pastebin.com/G3ta4zsa" target="_blank">scripting format</a> by <a href="http://www.reddit.com/user/teraflop" target="_blank">teraflop</a> on <a href="http://www.reddit.com/r/CR48/comments/fcxhw/any_workarounds_for_wpa2_with_certificate/" target="_blank">Reddit</a>, I now have an automated script for the above commands, which can be <a href="http://mbmccormick/files/pal2.sh" target="_blank">downloaded</a> to your Google Cr-48 laptop using the commands below from a fresh Crosh terminal:

<script src="https://gist.github.com/827025.js"> </script> 

Once installed, you can run the script by opening up a Crosh terminal and executing:

<script src="https://gist.github.com/827049.js"> </script> 

You'll then be prompted for your Purdue network login credentials and, upon successful authentication, be connected to PAL2.0.
