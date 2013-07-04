---
layout: post
title: Show Hidden Files in FileZilla
date: 2010-06-17 00:00
comments: true
categories: []
---
<p>The much-anticipated (and now currently in operation on this blog) <a href="http://wordpress.org/development/2010/06/thelonious/" target="_blank">Wordpress 3.0</a> was released today. I had a minor hiccup during the upgrade process which prevented my blog from exiting &amp;ldquo;maintenance mode&amp;rdquo; after the upgrade finished. The way it works is Wordpress will place a &amp;ldquo;.maintenance&amp;rdquo; file in the root of your blog, which will prevent all access to the front end and, stupidly, the administration panel. The only manual way to exit this mode is to delete this &amp;ldquo;.maintenance&amp;rdquo; file.</p>

<p>In order to do this, I fired up my trusty FileZilla FTP client and connected to my server. In UNIX and Linux, hidden files are those files prefixed with a &amp;ldquo;.&amp;rdquo;, such as the &amp;ldquo;.maintenance&amp;rdquo; file we're trying to delete. By default, FileZilla will obey the server's requests that these &amp;ldquo;.&amp;rdquo; prefixed files not be shown.</p>

<p>To show hidden files in FileZilla, just go to &amp;ldquo;Server > Force showing hidden files&amp;rdquo;. This will refresh your remote directory listing, with hidden files shown.</p>
