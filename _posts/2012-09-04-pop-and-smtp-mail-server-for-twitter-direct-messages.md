---
layout: post
title: 'POP and SMTP mail servers for Twitter Direct Messages'
comments: true
---
I was looking through my <a href="https://github.com/mbmccormick" target="_blank">GitHub</a> repositories last night and realized that I never ended up writing a blog post for the POP and SMTP mail servers that I built for sending and receiving Twitter Direct Messages though an email client. I built this after I created my first web server in my <a href="http://www.cs.purdue.edu/homes/cs252/" target="_blank">Systems Programming</a> class last year. In fact, the whole implementation was fairly easy once I read through a few RFC specifications for the POP and SMTP protocols.

The POP and SMTP servers are built using Java and are based off a simple server architecture. There's a single <a href="https://github.com/mbmccormick/twitter-dm-server/blob/master/Server.java" target="_blank">server object</a> that creates a thread for the POP server and a thread for the SMTP server. Then each of the <a href="https://github.com/mbmccormick/twitter-dm-server/blob/master/POPServer.java" target="_blank">POP server</a> and <a href="https://github.com/mbmccormick/twitter-dm-server/blob/master/SMTPServer.java" target="_blank">SMTP server</a> objects simply listen for connections and create a new thread for each connection. The <a href="https://github.com/mbmccormick/twitter-dm-server/blob/master/POPServerConnection.java" target="_blank">POP connection</a> and <a href="https://github.com/mbmccormick/twitter-dm-server/blob/master/SMTPServerConnection.java" target="_blank">SMTP connection</a> objects are where the fun stuff is.
<h3>POP Server Implementation</h3>
Let's first start with a quick background on how <a href="http://en.wikipedia.org/wiki/Post_Office_Protocol" target="_blank">POP (Post Office Protocol)</a> email servers work. When a user opens their email client, it sends a series of commands to a POP email server to login, check for new messages, and download those new messages. Here's what this transaction might look like over the wire:

```
C: AUTH
S: -ERR not supported
C: CAPA
S: +OK capability listing follows
S: USER
S: LOGIN-DELAY 900
S: UIDL
S: .
C: USER mbmccormick@twitter.com
S: +OK hello, please authenticate
C: PASS P4ssw0rd!
S: +OK welcome mbmccormick
C: STAT
S: +OK 3 256
C: LIST
S: +OK 3 messages
S: 0 64
S: 1 64
S: 2 128
S: .
```

So what's happening above is the client tries to authenticate with the POP server, but the preferred authentication mechanism is not supported. So the client checks to see what authentication mechanisms are available. The server responds with the supported authentication mechanisms and the client successfully authenticates. Next the client requests the unread message count and then gets a list of messages and their sizes for later retrieval. The email client makes requests using simple 4 character commands and the server responds with <code>+OK</code> or <code>-ERR</code> along with additional information. POP servers operate under 3 states: authentication, transaction, and update. During the authentication state, the client cannot call any of the <code>STAT</code>, <code>LIST</code>, <code>RETR</code>, <code>DELE</code>, etc. commands. They can only call <code>AUTH</code>, <code>USER</code>, <code>PASS</code>, etc. The transaction state is where the client can fetch messages, mark for deletion, etc. When the server moves into the update state, it commits any pending deletions to the disk (or in this case, Twitter). You can read more about POP in <a href="http://www.ietf.org/rfc/rfc1939.txt" target="_blank">RFC 1939</a>.

Once I built my POP email server and connection manager, it was easy to hook this up to Twitter. I'm using the <a href="http://twitter4j.org/en/index.html" target="_blank">twitter4j</a> library for interacting with Twitter from Java. It's extremely easy to setup and configure. Then I simply fetched Direct Messages on the user's behalf and formatted these to look like email messages that could be properly parsed by the email client. Here's how I am formatting the Direct Messages to look like email messages:

{% gist mbmccormick/3621333 %}

I also had to implement support for deleting direct messages, etc. Once I was able to successfully fetch and read my Direct Messages from Twitter using my email client, the next logical step was to implement SMTP support so I could reply to these messages.
<h3>SMTP Server Implementation</h3>
Sending messages is done using <a href="http://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol" target="_blank">SMTP (Simple Mail Transfer Protocol)</a> and is the only standard for sending messages, unlike receiving messages which has POP, IMAP, Exchange, etc. The client/server communication for SMTP is very similar to the mechanism we discussed for POP, but better resembles a web server as you can see below in this example SMTP transaction:

```
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
```

The example transaction above shows the client authenticating to the SMTP server using Plain authentication. Then, the client sends details of a message to be sent including the recipient and message body. Similar to POP servers, SMTP servers operate under 3 states: operation, transaction, and update. During the authentication state, the client cannot call any of the <code>MAIL</code>, <code>RCPT</code>, <code>DATA</code>, etc. commands. They can only call <code>HELO</code>, <code>AUTH</code>, etc. The transaction state is where the client can send messages. When the server moves into the update state, it sends any pending messages to the recipient's mail server (or in this case, Twitter). You can read more about SMTP in <a href="http://www.ietf.org/rfc/rfc2821.txt" target="_blank">RFC 2821</a>.

Once I built my SMTP email server and connection manager, it was easy to hook this up to Twitter. I simply parsed the email messages for the recipient's username and sent Direct Messages on the user's behalf.

With that, I had a complete email server setup for sending and receiving Twitter Direct Messages. You can check out the <a href="https://github.com/mbmccormick/twitter-dm-server" target="_blank">code for this project</a> on GitHub.
