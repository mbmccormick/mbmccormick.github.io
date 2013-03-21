---
title: Code Garage Sale
author: Matt
layout: post
permalink: /2012/10/code-garage-sale/
categories:
  - Projects
tags:
  - aspnet
  - csharp
  - github
  - hack
  - linux
  - open source
  - php
  - vpn
---
# 

I was browsing through some older articles on [Scott Hanselman’s blog][1] and I found one from a few years ago about something called a “[code garage sale][2]“. I won’t summarize the article here, but basically it talked about publishing old projects or code snippets so that other people could use it or maintain it. Scott talks about making sure that your code is complete, concise, clear, cheap, and quite possibly crap. There’s also a personal aspect to garage sales: this is stuff that I spent long hours late at night hacking away on. And I do that quite a bit. So I am having a garage sale! I figured I would highlight some of my older projects here and like most items at a [real garage sale][3], each of my projects has a story to go with it.

 [1]: http://www.hanselman.com/blog/
 [2]: http://www.hanselman.com/blog/GarageSalesAndGarageSaleQualityCode.aspx
 [3]: http://en.wikipedia.org/wiki/Garage_sale

Everything I create is [published on GitHub][4], so feel free to browse through any of my (at the time of writing) 49 public repositories. If you want to help maintain something, just [send me an email][5] and I would be more than happy to add you as a collaborator. All of the projects below are protected under some sort of license which you can find on the project’s homepage on GitHub. All sales are final and are provided as-is with no warranty. Happy garage sale-ing!

 [4]: https://github.com/mbmccormick
 [5]: http://mbmccormick.com/contact/

### Film Canistr

This was my first ever software application. I built this when I was a sophomore in high school on the .NET Framework 2.0. It’s a desktop application that runs in the background in your system tray and rotates your desktop wallpaper with images from Flickr. You can specify your search terms and have it run at startup. I even created a nifty installer for it. I was shocked when I pulled up the stats for this from it’s old Google Code home to find that my tool has had over 29,000 downloads.

Download it, fork it, or browse the [source code][6] on GitHub.

 [6]: https://github.com/mbmccormick/film-canistr

### Excel to SQL

This tool is another desktop application that let’s you create a SQL Server table using an Excel spreadsheet. You could create your columns and data in Excel and then this tool would generate and execute the SQL necessary to import this into your SQL Server database. I think I built this when I was working at Creative Logic Group, though I can’t remember what it was for. This uses the SQL Server Management Objects to talk to SQL Server and the OLEDB driver for talking to the Excel workbook.

Download it, fork it, or browse the [source code][7] on GitHub.

 [7]: https://github.com/mbmccormick/excel-to-sql

### Switchboard

Switchboard was a web application that I built when I first discovered the power of Twilio. This was an open-source call center application that would handle call routing to employees that were “clocked in”. It would route calls only to representatives that weren’t actively on a call, balancing the load among the employees, and putting callers in a hold queue when necessary. I used this project as an excuse to play around with Twilio.

Download it, fork it, or browse the [source code][8] on GitHub.

 [8]: https://github.com/mbmccormick/switchboard

### **Returnflix**

This application was one of my favorites because I had a simple problem and this service solved it. Do you ever rent a movie through Netflix and then forget to send it back? It would be weeks before I would remember to send it back and get my next DVD. So I built a service that would hook into your Netflix account and remind you a few days after you were sent a new movie to send it back. This was one of my first ASP.NET applications that I hosted on AppHarbor.

Download it, fork it, or browse the [source code][9] on GitHub.

 [9]: https://github.com/mbmccormick/returnflix

### hamachi-pogoplug

Hamachi is a distributed VPN service that makes it easy to create instant mesh networks. The company was acquired by LogMeIn a few years ago and I have been using it since it was in beta. The PogoPlug is a internet-connected storage adapter for USB devices. I picked one up on during a Wootoff two years ago and after I found out you could easily get root access to the device over SSH, I began hacking together an installation of Hamachi for this storage adapter. Surprisingly, this is still one of my more popular projects.

Download it, fork it, or browse the [source code][10] on GitHub.

 [10]: https://github.com/mbmccormick/hamachi-pogoplug

### gitosis-webhook

In this project, I created a web hook for Gitosis that would deliver a JSON payload to a URL that you specify every time you pushed to a Git repository on a Gitosis server. I modeled the payload off the web hooks that GitHub provides. I think I built this because at one point in time, I was building my own issue tracking system and I wanted some sort of Git integration for when a user pushed a commit and closed an issue using the commit message field. This is another project whose popularity surprised me.

Download it, fork it, or browse the [source code][11] on GitHub.

 [11]: https://github.com/mbmccormick/gitosis-webhook