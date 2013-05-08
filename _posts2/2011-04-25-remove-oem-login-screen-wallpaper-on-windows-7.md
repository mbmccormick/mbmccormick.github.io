---
title: Remove OEM Login Screen Wallpaper on Windows 7
author: Matt
layout: post
permalink: /2011/04/remove-oem-login-screen-wallpaper-on-windows-7/
categories:
  - Miscellaneous
tags:
  - tutorial
---

If you follow me on [Twitter](http://twitter.com/mbmccormick), then I'm sure you're aware of my current [computer difficulties](http://twitter.com/mbmccormick/status/58600614942355456). Long story short, Dell sent someone out to replace my motherboard and hard drive and now I'm left with a fresh copy of Windows 7 that I need to restore to my working standards. One of those standards is removing the Dell wallpaper from the Windows 7 login screen. To do that, you just need to modify the following registry entry. Just change this [DWORD](http://en.wikipedia.org/wiki/Word_(computing)) value from `1` to `0`.

<script src="https://gist.github.com/mbmccormick/941666.js"> </script>
