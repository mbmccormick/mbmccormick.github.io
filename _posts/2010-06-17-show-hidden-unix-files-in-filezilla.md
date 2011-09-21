--- 
layout: post
title: Show Hidden Files in FileZilla
published: true
meta: 
  _edit_last: "1"
  _efficient_related_posts: "a:6:{i:0;a:4:{s:2:\"ID\";s:2:\"67\";s:10:\"post_title\";s:41:\"How To Remove PHP Extensions From Website\";s:7:\"matches\";s:1:\"5\";s:9:\"permalink\";s:73:\"http://mbmccormick.com/2010/09/how-to-remove-php-extensions-from-website/\";}i:1;a:4:{s:2:\"ID\";s:2:\"79\";s:10:\"post_title\";s:52:\"Connect Your Google Cr-48 Laptop to PAL2.0 at Purdue\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:84:\"http://mbmccormick.com/2011/02/connect-your-google-cr-48-laptop-to-pal2-0-at-purdue/\";}i:2;a:4:{s:2:\"ID\";s:2:\"48\";s:10:\"post_title\";s:65:\"The Subversion Fanboy\xE2\x80\x99s Guide to Git, Part 2: Pushing to GitHub\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:101:\"http://mbmccormick.com/2010/09/the-subversion-fanboy%e2%80%99s-guide-to-git-part-2-pushing-to-github/\";}i:3;a:4:{s:2:\"ID\";s:2:\"43\";s:10:\"post_title\";s:63:\"The Subversion Fanboy's Guide to Git, Part 1: Why Git is Better\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:92:\"http://mbmccormick.com/2010/08/the-subversion-fanboys-guide-to-git-part-1-why-git-is-better/\";}i:4;a:4:{s:2:\"ID\";s:3:\"161\";s:10:\"post_title\";s:42:\"Bulk INSERT to SQL Azure using LINQ to SQL\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:74:\"http://mbmccormick.com/2011/09/bulk-insert-to-sql-azure-using-linq-to-sql/\";}i:5;a:4:{s:2:\"ID\";s:2:\"95\";s:10:\"post_title\";s:34:\"Enable Apple AirPrint on Windows 7\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:66:\"http://mbmccormick.com/2011/04/enable-apple-airprint-on-windows-7/\";}}"
  _wp_old_slug: ""
  _relation_threshold: "2"
tags: 
- ftp
- internet
- linux
- server
- tips
- Tools
- wordpress
type: post
status: publish
---
The much-anticipated (and now currently in operation on this blog) <a href="http://wordpress.org/development/2010/06/thelonious/" target="_blank">Wordpress 3.0</a> was released today. I had a minor hiccup during the upgrade process which prevented my blog from exiting "maintenance mode" after the upgrade finished. The way it works is Wordpress will place a ".maintenance" file in the root of your blog, which will prevent all access to the front end and, stupidly, the administration panel. The only manual way to exit this mode is to delete this ".maintenance" file.

In order to do this, I fired up my trusty FileZilla FTP client and connected to my server. In UNIX and Linux, hidden files are those files prefixed with a ".", such as the ".maintenance" file we're trying to delete. By default, FileZilla will obey the server's requests that these "." prefixed files not be shown.

To show hidden files in FileZilla, just go to "Server &gt; Force showing hidden files". This will refresh your remote directory listing, with hidden files shown.
