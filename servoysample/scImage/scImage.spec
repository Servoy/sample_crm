{
	"name": "servoysample-sc-Image",
	"displayName": "Elem - Image",
	"version": 1,
	"icon": "servoydefault/imagemedia/IMG16.png",
	"definition": "servoysample/scImage/scImage.js",
	"libraries": [{
		"name" : "scImage.css",
		"url" : "servoysample/scImage/scImage.css",
		"version" : "1.0.0",
		"mimetype": "text/css"
	}],
	"model":
	{
			"alternateText" 	: { "type" 	: "tagstring" },
			"alternateImage" 	: { "type" 	: "media" },
			"enabled" 			: { "type"	: "enabled", "blockingOn": false, "default": true, "for": ["dataProviderID","onActionMethodID","onDataChangeMethodID"] }, 
	        "dataProviderID" 	: { "type"	:"dataprovider", "tags": { "scope" :"design" }, "ondatachange": { "onchange":"onDataChangeMethodID", "callback":"onDataChangeCallback"}},
	        "styleClass" 		: { "type" 	:"styleclass", "tags": { "scope" :"design" }, "values" :["img-responsive","img-rounded","img-circle", "img-thumbnail","media-object"]},
			"tabSeq" 			: {"type" 	:"tabseq", "tags": { "scope" :"design" }},
	        "visible" 			: "visible"
	},
	"handlers":
	{
			"onActionMethodID" : {

	        	"parameters":[
								{
						          "name":"event",
								  "type":"JSEvent"
								}
							 ]
	        },
	        "onDataChangeMethodID" : {
	          "returns": "boolean",

	        	"parameters":[
								{
						          "name":"oldValue",
								  "type":"${dataproviderType}"
								},
								{
						          "name":"newValue",
								  "type":"${dataproviderType}"
								},
								{
						          "name":"event",
								  "type":"JSEvent"
								}
							 ]
	        }
	},
	"api":
	{

	}

}