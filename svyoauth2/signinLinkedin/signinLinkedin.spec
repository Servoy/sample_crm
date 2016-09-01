{
	"name": "svyoauth2-signin-Linkedin",
	"displayName": "signinLinkedin",
	"version": 1,
	"definition": "svyoauth2/signinLinkedin/signinLinkedin.js",
	"libraries": [{"name":"signinLinkedin.css", "version":"1.0.0", "url":"svyoauth2/signinLinkedin/signinLinkedin.css", "mimetype":"text/css"}],
	"model":
	{
		"styleClass"			: {"type":"styleclass", "tags": { "scope" :"design" }},
		"cliendId" 				: {"type": "string", "tags": { "scope" :"design" }},
		"tokenDataProviderID" 	: {"type": "dataprovider", "pushToServer": "shallow", "tags": { "scope" :"design" }, "ondatachange": { "onchange":"onDataChangeMethodID"}},
		"text"					: {"type": "string", "default": "Sign in with Linkedin"},
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