---
layout: post
title: vso.io - Short URL for Visual Studio Online work items
date: 2015-06-10 00:00
comments: true
categories: []
---
<p>I built a small website that makes it easy to reference <a href="https://www.visualstudio.com/products/what-is-visual-studio-online-vs">Visual Studio Online</a> work items: <a href="http://vso.io">http://vso.io</a>.</p>

<p>The default URL that Visual Studio Online provides for linking to work items was too long, so I made a smaller one that will redirect to the original URL. This makes it easy to link to a work item in an email or quickly navigate to a work item if you know the ID. For example, requests in the format:</p>

<pre>http://&lt;account&gt;.vso.io/&lt;work item&gt;</pre>

<p>will be redirected to</p>

<pre>https://&lt;account&gt;.visualstudio.com/DefaultCollection/_workitems/edit/&lt;work item&gt;</pre>

<p>The website is running as an ASP.NET MVC Web Application on Windows Azure Websites. You can check out the <a href="http://github.com/mbmccormick/vso.io">source code</a> on GitHub. It was super easy to setup this application, complete with the <a href="http://azure.microsoft.com/en-us/services/application-insights/">Application Insights</a> telemetry package, and publish it to Windows Azure right from Visual Studio. I hope you find it useful!</p>