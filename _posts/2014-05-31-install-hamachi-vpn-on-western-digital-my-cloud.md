---
layout: post
title: Install Hamachi VPN on Western Digital My Cloud
author: Matt
permalink: "/2014/05/install-hamachi-vpn-on-western-digital-my-cloud/"
categories: 
  - Tutorial
tags: 
  - hamachi
  - westerndigital
  - mycloud
  - linux
  - vpn
  - networking
  - hacking
published: true
---

***UPDATE:** The WD My Cloud device firmware versions 04.00.00 and later use a modified version of Debian Linux which uses 64K sized memory pages. In order to build Debian packages for use on a 64K page-size device, an "qemu-emulated native" build system is used, which contains the binutils package modified for 64K page-size alignment. As a result, the latest firmware has broken this guide. I am working on a fix, but in the mean time it is best to not upgrade your WD My Cloud device firmware.*

Recently, I bought a [Western Digital My Cloud](http://www.wdc.com/en/products/products.aspx?id=1140) network attached storage device to use for backing up our PCs and storing our photos. This is a fantastic device and comes with a bunch of great features. What's even better is that it runs Linux and SSH access can be easily enabled through the web-based control panel. This post will walk you through how to install the [Hamachi VPN](https://secure.logmein.com/products/hamachi/default.aspx) software on the WD My Cloud so that you can access your files from anywhere.

LogMeIn recently announced [Beta support](https://secure.logmein.com/labs/#HamachiforLinux) for the Linux distributions of their Hamachi software. We will make some slight modifications to that so that it works for the WD My Cloud. First, let's enable SSH on the device:

Navigate to `http://wdmycloud` in your web browser to access the device's control panel. From there click on Settings and the Network. Under Network Services, flip the switch to enable SSH access. By default, the username is `root` and the password is `welc0me`.

Next, login to your WD My Cloud via SSH using the credentials above. The WD My Cloud runs on an [ARM HF architecture](http://en.wikipedia.org/wiki/ARMhf). Download the latest version of the Hamachi software for Linux from the LogMeIn website using the following command:

{% gist mbmccormick/3c90ccd38ae673c7e85a %}

If that doesn't work for you, you can download the package on your local machine and copy it over via Windows Explorer.

Next, we need to extract the package and make a slight modification to the [install](https://github.com/mbmccormick/hamachi-wdmycloud/blob/master/install.sh) and [uninstall](https://github.com/mbmccormick/hamachi-wdmycloud/blob/master/uninstall.sh) scripts. Do that with the following commands:

{% gist mbmccormick/ef513f416d4392ed56e3 %}

The modified install and uninstall scripts that I created remove the dependency on the [LSB package](https://packages.debian.org/wheezy/lsb), which I couldn't manage to install on the WD My Cloud. It turns out that the only thing that Hamachi is using in the LSB package for is to [install](http://refspecs.linuxbase.org/LSB_1.2.0/gLSB/installinitd.html) the [init.d script](http://www.novell.com/documentation/suse91/suselinux-adminguide/html/ch13s04.html) so that the Hamachi daemon is started on boot. I managed to get around this by using [update-rc.d](http://www.tin.org/bin/man.cgi?section=8&topic=update-rc.d) instead and removing the checks to see if LSB is installed.

Next, run the modified install script to install Hamachi:

{% gist mbmccormick/21b71e25f6bf2f48c6fc %}

Hamachi should now be installed and you can bring it online, join networks, etc. using the `hamachi` command. The Hamachi daemon should be configured start and go online whenever the WD My Cloud reboots. You should now be able to access your WD My Cloud from any of the machines on your Hamachi networks!
