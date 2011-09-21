--- 
layout: post
title: How To Remove PHP Extensions From Website
published: true
meta: 
  aktt_notify_twitter: "no"
  _edit_last: "1"
  _efficient_related_posts: "a:6:{i:0;a:4:{s:2:\"ID\";s:2:\"29\";s:10:\"post_title\";s:30:\"Show Hidden Files in FileZilla\";s:7:\"matches\";s:1:\"5\";s:9:\"permalink\";s:67:\"http://mbmccormick.com/2010/06/show-hidden-unix-files-in-filezilla/\";}i:1;a:4:{s:2:\"ID\";s:2:\"79\";s:10:\"post_title\";s:52:\"Connect Your Google Cr-48 Laptop to PAL2.0 at Purdue\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:84:\"http://mbmccormick.com/2011/02/connect-your-google-cr-48-laptop-to-pal2-0-at-purdue/\";}i:2;a:4:{s:2:\"ID\";s:2:\"48\";s:10:\"post_title\";s:65:\"The Subversion Fanboy\xE2\x80\x99s Guide to Git, Part 2: Pushing to GitHub\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:101:\"http://mbmccormick.com/2010/09/the-subversion-fanboy%e2%80%99s-guide-to-git-part-2-pushing-to-github/\";}i:3;a:4:{s:2:\"ID\";s:2:\"43\";s:10:\"post_title\";s:63:\"The Subversion Fanboy's Guide to Git, Part 1: Why Git is Better\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:92:\"http://mbmccormick.com/2010/08/the-subversion-fanboys-guide-to-git-part-1-why-git-is-better/\";}i:4;a:4:{s:2:\"ID\";s:3:\"161\";s:10:\"post_title\";s:42:\"Bulk INSERT to SQL Azure using LINQ to SQL\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:74:\"http://mbmccormick.com/2011/09/bulk-insert-to-sql-azure-using-linq-to-sql/\";}i:5;a:4:{s:2:\"ID\";s:2:\"95\";s:10:\"post_title\";s:34:\"Enable Apple AirPrint on Windows 7\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:66:\"http://mbmccormick.com/2011/04/enable-apple-airprint-on-windows-7/\";}}"
  _wp_old_slug: ""
  _relation_threshold: "2"
tags: 
- apache
- ftp
- internet
- linux
- php
- server
- Support
- tips
- Web
type: post
status: publish
---
This problem always comes up and I can never remember what to put in my .htaccess file. Just drop this into a file called ".htaccess" and place the file in the root directory of your website. Be sure that your file and directory names don't conflict. You will also need to have the <code>mod-rewrite</code> extension enabled in Apache for this to work. Here's the code I use to accomplish this task:

[gist id=628543] 
