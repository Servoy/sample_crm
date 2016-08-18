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
		"Latitude" : { "type" : "string", "default": "52.3409950" },
		"Longitude" : { "type" : "string", "default": "4.8636360" }
	},
	"api":
	{
		"setMapByAddress": {"parameters":[
								{                                                                 
 								"name":"address",
								"type":"string"
			                	}             
							 ]}
	}
}