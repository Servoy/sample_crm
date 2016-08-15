/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4D46378E-865B-4F31-A364-0FF632DD1CC5"}
 */
function editContact(event) {
	forms.dlg_editContact.showDialog(foundset.getSelectedRecord());
}

/**
 * @private
 *
 * @properties={typeid:24,uuid:"26D526FD-AFA3-4E44-BB8A-E22B534128A6"}
 */
function deleteContact() {
	if (plugins.dialogs.showQuestionDialog('Delete contact person', 'Do you want to delete this contact person', 'Yes', 'No') == 'Yes') {
		var rec = foundset.getSelectedRecord();
		foundset.deleteRecord(rec);
	}
}

/**
 * @param {JSFoundSet<db:/svy_sample/contacts>} fs
 *
 * @properties={typeid:24,uuid:"2949130D-0810-426A-A68B-46C6C0D7845A"}
 */
function loadFoundset(fs) {
	if(fs) {
		controller.loadRecords(fs);
	}
}
