/**
 * @private
 *
 * @properties={typeid:24,uuid:"58B18E8F-1FBD-4470-A383-ABA40F1ACE86"}
 */
function addContact() {
	forms.dlg_editContact.showDialog()
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"35BA98F6-F1C7-4D87-AEDF-F52FCF286BFD"}
 */
function editContact(event) {
	forms.dlg_editContact.showDialog(foundset.getSelectedRecord());
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C58D048C-C6A0-48FE-B1A9-C2CAC96DB858"}
 */
function menuMore(event) {
	var window = plugins.window.createPopupMenu();
	window.addMenuItem("Delete contactperson", deleteContact)
	window.show(elements.btn_showOptions)
}

/**
 * @private
 *
 * @properties={typeid:24,uuid:"7FFD8EBC-8498-493D-8E22-AF6A546A6F2A"}
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
 * @properties={typeid:24,uuid:"D35C2FB0-DACA-4013-8F90-48741A99036C"}
 */
function goToCardForm(event) {
	forms.frm_list_tab.elements.tabpanel.tabIndex = 2
}

/**
 * @param {JSFoundSet<db:/svy_sample/contacts>} fs
 *
 * @properties={typeid:24,uuid:"CC7FD2F7-97B6-4A49-AC8A-AB17710EC236"}
 */
function loadFoundset(fs) {
	if(fs) {
		controller.loadRecords(fs);
	}
}
