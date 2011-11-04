--- 
layout: post
title: Fix VirtualBox Guest Additions in Ubuntu 10.10
excerpt:
  I recently upgraded my Ubuntu 10.04 installation on VirtualBox to the Ubuntu 10.10 Beta. The upgrade process was pretty seamless, and I was able to do this unattended without any problems. From start to finish, it took about 10 minutes. However, after rebooting the VirtualBox machine, Guest Additions was not properly resizing the screen resolution. The problem is that the new xserver that is included in Ubuntu 10.10 is not supported by the previous installation of Guest Additions.
---
I recently upgraded my <a href="http://releases.ubuntu.com/lucid/" target="_blank">Ubuntu 10.04</a> installation on VirtualBox to the <a href="http://releases.ubuntu.com/maverick/" target="_blank">Ubuntu 10.10</a> Beta. The upgrade process was pretty seamless, and I was able to do this unattended without any problems. From start to finish, it took about 10 minutes. However, after rebooting the VirtualBox machine, Guest Additions was not properly resizing the screen resolution. The problem is that the new xserver that is included in Ubuntu 10.10 is not supported by the previous installation of Guest Additions.

To resolve this conflict, issue the following three commands from the terminal on the VirtualBox machine:

<div class="gist" id="627462"></div> 

After rebooting your VirtualBox installation, your machine should be resizing the window like normal. More information about this fix can be found <a href="http://www.unixmen.com/linux-tutorials/1157-install-guest-addition-in-ubuntu-1010-maverick-meerkat-fix" target="_blank">here</a>.
