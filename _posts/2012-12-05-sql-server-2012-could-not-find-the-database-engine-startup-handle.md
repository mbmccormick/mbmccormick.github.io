---
title: SQL Server 2012 could not find the Database Engine startup handle
author: Matt
layout: post
permalink: /2012/12/sql-server-2012-could-not-find-the-database-engine-startup-handle/
categories:
  - Miscellaneous
tags:
  - microsoft
  - server
  - sql
---
# 

I was trying to install [SQL Server 2012 Developer edition][1] on our new development server, running [Windows Server 2012][2], in our virtualized datacenter environment. I stepped through the massive installation wizard and started the installation process. The installer began setting up the necessary components, SDKs, and configuration tools. However when it reached the actual Database Engine, the installation failed giving the following error:

 [1]: http://www.microsoft.com/sqlserver/en/us/editions/2012-editions/enterprise.aspx
 [2]: http://www.microsoft.com/en-us/server-cloud/windows-server/default.aspx

    Could not find the Database Engine startup handle

This also happened with the Data Quality Services, Full Text and Semantic Extractions for Search, and SQL Server Replication features.

After doing some research, I found out that the problem was with how I mounted the ISO image of the installation media. Apparently the new “mount ISO” feature in Windows Server 2012 does not get alone with [VMWare][3] instances. I had to uninstall my existing database instance as it was corrupt beyond repair. After extracting the ISO image and running the installation process from the extracted media, the installation process again ran for several minutes, however this time it completed without any issue.

 [3]: http://www.vmware.com/

I’m still not sure what the underlying cause of this was, but not using the ISO image seemed to do the trick. Let me know if you come across a technical explanation for this problem.