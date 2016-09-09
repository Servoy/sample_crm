/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F3A3193D-FC7C-4B3D-BCB7-C2F7C67A93EE"}
 */
var currentPassword

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9FDBB607-DD1C-48E6-B4D8-92680FFBE05F"}
 */
var newPassword

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F874C28F-7313-45F8-B33C-20E9468439B1"}
 */
var newPasswordRepeat

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"2505821E-27C8-43B2-8140-73AD48B3FC05"}
 */
function onChangeNameFull(oldValue, newValue, event) {
	if(newValue) {
		var obj = scopes.contactUtils.splitContactFullName(newValue);
		name_first = obj.firstName;
		name_middle = obj.middleName;
		name_last = obj.lastName;
		databaseManager.saveData()
	}
	return true
}

/**
 *
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"F14EA076-8EED-45A2-96F1-D6FFF1610DC7"}
 */
function closeDialog(event) {
	application.getWindow('userSettings').hide();
}

/**
 *
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"681DEAA1-DA32-4C77-9EAD-35C225966A9E"}
 */
function changeUserImage(event) {
	plugins.file.showFileOpenDialog(1, null, false, new Array("JPG and GIF", "jpg", "gif"), saveImage);

}


/**
 * @private 
 * @param {Array<plugins.file.JSFile>} selectedImage
 *
 * @properties={typeid:24,uuid:"C86556A0-D34E-4166-A2AE-C3A69926DF7C"}
 */
function saveImage(selectedImage) {
	var file = plugins.images.getImage(selectedImage[0].getBytes())
	if (file) {
		profile_photo = scopes.contactUtils.resizeImageRatio(file).getData()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"80AE3A73-BD5C-4B9F-8CB3-E2F9A0797CB0"}
 */
function setNewPassword(event) {
	if(utils.stringMD5HashBase64(currentPassword) != user_password) {
		plugins.dialogs.showWarningDialog('Password change','Current password is incorrect');
	} else {
		if(newPassword != newPasswordRepeat) {
			plugins.dialogs.showWarningDialog('Password change','New password doesn\'t match');
		} else {
			user_password = utils.stringMD5HashBase64(newPassword)
			application.getWindow('userSettings').hide();
		}
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"53E1E718-3865-44D3-B34E-369A37546FC9"}
 */
function form_onShow(firstShow, event) {
	//clear form vars
	currentPassword = null
	newPassword = null
	newPasswordRepeat = null
}
