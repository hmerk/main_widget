// log:set debug org.openhab.model.script.Rules.Experiments

var logger = Java.type("org.slf4j.LoggerFactory").getLogger("org.openhab.model.script.Rules.Experiments");

var UI_NAMESPACE = "uiSemantics";
var FrameworkUtil = Java.type("org.osgi.framework.FrameworkUtil");
var _bundle = FrameworkUtil.getBundle(scriptExtension.class);
var bundle_context = _bundle.getBundleContext()
var MetadataRegistry_Ref = bundle_context.getServiceReference("org.openhab.core.items.MetadataRegistry");
var MetadataRegistry = bundle_context.getService(MetadataRegistry_Ref);
var MetadataKey = Java.type("org.openhab.core.items.MetadataKey");
var Metadata = Java.type("org.openhab.core.items.Metadata");
var itemsAdded = []

function getMetadata(itemName, namespace) {
    return MetadataRegistry.get(new MetadataKey(namespace, itemName));
}

var getValue = function (item, semantic, relation) {
    logger.info("getValue: " + item + " - " + semantic + " - " + " with " + relation)

    var semantics = getMetadata(item, semantic);
    logger.debug(semantic + ":" + semantics)
    if ((semantics !== undefined) && (semantics !== null)) {
        var hasRelation = semantics.configuration[relation]
        logger.debug(relation + ":" + hasRelation)
        if (hasRelation !== undefined) {
            var relationItem = ir.getItem(hasRelation)
            logger.debug(relationItem)
            logger.debug("getValue: " + item + " -> " + relation + " -> " + relationItem.getName())
        }
        else {
            logger.info("No relation found in Model!")
        }
    }
    else {
        logger.info("No semantic found in Model!")
    }

    return hasRelation === undefined ? null : relationItem.getName()
}

var enrichMetadata = function (item, icon) {

    logger.info("Item tested: " + item)
    var prepositionFor = ["Küche", "Werkstatt", "Waschküche", "Bibliothek", "Garage", "Haustür"]
    var uiSemanticsKeys = { "equipment": "", "location": "", "preposition": "", "icon": "", "warn": -30, "fail": -45 }
    var isPointOf = getValue(item, "semantics", "isPointOf");
    logger.debug("Item " + item + " isPointOf: " + isPointOf);

    var equipmentItem = isPointOf === undefined ? ir.getItem(item) : ir.getItem(isPointOf);
    logger.debug("equipmentItem found: " + equipmentItem.name);

    var hasLocation = getValue(equipmentItem.name, "semantics", "hasLocation");
    logger.debug("Item " + equipmentItem.name + " hasLocation: " + hasLocation);

    var locationItem = hasLocation === undefined ? ir.getItem(equipmentItem.name) : ir.getItem(hasLocation);

    uiSemanticsKeys.equipment = equipmentItem.label;
    uiSemanticsKeys.location = locationItem.label;
    uiSemanticsKeys.preposition = (prepositionFor.indexOf(uiSemanticsKeys.location) > -1) ? " in der " : " im ";
    uiSemanticsKeys.icon = icon;

    var warnTimeoutFor = { "LUMITH": -720, "SHELLYDW": -240, "SHELLYFLOOD": -1440 };
    for (var s in warnTimeoutFor) {
        if (item.toUpperCase().indexOf(s) > -1) {
            uiSemanticsKeys.warn = warnTimeoutFor[s];
            break;
        }
    }
    uiSemanticsKeys.fail = uiSemanticsKeys.warn * 1.5;

    if (getValue(item, UI_NAMESPACE, "equipment") !== null) {
        logger.info("Item: " + item + " UPDATE Metadata in " + UI_NAMESPACE + ": " + uiSemanticsKeys.equipment + uiSemanticsKeys.preposition + uiSemanticsKeys.location);
        itemsAdded.push(item)
        MetadataRegistry.update(new Metadata(new MetadataKey(UI_NAMESPACE, item), null, uiSemanticsKeys));
    } else {
        logger.info("Item: " + item + " ADD Metadata in " + UI_NAMESPACE + ": " + uiSemanticsKeys.equipment + uiSemanticsKeys.preposition + uiSemanticsKeys.location);
        itemsAdded.push(item)
        MetadataRegistry.add(new Metadata(new MetadataKey(UI_NAMESPACE, item), null, uiSemanticsKeys));
    }
    return null;
}

function enrichMetadataForGroup(group) {
    var items = ir.getItem(group).getMembers();
    for each(var item in items) {
        enrichMetadata(item.name);
    }
}

logger.info("Starting: Collecting semantics ...")

enrichMetadataForGroup("HausSicherheit");
//enrichMetadataForGroup("gGF_Lights");
//enrichMetadataForGroup("gBasement_Lights");
//enrichMetadataForGroup("gOutdoor_Lights");

for each(var item in itemsAdded) {
    logger.debug("added: " + item)
}

for each(var item in MetadataRegistry.getAll()) {
    logger.debug("found in Registry item: " + item)
    logger.debug("found in Registry UID: " + item.getUID())
    logger.debug("found in Registry NameSpace: " + item.getUID().getNamespace())
    logger.debug("found in Registry ItemName: " + item.getUID().getItemName())

    if (item.getUID().getNamespace() == UI_NAMESPACE) {
        logger.debug("found in Registry: " + item)
        if (itemsAdded.indexOf(item.getUID().getItemName()) > -1) {
            logger.debug("keep item")
        }
        else {
            logger.info("remove item" + item.getUID().getItemName())
            MetadataRegistry.remove(new MetadataKey(UI_NAMESPACE, item.getUID().getItemName()))
        }
    }
}
