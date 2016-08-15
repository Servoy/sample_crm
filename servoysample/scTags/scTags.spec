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
		"dataProviderID": { "type":"dataprovider",  "pushToServer": "allow", "tags": { }, "ondatachange": { "onchange":"onDataChangeMethodID"}}
	},	
	"handlers": 
	{
        "onDataChangeMethodID" 	: "function"
	}
}