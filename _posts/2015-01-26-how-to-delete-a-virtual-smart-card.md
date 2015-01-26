---
layout: post
title: 'How to delete a Virtual Smart Card'
author: Matt
permalink: /2015/01/how-to-delete-a-virtual-smart-card/
categories:
  - Tutorial
tags:
  - windows
  - security
  - authentication
  - enterprise
  - tpm
---

Over the holidays I had reformatted my work laptop to start the year anew with a clean machine. Part of that process involved setting up my [Virtual Smart Card][1] so that I could access our corporate network without needing to have my physical [Smart Card][2] with me, thanks to the [Trusted Platform Module (TPM)][3] in my laptop. Unfortunately, I maanged to screw up the enrollment process and it left me with a bunch of dead Virtual Smart Cards installed on my machine. Figuring out how to remove these dead entries was more difficult than it should have been.

Fortunately, you can do this using the [tpmvscmgr.exe][4] utility. Here's how to remove a Virtual Smart Card from your Windows machine:

```
tpmvscmgr destroy /instance ROOT\SMARTCARDREADER\000n
```

Where `n` is the instance number of the Virtual Smart Card on your machine, in the order it was installed, starting with 0. If you just want to delete all of the Virtual Smart Cards on your machine, you can run this command multiple times, iterating `n` each time, until you receive an error message indicating that the instance could not be found.

 [1]: https://technet.microsoft.com/en-us/library/dn593708.aspx
 [2]: http://en.wikipedia.org/wiki/Smart_card
 [3]: http://en.wikipedia.org/wiki/Trusted_Platform_Module
 [4]: https://technet.microsoft.com/en-us/Library/dn593707.aspx
