---
title: Recovering From the WordPress White Screen of Death
author: Matt
layout: post
permalink: /2010/11/recovering-from-the-wordpress-white-screen-of-death/
categories:
  - Miscellaneous
tags:
  - tutorial
---
# 

At some point in your tenure with WordPress, you may be faced with the “white screen of death” from time to time. Over the weekend I was updating a plugin on this blog and something, somewhere went wrong. WordPress was unresponsive and I couldn’t get to my website or the administration panel, it was as if my website never existed. Initially, I was intimidated by the utter size of WordPress and didn’t know where to begin debugging this problem. I decided to see if I could disable the plugin that I was trying to upgrade from the backend, in the database. I fired up phpMyAdmin and opened up the `wp_options` table. I then found a record called `active_plugins`. Here’s an example of my website’s `option_value` cell:



I copied the contents of this record’s `option_value` cell to my desktop as a backup. I then deleted the contents of this cell, so that WordPress would disable all plugins on my blog. When I reloaded my website, I was back in business! I then reinstalled the out-dated plugin manually and reactivated my other plugins.