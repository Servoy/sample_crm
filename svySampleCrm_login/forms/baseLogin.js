/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C9D67267-7D63-492A-8609-422F725BA0A8"}
 */
var linkedinToken = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"86CF85BC-7F76-4EF0-A8C7-99E1F1FC250F"}
 */
var username;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B0E0C944-30C2-4A56-B1BB-43B7E64DD89E"}
 */
var password
/**
 *
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"291D8FA5-F7FF-47F5-8478-C9C41A7A6E19"}
 */
function login(event) {
	scopes.login.user_uuid = security.authenticate('svySampleCrm_authenticator', 'authenticate_user', [username, password]);
	if(!scopes.login.user_uuid) {
		application.output('Ohoh wrong login, please fix a nice warning dialog')
	}
}
