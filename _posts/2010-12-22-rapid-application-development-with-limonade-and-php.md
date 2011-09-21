--- 
layout: post
title: Rapid Application Development with Limonade and PHP
published: true
meta: 
  aktt_notify_twitter: "yes"
  _edit_last: "1"
  _efficient_related_posts: a:6:{i:0;a:4:{s:2:"ID";s:2:"67";s:10:"post_title";s:41:"How To Remove PHP Extensions From Website";s:7:"matches";s:1:"2";s:9:"permalink";s:73:"http://mbmccormick.com/2010/09/how-to-remove-php-extensions-from-website/";}i:1;a:4:{s:2:"ID";s:3:"161";s:10:"post_title";s:42:"Bulk INSERT to SQL Azure using LINQ to SQL";s:7:"matches";s:1:"1";s:9:"permalink";s:74:"http://mbmccormick.com/2011/09/bulk-insert-to-sql-azure-using-linq-to-sql/";}i:2;a:4:{s:2:"ID";s:2:"98";s:10:"post_title";s:27:"Getting Ready for Microsoft";s:7:"matches";s:1:"1";s:9:"permalink";s:59:"http://mbmccormick.com/2011/05/getting-ready-for-microsoft/";}i:3;a:4:{s:2:"ID";s:2:"95";s:10:"post_title";s:34:"Enable Apple AirPrint on Windows 7";s:7:"matches";s:1:"1";s:9:"permalink";s:66:"http://mbmccormick.com/2011/04/enable-apple-airprint-on-windows-7/";}i:4;a:4:{s:2:"ID";s:2:"87";s:10:"post_title";s:55:"How I Launched 4sqtransit in Two Weeks on Windows Azure";s:7:"matches";s:1:"1";s:9:"permalink";s:87:"http://mbmccormick.com/2011/04/how-i-launched-4sqtransit-in-two-weeks-on-windows-azure/";}i:5;a:4:{s:2:"ID";s:2:"83";s:10:"post_title";s:51:"Deploying an Application to AppHarbor in 10 Minutes";s:7:"matches";s:1:"1";s:9:"permalink";s:83:"http://mbmccormick.com/2011/03/deploying-an-application-to-appharbor-in-10-minutes/";}}
  _wp_old_slug: application-development-with-limonade-and-php
  aktt_tweeted: "1"
  _relation_threshold: "1"
tags: 
- Development
- mvc
- php
- Projects
- server
- tutorial
type: post
status: publish
---
Recently, I've been working on the first product for McCormick Technologies (more information about that to come). My application started out as a very simple utility that I was using for internal workflows and over the past couple of months the feature set has really grown. I decided that it was time to move to a MVC framework to keep the application organized and reduce duplicate code. So I began searching for a light-weight MVC framework for PHP, or "micro-framework" as it's called.

I read through several different forum threads and blog posts, and most people talked about a framework called <a href="http://www.sinatrarb.com/" target="_blank">Sinatra</a> for Ruby. I decided to look at what Sinatra had to offer to get a better idea of what I was looking for. The nice thing about Sinatra is that it essentially is a URL-rewriting framework with views and controllers, without the models. At first I was concerned about not having this feature, but after looking at the code examples that Sinatra had on it's website, I was reassured.

So I did some more research and found three of these Sinatra-style frameworks for PHP. The first was <a href="https://github.com/bastos/nicedog" target="_blank">Nicedog</a> a "nano web framework for PHP, like web.py for Python, Sinatra or Camping for Ruby". After playing around with Nicedog, I found it extremely difficult to get up and running. There was just too much going on behind the scenes for comfort. The next framework I looked at was actually a fork of Nicedog, called <a href="https://github.com/digitarald/tyke" target="_blank">Tyke</a>. Tyke simplified some of the work needed to implement Nicedog and had more documentation on the framework, but it was still not what I was looking for.

After more research, I settled with <a href="http://www.limonade-php.net/" target="_blank">Limonade</a>, a "PHP micro framework for rapid web development and prototyping". What set Limonade apart from the rest of the frameworks that I looked at is that the documentation available for the framework was extremely thorough. There were several example websites that were built using Limonade and additional documentation of each and every feature of the framework. Here's how easy it is to get started with Limonade:

[gist id=752574]

This framework even has support for controllers, which was something I wanted without having to implement it myself. It also has support for views, which allows for clean separation of application logic and HTML code. It also has support for additional features like error handling, custom <code>.htaccess</code> files, and advanced session capabilities.

All in all, Limonade is a great framework that is easy to learn and has the capabilities of heavier frameworks, without the bloat. More information about my upcoming product, and how Limonade is used in it, will be coming soon after the new year.
