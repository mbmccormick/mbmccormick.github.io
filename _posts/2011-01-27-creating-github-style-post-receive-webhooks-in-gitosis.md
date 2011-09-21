--- 
layout: post
title: Creating GitHub Style Post-Receive Webhooks in Gitosis
published: true
meta: 
  aktt_notify_twitter: "yes"
  _edit_last: "1"
  _efficient_related_posts: "a:6:{i:0;a:4:{s:2:\"ID\";s:2:\"48\";s:10:\"post_title\";s:65:\"The Subversion Fanboy\xE2\x80\x99s Guide to Git, Part 2: Pushing to GitHub\";s:7:\"matches\";s:1:\"4\";s:9:\"permalink\";s:101:\"http://mbmccormick.com/2010/09/the-subversion-fanboy%e2%80%99s-guide-to-git-part-2-pushing-to-github/\";}i:1;a:4:{s:2:\"ID\";s:2:\"43\";s:10:\"post_title\";s:63:\"The Subversion Fanboy's Guide to Git, Part 1: Why Git is Better\";s:7:\"matches\";s:1:\"4\";s:9:\"permalink\";s:92:\"http://mbmccormick.com/2010/08/the-subversion-fanboys-guide-to-git-part-1-why-git-is-better/\";}i:2;a:4:{s:2:\"ID\";s:2:\"83\";s:10:\"post_title\";s:51:\"Deploying an Application to AppHarbor in 10 Minutes\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:83:\"http://mbmccormick.com/2011/03/deploying-an-application-to-appharbor-in-10-minutes/\";}i:3;a:4:{s:2:\"ID\";s:2:\"87\";s:10:\"post_title\";s:55:\"How I Launched 4sqtransit in Two Weeks on Windows Azure\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:87:\"http://mbmccormick.com/2011/04/how-i-launched-4sqtransit-in-two-weeks-on-windows-azure/\";}i:4;a:4:{s:2:\"ID\";s:2:\"59\";s:10:\"post_title\";s:48:\"How To Geolocate Users by IP Address or Zip Code\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:80:\"http://mbmccormick.com/2010/10/how-to-geolocate-users-by-ip-address-or-zip-code/\";}i:5;a:4:{s:2:\"ID\";s:2:\"67\";s:10:\"post_title\";s:41:\"How To Remove PHP Extensions From Website\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:73:\"http://mbmccormick.com/2010/09/how-to-remove-php-extensions-from-website/\";}}"
  _wp_old_slug: ""
  aktt_tweeted: "1"
  _relation_threshold: "2"
tags: 
- api
- Development
- git
- Hacking
- linux
- Projects
- server
- ssh
type: post
status: publish
---
As I mentioned in an <a href="http://mbmccormick.com/2010/12/rapid-application-development-with-limonade-and-php/" target="_blank">earlier blog post</a>, I've been working on the first product for my business. The tool that I'm writing is really geared toward helping freelance software developers keep track of their projects. No, this is not just another project management system, in fact, I don't even know that I would consider it project management software.

Anyway, I really wanted to integrate some aspects of my application with source control management systems like Git or SVN. <a href="http://github.com" target="_blank">GitHub</a> has a great <a href="http://help.github.com/post-receive-hooks/" target="_blank">API for interacting with external web applications</a> using their <a href="http://help.github.com/testing-webhooks/" target="_blank">Post-Receive Webhook</a> feature. Basically, whenever you push to GitHub, it will POST some data about your commit to some URL that you supply through a small JSON payload. Your web application can then use this data however it chooses. So, hypothetically, if you had a software package that helped certain freelance software developers keep track of their projects, which may or may not be stored in a git repository, you could see how useful this functionality could be.

Here's where it get's a bit interesting. These webhooks that GitHub provides are not exactly universal for all Git repositories. For example, I host my open-source projects on GitHub, so for the open-source projects that I manage with my software package, this is great! However, for my private repositories that I use for customer projects, I use a private installation of <a href="http://eagain.net/gitweb/?p=gitosis.git" target="_blank">Gitosis</a>. As a result, I don't have some of the luxuries that GitHub has. But what Gitosis does have is hook functionality, lot's of hook functionality. So to remedy this situation, I wrote a small post-receive hook for Gitosis that will POST the same data that GitHub does, using the same JSON format, to a URL of your choosing. The beauty of this is that it allows you to write one webhook for your application and use it with any Git repository, regardless of whether it is hosted on GitHub or on a private server.

If you've never written a hook for Gitosis before, it can be a bit tricky. There is very little documentation on this subject and it is really hard to debug your hook short of obliterating a temporary Git repository. Perhaps the biggest problem I ran into was reading the parameters that Gitosis passes to your hook about a given push. Initially, I had written my hook to use the standard Bash input parameters, like this:

[gist id=799680]

However, this does not read input from STDIN, which is where Gitosis sends its parameters to your hook. And in fact, unless you perform some read from STDIN, Gitosis will not even execute your hook. By modifying the way I was reading my input parameters, my hook started executing and I was in business, take a look:

[gist id=799682]

A huge thanks goes out to <a href="https://github.com/carsonmcdonald" target="_blank">Carson McDonald</a> and his <a href="http://www.ioncannon.net/system-administration/1362/example-git-pre-receive-and-post-receive-hooks-to-avoid-a-signal-13-error/" target="_blank">blog post</a> which detailed this little STDIN caveat with Gitosis. This had been driving me nuts for about three days and I was amazed that one line of code fixed this issue.

You can check out this project, <a href="https://github.com/mbmccormick/gitosis-webhook" target="_blank">gitosis-webhook</a>, on GitHub. It is licensed under the GPL version 3.0 and is yours to use in whatever crazy Git-integrating projects you might have going.
