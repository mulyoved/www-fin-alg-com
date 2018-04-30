---
title: 'Downloaded and installed TPOChart, cannot find it in my indicator list'
order: 162
---
* Confirm the installation was working correctly by checking the folder Documents\NinjaTrader 8\bin\Custom and make sure you have a file Final.TPOChart.dll,
* If not exit NinjaTrader, make sure AntiVirus is disabled and run the installer again.
* If still cannot find it check if the dll was installed under different user, users can be found under "C:\Users\" and you should check each "C:\Users\\[user]\Documents\NinjaTrader 7\bin\Custom" folder for the dll, in that case try to install again and make sure to install to the correct user or you can just copy the dll to the right user.
* After starting NinjaTrader check the NinjaTrader log and make sure DLL was loaded correctly, look for a line that say "Vendor assembly 'Final.TPOChart' version='8.0.0.*' loaded"
* Open the indicator list and look for " TPO and Volume Profile Chart (v4)", Notice it should be at the top of the list as there is a leading space to the name.
