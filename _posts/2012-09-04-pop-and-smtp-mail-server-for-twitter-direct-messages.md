---
title: POP and SMTP mail servers for Twitter Direct Messages
author: Matt
layout: post
permalink: /2012/09/pop-and-smtp-mail-server-for-twitter-direct-messages/
categories:
  - Development
tags:
  - email
  - hack
  - java
  - twitter
---

I was looking through my [GitHub][1] repositories last night and realized that I never ended up writing a blog post for the POP and SMTP mail servers that I built for sending and receiving Twitter Direct Messages though an email client. I built this after I created my first web server in my [Systems Programming][2] class last year. In fact, the whole implementation was fairly easy once I read through a few RFC specifications for the POP and SMTP protocols.

 [1]: https://github.com/mbmccormick
 [2]: http://www.cs.purdue.edu/homes/cs252/

The POP and SMTP servers are built using Java and are based off a simple server architecture. There's a single [server object][3] that creates a thread for the POP server and a thread for the SMTP server. Then each of the [POP server][4] and [SMTP server][5] objects simply listen for connections and create a new thread for each connection. The [POP connection][6] and [SMTP connection][7] objects are where the fun stuff is.

 [3]: https://github.com/mbmccormick/twitter-dm-server/blob/master/Server.java
 [4]: https://github.com/mbmccormick/twitter-dm-server/blob/master/POPServer.java
 [5]: https://github.com/mbmccormick/twitter-dm-server/blob/master/SMTPServer.java
 [6]: https://github.com/mbmccormick/twitter-dm-server/blob/master/POPServerConnection.java
 [7]: https://github.com/mbmccormick/twitter-dm-server/blob/master/SMTPServerConnection.java

### POP Server Implementation

Let's first start with a quick background on how [POP (Post Office Protocol)][8] email servers work. When a user opens their email client, it sends a series of commands to a POP email server to login, check for new messages, and download those new messages. Here's what this transaction might look like over the wire:

 [8]: http://en.wikipedia.org/wiki/Post_Office_Protocol

    C: AUTH
    S: -ERR not supported
    C: CAPA
    S: OK capability listing follows
    S: USER
    S: LOGIN-DELAY 900
    S: UIDL
    S: .
    C: USER mbmccormick@twitter.com
    S: OK hello, please authenticate
    C: PASS P4ssw0rd!
    S: OK welcome mbmccormick
    C: STAT
    S: OK 3 256
    C: LIST
    S: OK 3 messages
    S: 0 64
    S: 1 64
    S: 2 128
    S: .

So what's happening above is the client tries to authenticate with the POP server, but the preferred authentication mechanism is not supported. So the client checks to see what authentication mechanisms are available. The server responds with the supported authentication mechanisms and the client successfully authenticates. Next the client requests the unread message count and then gets a list of messages and their sizes for later retrieval. The email client makes requests using simple 4 character commands and the server responds with ` OK` or `-ERR` along with additional information. POP servers operate under 3 states: authentication, transaction, and update. During the authentication state, the client cannot call any of the `STAT`, `LIST`, `RETR`, `DELE`, etc. commands. They can only call `AUTH`, `USER`, `PASS`, etc. The transaction state is where the client can fetch messages, mark for deletion, etc. When the server moves into the update state, it commits any pending deletions to the disk (or in this case, Twitter). You can read more about POP in [RFC 1939][9].

 [9]: http://www.ietf.org/rfc/rfc1939.txt

Once I built my POP email server and connection manager, it was easy to hook this up to Twitter. I'm using the [twitter4j][10] library for interacting with Twitter from Java. It's extremely easy to setup and configure. Then I simply fetched Direct Messages on the user's behalf and formatted these to look like email messages that could be properly parsed by the email client. Here's how I am formatting the Direct Messages to look like email messages:

 [10]: http://twitter4j.org/en/index.html



I also had to implement support for deleting direct messages, etc. Once I was able to successfully fetch and read my Direct Messages from Twitter using my email client, the next logical step was to implement SMTP support so I could reply to these messages.

### SMTP Server Implementation

Sending messages is done using [SMTP (Simple Mail Transfer Protocol)][11] and is the only standard for sending messages, unlike receiving messages which has POP, IMAP, Exchange, etc. The client/server communication for SMTP is very similar to the mechanism we discussed for POP, but better resembles a web server as you can see below in this example SMTP transaction:

 [11]: http://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol

    C: HELO
    S: 250-OK
    S: 250 AUTH PLAIN
    C: AUTH PLAIN dGVzdAB0ZXN0AHRlc3RwYXNz
    S: 235 welcome mbmccormick
    C: MAIL
    S: 250 OK
    C: RCPT epuccine@twitter.com
    S: 250 OK
    C: DATA
    S: 350 begin
    C: Hello World! This is my first message.
    C: .
    S: 250 OK
    C: QUIT
    S: 221 goodbye

The example transaction above shows the client authenticating to the SMTP server using Plain authentication. Then, the client sends details of a message to be sent including the recipient and message body. Similar to POP servers, SMTP servers operate under 3 states: operation, transaction, and update. During the authentication state, the client cannot call any of the `MAIL`, `RCPT`, `DATA`, etc. commands. They can only call `HELO`, `AUTH`, etc. The transaction state is where the client can send messages. When the server moves into the update state, it sends any pending messages to the recipient's mail server (or in this case, Twitter). You can read more about SMTP in [RFC 2821][12].

 [12]: http://www.ietf.org/rfc/rfc2821.txt

Once I built my SMTP email server and connection manager, it was easy to hook this up to Twitter. I simply parsed the email messages for the recipient's username and sent Direct Messages on the user's behalf.

With that, I had a complete email server setup for sending and receiving Twitter Direct Messages. You can check out the [code for this project][13] on GitHub.

 [13]: https://github.com/mbmccormick/twitter-dm-server
