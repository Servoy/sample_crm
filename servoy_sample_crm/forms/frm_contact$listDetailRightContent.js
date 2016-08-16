/**
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"B26504F8-6BD0-4184-B7FC-0210AF2752E9"}
 */
function editContact(event) {
	//Set form in edit mode
	databaseManager.setAutoSave(false);
	forms.dlg_editContact.showDialog(foundset.getSelectedRecord())
}

/**
 * @private
 *
 * @properties={typeid:24,uuid:"18702A94-8EDC-4730-B683-5B5FA88AA5A2"}
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
 * @private
 *
 * @properties={typeid:24,uuid:"C1132419-06EF-471A-AD56-9177C9C086AB"}
 */
function sendEmail(event) { 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"F7E96FE0-3F2E-43DF-84C9-25AFD496E5F8"}
 */
function markFav(event) {
	if(fav_chk == 1) {
		fav_chk = 0;
	} else {
		fav_chk = 1;
	}
}
