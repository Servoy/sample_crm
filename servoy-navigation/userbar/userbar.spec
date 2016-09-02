{
	"name": "servoynavigation-userbar",
	"displayName": "Headerbar",
	"version": 1,
	"definition": "servoynavigation/userbar/userbar.js",
	"libraries": [{"name":"userbar.css", "version":"1.0.0", "url":"servoynavigation/userbar/userbar.css", "mimetype":"text/css"}],
	"model":
	{
		"logo"          			: {"type": "media"},
		"showToggleMenu"			: {"type": "protected","blockingOn": false, "default": true},
		"userImageDataProviderID" 	: {"type": "dataprovider", "tags": { "scope": "design", "typeName": "mediaDataprovider" }, "displayTagsPropertyName" : "displaysTags"}, 
		"userNameDataProviderID"    : {"type": "dataprovider", "tags": { "scope": "design"}, "displayTagsPropertyName" : "displaysTags"},
		"menuItems"     			: {"type": "item[]"},
		"styleclass"    			: {"type": "styleclass"}
	},
	"handlers":
	{
		"toggleMenuButton": {},
		"menuItemClick": {}
	},
	"types":
	{
		"item": {
			"itemText": {"type":"string"},
			"itemFaIconName" :{"type":"string"},
			"enabled": {"type":"enabled"}
		}
	}
}