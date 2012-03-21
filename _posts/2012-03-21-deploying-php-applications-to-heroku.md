--- 
layout: post
title: Deploying PHP Applications to Heroku
excerpt:
  "I've been trying to find a straight-forward guide on how to deploy PHP applications to Heroku to share with people, but I can't find one that covers both setting up Heroku and deploying PHP applications. While no configuration is necessary to deploy a PHP application on the Cedar stack, I think this guide will be a useful reference."
---
I've been trying to find a straight-forward guide on how to deploy PHP applications to Heroku to share with people, but I can't find one that covers both setting up Heroku and deploying PHP applications. While no configuration is necessary to deploy a PHP application on the Cedar stack, I think this guide will be a useful reference.

## Local Workstation Setup

Download the <a href="https://toolbelt.herokuapp.com/" target="_blank">Heroku Toolbelt</a> for your platform. This will install the <a href="http://devcenter.heroku.com/articles/heroku-command" target="_blank">Heroku command line interface</a> for creating and managing Heroku apps, <a href="https://github.com/ddollar/foreman" target="_blank">Foreman</a> for running your applications locally, and Git for pushing to Heroku.

Once you install these tools, open up your command shell and login to your Heroku account.  
`$ heroku login`  
`Enter your Heroku credentials.`  
`Email: matt@example.com`  
`Password:`  
`Could not find an existing public key.`  
`Would you like to generate one? [Yn]`  
`Generating new SSH public key.`  
`Uploading ssh public key /Users/matt/.ssh/id_rsa.pub`

You are now ready to create a Heroku application.


## Creating Applications on Heroku

In the working directory for your application, open up your command shell create a new application on the <a href="http://devcenter.heroku.com/articles/cedar" target="_blank">Cedar stack</a>. Heroku will automatically generate a name for your application, which you can change later, and add the `heroku` remote to your local Git repository.  
`$ heroku create --stack cedar`  
`Creating stark-fog-398... done, stack is cedar`  
`http://stark-fog-398.herokuapp.com/ | git@heroku.com:stark-fog-398.git`  
`Git remote heroku added`

You are now ready to deploy your application to Heroku.


## Deploying to Heroku

Deploying to Heroku is extremely easy. In the working directory for your application, open up your command shell and push to Heroku. Git will display the output from Heroku of the deployment as well as the URL to your application once the deployment has succeeded.  
`$ git push heroku master`

You can check the status of your application with `heroku logs` in the event that your deployment failed. Heroku also has several <a href="https://addons.heroku.com/" target="_blank">addons</a> available for databases, cron jobs, background workers, etc. This is a great platform for developing applications with early on and makes it easy to grow and scale your application down the road.

