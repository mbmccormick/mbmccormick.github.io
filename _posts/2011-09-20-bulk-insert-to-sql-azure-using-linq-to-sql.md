---
title: Bulk INSERT to SQL Azure using LINQ to SQL
author: Matt
layout: post
permalink: /2011/09/bulk-insert-to-sql-azure-using-linq-to-sql/
categories:
  - Development
tags:
  - azure
  - csharp
---

Recently I have been working on developing an API for real-time and scheduled public transit data. Currently, my API supports 173 transit agencies. Each of these transit agencies provides a [GTFS feed][1] of their scheduled transit data in CSV format. This data ranges anywhere from 25mb to 250mb in size, with some CSV files containing well over 750,000 records. In order to efficiently query this data, I download the scheduled data and insert it to a SQL Server database. My original method of inserting this data was to use [LINQ to SQL][2] and insert the records one at a time. Consistently, LINQ to SQL would fail after about 10,000 records and rollback the transaction. This process took about 3 hours, multiply that by 50 and 150 hours was not going to cut it. I even tried batching my queries, eliminating the transaction, and increasing the timeout window, [among other things][3]. This didn't work and I needed another solution.

 [1]: http://code.google.com/transit/spec/transit_feed_specification.html
 [2]: http://msdn.microsoft.com/en-us/library/bb425822.aspx
 [3]: http://www.sidarok.com/web/blog/content/2008/05/02/10-tips-to-improve-your-linq-to-sql-application-performance.html

Next I looked into using [SqlBulkCopy][4], which was supposed to be [10 times faster][5] than standard LINQ to SQL queries. After about an hour of coding, an hour of debugging, and a quick Google search, I realized that SqlBulkCopy [does not play nicely][6] with SQL Azure, my hosting provider. That was another failed effort.

 [4]: http://msdn.microsoft.com/en-us/library/system.data.sqlclient.sqlbulkcopy.aspx
 [5]: http://www.sqlteam.com/article/use-sqlbulkcopy-to-quickly-load-data-from-your-client-to-sql-server
 [6]: http://stackoverflow.com/questions/1802179/sqlbulkcopy-connection-errors-when-working-with-sql-azure

Lastly I decided to try to pass the records to the database server as a serialized XML collection and then use a stored procedure to select the records from the XML data and insert them to the appropriate table. Not only did this work, I was able to insert over 500,000 records in just over 15 minutes. You can take a look at the code I used below.

Here's the stored procedure that I used to insert the serialized XML data:

<script src="https://gist.github.com/mbmccormick/1229762.js"> </script>

And here's the LINQ to SQL statements I used to serialize the data and send it to SQL Server:

<script src="https://gist.github.com/mbmccormick/1229797.js"> </script>

Like I said, I was able to insert over 500,000 records in just over 15 minutes, instead of 150 hours like LINQ to SQL would have taken, had it completed it's transaction. More information about the API that I am developing will be posted here soon. You really have to think differently about efficiency when you are handling massive amounts of data like this.
