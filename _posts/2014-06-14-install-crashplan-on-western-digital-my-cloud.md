---
layout: post
title: 'Install CrashPlan on Western Digital My Cloud'
comments: true
---

<i><b>UPDATE:</b> The WD My Cloud device firmware versions 04.00.00 and later use a modified version of Debian Linux which uses 64K sized memory pages. In order to build Debian packages for use on a 64K page-size device, an "qemu-emulated native" build system is used, which contains the binutils package modified for 64K page-size alignment. As a result, the latest firmware has broken this guide. I am working on a fix, but in the mean time it is best to not upgrade your WD My Cloud device firmware.</i>

Lately, I've been messing around with my new [Western Digital My Cloud](http://www.wdc.com/en/products/products.aspx?id=1140) network attached storage device to setup a seamless backups of my PCs and photos. I recently wrote about how to install the Hamachi VPN software on the device to enable secure, remote access. Today, I will discuss how to create continuous off-site backups of WD My Cloud using [CrashPlan](http://www.code42.com/crashplan/).

CrashPlan is a fantastic backup service and offers easy [off-site backups](http://www.code42.com/crashplan/features/backup-destinations/) for a very affordable price. If I ever need to restore my data, I can do so from their website or they'll [ship me a replacement hard drive](http://support.code42.com/CrashPlan/Latest/Restoring/Restore-To-Door_Overview) with all of my data on it. What's more is that they offer a cross-platform solution, available for Windows, Max, and Linux. I wanted to set this up on my WD My Cloud to backup our shared data and PC backups in the event of a hard drive failure. First, let's enable SSH on the device:

Navigate to `http://wdmycloud` in your web browser to access the device's control panel. From there click on Settings and the Network. Under Network Services, flip the switch to enable SSH access. By default, the username is `root` and the password is `welc0me`.

Next, login to your WD My Cloud via SSH using the credentials above. Download the latest version of the CrashPlan software for Linux from the CrashPlan website using the following command:

{% gist mbmccormick/e282a46e1cfdad5cf3e9 %}

If that doesn't work for you, you can download the package on your local machine and copy it over via Windows Explorer.

Next, we need to extract the package. Do that with the following command:

{% gist mbmccormick/a27710f85c38262806e0 %}

Before we can install CrashPlan, we need to install some pre-requisites. By default, the CrashPlan installer will check to make sure the Java Runtime Environment (JRE) is installed on your system and, if it isn't, install it for you. However, the version of the JRE that CrashPlan uses doesn't work well with the WD My Cloud. Instead, we'll install it manually from our package management system:

{% gist mbmccormick/ae3746a00f5873d12d44 %}

Now we can run the CrashPlan installer. Issue the following commands:

{% gist mbmccormick/698242350235bd567ee8 %}

When prompted, enter `/opt/crashplan` for the installation directory, `/usr/bin` for the linked executable directory, `/DataVolume/Temp/CrashPlan` for the backups directory, and accept the default for the SYSV init scripts directory and the runlevel init links directory. Continue following the installer until it completes.

Now there is one last modification we need to make to the CrashPlan installation. We need to replace the `libjtux.so` library with one that will work with our ARM system. Download and replace the `libjtux.so` file that we just installed with this new one:

{% gist mbmccormick/f3f9cdd21080fd73cd4c %}

CrashPlan should now be installed and online. For information about how to configure your new CrashPlan instance, follow the [headless configuration](http://support.code42.com/CrashPlan/Latest/Configuring/Configuring_A_Headless_Client) steps on the CrashPlan website or the [tutorial](http://www.hanselman.com/blog/UPDATED2014HowToSetupCrashPlanCloudBackupOnASynologyNASRunningDSM50.aspx) on Scott Hanselman's blog. Once you get everything configured, your WD My Cloud should be creating continuous off-site backups with CrashPlan!
