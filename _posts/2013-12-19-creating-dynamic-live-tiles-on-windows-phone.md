---
layout: post
title: 'Creating Dynamic Live Tiles on Windows Phone'
author: Matt
permalink: /2013/12/creating-dynamic-live-tiles-on-windows-phone/
categories:
  - Development
tags:
  - windowsphone
  - xaml
  - imaging
  - code
---

Recently, I was working on updating Milkman to include a more advanced live tile for showing upcoming tasks for users’s lists. Windows Phone has some great facilities in place for creating generic live tiles, but it doesn’t allow for much customization. Anything beyond those three basic templates requires you to create a dynamic template and render it as an image. This allows you to design your live tile in XAML, the same language you are using to design the user interfaces in the rest of your application.

The first thing you need to do is create a custom `UserControl` and add it to your project. This allows you to design the tile in XAML and add the necessary codebehind to render that control as an image. Here’s the XAML for my medium (square) live tile, notice the dimensions:

{% gist 8043664 %}

The codebehind is really where things get interesting. I create a public method `RenderLiveTileImage()` which, when called, renders the user control in memory and then generates a PNG image file, which can then be used as the BackgroundImage property of the live tile. Here’s the code:

{% gist 8043676 %}

Here I am setting the title and content properties of my live tile (see XAML above), specifying the dimensions at which to render this control, creating the image, and then writing it to `IsolatedStorage` for use by my application thread, which actually displays this image on the live tile.

{% gist 8043694 %}

You can see this in action in the latest update to Milkman, the premier Remember The Milk application for Windows Phone. You can also find out more about this in Jay Way's article on [Advanced Transparent Live Tiles with Count for Windows Phone](http://www.jayway.com/2012/04/03/advanced-transparent-live-tiles-with-count-for-windows-phone/).
