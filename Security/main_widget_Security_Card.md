![image|690x272](upload://aQIbY26oEIUtSXnJralvyQKmw6V.png)

This widget card will show the members of your configured security groups and the state of your alarm system. For usage, you will need the following groups and items in your modell and configured within the main_widget.
- securityGroup [semantic or non semantic]
  The security group holds all items of type contact, motion or camera. The state of ech item will be shown as a badge.
- securityMode
  The securityMode item is of type string item which can have the following states (strings): disarmed, armed-away and armed-home. The state will colorize the icons like shown below [inactive - gray, active green or red]

## Screenshots

![image|572x433](upload://AizhkrJYIkYHUKsNNzyMhX6DTrJ.png)


## Changelog
### Version 0.2
- styling changes
- implemented accordion lists with badges
- added pin secured buttons for changing security mode. To use this, you need to install the [main_widget_Security_Keypad](https://community.openhab.org/t/oh3-main-ui-main-widget-part-6a-the-security-keypad/139465) widget as well.
### Version 0.1
- initial release

## Resources

