---
title: 'Some days data is missing, what can be done?'
order: 55
---
TPOChart is based on NinjaTrader data, to analyze the problem:
* Open new normal 10 min chart, make sure you get all the data if not, use the chart context menu to realod history
* Add the TPOChart Indicator to the chart, don't use the template, just add the indicator to the chart
* Set Show Bars (Overlay) = True, this will show the chart bars, see if you still get all the bars for the missing days
