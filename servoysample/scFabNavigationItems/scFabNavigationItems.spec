{
	"name": "servoysample-sc-Fab-Navigation-Items",
	"displayName": "scFabNavigationItems",
	"version": 1,
	"definition": "servoysample/scFabNavigationItems/scFabNavigationItems.js",
	"libraries": [],
	"model":
	{
		"menuItems" : {"type":"items[]", "default":[], "pushToServer": "deep" },
		"icon" : {"type":"media"}
	},
	"types":
	{
		"items": {
	  		"name": "string",
	  		"containedForm": "form",
	  		"text": "tagstring",
	  		"relationName": "relation",
	  		"active": {"type" : "boolean", "tags":{"scope": "private"}, "default": false},
	  		"disabled": {"type" : "boolean", "default": false}
	  	}
	}
}