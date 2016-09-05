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
	if (elements.btn_login.text == 'Sign In') {
		scopes.login.user_uuid = security.authenticate('svySampleCrm_authenticator', 'authenticate_user', [username, password]);
		if (!scopes.login.user_uuid) {
			application.output('Ohoh wrong login, please fix a nice warning dialog')
		}
	} else {
		if (username && password) {
			application.output(elements.fld_username.isValid())
			if (elements.fld_username.isValid() && elements.fld_password.isValid()) {
				scopes.login.user_uuid = security.authenticate('svySampleCrm_authenticator', 'authenticate_user', [username, password, true]);
				if (!scopes.login.user_uuid) {
				}
			}
		}
	}
}

/**
 *
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"A2D4049B-59DD-4E65-8D73-C18C63E2F8C0"}
 */
function createAccount(event) {
	elements.btn_login.text = "Create Account";
	elements.lbl_createAccount.visible = false;
	elements.lbl_forgotPassword.visible = false;
	elements.lbl_alreadyAccount.visible = true;
	username = null
	password = null

	elements.fld_username.inputValidation = 'email'
	elements.fld_password.inputValidation = 'password'

}

/**
 *
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"CB7D8EBA-EFE7-431A-9AE6-1964665212D1"}
 */
function forgotPassword(event) {
	// TODO Auto-generated method stub

}

/**
 *
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"FB069709-FEE8-48B9-B9C5-D70366EE4E08"}
 */
function alreadyAccount(event) {
	elements.btn_login.text = "Sign In";
	elements.lbl_createAccount.visible = true;
	elements.lbl_forgotPassword.visible = true;
	elements.lbl_alreadyAccount.visible = false;
	elements.fld_username.inputValidation = 'none'
	elements.fld_password.inputValidation = 'none'
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"704D621F-8BC9-4C58-972F-D14DA97917F2"}
 */
function onShow(firstShow, event) {
	controller.focusFirstField()
}
