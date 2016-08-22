{
	"name": "servoysample-sc-Searchbar",
	"displayName": "Elem - Search Bar",
	"version": 1,
	"definition": "servoysample/scSearchbar/scSearchbar.js",
	"libraries": [
			{"name":"scSearchbar.css", "version":"1.0.0", "url":"servoysample/scSearchbar/scSearchbar.css", "mimetype":"text/css"}
		],
"model":
	{
		"styleClass"	: {"type" : "styleclass", "tags": { "scope" :"design" }},
        "dataProviderID": {"type" : "dataprovider",  "pushToServer": "allow", "tags": { }, "ondatachange": { "onchange":"onDataChangeMethodID"}}, 
        "valuelistID"   : {"type" : "valuelist", "tags": { "scope" :"design" } },
		"label" 		: {"type" : "tagstring", "tags": { "scope" :"design" }},		
		
		"tabSeq" 		: {"type" : "tabseq", "tags": { "scope" :"design" }}, 
        "toolTipText" 	: {"type" : "tagstring"}, 
		"enabled"		: {"type" : "protected", "default": true, "blockingOn": false, "for": ["dataProviderID","onActionMethodID","onDataChangeMethodID","onFocusGainedMethodID","onFocusLostMethodID","onRightClickMethodID"] },
        "readOnly"		: {"type" : "protected", "default": false, "tags" : { "scope" :"runtime" }, "blockingOn": true, "for": ["dataProviderID","onActionMethodID","onDataChangeMethodID","onFocusGainedMethodID","onFocusLostMethodID","onRightClickMethodID"] },

        "visible" 		: {"type" : "visible", "default":true},
        "location" 		: "point", 
		"size"			: {"type" : "dimension","default":{"width": 150,"height": 38}},
		"noResultText"  : {"type" : "string", "default" : "No result found"}
	},
	"handlers": {
        "onDataChangeMethodID" 	: "function",
        "onActionMethodID" 		: "function"
	}
}