{
	"name": "servoysample-sc-Card-View",
	"displayName": "View - Cardboard",
	"version": 1,
	"definition": "servoysample/scCardView/scCardView.js",
	"libraries": [{
		"name" : "scCardView.css",
		"url" : "servoysample/scCardView/scCardView.css",
		"version" : "1.0.0",
		"mimetype": "text/css"
	}],
	"model":
	{
		"columns":  { "type":"column[]", "droppable": false },
		"foundset": { "type": "foundset", "pushToServer": "allow" },
		"styleClass" : { "type": "styleclass", "tags": { "scope": "design" }},
	 	"visible" : "visible"
	},
	"types":
	{
		"column":
		{
			"dataprovider": {	"type": "dataprovider",	"forFoundset": "foundset" },
			"image" : {"type" :"media"}
		}
	},
	"handlers":
	{
		"onCardClick" : {
	        	"parameters":[
					{
						"name":"column",
						"type":"int"
					}
				]
		}
	}
}