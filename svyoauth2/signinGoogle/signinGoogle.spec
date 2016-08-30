{
	"name": "svyoauth2-signin-Google",
	"displayName": "signinGoogle",
	"version": 1,
	"definition": "svyoauth2/signinGoogle/signinGoogle.js",
	"libraries": [{"name":"signinGoogle.css", "version":"1.0.0", "url":"svyoauth2/signinGoogle/signinGoogle.css", "mimetype":"text/css"}],
	"model":
	{
		"styleClass"			: {"type":"styleclass", "tags": { "scope" :"design" }},
		"cliendId" 				: {"type": "string", "tags": { "scope" :"design" }},
		"tokenDataProviderID" 	: {"type": "dataprovider", "pushToServer": "allow", "tags": { "scope" :"design" }, "ondatachange": { "onchange":"onDataChangeMethodID"}},
		"text"					: {"type": "string", "default": "Sign in with Google"},
		"enabled"				: {"type": "protected", "default": true, "blockingOn": false, "for": ["tokenDataProviderID","onDataChangeMethodID"] },
		"visible" 				: {"type": "visible", "default":true},
		"location" 				: "point"
	},
	"handlers":
	{
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