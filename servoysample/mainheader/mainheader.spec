{
	"name": "servoysample-mainheader",
	"displayName": "Nav - User Headerbar",
	"version": 1,
	"definition": "servoysample/mainheader/mainheader.js",
	"libraries": [],
	"model":
	{
		"logo"          : {"type": "media"},
		"showToggleMenu":{"type": "protected","blockingOn": false, "default": true},
		"userName"      : {"type":"string", "default": "UserName"},
		"menuItems"     : {"type": "item[]"},
		"styleclass"    : {"type": "styleclass"}
	},
	"handlers":
	{
		"toggleMenuButton": {}
	},
	"types":
	{
		"item": {
			"itemText": {"type":"string"},
			"itemFaIconName" :{"type":"string"},
			"onAction": { "type": "function"},
			"enabled": {"type":"enabled"}
		}
	}
}