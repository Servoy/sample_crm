/**
 * @private
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"4B40FA0C-6FFF-4E17-9FA3-1E6A1AA95ECF"}
 */
var searchValue = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"395DDB28-FDA2-4689-BE19-2DE812658BE4"}
 */
function addContact(event) {
	var rec = foundset.getRecord(foundset.newRecord());
	foundset.setSelectedIndex(foundset.getRecordIndex(rec));
	forms.dlg_editContact.showDialog(rec)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"F41176D3-E46A-4C77-8FED-1772A9AD07FD"}
 */
function goToCardBoard(event) {
	forms.baseContact.elements.tab_dataContent.containedForm = scopes.contactUtils.contactViewForm.CARD;
}

/**
 *
 * @param {JSEvent} event
 *
 * @private
 *
 *
 * @properties={typeid:24,uuid:"1DD7DF65-F9D5-4A8C-A51D-BA3850ED2A8F"}
 */
function searchPerson(event) {
	if (searchValue) {
		var fs = datasources.db.svy_sample.contacts.getFoundSet();
		fs.loadRecords(application.getUUID(searchValue))
		if (fs.getSize() == 1) {
				foundset.setSelectedIndex(foundset.getRecordIndex(fs.getRecord(1)))
		}
	}
}

/**
 *
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"31D2EE7E-B333-4831-87DC-EF0DCF8B79D9"}
 */
function goToDetails(event) {
	forms.form_contact$content.collapseLeftPane();
}
