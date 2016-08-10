/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2C6D15E3-1962-41D3-9FB9-9D89036F6A05"}
 */
function editContact(event) {
	application.output('Edit please')
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"638DBACA-9D4C-4601-9E3F-1D833B5FD174"}
 */
function saveContact(event) {
	application.output('save please')
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EFF521D4-B96A-4513-8484-2FAEDC841526"}
 */
function cancelContact(event) {
	application.output('cancel please')
}
/**
 * @private
 *
 * @properties={typeid:24,uuid:"8FCC258A-683F-4B4C-92A5-3BC64A17E9E2"}
 */
function deleteContact() {
	if (plugins.dialogs.showQuestionDialog('Delete contact person', 'Do you want to delete this contact person', 'Yes', 'No') == 'Yes') {
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
 * Perform the element default action.
 *
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
