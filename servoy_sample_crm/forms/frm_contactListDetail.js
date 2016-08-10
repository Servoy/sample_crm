/**
 * @private
 *
 * @properties={typeid:24,uuid:"C5C4394B-3FDC-49C4-8870-5E0EFDEEA2AA"}
 */
function addContact() {
	forms.dlg_editContact.showDialog()
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D844F861-6CBB-4E18-B516-68086C0765F7"}
 */
function editContact(event) {
	forms.dlg_editContact.showDialog(foundset.getSelectedRecord());
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E2181034-134E-4D92-95F5-3325B306D70D"}
 */
function menuMore(event) {
	var window = plugins.window.createPopupMenu();
	window.addMenuItem("Delete contactperson", deleteContact)
	window.show(elements.btn_showOptions)
}

/**
 * @private
 *
 * @properties={typeid:24,uuid:"E65824BC-75F7-40F4-9D9F-61B15003941B"}
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
 * @properties={typeid:24,uuid:"20AE6E00-7498-42F6-A76E-777F3DA11F55"}
 */
function goToCardForm(event) {
	forms.frm_list_tab.elements.tabpanel.tabIndex = 2
}

/**
 * @param {JSFoundSet<db:/svy_sample/contacts>} fs
 *
 * @properties={typeid:24,uuid:"05F19916-18A3-4327-A9EC-540345FBD204"}
 */
function loadFoundset(fs) {
	if(fs) {
		controller.loadRecords(fs);
	}
}
