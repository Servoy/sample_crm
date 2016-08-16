{
	"name": "servoysample-sc-Tags",
	"displayName": "Tags",
	"version": 1,
	"definition": "servoysample/scTags/scTags.js",
	"libraries": [{
	"name" : "scTags.css",
	"url" : "servoysample/scTags/scTags.css",
	"version" : "1.0.0",
	"mimetype": "text/css"
	}],
	"model":
	{
		"foundset": { "type": "foundset", "pushToServer": "allow" },
		"columns":  { "type":"column[]", "droppable": true, "pushToServer": "shallow", "elementConfig" : {"pushToServer": "shallow"}},
		"styleClass" : { "type": "styleclass", "tags": { "scope": "design" }},
		"visible" : "visible"
	},
	"types":
	{
		"column":
		{
			"dataprovider": {	"type": "dataprovider",	"forFoundset": "foundset" }
		}
	}
}