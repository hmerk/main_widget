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
* [Presence widget](Presence\main_widget_Presence_Card.yaml)
* [Radiator widget](RadiatorControl\main_widget_RadiatorControl_Card.md)
* [HVAC widget](HVAC\main_widget_HVAC_Card.md)
* [Rollershutter widget](Rollershutter\main_widget_Rollershutter_Card.md)

## Community
Please check [openHAB community](https://community.openhab.org/t/oh3-main-ui-new-main-widget-development-and-testing-wip/138794) for discussions and proposals.
