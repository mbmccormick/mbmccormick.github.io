---
title: Fix VirtualBox Guest Additions in Ubuntu 10.10
author: Matt
layout: post
permalink: /2010/10/fix-virtualbox-guest-additions-in-ubuntu-10-10/
categories:
  - Miscellaneous
tags:
  - linux
  - tutorial
---

I recently upgraded my [Ubuntu 10.04](http://releases.ubuntu.com/lucid/) installation on VirtualBox to the [Ubuntu 10.10](http://releases.ubuntu.com/maverick/) Beta. The upgrade process was pretty seamless, and I was able to do this unattended without any problems. From start to finish, it took about 10 minutes. However, after rebooting the VirtualBox machine, Guest Additions was not properly resizing the screen resolution. The problem is that the new xserver that is included in Ubuntu 10.10 is not supported by the previous installation of Guest Additions.

To resolve this conflict, issue the following three commands from the terminal on the VirtualBox machine:

<script src="https://gist.github.com/mbmccormick/627462.js"> </script>

After rebooting your VirtualBox installation, your machine should be resizing the window like normal. More information about this fix can be found [here][3].

 [3]: http://www.unixmen.com/linux-tutorials/1157-install-guest-addition-in-ubuntu-1010-maverick-meerkat-fix
