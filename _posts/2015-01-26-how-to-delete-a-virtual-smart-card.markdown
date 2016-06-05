---
layout: post
title: How to delete a Virtual Smart Card
date: '2015-01-26 08:00:00'
---

I recently got a new laptop at work and managed to royally screw up the enrollment process for my [Virtual Smart Card](https://technet.microsoft.com/en-us/library/dn593708.aspx). I ended up being left with a bunch of dead Virtual Smart Card entries and one working entry, which was very confusing when selecting a certificate to use for authentication. Deleting a Virtual Smart Card is not super intuitive, so I thought I'd share the process here.

Using the [Tpmvscmgr](https://technet.microsoft.com/en-us/Library/dn593707.aspx) utility in Windows, run the following command:

`tpmvscmgr destroy /instance ROOT\SMARTCARDREADER\000n`

Where `n` is the instance number of the Virtual Smart Card on your machine, in the order it was installed, starting with `0`.

Unfortunately there's know way (that I know of) to display a list of Virtual Smart Cards installed on your machine. So if you want to delete all of the entries, you'll have to run this command multiple times, incrementing `n` each time until you receive an error message indicating that the instance could not be found.