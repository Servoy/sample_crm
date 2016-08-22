{
	"name": "servoysample-sc-Text-Field",
	"displayName": "Elem - Text field",
	"version": 1,
	"definition": "servoysample/scTextField/scTextField.js",
	"libraries": [{
		"name" : "scTextField.css",
		"url" : "servoysample/scTextField/scTextField.css",
		"version" : "1.0.0",
		"mimetype": "text/css"
	}],
	"model":
	{
		"styleClass"	: {"type":"styleclass", "tags": { "scope" :"design" },
							"values": ["md-primary","md-warn","md-raised","md-fab","md-accent","md-hue-1","md-hue-2","md-hue-3"]},
        "dataProviderID": { "type":"dataprovider",  "pushToServer": "allow", "tags": { }, "ondatachange": { "onchange":"onDataChangeMethodID"}}, 
        "label" 		: { "type": "tagstring", "tags": { "scope" :"design" } },
        "fieldimage" 	: { "type" 	: "media", "tags": { "scope" :"design" }},
        "maxLength"		: {"type" : "int", "tags": { "scope" :"design" }},

        "tabSeq" 		: {"type" :"tabseq", "tags": { "scope" :"design" }}, 
        "toolTipText" 	: {"type" : "tagstring"}, 
       	"readOnly" 		: {"type":"protected", "default": false,  "tags" : { "scope" :"runtime" }, "blockingOn": true, "for": ["dataProviderID","onActionMethodID","onDataChangeMethodID","onFocusGainedMethodID","onFocusLostMethodID","onRightClickMethodID"] }, 
   	    "enabled"		: {"type":"protected", "default": true, "blockingOn": false, "for": ["dataProviderID","onActionMethodID","onDataChangeMethodID","onFocusGainedMethodID","onFocusLostMethodID","onRightClickMethodID"] },
   
   		"required"		: {"type" : "boolean", "default": false, "tags": { "scope" :"design" }},
   		"requiredText"	: {"type" : "string", "default": "This is required", "tags": { "scope" :"design" }},
   		"validation"	: { "type": "string", "default": "", "tags": {"scope": "design"},
							"values": [
								"E-mail",
								"Phone"
							]},
        "visible" 		: {"type":"visible", "default":true},
        "location" 		: "point", 
		"size"			: {"type": "dimension","default":{"width": 150,"height": 58}}
	},
	"handlers": {
        "onDataChangeMethodID" 	: "function",
        "onActionMethodID" 		: "function",
   	 	"onRightClickMethodID" 	: "function",
   	 	"onFocusGainedMethodID" : "function",
   	 	"onFocusLostMethodID" 	: "function"
	}
}