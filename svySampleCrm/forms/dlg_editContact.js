/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D8D61BA7-3D38-41C0-9466-3BD02886C700",variableType:4}
 */
var test = null;

/**
 * @public
 *
 * @param {JSRecord<db:/svy_sample/contacts>} [record] optional contact record to load
 * @param {String} [newName] optional name to set from the search, only for new contact persons
 * @properties={typeid:24,uuid:"D5132DAE-FA52-44B3-B866-94D4FE3F1698"}
 */
function showDialog(record, newName) {
	//Set auto save false to have a rollback
	databaseManager.setAutoSave(false);

	if (record) {
		foundset.setSelectedIndex(foundset.getRecordIndex(record));
	}

	var window = application.createWindow('editContact', JSWindow.MODAL_DIALOG);
	window.undecorated = true;
	window.setSize(867,controller.getPartHeight(JSPart.BODY));
	window.title = '';
	controller.show(window);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"376424D9-B589-4CDF-BB0C-87FF4555EE1F"}
 */
function saveRecord(event) {
	editContactName()
	databaseManager.saveData();
	databaseManager.setAutoSave(true);

	forms.frm_contact$listDetail.onRecordSelection(event)
	var window = application.getWindow('editContact');
	window.destroy();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2652B5F0-10F2-4601-BAA2-5C56BCB5F632"}
 */
function cancelRecord(event) {
	databaseManager.revertEditedRecords();
	var window = application.getWindow('editContact');
	window.destroy();
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {String} [oldValue] old value
 * @param {String} [newValue] new value
 * @param {JSEvent} [event] the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D83134A9-6DCE-4880-AC19-E9B218D59AC8"}
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
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F82FC1D6-0F26-48BA-9C05-FFB0DF1C0B19"}
 */
function setImage(event) {
	plugins.file.showFileOpenDialog(1, null, false, new Array("JPG and GIF", "jpg", "gif"), saveImage);

}

/**
 * @private 
 * @param {Array<plugins.file.JSFile>} selectedImage
 * @properties={typeid:24,uuid:"76DDBD7A-0383-469A-93ED-D15D313862D8"}
 */
function saveImage(selectedImage) {
	var file = plugins.images.getImage(selectedImage[0].getBytes())
	if (file) {
		image = scopes.contactUtils.resizeImageRatio(file).getData()
	}
}
