{
	"name": "servoynavigation-menubar",
	"displayName": "Sidebar",
	"version": 1,
	"definition": "servoynavigation/menubar/menubar.js",
	"libraries": [{"name":"menubar.css", "version":"1.0.0", "url":"servoynavigation/menubar/menubar.css", "mimetype":"text/css"}],
	"model":
	{
		"height"       		: {"type":"int", "default":0},
		"menuItems"    		: {"type": "item[]"},
		"menuViewcollapse"	: {"type": "boolean", "pushToServer": "shallow", "default": "false"},
		"styleclass"   		: {"type": "styleclass"}
	},
	"handlers":
	{
		"onItemClick": {"parameters":[
								{
						          "name":"itemName",
								  "type":"String"
								}
							 ]
						}
	},
	"api": {
		"isMenuCollapsed" : {"returns": "boolean"}
	},
	"types":
	{
		"item": {
			"itemText": {"type":"string"},
			"itemFaIconName" :{"type":"string"},
			"subItems": { "type": "subItem[]"},
			"enabled": {"type": "protected", "default": true}
		},
		"subItem": {
			"itemText": {"type":"string"},
			"itemFaIconName" :{"type":"string"},
			"enabled": {"type": "protected", "default": true}
		}
	}
}