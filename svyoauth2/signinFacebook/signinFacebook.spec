{
	"name": "svyoauth2-signin-Facebook",
	"displayName": "signinFacebook",
	"version": 1,
	"definition": "svyoauth2/signinFacebook/signinFacebook.js",
	"libraries": [{"name":"signinFacebook.css", "version":"1.0.0", "url":"svyoauth2/signinFacebook/signinFacebook.css", "mimetype":"text/css"}],
	"model":
	{
		"styleClass"			: {"type":"styleclass", "tags": { "scope" :"design" }},
		"cliendId" 				: {"type": "string", "tags": { "scope" :"design" }},
		"tokenDataProviderID" 	: {"type": "dataprovider", "pushToServer": "allow", "tags": { "scope" :"design" }, "ondatachange": { "onchange":"onDataChangeMethodID"}},
		"text"					: {"type": "string", "default": "Sign in with Facebook"},
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