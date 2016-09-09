{
	"name": "svytimeline-timeline",
	"displayName": "timeline",
	"version": 1,
	"definition": "svytimeline/timeline/timeline.js",
	"libraries": [{"name":"timeline.css", "version":"1.0.0", "url":"svytimeline/timeline/timeline.css", "mimetype":"text/css"}],
	"model":
	{
		"foundset"				: { "type": "foundset"},
		"imageDataProviderID"	: { "type":"dataprovider", "tags": {"scope":"design"},"forFoundset": "foundset"},
		"dateDataProviderID"	: { "type":"dataprovider", "tags": {"scope":"design"},"forFoundset": "foundset"},
		"dateFormat"			: {"for":["dateDataProviderID"] , "type" :"format"},
		"titleDataProviderID"	: { "type":"dataprovider", "tags": {"scope":"design"},"forFoundset": "foundset"},
		"messageDataProviderID"	: { "type":"dataprovider", "tags": {"scope":"design"},"forFoundset": "foundset"},
	 	"visible" 				: "visible"
	}
}