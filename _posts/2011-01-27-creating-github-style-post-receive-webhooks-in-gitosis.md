---
layout: post
title: "Creating GitHub Style Post-Receive Webhooks in Gitosis"
---

As I mentioned in an [earlier blog post](http://mbmccormick.com/2010/12/rapid-application-development-with-limonade-and-php/), I've been working on the first product for my business. The tool that I'm writing is really geared toward helping freelance software developers keep track of their projects. No, this is not just another project management system, in fact, I don't even know that I would consider it project management software.

Anyway, I really wanted to integrate some aspects of my application with source control management systems like Git or SVN. [GitHub](http://github.com) has a great [API for interacting with external web applications](http://help.github.com/post-receive-hooks/) using their [Post-Receive Webhook](https://developer.github.com/webhooks/testing/) feature. Basically, whenever you push to GitHub, it will POST some data about your commit to some URL that you supply through a small JSON payload. Your web application can then use this data however it chooses. So, hypothetically, if you had a software package that helped certain freelance software developers keep track of their projects, which may or may not be stored in a git repository, you could see how useful this functionality could be.

Here's where it get's a bit interesting. These webhooks that GitHub provides are not exactly universal for all Git repositories. For example, I host my open-source projects on GitHub, so for the open-source projects that I manage with my software package, this is great! However, for my private repositories that I use for customer projects, I use a private installation of [Gitosis](http://eagain.net/gitweb/?p=gitosis.git). As a result, I don't have some of the luxuries that GitHub has. But what Gitosis does have is hook functionality, lot's of hook functionality. So to remedy this situation, I wrote a small post-receive hook for Gitosis that will POST the same data that GitHub does, using the same JSON format, to a URL of your choosing. The beauty of this is that it allows you to write one webhook for your application and use it with any Git repository, regardless of whether it is hosted on GitHub or on a private server.

If you've never written a hook for Gitosis before, it can be a bit tricky. There is very little documentation on this subject and it is really hard to debug your hook short of obliterating a temporary Git repository. Perhaps the biggest problem I ran into was reading the parameters that Gitosis passes to your hook about a given push. Initially, I had written my hook to use the standard Bash input parameters, like this:

{% gist mbmccormick/799680 %}

However, this does not read input from STDIN, which is where Gitosis sends its parameters to your hook. And in fact, unless you perform some read from STDIN, Gitosis will not even execute your hook. By modifying the way I was reading my input parameters, my hook started executing and I was in business, take a look:

{% gist mbmccormick/799682 %}

A huge thanks goes out to [Carson McDonald](https://github.com/carsonmcdonald) and his [blog post](http://www.ioncannon.net/system-administration/1362/example-git-pre-receive-and-post-receive-hooks-to-avoid-a-signal-13-error/) which detailed this little STDIN caveat with Gitosis. This had been driving me nuts for about three days and I was amazed that one line of code fixed this issue.

You can check out this project, [gitosis-webhook](https://github.com/mbmccormick/gitosis-webhook), on GitHub. It is licensed under the GPL version 3.0 and is yours to use in whatever crazy Git-integrating projects you might have going.
