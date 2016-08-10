{
	"name": "servoysample-mainheader",
	"displayName": "mainheader",
	"version": 1,
	"definition": "servoysample/mainheader/mainheader.js",
	"libraries": [],
	"model":
	{
		"logo" : {"type": "media"},
		"userName": {"type":"string", "default": "UserName"},
		"menuItems": {"type": "item[]"}
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