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
		"Latitude" : { "type" : "string", "default": "" },
		"Longitude" : { "type" : "string", "default": "" }
	}
}