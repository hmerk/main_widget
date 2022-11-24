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

Example for textual item import

```csv
DateTime    comfortOnChildWeek          "Comfort Week"          <time>  (RadiatorChild) ["Control", "Timestamp"] {stateDescription=" "[pattern="%1$tH:%1$tM"],widgetOrder="1"}
DateTime    ecoOnChildWeek              "ECO Week"              <time>  (RadiatorChild) ["Control", "Timestamp"] {stateDescription=" "[pattern="%1$tH:%1$tM"],widgetOrder="2"}
DateTime    comfortOnChildWeekend       "Comfort Weekend"       <time>  (RadiatorChild) ["Control", "Timestamp"] {stateDescription=" "[pattern="%1$tH:%1$tM"],widgetOrder="3"}
DateTime    ecoOnChildWeekend           "ECO Weekend"           <time>  (RadiatorChild) ["Control", "Timestamp"] {stateDescription=" "[pattern="%1$tH:%1$tM"],widgetOrder="4"}
Switch      timeControlHeatingChild     "Timecontrol Childroom" <time>  (RadiatorChild) ["Control", "Timestamp"]
```


Control Mode uses Item options. More Information with example for different thermostats will follow.

For a „fancy“ naming, the widget makes use of the uiSemantics.
Information on usage/configuration can be founde here

https://community.openhab.org/t/semantic-ui-using-enriched-semantic-to-ease-ui-creation/116882


## Changelog
### Version 0.4
Add heating schedules and improve documentation
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
https://github.com/hmerk/main_widget/blob/main/RadiatorControl_Extended/main_widget_RadiatorControl_Card.yaml

