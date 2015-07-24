---
layout: post
title: "Adding Windows Phone 8 Tile functionality to Windows Phone 7.1 applications"
---

Windows Phone 8 introduces some great improvements to the existing live tile functionality in Windows Phone, making it easier to display information to users right on their Start screen. You can now choose between three different types of live tiles: the Flip Tile, the Iconic Tile, and the Cycle Tile. Each of these tiles offer different features and allows the user to choose between three different sizes. You can find more information about what these new tiles look like and how they work on the [Tiles for Windows Phone](http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh202948(v=vs.105).aspx) documentation on MSDN.

These new live tiles are currently only available to Windows Phone 8 users, though it will be enabled in Windows Phone 7.8 for existing users. Existing Windows Phone 7.1 applications can take advantage of these tiles for Windows Phone 8 users by checking the platform version and choosing the proper live tiles to interact with using reflection. Here's an example of how to detect the platform version:

{% gist mbmccormick/4176978 %}

If the user is running Windows Phone 8, then your application can use the new live tiles. However, because your application is targeting the Windows Phone 7.1 platform, there is no direct access to the APIs that allow you to work with these new tiles. That's where reflection comes in.

Here's an example of how I am creating a new FlipTile for a Windows Phone 8 user, using reflection on a Windows Phone 7.1 application:

{% gist mbmccormick/4176825 %}

And here's an example of how I am updating the FlipTiles a user has might have pinned to their Start screen, again using reflection:

{% gist mbmccormick/4176835 %}

This took me a little while to figure out because there is very little debugging information available when working with reflection and the [MSDN documentation](http://msdn.microsoft.com/en-us/library/windowsphone/develop/jj720574(v=vs.105).aspx) for this topic was not very helpful. The new live tile functionality is a great addition to any Windows Phone application. Just because your application supports both Windows Phone 8 and Windows Phone 7.1, it does not mean that your Windows Phone 8 users can't benefit from this new functionality.

You can read my [original question](http://stackoverflow.com/questions/13636069/adding-windows-phone-8-tile-functionality-to-windows-phone-os-7-1-app) about this topic on Stack Overflow.
