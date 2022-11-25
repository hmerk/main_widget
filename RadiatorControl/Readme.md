_[🖍 Add a primary screenshot or a logo here. The first image of the post will be promoted seen in the add-on list in the UI.]_

The RadiatorControl card used by main_widget will show all radiator controls (thermostats) in a selected room and show controls based on equipment group members.

## Usage

All radiator controls need to have their own Group (**Group->Equipment->RadiatorControl**).

- Equipment Group
  - Type: Group
  - Category: heating (not used)
  - Semantic Class: RadiatorControl
- Ambient Temperature
  - Type : Number or Number:Temperature
  - Category: temperature (not used)
  - Semantic Class: Measurement
  - Semantic Property: Temperature
- Target Temperatur
  - Type : Number or Number:Temperature
  - Category: temperature (not used)
  - Semantic Class: Setpoint
  - Semantic Property: Temperature
- Control Mode
  - Type : String or Number (type not used)
  - Category: temperature (not used)
  - Semantic Class: Control
  - Semantic Property: Temperature

Control Mode uses Item options. More Information with example for different thermostats will follow.

For a „fancy“ naming, the widget makes use of the uiSemantics.
Information on usage/configuration can be found here

https://community.openhab.org/t/semantic-ui-using-enriched-semantic-to-ease-ui-creation/116882


## Changelog
### Version 0.3.1
Documentation update
### Version 0.3
- fixed styling
### Version 0.2
- fixed dynamic colors and values
### Version 0.1
- initial release
- <s>known limitations : values and colors are not dynamic atm.</s>

## Resources

