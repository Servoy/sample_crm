/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected 
 *
 * @properties={typeid:24,uuid:"1A491874-8E9C-4B98-9A3B-BEC0CDA1F958"}
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
 * @properties={typeid:24,uuid:"EE1207FE-814E-470A-8F2D-1A359D9FF887"}
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
 * @properties={typeid:24,uuid:"2E5B13DC-C293-48EF-A91C-EB353A6481BB"}
 */
function markFavorite(event) {
	if(fav_chk == 1) {
		fav_chk = 0;
	} else {
		fav_chk = 1;
	}
}
