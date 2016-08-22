{
	"name": "servoysample-sc-Main-Menu",
	"displayName": "mainmenu",
	"version": 1,
	"definition": "servoysample/scMainMenu/scMainMenu.js",
	"libraries": [{"name": "scMainMenu.css","version": "1","url": "servoysample/scMainMenu/scMainMenu.css","mimetype": "text/css"}],
	"model":
	{
	  "menu"	: {"type": "object"},
		"size"				: {"type": "dimension","default": {"width": 150,"height": 140}},
		"location" 			: {"type":"point"},
		"visible"  			: {"type":"visible"}
	},
	"handlers": {
		"onActivateMenuItem": {
			"type": "function"
		}
	}
}