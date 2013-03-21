---
title: Deploying an Application to AppHarbor in 10 Minutes
author: Matt
layout: post
permalink: /2011/03/deploying-an-application-to-appharbor-in-10-minutes/
categories:
  - Development
tags:
  - csharp
  - git
---
# 

A few weekends ago, I had an idea for a new project: as a [Netflix][1] user, I constantly forget to return my movies or forget to watch them in the first place. So I thought it would be cool to create a small web application that would email me in the event that my Netflix movie has been “at home” for a long time. I started digging through the [Netflix API][2] and found out that there was, in fact, a [service call][3] that returned a list of movies that I have at home and how long they’ve been there. With that, I began development on Returnflix.

 [1]: http://www.netflix.com/
 [2]: http://developer.netflix.com/
 [3]: http://developer.netflix.com/docs/REST_API_Reference#0_41310

The next thing I needed was a hosting provider. I told myself that I wanted to get back into the ASP.NET game, which is great, because I forgot how much I love .NET. The only downside is that hosting for ASP.NET applications is a little bit harder to come by. I remember hearing about [AppHarbor][4], a cloud computing service for ASP.NET that touts “Azure done right” as it’s slogan, and I had been meaning to give it a thorough trial, so this project was perfect.

 [4]: http://appharbor.com/

I wrote this application in C# on ASP.NET. It’s an extremely simple workflow: user visits the website, enters their email address where notifications will be sent to (since Netflix does not provide the user’s email from their API), and then they authenticate using their Netflix account over [OAuth][5]. When they are returned to my website, I stored their OAuth credentials in my database and that’s it!

 [5]: http://oauth.net/

The fun stuff takes place on the back-end. AppHarbor is still a [young service][6], and while they have established an initial [pricing model][7], some of the services they plan to offer are [not yet available][8]. One of those services happens to be [background workers][9], something that Returnflix needs. So I needed another way of accomplishing this. I did some research and stumbled onto a [great article][10] by [Jeff Atwood][11] on the [Stack Overflow][12] blog which talks about why I needed these background workers and details a “hack” of sorts on how to implement this using nothing but ASP.NET. It basically uses an event in the [ASP.NET application life-cycle][13] for cache expiration, `CacheItemRemoved`, and instead of handling this event the way it was [meant to be handled][14], I execute my notification methods instead. Every hour, I get a list of 5% of my users, check with Netflix to see if they have had a movie for more than 7 days, and if they have, I send them an email notification, then I store a time-stamp of their last execution, for performance reasons.

 [6]: http://blog.appharbor.com/2010/11/13/welcome-aboard
 [7]: http://appharbor.com/page/pricing
 [8]: http://blog.appharbor.com/2011/1/27/preliminary-pricing-page
 [9]: http://blog.appharbor.com/2011/1/20/handling-background-tasks
 [10]: http://blog.stackoverflow.com/2008/07/easy-background-tasks-in-aspnet/
 [11]: http://www.codinghorror.com/blog/
 [12]: http://stackoverflow.com/
 [13]: http://msdn.microsoft.com/en-us/library/ms178473.aspx
 [14]: http://weblogs.asp.net/kwarren/archive/2004/05/20/136129.aspx

So after a couple of hours of development and testing, my application was ready to go. I setup my account at AppHarbor and created a new application. Then I added a 20mb SQL Server [database][15], which I then synchronized with my local SQL Server instance, and added my `returnflix.com` hostname. I was then given a URL to a Git repository, which is how AppHarbor allows for continuous integration deployments and is pure genius. Being able to deploy an application simply by pushing to a Git repository is an innovation that I’m sure will be adopted by several companies in the future, but AppHarbor has got this down. Essentially, two lines of code got me up and running*:

 [15]: http://blog.appharbor.com/2010/12/06/now-with-sql-server



If you’re a Windows user running [msysGit][16], like myself, the code above may not have worked for you (hence the * from above). You probably received an error message along the lines of:

 [16]: http://code.google.com/p/msysgit/



A quick Google search lead me to this [blog post][17], which discussed why this was happening and gave the following fix:

 [17]: http://www.lostechies.com/blogs/dahlbyk/archive/2010/09/26/msysgit-error-setting-certificate-verify-locations.aspx



With that, I was able to run my `git push` and my application deployed to AppHarbor successfully! From the time my application was developed to the time I deployed it on AppHarbor was 10 minutes flat. AppHarbor completely eliminates what used to be a tedious process of finding a host, configuring it, updating your builds, etc. and just works. They certainly live up to their “Azure done right” tagline with a service that delivers, perfectly. You can find out more about AppHarbor [here][18] and you can check out this project on [GitHub][19] or at [Returnflix][20].

 [18]: http://www.appharbor.com
 [19]: http://github.com/mbmccormick/returnflix
 [20]: http://returnflix.com/