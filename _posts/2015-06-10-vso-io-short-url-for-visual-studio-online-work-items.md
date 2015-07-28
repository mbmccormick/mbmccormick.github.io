---
layout: post
title: "vso.io - Short URL for Visual Studio Online work items"
---

I built a small website that makes it easy to reference [Visual Studio Online](https://www.visualstudio.com/products/what-is-visual-studio-online-vs) work items: [http://vso.io](http://vso.io).

The default URL that Visual Studio Online provides for linking to work items was too long, so I made a smaller one that will redirect to the original URL. This makes it easy to link to a work item in an email or quickly navigate to a work item if you know the ID. For example, requests in the format:

`http://`**`<account>`**`.vso.io/`**`<work item>`**

will be redirected to

`https://`**`<account>`**`.visualstudio.com/DefaultCollection/_workitems/edit/`**`<work item>`**

The website is running as an ASP.NET MVC Web Application on Windows Azure Websites. You can check out the [source code](http://github.com/mbmccormick/vso.io) on GitHub. It was super easy to setup this application, complete with the [Application Insights](http://azure.microsoft.com/en-us/services/application-insights/) telemetry package, and publish it to Windows Azure right from Visual Studio. I hope you find it useful!
