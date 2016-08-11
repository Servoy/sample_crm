{
	"name": "servoysample-Sidebar-Nav",
	"displayName": "Nav - Menubar",
	"version": 1,
	"definition": "servoysample/SidebarNav/SidebarNav.js",
	"libraries": [{"name":"simple-sidebar.css", "version":"1.0.0", "url":"servoysample/SidebarNav/simple-sidebar.css", "mimetype":"text/css"},
	{"name":"sidebar-menu.js", "version":"1.0.0", "url":"servoysample/SidebarNav/sidebar-menu.js", "mimetype":"text/javascript"}],
	"model":
	{
		"menuItems" : {"type": "item[]"}
	},
	"types":
	{
		"item": {
			"itemText": {"type":"string"},
			"itemFaIconName" :{"type":"string"},
			"onAction": { "type": "function"}
		}
	}
}