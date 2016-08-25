{
	"name": "svysimplenavigation-svymenubar",
	"displayName": "Nav Sidebar",
	"version": 1,
	"definition": "svysimplenavigation/svymenubar/svymenubar.js",
	"libraries": [{"name":"svymenubar.css", "version":"1.0.0", "url":"svysimplenavigation/svymenubar/svymenubar.css", "mimetype":"text/css"}],
	"model":
	{
		"height"       : {"type":"int", "default":0},
		"menuItems"    : {"type": "item[]"},
		"menuView"     : {"type": "string", "default": "full", "values": ["full", "mini"]},
		"styleclass"   : {"type": "styleclass"}
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
		"getCurrentMenuView" : {"returns": "string"}
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