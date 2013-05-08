---
title: How to export multiple Word Documents to a single PDF
author: Matt
layout: post
permalink: /2010/03/how-to-export-multiple-word-documents-to-a-single-pdf/
categories:
  - Miscellaneous
---

Over the past few weeks, I've been casually working on a project for a customer. One of the requirements was that the user needed to be able to generate reports for a set of data in Word Document format, and then retrieve a set of these reports in a single file for printing. The obvious solution to this was to use the Microsoft Office Interop Assemblies for .NET. Easy, or so I thought. I was able to successfully generate the reports in Word, but could not for the life of me figure out how to merge these documents together without losing formatting. I hit a road block, and tried everything imaginable for the last couple of weeks.

I decided to look at this task from a different angle. Why not generate these Word Documents first, output them as PDFs and then merge these into a single, more compatible format? So I began my research. It turns out the Microsoft Office 2007 has an add-in available to save documents as PDF, called [Microsoft Save as PDF][1]. This was exactly what I needed. Following this [documentation][2] on how to access this feature through the Interop Assemblies, I was successfully outputting my Word Documents as PDFs.

 [1]: http://www.microsoft.com/downloads/details.aspx?familyid=F1FC413C-6D89-4F15-991B-63B07BA5F2E5&displaylang=en
 [2]: http://msdn.microsoft.com/en-us/library/bb412305.aspx

Now for the last task: merging these PDFs together using VB.NET. There are several commercial products available that could accomplish this task. But with the budget that I'm on, free was the only option for this project. After browsing some forum posts and input from Stack Overflow, I decided to go with [iTextSharp][3], a .NET port of the iText Java library. This is an extremely powerful library for manipulation PDFs programmatically, for free! Further research lead me to this [blog post][4], which detailed how to merge multiple PDF files together using the iTextSharp library.

 [3]: http://itextsharp.sourceforge.net/
 [4]: http://alex.buayacorp.com/merge-pdf-files-with-itext-and-net.html

I was able to implement this entire functionality inside of an hour. I could not believe how difficult it was to do this via Microsoft Word. Outputting these reports as a PDF was so much easier, required much less code, and will prove to be a much more portable way of accessing this data.