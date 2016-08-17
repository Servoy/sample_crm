
/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"FC97CE68-BC00-4693-935D-262BD35BF83E"}
 */
function onResize(event) {
	var height = (application.getWindow().getHeight() - 58);
	elements.tab_listForm.height = height;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected 
 *
 * @properties={typeid:24,uuid:"10D679FD-34C2-4484-ACF5-3602C3F57A49"}
 */
function editContact(event) {
	//Set form in edit mode
	databaseManager.setAutoSave(false);
	forms.dlg_editContact.showDialog(foundset.getSelectedRecord())
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"7F3C6F55-C3F9-4560-AB74-42C45D2EAB33"}
 */
function deleteContact(event) {
	if (plugins.dialogs.showErrorDialog('Delete contact person', 'Do you want to delete this contact person', 'Yes', 'No') == 'Yes') {
		var rec = foundset.getSelectedRecord();
		foundset.deleteRecord(rec);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"7ABBDAE3-EECF-49D7-A4DE-344E0FFEF590"}
 */
function markFavorite(event) {
	if(fav_chk == 1) {
		fav_chk = 0;
	} else {
		fav_chk = 1;
	}
}
