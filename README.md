# main_widget
Repository for colaboration in the [main_widget project](https://community.openhab.org/t/oh3-main-ui-main-widget-part-1-the-main-widget/138812)

## Vision
The idea is to have a UI for [openHAB3](https://www.openhab.org/) that dynamically  configures itself automatically using the data of the [openHAB semantic model](https://www.openhab.org/docs/tutorial/model.html#semantic-model).

![mainWidget](images/mainWidget_overview.jpg)

## Concept idea
This main UI widget is based on a proper configuration of the [openHAB semantic model](https://www.openhab.org/docs/tutorial/model.html#semantic-model). The project aims show all information automatically - if found in the model - without additional configuration by the user.

To help getting more information about an item we make use of an extention of the semantic model via the [uiSemantics](https://community.openhab.org/t/semantic-ui-using-enriched-semantic-to-ease-ui-creation/116882).

The UI is split into multiple specialized widgets that are shown if the model contains the needed data.

* [openPage](mainWidget/openPage.md)
* [Main widget](mainWidget/main_widget.md)
* [Home widget](mainWidget/main_widget_Home.md)
* [Floors and Rooms widget](mainWidget/main_widget_FloorsAndRooms.md)
* [Weather widget](Weather\main_widget_Weather_Card.md)
* [Security widget](Security\main_widget_Security_Card.md)
  * including the [Keypad widget](Security\main_widget_Security_Keypad.md)
* [Scenes widget](Scenes\main_widget_Scene_Card.md)
* [Light widget](Lights\main_widget_Light_Card.md)
* [Radiator widget](RadiatorControl\main_widget_RadiatorControl_Card.md)
* [HVAC widget](HVAC\main_widget_HVAC_Card.md)
* [Rollershutter widget](Rollershutter\main_widget_Rollershutter_Card.md)

## item configuration requirements
| type               | type                 | category     | semantic class  | semantic property | used in card        |
| ------------------ | -------------------- | ------------ | --------------- | ----------------- | ------------------- |
| Battery voltage    | Number:Dimensionless | BatteryLevel | Measurement     | Voltage           | Radiator extended   |
| Battery low        | Switch               | LowBattery   | LowBattery      | Voltage           | Radiator extended   |
| Door State         | Contact              | Door         | OpenState       | Opening           | Security            |
| Window state       | Contact              | Window       | OpenState       | Opening           | Security            |
| Motion detected    | Switch               | Motion       | Alarm           | Presence          | Security            |
| Thermostat         | Group                | Heating      | RadiatorControl | None / don't care | Radiator (extended) |
| -->Act Temperature | Number:Temperature   | Temperature  | Measurement     | Temperature       | Radiator (extended) |
| -->Set Temperature | Number:Temperature   | Temperature  | SetPoint        | Temperature       | Radiator (extended) |
| Rollershutter      | Group                | Blinds       | Blinds          | None / don't care | Rollershutter       |
| -->Level           | Rollershutter        | Blinds       | SetPoint        | Level             | Rollershutter       |
| -->Mode            | Switch               | switch       | Control         | Level             | Rollershutter       |
| Light(simple)      | Group                | LightBulb    | LightBulb       | None / don't care | Light               |
| -->State           | Switch               | LightBulb    | Status          | Light             | Light               |
| Light(dimmer)      | Group                | LightBulb    | LightBulb       | None / don't care | Light               |
| -->Brightness      | Dimmer               | Light        | Control         | Light             | Light               |
| Light(color)       | Group                | LightBulb    | LightBulb       | None / don't care | Light               |
| -->Brightness      | Dimmer               | Light        | Control         | Light             | Light               |
| -->Color           | Dimmer               | colorlight   | Control         | Light             | Light               |

## Community
Please check [openHAB community](https://community.openhab.org/t/oh3-main-ui-new-main-widget-development-and-testing-wip/138794) for discussions and proposals.
