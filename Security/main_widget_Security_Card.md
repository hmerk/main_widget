- [Screenshots](#screenshots)
- [model configuration requirements](#model-configuration-requirements)
- [Changelog](#changelog)
  - [Version 0.2](#version-02)
  - [Version 0.1](#version-01)
- [Resources](#resources)

![image](https://user-images.githubusercontent.com/5521736/204392641-454f9cdb-1d7a-44f0-965b-04117a44b892.png)


This widget card will show the members of your configured security groups and the state of your alarm system. For usage, you will need the following groups and items in your modell and configured within the main_widget.
- **securityGroup** [semantic or non semantic]
  The security group holds all items of type contact, motion or camera. The state of ech item will be shown as a badge.
- **securityMode**
  The securityMode item is of type string item which can have the following states (strings): disarmed, armed-away and armed-home. The state will colorize the icons like shown below [inactive - gray, active green or red]

## Screenshots

![image|572x433](https://community-openhab-org.s3.dualstack.eu-central-1.amazonaws.com/original/3X/f/e/fe679e62729afd3fcdccd038e7a5a268eb5a8d9b.png)

## model configuration requirements
The widget requires the model to be configured in a certain way to pick up the right data.

- equipment
  - all equipments must be linked to a location
    - for uiSemantics only
    - "hasLocation"
- items
  - all items must be liked to an equipment
    - for uiSemantics only
    - "isPointOf"
  - [Door Sensor](../images/SecurityCard_DoorSensor.jpg)
    - Category: door
    - Semantic Class: OpenState
  - [Window Sensor](../images/SecurityCard_WindowSensor.jpg)
    - Category: window
    - Semantic Class: OpenState
  - [Motion Sensor](../images/SecurityCard_MotionSensor.jpg)
    - Category: motion
    - Semantic Class: Alarm
    - Semantic Property: Presence
  - [Surveillance](../images/SecurityCard_CameraSensor.jpg)
    - Category: camera
    - Semantic Class: Control
    - Semantic Property: Power

## Changelog
### Version 0.2
- styling changes
- implemented accordion lists with badges
- added pin secured buttons for changing security mode. To use this, you need to install the [main_widget_Security_Keypad](https://community.openhab.org/t/oh3-main-ui-main-widget-part-6a-the-security-keypad/139465) widget as well.
### Version 0.1
- initial release

## Resources

https://github.com/hmerk/main_widget/blob/main/Security/main_widget_Security_Card.yaml
