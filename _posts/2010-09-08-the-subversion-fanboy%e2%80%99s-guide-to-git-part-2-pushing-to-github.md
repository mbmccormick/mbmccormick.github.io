--- 
layout: post
title: "The Subversion Fanboy\xE2\x80\x99s Guide to Git, Part 2: Pushing to GitHub"
published: true
meta: 
  aktt_notify_twitter: "yes"
  _edit_last: "1"
  _efficient_related_posts: "a:6:{i:0;a:4:{s:2:\"ID\";s:2:\"43\";s:10:\"post_title\";s:63:\"The Subversion Fanboy's Guide to Git, Part 1: Why Git is Better\";s:7:\"matches\";s:1:\"7\";s:9:\"permalink\";s:92:\"http://mbmccormick.com/2010/08/the-subversion-fanboys-guide-to-git-part-1-why-git-is-better/\";}i:1;a:4:{s:2:\"ID\";s:2:\"83\";s:10:\"post_title\";s:51:\"Deploying an Application to AppHarbor in 10 Minutes\";s:7:\"matches\";s:1:\"4\";s:9:\"permalink\";s:83:\"http://mbmccormick.com/2011/03/deploying-an-application-to-appharbor-in-10-minutes/\";}i:2;a:4:{s:2:\"ID\";s:2:\"78\";s:10:\"post_title\";s:54:\"Creating GitHub Style Post-Receive Webhooks in Gitosis\";s:7:\"matches\";s:1:\"4\";s:9:\"permalink\";s:86:\"http://mbmccormick.com/2011/01/creating-github-style-post-receive-webhooks-in-gitosis/\";}i:3;a:4:{s:2:\"ID\";s:2:\"67\";s:10:\"post_title\";s:41:\"How To Remove PHP Extensions From Website\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:73:\"http://mbmccormick.com/2010/09/how-to-remove-php-extensions-from-website/\";}i:4;a:4:{s:2:\"ID\";s:2:\"45\";s:10:\"post_title\";s:44:\"Removing Subversion Directories from Windows\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:76:\"http://mbmccormick.com/2010/09/removing-subversion-directories-from-windows/\";}i:5;a:4:{s:2:\"ID\";s:2:\"29\";s:10:\"post_title\";s:30:\"Show Hidden Files in FileZilla\";s:7:\"matches\";s:1:\"3\";s:9:\"permalink\";s:67:\"http://mbmccormick.com/2010/06/show-hidden-unix-files-in-filezilla/\";}}"
  aktt_tweeted: "0"
  _wp_old_slug: ""
  _relation_threshold: "3"
tags: 
- Development
- git
- internet
- linux
- server
- ssh
- svn
- windows
type: post
status: publish
---
Earlier this week, I <a href="http://mbmccormick.com/2010/08/the-subversion-fanboys-guide-to-git-part-1-why-git-is-better/" target="_blank">discussed</a> the reasoning behind why I switched from Subversion to Git. Let me just say that, with another week of using Git, I am happier than ever! Continuing with this series, I'll show you how to get setup on <a href="http://github.com" target="_blank">GitHub</a>, create your first repository, and push some changes from your workstation. Let's get started.

First and foremost, you need to sign up for GitHub. There are some alternatives to GitHub, but this system is far more superior. The simplicity of Git combined with the social setting of the website makes it a breeding ground for open source projects. I'll assume you know the standard name, password, email dance, so let's move forward to getting our clients.

You will need to download two applications: an SSH client, such as <a href="http://www.chiark.greenend.org.uk/~sgtatham/putty/" target="_blank">PuTTY</a>, and a Windows build of Git, such as <a href="http://code.google.com/p/msysgit/" target="_blank">msysGit</a>. For Linux users, most likely Git will be in your package manager. Otherwise, you can download the latest release of <a href="http://git-scm.com/" target="_blank">Git</a> and compile it for your system. I'll focus my discussion today on Windows users. Once everything is installed, we need to setup our SSH keys. Unlike Subversion, Git uses SSH keys to authenticate users.

Open Git Bash and enter the command shown in the window below, leaving all fields empty:

<a href="http://mbmccormick.com/wp-content/uploads/2010/09/cap1.png"><img class="alignnone size-medium wp-image-49" title="Git Bash" src="http://mbmccormick.com/wp-content/uploads/2010/09/cap1.png" alt="" /></a>

Now that we have generated our SSH keys, we need to upload this information to GitHub. To do that, we need to first open our public key that was just generated. The output from the <code>ssh-keygen</code> command shows where our public key file is. Open this file with any text editor and copy all of the contents. Next, open up GitHub and click on Account Settings, SSH Public Keys. Create a new public key by clicking on the link. Paste the contents of your clipboard (our public SSH key) as shown below:


<a href="http://mbmccormick.com/wp-content/uploads/2010/09/cap2.png"><img class="alignnone size-full wp-image-50" title="GitHub Public Key" src="http://mbmccormick.com/wp-content/uploads/2010/09/cap2.png" alt="" /></a>

Now that GitHub has our SSH public key, we are all set to push our code. First, setup a new repository on GitHub. After you create your repository, you will be redirected to a a page that discusses the Git commands you need to execute to setup your local repository. To do that, we need to execute the <code>git init</code> command. This will setup a local Git repository. Now, let's create a new text file in our repository. Call it whatever you want. Let's add this file to our Git repository. For that, we call <code>git add .</code>, which will add all of the files in our repository to the staging area. Next, we'll call <code>git commit -m "Initial commit."</code> to commit these changes to our local repository. Alternatively, you can do this using the Git GUI as shown below:

<a href="http://mbmccormick.com/wp-content/uploads/2010/09/cap3.png"><img class="alignnone size-full wp-image-51" title="Git GUI" src="http://mbmccormick.com/wp-content/uploads/2010/09/cap3.png" alt="" width="923" height="484" /></a>

Lastly, to push our changes to GitHub, we need to call <code>git remote add origin git@github.com:mbmccormick/myfirstrepo.git</code>, which will add our remote repository, and finally <code>git push origin master</code>, which will push our code to the "origin" remote we just added on the "master" branch. And with that, we've just pushed our code to GitHub!

For more information about the social aspect of GitHub, you can visit the expansive <a href="http://help.github.com/" target="_blank">GitHub Help</a> website. There are several Git and GitHub tutorials there for you to peruse. And lastly, as a conclusion for my "Subversion Fanboy's Guide to Git" series, I encourage anyone who is still skeptical about Git to visit <a href="http://whygitisbetterthanx.com/" target="_blank">Why Git is Better Than X</a>.
