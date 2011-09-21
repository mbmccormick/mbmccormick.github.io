--- 
layout: post
title: Telephony Made Easy with Twilio
published: true
tags: 
- api
- automation
- Development
- fun
- google
- internet
- Projects
- python
- robot
- summer
- twilio
- Web
type: post
status: publish
---
I've been working on a new project lately over on the <a href="http://code.google.com/appengine/" target="_blank">Google App Engine</a>. I ran across this <a href="http://code.google.com/p/parsedatetime/" target="_blank">project</a> that makes parsing human-readable date and time values extremely easy in Python, a language that seems to have difficulties with dates and times. I decided to write a simple reminder service that let's the user specify a time, an email address, and a message to be delivered to the user. After wrestling with timezones in Python, I finally got it to work. But I wasn't satisfied, I wanted to expand the application to deliver more useful reminders- text messages or phone calls.

After searching high and low for different SMS gateways, calling providers, etc. that met the budget that I was on (a very small one), I ran across <a href="http://www.twilio.com/" target="_blank">Twilio</a>. I remember hearing the name before, but I couldn't remember <a href="http://techcrunch.com/2010/02/09/twilio-sms-api/" target="_blank">where</a> at the time. At first I was a little skeptical about what they had to offer, but then I saw that they have a free trial program that let's you play around with a test phone number and their API before you pay for an upgrade. The <a href="http://www.twilio.com/docs/index" target="_blank">documentation</a> and <a href="http://www.twilio.com/docs/howto/" target="_blank">examples</a> on their site were extremely helpful, more importantly, they were even easier to replicate and run on my own. Satisfied with what Twilio had to offer with their API, I decided to upgrade my account and get my own number.

One of the greatest features of Twilio is that it runs on a pay-as-you-go <a href="http://www.twilio.com/pricing-signup" target="_blank">model</a>, there are no contracts, and no obligations. I upgraded my trial account, which included $30 in credit, by purchasing $20 in credit. I then wanted my own number, which would run me $1 each month (they also have toll-free numbers for another dollar each month). There was no wait time for my account upgrade, everything was instant. I literally added texting functionality to my reminder service in about 3 hours, it's that fast.

Enough about the service, down to the nitty gritty. Texting was by far the easiest function to implement. I added the Twilio Python <a href="http://www.twilio.com/docs/libraries/" target="_blank">library</a> to my Google App Engine project. Take a look at the snippet below:

[sourcecode language="python"]
def sendText(self, text, destination):
    ApiVersion = &quot;2008-08-01&quot;
    AccountSid = &quot;AXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&quot;
    AuthToken = &quot;YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY&quot;
    account = twilio.Account(AccountSid, AuthToken)

    d = {
        'To' : destination,
        'From' : '505-609-8968',
        'Body' : &quot;Remindable: &quot; + text
    }

    account.request('/%s/Accounts/%s/SMS/Messages' % (ApiVersion, AccountSid), 'POST', d)
[/sourcecode]

That was literally it! My reminder service was sending text messages left and right. Excited with the new web service I had to play around with, I decided to add phone call functionality. This is a little more in-depth, but not by much at all. Calling is two-fold: you send an HTTP POST request to Twilio which initiates the phone call. When the user picks up, Twilio places an HTTP POST request to my reminder service, which responds with the reminder message. Take a look at the first method below:

[sourcecode language="python"]
def sendCall(self, text, destination, id):
    ApiVersion = &quot;2008-08-01&quot;
    AccountSid = &quot;AXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&quot;
    AuthToken = &quot;YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY&quot;
    account = twilio.Account(AccountSid, AuthToken)

    d = {
        'Called' : destination,
        'Caller' : '505-609-8968',
        'Url' : 'http://remindable.appspot.com/call?id=' + str(id)
    }

    account.request('/%s/Accounts/%s/Calls' % (ApiVersion, AccountSid), 'POST', d)
[/sourcecode]

Next, I created a method that would respond with a simple XML response that Twilio would use during the phone call, have a look:

[sourcecode language="python"]
def post(self):
    alarm = Remindable.get_by_id(int(self.request.get('id')))

    try:
        self.response.headers[&quot;Content-Type&quot;] = &quot;text/xml&quot;
        self.response.out.write(&quot;&lt;?xml version='1.0' encoding='UTF-8' ?&gt;\n&quot;)
        self.response.out.write(&quot;&lt;Response&gt;&quot;)
        self.response.out.write(&quot;&lt;Say&gt;Your remindable has arrived! &quot; + alarm.text + &quot;&lt;/Say&gt;&quot;)
        self.response.out.write(&quot;&lt;/Response&gt;&quot;)
        alarm.delete()
    except Exception, detail:
        self.response.out.write('An error occurred while sending a Remindable.\n\nException: %s' % detail)
[/sourcecode]

See how easy that was? I was amazed. Using what I learned from the texting, I had phone calling up and running in about an hour. I could not believe how easy and affordable telephony was for developers. I can't wait to play around with the other features that Twilio has to offer. You can be sure that there will be many more projects from me this summer that take advantage of this service. It is truly the coolest web service I've ever used.

You can check out Remindable live <a href="http://remindableapp.com/" target="_blank">here</a>.
