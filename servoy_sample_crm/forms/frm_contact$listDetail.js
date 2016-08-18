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
	elements.tab_content.height = height;
}

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
	elements.formcomponent_1$containedForm$googleMaps.setMapByAddress("ravelplantsoen 6")
//	if(fav_chk == 1) {
//		fav_chk = 0;
//	} else {
//		fav_chk = 1;
//	}
}