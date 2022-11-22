![image|283x193](upload://oYtGANzaqf4MhzPl8G9NBdFxLBR.png)


The main_widget rollershutter card is one of the sub widgets to let you control your rollershutters with a unique look and feel.
Apart from just controling your rollershutters with sending up and down commands, you can also send predefined values like 50% to your device.
Latest version now supports to control time based opening and closing of rollershutters with the new DateTime-trigger for rules.

## Installation and Setup
This widget can be installed via the marketplace. For basic operation, no configuration is needed. If you would like to have "fancy names" for your rollershutter cards, please add the uiSemantics to your Equipment groups like described here
https://community.openhab.org/t/semantic-ui-using-enriched-semantic-to-ease-ui-creation/116882

To use the time based triggers, there eare some additional steps needed.
- Install the timepicker widget from the marketplace.
  - https://community.openhab.org/t/time-picker/118865 
- You will need 5 additional items in your rollershutter equipment group, here we take the rollershutters in the childroom as an example
  - A Switch item to enable/disable the automatic/time control [mandatory]
    - Name: modeBlindsChildAuto
    - Label: Timecontrol blinds childroom
    - Type: Switch
    - Category: Switch
    - Semantic Class: Control
    - Semantic Property: Level
  - 4 DateTime items for holding the different Times, openWeekday, closeWeekday, openWeekend, closeWeekend [optional]
    - Name: openBlindsChildWeekday
    - Label: Open Blinds Child Weekdays
    - Type: DateTime
    - Category: time
    - Semantic Class: Point
    - Semantic Property: Timestamp
    Please add the following State Description (pattern) as a metadata to al 4 of those items
      - %1$tH:%1$tM
    - You will then need to add initial states to the 4 items via API-Explorer.
  - Create 4 rules for opening and closing the rollershutter [optional]
    -  When : it is a daten and time specified in an item -> choose item "openBlindsChildWeekday"
    -  Then : Send command up to rollershutter item
    -  But only if
      - Ephemeris : it is a weekday
      - If modeBlindsChildAuto = ON
      - If Rollershutter state != 0
    
    Codepage for the rule:
    
    '''csv
    configuration: {}
triggers:
  - id: "1"
    configuration:
      itemName: openBlindsChildWeek
      timeOnly: true
    type: timer.DateTimeTrigger
conditions:
  - inputs: {}
    id: "3"
    configuration:
      offset: 0
    type: ephemeris.WeekdayCondition
  - inputs: {}
    id: "4"
    configuration:
      itemName: modeBlindsChildAuto
      state: ON
      operator: =
    type: core.ItemStateCondition
  - inputs: {}
    id: "5"
    configuration:
      itemName: rollershutterChild_Control
      state: "0"
      operator: "!="
    type: core.ItemStateCondition
actions:
  - inputs: {}
    id: "2"
    configuration:
      command: UP
      itemName: rollershutterChild_Control
    type: core.ItemCommandAction
    '''
    
    Repeat this for all 4 times to control.

## Screenshots

_[🖍 Upload other screenshots if necessary or remove the section.]_

## Changelog
### Version 0.5
- minor styling update
### Version 0.4
- changed some colors for better readability in dark mode
### Version 0.3
- fixed some design issues
### Version 0.2
- added time control and uiSemantics
### Version 0.1
- initial release

## Resources

