---
layout: post
title: 'Syncing Fitbit on Raspberry Pi with galileo'
comments: true
---

My brother gave me a [Raspberry Pi](http://www.raspberrypi.org/) for my birthday a few months ago and since then, I have been messing around with various projects, but hadn't found a permanent use for it. It's a great little device and is perfect for "internet of things" projects and other miscellaneous hacks. The other day I found the [galileo project](https://bitbucket.org/benallard/galileo), an open source Python binary for syncing [Fitbit](https://www.fitbit.com/) devices on any Linux platform. I decided to set it up on my Raspberry Pi so that my Fitbit would always sync when I am at home, without needing to leave my laptop on all the time.

The first thing you need to do is install a few Python dependencies and the actual galileo binary. Run the following command from your Raspberry Pi:

{% gist mbmccormick/95cd66b69c90ff2ee4eb %}

Next you will need to modify some permissions so that non-priviledged users can access the <a href="https://help.fitbit.com/articles/en_US/Help_article/What-is-the-wireless-sync-dongle-and-how-do-I-use-it/" target="_blank">Fitbit USB dongle</a> throughout the system. Create and add the following lines to `/etc/udev/rules.d/99-fitbit.rules`:

{% gist mbmccormick/35baac181b00bc2696ca %}

In order for that change to take effect, you will need to either remove and reinsert the Fitbit USB dongle or run `sudo service udev restart` to restart the udev service. Once that is done, add the following lines to your crontab by running `crontab -e`:

{% gist mbmccormick/e62e331543ce1e7f876b %}

This will configure your Raspberry Pi to run galileo every 2 minutes. galileo will scan for any nearby Fitbit devices and if it finds one and that Fitbit tracker has not synchronized in the last 15 minutes, then it will upload the data to the Fitbit website. The output of the galileo command is logged to `/home/pi/galileo.log` in case you want to check in and see how it is doing. That file is deleted every 24 hours to prevent it from eating up the limited disk space on your Raspberry Pi.

Special thanks to [Ben Allard](https://bitbucket.org/benallard) for developing the galileo project and to the [libfitbit community](https://github.com/openyou/libfitbit/issues/46) for getting the galileo project off the ground.
