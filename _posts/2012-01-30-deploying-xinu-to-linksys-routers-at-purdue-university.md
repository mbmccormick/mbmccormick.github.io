---
layout: post
title: Deploying XINU to Linksys Routers at Purdue University
date: 2012-01-30 00:00
comments: true
categories: []
---
This tutorial will walk you through setting up your local environment on <code>lore.cs.purdue.edu</code> to build the XINU kernel, connect to the Linksys routers, and deploy your XINU image to the backend machines for testing. The information provided in the handouts for the Operating Systems courses at Purdue are not very helpful, so hopefully this guide will be more useful.
<h2>Configure Environment for XINU</h2>
<ol>
	<li>Login to one of the frontend XINU controllers <code>xinu01.cs.purdue.edu</code>, <code>xinu02.cs.purdue.edu</code>, <code>...</code>, <code>xinu22.cs.purdue.edu</code>. If you do not have an account on the XINU machines, send an email to <a href="mailto:accounts@cs.purdue.edu">accounts@cs.purdue.edu</a>.</li>
	<li>Add the following line to your <code>.cshrc</code>file in your home directory.
<code>set path = (/p/xinu/bin $path)</code></li>
	<li>Force these changes to take effect with <code>source .cshrc</code>.</li>
</ol>
<h2>Build XINU for Linksys</h2>
<ol>
	<li>Download the kernel source from <a href="http://www.cs.purdue.edu/homes/cs354/Lab1/xinu-12Spring-lab1-linksys.tar.gz">the course website</a> to your workstation.</li>
	<li>Extract the source code with the following command.
<code>tar -zxvf xinu-12Spring-lab1-linksys.tar.gz</code></li>
	<li>Change directories to the <code>compile</code> directory and then run <code>make</code> to compile the XINU kernel. This will create an executable file called <code>xinu.boot</code> that will be flashed onto the Linksys routers.</li>
</ol>
<h2>Connect to a Linksys Router</h2>
<ol>
	<li>Make sure your are logged in to one of the frontend XINU machines as specified above (<code>xinu##.cs.purdue.edu</code>).</li>
	<li>There are only 15 Linksys routers available for use on the backend machines. Use the <code>cs-status</code> command to get a list of the available machines.</li>
	<li>Connect to an available Linksys router (<code>linksys101</code>, <code>linksys102</code>, <code>...</code>, <code>linksys115</code>) with the <code>cs-console linksys###</code> command. Replace “###” with an available router number.</li>
</ol>
<h2>Running XINU</h2>
<ol>
	<li>Make sure you are connected to one of the Linksys backend routers through one of the frontend XINU machines. The XINU routers <strong>will not work</strong> for this course.</li>
	<li>Enter command mode on the <code>cs-console</code> by typing <code>CTRL^@</code> or <code>CTRL^spacebar</code>.</li>
	<li>Download the XINU image that you created earlier to the router. You will need to be in the <code>compile</code> directory on the frontend XINU controller for this to work. Issue the <code>d</code>command as shown below:
<code>(command-mode) d</code><code>file: xinu.boot</code></li>
	<li>Powercycle the backend machine using the <code>p</code> command.</li>
	<li>As the Linksys router powers up, it’s bootloader is programmed to load Linux by default using an image of Linux that resides on the Linksys router. You need to interrupt this process. To do so, look for the following message in the boot output:
<code>### main_loop entered: bootdelay=1</code><code>Hit any key to stop autoboot: 1</code>

You will have exactly 1 second to hit any key to interrupt the autoboot process.</li>
	<li>If you successfully interrupt the Linux autoboot process, you should see the following low-level boot prompt:
<code>ar7100&gt;</code></li>
	<li>Now you need to load your XINU image that was downloaded onto the backend machine earlier. Issue the following commands:
<code>ar7100&gt; bootp 0x81000000</code><code>ar7100&gt; bootm</code>

The <code>bootp</code> command will connect to the <code>bootp</code> server on helga.cs.purdue.edu to lease an IP address for the router’s network interface and then download your XINU image. The <code>bootm</code> command then loads this image.</li>
	<li>At this point, your XINU kernel should be loaded and you should see whatever your <code>system/main.c</code> files is setup to do. By default it just prints “Hello World”.</li>
	<li>To exit the Linksys backend, switch to command mode on <code>cs-console</code> by typing <code>CTRL^@</code> or <code>CTRL^spacebar</code>. Then use the <code>q</code> command to exit the backend machine.</li>
</ol>
<h2>Additional Information</h2>
<ul>
	<li>Please do not leave a running copy of your XINU image on one of the backend machines. This will prevent anyone from using that backend machine and cause problems when other students want to access the routers.</li>
	<li>If you see the <code>Booting XINU on Dell Optiplex...</code> message, contact your TA.</li>
	<li>The Linksys backend machines are limited to the XINU frontend controllers. You must connect to one of these machines first (see above) in order to access the Linksys routers.</li>
	<li>When executing the <code>bootp</code> command as shown above, if your machine does not obtain an IP address (i.e. you see <code>REQUESTING address from DHCP</code>), disconnect from that backend and reconnect.</li>
</ul>
