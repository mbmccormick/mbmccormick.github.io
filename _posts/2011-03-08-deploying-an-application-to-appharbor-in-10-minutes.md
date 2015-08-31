---
layout: post
title: "Deploying an Application to AppHarbor in 10 Minutes"
---

A few weekends ago, I had an idea for a new project: as a [Netflix](http://www.netflix.com/) user, I constantly forget to return my movies or forget to watch them in the first place. So I thought it would be cool to create a small web application that would email me in the event that my Netflix movie has been "at home" for a long time. I started digging through the [Netflix API](http://developer.netflix.com/) and found out that there was, in fact, a [service call](http://developer.netflix.com/docs/REST_API_Reference#0_41310) that returned a list of movies that I have at home and how long they've been there. With that, I began development on Returnflix.

The next thing I needed was a hosting provider. I told myself that I wanted to get back into the ASP.NET game, which is great, because I forgot how much I love .NET. The only downside is that hosting for ASP.NET applications is a little bit harder to come by. I remember hearing about [AppHarbor](http://appharbor.com/), a cloud computing service for ASP.NET that touts "Azure done right" as it's slogan, and I had been meaning to give it a thorough trial, so this project was perfect.

I wrote this application in C# on ASP.NET. It's an extremely simple workflow: user visits the website, enters their email address where notifications will be sent to (since Netflix does not provide the user's email from their API), and then they authenticate using their Netflix account over [OAuth](http://oauth.net/). When they are returned to my website, I stored their OAuth credentials in my database and that's it!

The fun stuff takes place on the back-end. AppHarbor is still a [young service](http://blog.appharbor.com/2010/11/13/welcome-aboard), and while they have established an initial [pricing model](http://appharbor.com/page/pricing), some of the services they plan to offer are [not yet available](http://blog.appharbor.com/2011/1/27/preliminary-pricing-page). One of those services happens to be [background workers](http://blog.appharbor.com/2011/1/20/handling-background-tasks), something that Returnflix needs. So I needed another way of accomplishing this. I did some research and stumbled onto a [great article](http://blog.stackoverflow.com/2008/07/easy-background-tasks-in-aspnet/) by [Jeff Atwood](http://www.codinghorror.com/blog/) on the [Stack Overflow](http://stackoverflow.com/) blog which talks about why I needed these background workers and details a "hack" of sorts on how to implement this using nothing but ASP.NET. It basically uses an event in the [ASP.NET application life-cycle](http://msdn.microsoft.com/en-us/library/ms178473.aspx) for cache expiration, `CacheItemRemoved`, and instead of handling this event the way it was [meant to be handled](http://weblogs.asp.net/kwarren/archive/2004/05/20/136129.aspx), I execute my notification methods instead. Every hour, I get a list of 5% of my users, check with Netflix to see if they have had a movie for more than 7 days, and if they have, I send them an email notification, then I store a time-stamp of their last execution, for performance reasons.

So after a couple of hours of development and testing, my application was ready to go. I setup my account at AppHarbor and created a new application. Then I added a 20mb SQL Server [database](http://blog.appharbor.com/2010/12/06/now-with-sql-server), which I then synchronized with my local SQL Server instance, and added my `returnflix.com` hostname. I was then given a URL to a Git repository, which is how AppHarbor allows for continuous integration deployments and is pure genius. Being able to deploy an application simply by pushing to a Git repository is an innovation that I'm sure will be adopted by several companies in the future, but AppHarbor has got this down. Essentially, two lines of code got me up and running*:

{% gist 860286 %}

If you're a Windows user running [msysGit](http://code.google.com/p/msysgit/), like myself, the code above may not have worked for you (hence the * from above). You probably received an error message along the lines of:

{% gist 860293 %}

A quick Google search lead me to this [blog post](http://www.lostechies.com/blogs/dahlbyk/archive/2010/09/26/msysgit-error-setting-certificate-verify-locations.aspx), which discussed why this was happening and gave the following fix:

{% gist 860295 %}

With that, I was able to run my `git push` and my application deployed to AppHarbor successfully! From the time my application was developed to the time I deployed it on AppHarbor was 10 minutes flat. AppHarbor completely eliminates what used to be a tedious process of finding a host, configuring it, updating your builds, etc. and just works. They certainly live up to their "Azure done right" tagline with a service that delivers, perfectly. You can find out more about AppHarbor [here](http://www.appharbor.com) and you can check out this project on [GitHub](http://github.com/mbmccormick/returnflix).
