---
layout: post
title: Deploying XINU to Linksys Routers at Purdue University
date: 2012-01-30 00:00
comments: true
categories: []
---
This tutorial will walk you through setting up your local environment on `lore.cs.purdue.edu` to build the XINU kernel, connect to the Linksys routers, and deploy your XINU image to the backend machines for testing. The information provided in the handouts for the Operating Systems courses at Purdue are not very helpful, so hopefully this guide will be more useful.

## Configure Environment for XINU

1. Login to one of the frontend XINU controllers `xinu01.cs.purdue.edu`, `xinu02.cs.purdue.edu`, `...`, `xinu22.cs.purdue.edu`. If you do not have an account on the XINU machines, send an email to <a href="mailto:accounts@cs.purdue.edu">accounts@cs.purdue.edu</a>.

2. Add the following line to your `.cshrc` file in your home directory.  
`set path = (/p/xinu/bin $path)`

3. Force these changes to take effect with `source .cshrc`.


## Build XINU for Linksys

1. Download the kernel source from <a href="http://www.cs.purdue.edu/homes/cs354/Lab1/xinu-12Spring-lab1-linksys.tar.gz" data-proofer-ignore>the course website</a> to your workstation.

2. Extract the source code with the following command.  
`tar -zxvf xinu-12Spring-lab1-linksys.tar.gz`

3. Change directories to the `compile` directory and then run `make` to compile the XINU kernel. This will create an executable file called `xinu.boot` that will be flashed onto the Linksys routers.


## Connect to a Linksys Router

1. Make sure your are logged in to one of the frontend XINU machines as specified above (`xinu##.cs.purdue.edu`).

2. There are only 15 Linksys routers available for use on the backend machines. Use the `cs-status` command to get a list of the available machines.

3. Connect to an available Linksys router (`linksys101`, `linksys102`, `...`, `linksys115`) with the `cs-console linksys###` command. Replace "###" with an available router number.


## Running XINU

1. Make sure you are connected to one of the Linksys backend routers through one of the frontend XINU machines. The XINU routers **will not work** for this course.

2. Enter command mode on the `cs-console` by typing `CTRL^@` or `CTRL^spacebar`. 

3. Download the XINU image that you created earlier to the router. You will need to be in the `compile` directory on the frontend XINU controller for this to work. Issue the `d` command as shown below:  
`(command-mode) d`  
`file: xinu.boot`

4. Powercycle the backend machine using the `p` command.

5. As the Linksys router powers up, it's bootloader is programmed to load Linux by default using an image of Linux that resides on the Linksys router. You need to interrupt this process. To do so, look for the following message in the boot output:  
`### main_loop entered: bootdelay=1`  
`Hit any key to stop autoboot: 1`  
You will have exactly 1 second to hit any key to interrupt the autoboot process.

6. If you successfully interrupt the Linux autoboot process, you should see the following low-level boot prompt:  
`ar7100>`

7. Now you need to load your XINU image that was downloaded onto the backend machine earlier. Issue the following commands:  
`ar7100> bootp 0x81000000`  
`ar7100> bootm`  
The `bootp` command will connect to the `bootp` server on helga.cs.purdue.edu to lease an IP address for the router's network interface and then download your XINU image. The `bootm` command then loads this image.

8. At this point, your XINU kernel should be loaded and you should see whatever your `system/main.c` files is setup to do. By default it just prints "Hello World".

9. To exit the Linksys backend, switch to command mode on `cs-console` by typing `CTRL^@` or `CTRL^spacebar`. Then use the `q` command to exit the backend machine.


## Additional Information

* Please do not leave a running copy of your XINU image on one of the backend machines. This will prevent anyone from using that backend machine and cause problems when other students want to access the routers.
* If you see the `Booting XINU on Dell Optiplex...` message, contact your TA.
* The Linksys backend machines are limited to the XINU frontend controllers. You must connect to one of these machines first (see above) in order to access the Linksys routers.
* When executing the `bootp` command as shown above, if your machine does not obtain an IP address (i.e. you see `REQUESTING address from DHCP`), disconnect from that backend and reconnect.