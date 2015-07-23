---
layout: post
title: 'SQL Server 2012 could not find the Database Engine startup handle'
comments: true
---
I was trying to install <a href="http://www.microsoft.com/sqlserver/en/us/editions/2012-editions/enterprise.aspx" target="_blank">SQL Server 2012 Developer edition</a> on our new development server, running <a href="http://www.microsoft.com/en-us/server-cloud/windows-server/default.aspx" target="_blank">Windows Server 2012</a>, in our virtualized datacenter environment. I stepped through the massive installation wizard and started the installation process. The installer began setting up the necessary components, SDKs, and configuration tools. However when it reached the actual Database Engine, the installation failed giving the following error:

<pre style="margin-bottom: 1.5em;">Could not find the Database Engine startup handle</pre>

This also happened with the Data Quality Services, Full Text and Semantic Extractions for Search, and SQL Server Replication features.

After doing some research, I found out that the problem was with how I mounted the ISO image of the installation media. Apparently the new "mount ISO" feature in Windows Server 2012 does not get along with <a href="http://www.vmware.com/" target="_blank">VMWare</a> instances. I had to uninstall my existing database instance as it was corrupt beyond repair. After extracting the ISO image and running the installation process from the extracted media, the installation process again ran for several minutes, however this time it completed without any issue.

I'm still not sure what the underlying cause of this was, but not using the ISO image seemed to do the trick. Let me know if you come across a technical explanation for this problem.
