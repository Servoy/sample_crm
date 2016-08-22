{
	"name": "svygooglemaps-map",
	"displayName": "map",
	"version": 1,
	"definition": "svygooglemaps/map/map.js",
	"libraries": [],
	"model":
	{
		"apiKey" : {"type": "string", "default":"YOUR_API_KEY"},
		"mapObject" : {"type": "object"},
		"zoom" : { "type" : "int", "default" : 16}, 
		"disableDoubleClickZoom" : { "type" : "boolean", "default" : false},
		"draggable": { "type" : "boolean", "default" : true},
		"keyboardShortcuts" : { "type" : "boolean", "default" : true},
		"scrollwheel" : { "type" : "boolean", "default" : true},
		"latitude" : { "type" : "string", "default": "52.3409950" },
		"longitude" : { "type" : "string", "default": "4.8636360" }
	},
	"api":
	{
		"setNewLocation": {"parameters":[
								{                                                                 
 								"name":"lat",
								"type":"Number"
			                	}, 
			                	{                                                                 
 								"name":"lng",
								"type":"Number"
			                	}              
							 ]}
	}
}