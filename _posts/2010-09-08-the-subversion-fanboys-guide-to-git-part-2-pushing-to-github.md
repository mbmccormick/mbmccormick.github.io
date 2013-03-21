---
title: 'The Subversion Fanboy&#8217;s Guide to Git, Part 2: Pushing to GitHub'
author: Matt
layout: post
permalink: /2010/09/the-subversion-fanboys-guide-to-git-part-2-pushing-to-github/
categories:
  - Development
tags:
  - git
  - tutorial
---

Earlier this week, I [discussed][1] the reasoning behind why I switched from Subversion to Git. Let me just say that, with another week of using Git, I am happier than ever! Continuing with this series, I'll show you how to get setup on [GitHub][2], create your first repository, and push some changes from your workstation. Let's get started.

 [1]: http://mbmccormick.com/2010/08/the-subversion-fanboys-guide-to-git-part-1-why-git-is-better/
 [2]: http://github.com

First and foremost, you need to sign up for GitHub. There are some alternatives to GitHub, but this system is far more superior. The simplicity of Git combined with the social setting of the website makes it a breeding ground for open source projects. I'll assume you know the standard name, password, email dance, so let's move forward to getting our clients.

You will need to download two applications: an SSH client, such as [PuTTY][3], and a Windows build of Git, such as [msysGit][4]. For Linux users, most likely Git will be in your package manager. Otherwise, you can download the latest release of [Git][5] and compile it for your system. I'll focus my discussion today on Windows users. Once everything is installed, we need to setup our SSH keys. Unlike Subversion, Git uses SSH keys to authenticate users.

 [3]: http://www.chiark.greenend.org.uk/~sgtatham/putty/
 [4]: http://code.google.com/p/msysgit/
 [5]: http://git-scm.com/

Open Git Bash and enter the command shown in the window below, leaving all fields empty:

[![][7]][7]

 [6]: http://mbmccormick.github.com/images/2012/05/cap1.png
 [7]: http://mbmccormick.github.com/images/2012/05/cap1.png

Now that we have generated our SSH keys, we need to upload this information to GitHub. To do that, we need to first open our public key that was just generated. The output from the `ssh-keygen` command shows where our public key file is. Open this file with any text editor and copy all of the contents. Next, open up GitHub and click on Account Settings, SSH Public Keys. Create a new public key by clicking on the link. Paste the contents of your clipboard (our public SSH key) as shown below:

[![][9]][9]

 [8]: http://mbmccormick.github.com/images/2012/05/cap2.png
 [9]: http://mbmccormick.github.com/images/2012/05/cap2.png

Now that GitHub has our SSH public key, we are all set to push our code. First, setup a new repository on GitHub. After you create your repository, you will be redirected to a a page that discusses the Git commands you need to execute to setup your local repository. To do that, we need to execute the `git init` command. This will setup a local Git repository. Now, let's create a new text file in our repository. Call it whatever you want. Let's add this file to our Git repository. For that, we call `git add .`, which will add all of the files in our repository to the staging area. Next, we'll call `git commit -m &ldquo;Initial commit.&rdquo;` to commit these changes to our local repository. Alternatively, you can do this using the Git GUI as shown below:

[![][11]][11]

 [10]: http://mbmccormick.github.com/images/2012/05/cap3.png
 [11]: http://mbmccormick.github.com/images/2012/05/cap3.png

Lastly, to push our changes to GitHub, we need to call `git remote add origin git@github.com:mbmccormick/myfirstrepo.git`, which will add our remote repository, and finally `git push origin master`, which will push our code to the "origin" remote we just added on the "master" branch. And with that, we've just pushed our code to GitHub!

For more information about the social aspect of GitHub, you can visit the expansive [GitHub Help][12] website. There are several Git and GitHub tutorials there for you to peruse. And lastly, as a conclusion for my "Subversion Fanboy's Guide to Git" series, I encourage anyone who is still skeptical about Git to visit [Why Git is Better Than X][13].

 [12]: http://help.github.com/
 [13]: http://whygitisbetterthanx.com/