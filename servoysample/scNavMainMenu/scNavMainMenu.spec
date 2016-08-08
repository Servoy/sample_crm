{
	"name": "servoysample-sc-Nav-Main-Menu",
	"displayName": "Navigation Main",
	"version": 1,
	"definition": "servoysample/scNavMainMenu/scNavMainMenu.js",
	"libraries": [
			{"name":"scNavMainMenu.css", "version":"1.0.0", "url":"servoysample/scNavMainMenu/scNavMainMenu.css", "mimetype":"text/css"}
		],
	"model":
	{
		"logoTitle" : {"type": "string", "default":"Servoy"},
		"headerTitle" : {"type": "string", "default":"Sample CRM"},
		"menuItems" : {"type": "item[]", "droppable": false }
	},
	"types": 
	{
		"item":
		{
			"faImage" : {"type" : "styleclass"},
			"title" : {"type": "string"},
			"visible" : "visible"
		}
	}
}