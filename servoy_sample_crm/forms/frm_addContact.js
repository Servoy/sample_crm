
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"F4F36015-D0B4-448E-A9A8-A05F33881320"}
 */
function addContact(event) {
	var rec = foundset.getRecord(foundset.newRecord());
	foundset.setSelectedIndex(foundset.getRecordIndex(rec));
	forms.dlg_editContact.showDialog(rec)
}
