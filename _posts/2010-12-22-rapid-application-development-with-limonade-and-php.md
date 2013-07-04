---
layout: post
title: Rapid Application Development with Limonade and PHP
date: 2010-12-22 00:00
comments: true
categories: []
---
<p>Recently, I've been working on the first product for McCormick Technologies (more information about that to come). My application started out as a very simple utility that I was using for internal workflows and over the past couple of months the feature set has really grown. I decided that it was time to move to a MVC framework to keep the application organized and reduce duplicate code. So I began searching for a light-weight MVC framework for PHP, or &ldquo;micro-framework&rdquo; as it's called.</p>

<p>I read through several different forum threads and blog posts, and most people talked about a framework called <a href="http://www.sinatrarb.com/" target="_blank">Sinatra</a> for Ruby. I decided to look at what Sinatra had to offer to get a better idea of what I was looking for. The nice thing about Sinatra is that it essentially is a URL-rewriting framework with views and controllers, without the models. At first I was concerned about not having this feature, but after looking at the code examples that Sinatra had on it's website, I was reassured.</p>

<p>So I did some more research and found three of these Sinatra-style frameworks for PHP. The first was <a href="https://github.com/bastos/nicedog" target="_blank">Nicedog</a> a &ldquo;nano web framework for PHP, like web.py for Python, Sinatra or Camping for Ruby&rdquo;. After playing around with Nicedog, I found it extremely difficult to get up and running. There was just too much going on behind the scenes for comfort. The next framework I looked at was actually a fork of Nicedog, called <a href="https://github.com/digitarald/tyke" target="_blank">Tyke</a>. Tyke simplified some of the work needed to implement Nicedog and had more documentation on the framework, but it was still not what I was looking for.</p>

<p>After more research, I settled with <a href="http://www.limonade-php.net/" target="_blank">Limonade</a>, a &ldquo;PHP micro framework for rapid web development and prototyping&rdquo;. What set Limonade apart from the rest of the frameworks that I looked at is that the documentation available for the framework was extremely thorough. There were several example websites that were built using Limonade and additional documentation of each and every feature of the framework. Here's how easy it is to get started with Limonade:</p>

<script src="https://gist.github.com/752574.js"> </script>


<p></p>

<p>This framework even has support for controllers, which was something I wanted without having to implement it myself. It also has support for views, which allows for clean separation of application logic and HTML code. It also has support for additional features like error handling, custom <code>.htaccess</code> files, and advanced session capabilities.</p>

<p>All in all, Limonade is a great framework that is easy to learn and has the capabilities of heavier frameworks, without the bloat. More information about my upcoming product, and how Limonade is used in it, will be coming soon after the new year.</p>
