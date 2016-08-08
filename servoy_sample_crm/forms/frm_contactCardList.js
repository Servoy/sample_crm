/**
 * @private
 *
 * @properties={typeid:24,uuid:"CD1E8A4D-E681-4F33-85B8-17B14FEE6BB0"}
 */
function addContact() {
	forms.dlg_editContact.showDialog();
}

/**
 * @param {Number} recIndex selected Recordindex from cardboard
 *
 * @private
 *
 * @properties={typeid:24,uuid:"941F5DCE-9868-4B1F-8E7F-9FD421F88F91"}
 */
function editContact(recIndex) {
	forms.dlg_editContact.showDialog(foundset.getRecord(recIndex));
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FCD87A84-B222-4B85-8BE0-3B5B20DE49E5"}
 */
function goToListForm(event) {
	forms.frm_list_tab.elements.tabpanel.tabIndex = 1
}

