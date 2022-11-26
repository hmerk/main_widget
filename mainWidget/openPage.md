![image|281x499](https://community-openhab-org.s3.dualstack.eu-central-1.amazonaws.com/original/3X/a/3/a348d51462ce6a0a8617cf15da3e46cf865c6645.jpeg)

The "main_widget" project is a series of widgets to create a new mobile view for controlling your openHAB installation.
For full functionality, you will need to install all widgets listed in the development thread.
https://community.openhab.org/t/oh3-main-ui-new-main-widget-development-and-testing-wip/138794/1

Installation:
- If you want a specific ordering in the floors and/or rooms menu, please add the widgetOrderIndex as metadata to your items in the model.

Example for textual item import
```csv
Group   Attic           "Attic"                     <attic>                             ["Attic"]           {widgetOrder="1"}
Group   FirstFloor      "FirstFloor"                <firstfloor>                        ["FirstFloor"]      {widgetOrder="2"}
Group   GroundFloor     "GroundFloor"               <groundfloor>                       ["GroundFloor"]     {widgetOrder="3"}
Group   Cellar          "Cellar"                    <cellar>                            ["Basement"]        {widgetOrder="4"}

Group   Office          "Office"                    <office>            (Attic)         ["Room"]            {widgetOrder="1"}
Group   Guest           "Guestroom"                 <suitcase>          (Attic)         ["Bedroom"]         {widgetOrder="2"}
Group   CorridorFF      "Corridor Firstfloor"       <corridor>          (FirstFloor)    ["Corridor"]        {widgetOrder="3"}
Group   Childroom       "Childroom"                 <bedroom_blue>      (FirstFloor)    ["Bedroom"]         {widgetOrder="4"}
Group   Bathroom        "Bathroom"                  <bath>              (FirstFloor)    ["Bathroom"]        {widgetOrder="5"}
Group   Bedroom         "Bedroom"                   <bed>               (FirstFloor)    ["Bedroom"]         {widgetOrder="6"}
```

- Install all needed widgets for this project from the marketplace.
- Create an new layout page in openHAB MainUI
- Enter the `Code` tab for the new page and paste the following code

https://github.com/hmerk/main_widget/blob/main/mainWidget/openPage.yaml

configure the main_widget on your new page with the missing information (some items/groups need to be defined.) using the `Code` page.

```yaml
  default:
    - component: widget:main_widget
      config:
        locationTitle: Jüchen
        scenesGroup: myScenes
```

## Screenshots

## Changelog
### Version 0.4
- removed need to press room button after selecting room from floors menu
- removed usage of separate floors and rooms card, therefore introduced "FloorsAndRooms"
- introduced usage of uiSemantics for labels, see
https://community.openhab.org/t/semantic-ui-using-enriched-semantic-to-ease-ui-creation/116882
### Version 0.3
- fixed top and bottom spacing [@Nic0205]
- changed bottom tabs from button to oh link for further improvements [@Nic0205]
- refactored repeater usage to remove need of additional tags [@hmerk]
- code splitting, moved information middle part to separate widgets. [@hmerk]
### Version 0.3
- fixed menu sorting and coloring
- changed margins to better use screen space
### Version 0.2
- added menu entry sorting for floors and rooms [@Nic0205]
- new config options for scene and security group and security mode [@hmerk]
### Version 0.1
- initial release

## Resources
https://github.com/hmerk/main_widget/blob/main/mainWidget/main_widget.yaml
