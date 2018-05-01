---
title: How Value Area/POC are calculated
order: 61
---
Three calculation methods are supported,

* TPO is the classic original Steidlmayer method to take the price with the largest amount of TPO (POC) and then go up and down until 68% of the TPO are included
* Volume is based only on volume, take the price that has the largest volume and do up and down until 68% of the volume is included.
* VWAP is a more modern calculation that start from [VWAP](http://www.investopedia.com/terms/v/vwap.asp) which is a weighted average of the price based on volume
![va_calculation](/media/va_calculation.png)
