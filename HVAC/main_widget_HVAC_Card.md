_[🖍 Add a primary screenshot or a logo here. The first image of the post will be promoted seen in the add-on list in the UI.]_

The HVAC widget card used by main_widget will show all kind of HVAC (air conditioner) equipment in a selected room and show controlls based on equipment group members.

### Usage
All radiator controls need to have their own Group (**Group->Equipment->HVAC** ).
- Equipment Group
  - Type: Group
  - Category: climate (not used)
  - Semantic Class: HVAC
- Power / Switch Item
  - Type: Switch
  - Category: switch (not used)
  - Semantic Class: Control
  - Semantic Class: Power
- Ambient Temperature
  - Type: Number or Number:Temperature
  - Category: temperature (not used)
  - Semantic Class: Measurement
  - Semantic Class: Temperature
- Target Temperature
  - Type: Number or Number:Temperature
  - Category: temperature (not used)
  - Semantic Class: Setpoint
  - Semantic Class: Temperature
- Operation Mode
  - Type: String or Number
  - Category: temperature_cold (not used)
  - Semantic Class: Control
  - Semantic Class: Temperature
- Fanspeed
  - Type: String or Number
  - Category: qualityofservice
  - Semantic Class: Control
  - Semantic Class: Wind
- Vane Position
  - Type: String or Number
  - Category: movecontrol
  - Semantic Class: Control
  - Semantic Class: Wind

Control Mode, Fanspeed and Vane Position use Item options. More Information with example for different thermostats will follow.

For a „fancy“ naming, the widget makes use of the uiSemantics.
Information on usage/configuration can be founde here
https://community.openhab.org/t/semantic-ui-using-enriched-semantic-to-ease-ui-creation/116882

## Changelog
### Version 0.1
- initial release

## Resources

