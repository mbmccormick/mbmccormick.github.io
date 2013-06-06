---
layout: post
title: Deploying PHP Applications to Heroku
date: 2012-03-21 00:00
comments: true
categories: []
---
I’ve been trying to find a straight-forward guide on how to deploy PHP applications to Heroku to share with people, but I can’t find one that covers both setting up Heroku and deploying PHP applications. While no configuration is necessary to deploy a PHP application on the Cedar stack, I think this guide will be a useful reference.

<h3>Local Workstation Setup</h3>
Download the <a href="https://toolbelt.herokuapp.com/" target="_blank">Heroku Toolbelt</a> for your platform. This will install the <a href="http://devcenter.heroku.com/articles/heroku-command" target="_blank">Heroku command line interface</a> for creating and managing Heroku apps, <a href="https://github.com/ddollar/foreman" target="_blank">Foreman</a> for running your applications locally, and Git for pushing to Heroku.

Once you install these tools, open up your command shell and login to your Heroku account.

<code>$ heroku login</code>
<code>Enter your Heroku credentials.</code>
<code>Email: matt@example.com</code>
<code>Password:</code>
<code>Could not find an existing public key.</code>
<code>Would you like to generate one? [Yn]</code>
<code>Generating new SSH public key.</code>
<code>Uploading ssh public key /Users/matt/.ssh/id_rsa.pub</code>

You are now ready to create a Heroku application.

<h3>Creating Applications on Heroku</h3>
In the working directory for your application, open up your command shell create a new application on the <a href="http://devcenter.heroku.com/articles/cedar" target="_blank">Cedar stack</a>. Heroku will automatically generate a name for your application, which you can change later, and add the <code>heroku</code> remote to your local Git repository.

<code>$ heroku create --stack cedar</code>
<code>Creating stark-fog-398... done, stack is cedar</code>
<code>http://stark-fog-398.herokuapp.com/ | git@heroku.com:stark-fog-398.git</code>
<code>Git remote heroku added</code>

You are now ready to deploy your application to Heroku.

<h3>Deploying to Heroku</h3>
Deploying to Heroku is extremely easy. In the working directory for your application, open up your command shell and push to Heroku. Git will display the output from Heroku of the deployment as well as the URL to your application once the deployment has succeeded.

<code>$ git push heroku master</code>

You can check the status of your application with <code>heroku logs</code> in the event that your deployment failed. Heroku also has several <a href="https://addons.heroku.com/" target="_blank">addons</a> available for databases, cron jobs, background workers, etc. This is a great platform for developing applications with early on and makes it easy to grow and scale your application down the road.
