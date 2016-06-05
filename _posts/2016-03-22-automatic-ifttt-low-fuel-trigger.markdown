---
layout: post
title: 'Automatic + IFTTT: low fuel trigger'
date: '2016-03-22 23:17:20'
---

I built a small [node.js](http://nodejs.org) + [Express](http://expressjs.com) application that triggers an [IFTTT Maker Channel](http://ifttt.com/maker) event whenever [Automatic](http://automatic.com) reports low fuel for one of my vehicles. When my Automatic Link records a new trip or detects that I've shut off the ignition, it sends a notification to my `automatic-ifttt` instance on Heroku, which checks to see if the fuel level has dropped below a configurable threshold. If it has, then it triggers an event on my IFTTT Maker Channel and from there, I can do whatever I want.

Right now I have my IFTTT configured to add a task to my [Todoist](http://todoist.com) account whenever my fuel level drops below 25%, reminding me to get gas and it includes a link to the nearest gas stations and their current prices. Here's the recipe:

<a href="https://ifttt.com/view_embed_recipe/392072-example-automatic-ifttt-recipe" target = "_blank" class="embed_recipe embed_recipe-l_32" id= "embed_recipe-392072"><img src= 'https://ifttt.com/recipe_embed_img/392072' alt="IFTTT Recipe: Example `automatic-ifttt` recipe connects maker to todoist" width="370px" style="max-width:100%"/></a><script async type="text/javascript" src= "//ifttt.com/assets/embed_recipe.js"></script>

You could easily configure IFTTT to call your phone or log your fill ups to a Google Spreadsheet or send out an SOS with a link to your location on Twitter, whenever you're low on gas.

Check out the [source code](http://github.com/mbmccormick/automatic-ifttt) for `automatic-ifttt` on GitHub, where you'll find instructions on how to deploy your own instance on Heroku.