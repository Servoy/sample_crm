/**
 * @private
 *
 * @properties={typeid:24,uuid:"D7FCF4E0-4E73-434E-99F4-4D812F8A5580"}
 */
function addContact() {
	forms.dlg_editContact.showDialog()
}

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
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"35553ED0-AE56-4566-9437-DDBB969ACF9A"}
 */
function menuMore(event) {
	var window = plugins.window.createPopupMenu();
	window.addMenuItem("Delete contactperson", deleteContact)
	window.show(elements.btn_showOptions)
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
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F63E5735-0DC4-4C69-AC71-3C900918A103"}
 */
function goToCardForm(event) {
	forms.frm_list_tab.elements.tabpanel.tabIndex = 2
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
