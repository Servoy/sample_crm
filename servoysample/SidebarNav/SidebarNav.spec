{
	"name": "servoysample-Sidebar-Nav",
	"displayName": "Nav - Menubar",
	"version": 1,
	"definition": "servoysample/SidebarNav/SidebarNav.js",
	"libraries": [{"name":"simple-sidebar.css", "version":"1.0.0", "url":"servoysample/SidebarNav/simple-sidebar.css", "mimetype":"text/css"},
	{"name":"sidebar-menu.js", "version":"1.0.0", "url":"servoysample/SidebarNav/sidebar-menu.js", "mimetype":"text/javascript"}],
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