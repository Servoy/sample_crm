{
	"name": "svyfontawesome-fa-Icon",
	"displayName": "Icon",
	"version": 1,
	"icon": "svyfontawesome/faIcon/faIcon.png",
	"definition": "svyfontawesome/faIcon/faIcon.js",
	"libraries": [],
	"model":
	{
		"faclass"      	: {"type":"string", "tags": { "scope" :"design" }},
		"enabled" 		: {"type": "enabled", "blockingOn": false, "default": true, "for": ["dataProviderID","onActionMethodID"] },
		"styleclass"   	: {"type": "styleclass", "tags": { "scope" :"design" }},
		"visible" 		: "visible"
	}, "handlers":
	{
		"onActionMethodID": {"parameters":[
								{
						          "name":"event",
								  "type":"JSEvent"
								} 
							 ]}, 
	    "onDoubleClickMethodID" : {"parameters":[
									{
						          		"name":"event",
								  		"type":"JSEvent"
									} 
							 		]}, 
	    "onRightClickMethodID" : {"parameters":[
									{
						          		"name":"event",
								  		"type":"JSEvent"
									}
							 	]} 
	}
}