---
layout: post
title: Install CrashPlan on Western Digital My Cloud
author: Matt
permalink: "/2014/06/install-crashplan-on-western-digital-my-cloud/"
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
published: false
---

Recently, I bought a [Western Digital My Cloud](http://www.wdc.com/en/products/products.aspx?id=1140) network attached storage device to use for bacing up our PCs and storing our photos. This is a fantastic device and comes with a bunch of great features. What's even better is that it runs Linux and SSH access can be easily enabled through the web-based control panel. This post will walk you through how to install the [Hamachi VPN](https://secure.logmein.com/products/hamachi/default.aspx) software on the WD My Cloud so that you can access your files from anywhere.

LogMeIn recently announced [Beta support](https://secure.logmein.com/labs/#HamachiforLinux) for the Linux distributions of their Hamachi software. We will make some slight modifications to that so that it works for the WD My Cloud. First, let's enable SSH on the device:

Navigate to `http://wdmycloud` in your web browser to access the device's control panel. From there click on Settings and the Network. Under Network Services, flip the switch to enable SSH access. By default, the username is `root` and the password is `welc0me`.

Next, login to your WD My Cloud via SSH using the credentials above. Download the latest version of the CrashPlan software for Linux from the CrashPlan website using the following command:

{% gist mbmccormick/e282a46e1cfdad5cf3e9 %}

If that doesn't work for you, you can download the package on your local machine and copy it over via Windows Explorer.

Next, we need to extract the package. Do that with the following commands:

{% gist mbmccormick/a27710f85c38262806e0 %}

Before we can install CrashPlan, we need to install some pre-requisites. By default, the CrashPlan installer will check to make sure the Java Runtime Environment (JRE) is installed on your system and, if it isn't, install it for you. However, the version of the JRE that CrashPlan uses doesn't work well with the WD My Cloud. Instead, we'll install it manually from our package management system:

{% gist mbmccormick/ae3746a00f5873d12d44 %}

Now we can run the CrashPlan installer. Issue the following commands:

{% gist mbmccormick/698242350235bd567ee8 %}

When prompted, enter `/opt/crashplan` for the installation directory, `/usr/bin` for the linked executable directory, `/DataVolume/Temp/CrashPlan` for the backups directory, and accept the default for the SYSV init scripts directory. Continue following the installer until it completes.

Now there is one last modification we need to make to the CrashPlan installation. We need to replace the `libjtux.so` library with one that will work with our ARM system. Download and replace the `libjtux.so` file that we just installed with this new one:

{% gist mbmccormick/f3f9cdd21080fd73cd4c %}

CrashPlan should now be installed and online. For information about how to configure your new CrashPlan instance, follow steps on the CrashPlan website or the tutorial on Scott Hanselman's blog. Once you get everything configured, your WD My Cloud should be creating continuous off-site backups with CrashPlan!