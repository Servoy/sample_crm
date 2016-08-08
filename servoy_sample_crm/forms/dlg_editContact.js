/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B1279BDD-EC09-4146-96CD-A3BF64D19CF0",variableType:4}
 */
var test = null;

/**
 * @public
 *
 * @param {JSRecord<db:/svy_sample/contacts>} [record] optional contact record to load
 * @param {String} [newName] optional name to set from the search, only for new contact persons
 * @properties={typeid:24,uuid:"2795A048-34CB-4132-A3F7-5180351E35E4"}
 */
function showDialog(record, newName) {
	//Set auto save false to have a rollback
	databaseManager.setAutoSave(false);

	if (record) {
		foundset.setSelectedIndex(foundset.getRecordIndex(record));
	} else {
		record = foundset.getRecord(foundset.newRecord());
		if (newName) {
			var obj = scopes.contactUtils.splitContactFullName(newName)
			record.name_first = obj.firstName;
			record.name_last = obj.lastName;
			record.name_middle = obj.middleName;
		}
		foundset.setSelectedIndex(foundset.getRecordIndex(record));
	}

	var window = application.createWindow('editContact', JSWindow.MODAL_DIALOG);
	window.undecorated = true;
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
 * @properties={typeid:24,uuid:"76D8FAF1-62F9-4E0B-BA34-DFD8C824D04A"}
 */
function saveRecord(event) {
	editContactName()
	databaseManager.saveData();
	databaseManager.setAutoSave(true);

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
 * @properties={typeid:24,uuid:"4158C619-A159-4EDB-9D99-308AFFAA14F7"}
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
 * @properties={typeid:24,uuid:"06FF149D-05D3-4547-96CD-5DFE5124317D"}
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
 * @properties={typeid:24,uuid:"C6579050-9255-4BE6-8F4D-2A30DEE634A7"}
 */
function setImage(event) {
	plugins.file.showFileOpenDialog(1, null, false, new Array("JPG and GIF", "jpg", "gif"), saveImage);

}

/**
 * @private 
 * @param {Array<plugins.file.JSFile>} selectedImage
 * @properties={typeid:24,uuid:"25B5CA6D-607F-4687-A409-FC8B933BEA31"}
 */
function saveImage(selectedImage) {
	var file = plugins.images.getImage(selectedImage[0].getBytes())
	if (file) {
		image = scopes.contactUtils.resizeImageRatio(file).getData()
	}
}
