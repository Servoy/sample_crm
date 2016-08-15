/**
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"2C6D15E3-1962-41D3-9FB9-9D89036F6A05"}
 */
function editContact(event) {
	//Set form in edit mode
	databaseManager.setAutoSave(false);
	forms.dlg_editContact.showDialog(foundset.getSelectedRecord())
}

/**
 * @private
 *
 * @properties={typeid:24,uuid:"8FCC258A-683F-4B4C-92A5-3BC64A17E9E2"}
 */
function deleteContact() {
	if (plugins.dialogs.showErrorDialog('Delete contact person', 'Do you want to delete this contact person', 'Yes', 'No') == 'Yes') {
		var rec = foundset.getSelectedRecord();
		foundset.deleteRecord(rec);
	}
}
/**
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"71A99044-2F6F-4A8A-AD00-4D5CBF35FB6C"}
 */
function uploadImage(event) {
	plugins.file.showFileOpenDialog(1, null, false, new Array("JPG and GIF", "jpg", "gif"), saveImage);
}

/**
 * @private
 * @param {Array<plugins.file.JSFile>} selectedImage
 *
 * @properties={typeid:24,uuid:"EE329CB9-7534-44A4-965A-2E84AA5720FB"}
 */
function saveImage(selectedImage) {
	var file = plugins.images.getImage(selectedImage[0].getBytes())
	if (file) {
		image = scopes.contactUtils.resizeImageRatio(file).getData()
	}
}
/**
 *
 * @param {String} oldValue
 * @param {String} newValue
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4FD69E28-87CC-4500-9F64-1B90F9A0E4CE"}
 */
function editContactName(oldValue, newValue, event) {
	var obj = scopes.contactUtils.splitContactFullName(c_name_full)
	name_first = obj.firstName;
	name_last = obj.lastName;
	name_middle = obj.middleName;
	return true
}

/**
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C979D2A6-4E8E-4457-8C6F-DD9FEEFF0E68"}
 */
function sendEmail(event) { }

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"C6B1C67D-94A5-4526-B982-1F3F6B71DEB3"}
 */
function markFav(event) {
	if(fav_chk == 1) {
		fav_chk = 0;
	} else {
		fav_chk = 1;
	}
}
