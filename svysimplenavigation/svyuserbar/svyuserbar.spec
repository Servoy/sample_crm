{
	"name": "svysimplenavigation-svyuserbar",
	"displayName": "User Headerbar",
	"version": 1,
	"definition": "svysimplenavigation/svyuserbar/svyuserbar.js",
	"libraries": [{"name":"svyuserbar.css", "version":"1.0.0", "url":"svysimplenavigation/svyuserbar/svyuserbar.css", "mimetype":"text/css"}],
	"model":
	{
		"logo"          : {"type": "media"},
		"showToggleMenu": {"type": "protected","blockingOn": false, "default": true},
		"userName"      : {"type": "string", "default": "UserName"},
		"userImage"		: {"type": "media"},
		"menuItems"     : {"type": "item[]"},
		"styleclass"    : {"type": "styleclass"}
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