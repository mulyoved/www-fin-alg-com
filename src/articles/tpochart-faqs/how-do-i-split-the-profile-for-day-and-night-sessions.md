---
title: How do I split the profile for day and night sessions
order: 10
---
![Session manager](/media/sessionmanager.png)

To configure the session times and optionally split the profile for day and night session, use the NinjaTrader session manager to configure the sessions times.

![Session Template](/media/selectsessiontemplate.png")

use this session template when you open the chart, TPOChart will use the session information and will build a profile for each session

For example, in the session manger you can configure those sessions

Sunday 4:16 PM to Monday 9:30 AM

Monday 9:30 AM to Monday 4:15 PM

Monday 4:16 PM to Tuesday 9:30 AM

And so on

To test this open a normal 10 min chart, make sure you get the correct sessions, The add the TPOChart indicator to the chart and set Show Bars = True so you can see the exact bars of each session.
