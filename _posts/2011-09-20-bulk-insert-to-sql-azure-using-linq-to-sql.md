--- 
layout: post
title: Bulk INSERT to SQL Azure using LINQ to SQL
published: true
meta: 
  aktt_notify_twitter: "yes"
  _edit_last: "1"
  _efficient_related_posts: "a:6:{i:0;a:4:{s:2:\"ID\";s:2:\"83\";s:10:\"post_title\";s:51:\"Deploying an Application to AppHarbor in 10 Minutes\";s:7:\"matches\";s:1:\"5\";s:9:\"permalink\";s:83:\"http://mbmccormick.com/2011/03/deploying-an-application-to-appharbor-in-10-minutes/\";}i:1;a:4:{s:2:\"ID\";s:2:\"87\";s:10:\"post_title\";s:55:\"How I Launched 4sqtransit in Two Weeks on Windows Azure\";s:7:\"matches\";s:1:\"4\";s:9:\"permalink\";s:87:\"http://mbmccormick.com/2011/04/how-i-launched-4sqtransit-in-two-weeks-on-windows-azure/\";}i:2;a:4:{s:2:\"ID\";s:3:\"142\";s:10:\"post_title\";s:48:\"Optical Character Recognition on Windows Phone 7\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:84:\"http://mbmccormick.com/2011/08/optical-character-recognition-ocr-on-windows-phone-7/\";}i:3;a:4:{s:2:\"ID\";s:2:\"98\";s:10:\"post_title\";s:27:\"Getting Ready for Microsoft\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:59:\"http://mbmccormick.com/2011/05/getting-ready-for-microsoft/\";}i:4;a:4:{s:2:\"ID\";s:3:\"145\";s:10:\"post_title\";s:50:\"Early Look at Mojito: Mint.com for Windows Phone 7\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:81:\"http://mbmccormick.com/2011/08/early-look-at-mojito-mint-com-for-windows-phone-7/\";}i:5;a:4:{s:2:\"ID\";s:3:\"135\";s:10:\"post_title\";s:43:\"Application Development for Windows Phone 7\";s:7:\"matches\";s:1:\"2\";s:9:\"permalink\";s:75:\"http://mbmccormick.com/2011/07/application-development-for-windows-phone-7/\";}}"
  aktt_tweeted: "1"
  _relation_threshold: "2"
tags: 
- azure
- cloud
- internet
- linq
- microsoft
- Projects
- server
- sql
- xml
type: post
status: publish
---
Recently I have been working on developing an API for real-time and scheduled public transit data. Currently, my API supports 173 transit agencies. Each of these transit agencies provides a <a href="http://code.google.com/transit/spec/transit_feed_specification.html" target="_blank">GTFS feed</a> of their scheduled transit data in CSV format. This data ranges anywhere from 25mb to 250mb in size, with some CSV files containing well over 750,000 records. In order to efficiently query this data, I download the scheduled data and insert it to a SQL Server database. My original method of inserting this data was to use <a href="http://msdn.microsoft.com/en-us/library/bb425822.aspx" target="_blank">LINQ to SQL</a> and insert the records one at a time. Consistently, LINQ to SQL would fail after about 10,000 records and rollback the transaction. This process took about 3 hours, multiply that by 50 and 150 hours was not going to cut it. I even tried batching my queries, eliminating the transaction, and increasing the timeout window, <a href="http://www.sidarok.com/web/blog/content/2008/05/02/10-tips-to-improve-your-linq-to-sql-application-performance.html" target="_blank">among other things</a>. This didn't work and I needed another solution.

Next I looked into using <a href="http://msdn.microsoft.com/en-us/library/system.data.sqlclient.sqlbulkcopy.aspx" target="_blank">SqlBulkCopy</a>, which was supposed to be <a href="http://www.sqlteam.com/article/use-sqlbulkcopy-to-quickly-load-data-from-your-client-to-sql-server" target="_blank">10 times faster</a> than standard LINQ to SQL queries. After about an hour of coding, an hour of debugging, and a quick Google search, I realized that SqlBulkCopy <a href="http://stackoverflow.com/questions/1802179/sqlbulkcopy-connection-errors-when-working-with-sql-azure" target="_blank">does not play nicely</a> with SQL Azure, my hosting provider. That was another failed effort.

Lastly I decided to try to pass the records to the database server as a serialized XML collection and then use a stored procedure to select the records from the XML data and insert them to the appropriate table. Not only did this work, I was able to insert over 500,000 records in just over 15 minutes. You can take a look at the code I used below.

Here's the stored procedure that I used to insert the serialized XML data:

[gist id=1229762]

And here's the LINQ to SQL statements I used to serialize the data and send it to SQL Server:

[gist id=1229797]

Like I said, I was able to insert over 500,000 records in just over 15 minutes, instead of 150 hours like LINQ to SQL would have taken, had it completed it's transaction. More information about the API that I am developing will be posted here soon. You really have to think differently about efficiency when you are handling massive amounts of data like this.
