/**
 * @properties={typeid:35,uuid:"450E26BC-7476-412A-B4E2-F5CF592DF28D",variableType:-4}
 */
var mapImage2 = null;

/**
 * @properties={typeid:35,uuid:"4E63EF9F-4F57-48B4-A08C-15457C2A212F",variableType:-4}
 */
var mapImage = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"274278E0-F9C4-430E-A84C-0D07595F66D6"}
 */
function editContact(event) {
	//Set form in edit mode
	databaseManager.setAutoSave(false);
	forms.dlg_editContact_copy.showDialog(foundset.getSelectedRecord())
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"89FA52F0-C6A9-4FFE-973D-1943441B31F6"}
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
 * @properties={typeid:24,uuid:"BC11DEC3-8ED1-4AA9-AA67-C97FB91A418A"}
 */
function markFavorite(event) {
	if (fav_chk == 1) {
		fav_chk = 0;
	} else {
		fav_chk = 1;
	}
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"94C40884-A2F1-431F-AFDC-3670C5296672"}
 */
function onRecordSelection(event) {
	renderMapImageLeft()
	renderMapImageRight()
}

/**
 * @properties={typeid:24,uuid:"5DF7E375-6467-4AF3-9624-A837033B29E5"}
 */
function renderMapImageLeft() {
	var url = 'https://maps.googleapis.com/maps/api/staticmap?center=%%street%%,%%city%%,%%country%%&zoom=14&size=%%width%%x%%heigth%%&maptype=roadmap&markers=%%street%%,%%city%%,%%country%%'
	var correctData = { }
	correctData.heigth = elements.comp_infopersonal.containedForm.goImage.getHeight();
	correctData.width = elements.comp_infopersonal.containedForm.goImage.getWidth();
	var rec = foundset.getSelectedRecord();
	var reca
	var allowLoad = false

	if (utils.hasRecords(rec, 'contacts_to_addresses$type1')) {
		reca = rec.contacts_to_addresses$type1.getRecord(1)
		if (utils.hasRecords(reca, 'addresses_to_countries')) {
			if (reca.line_1 && reca.city && reca.addresses_to_countries.name) {
				correctData.street = reca.line_1
				correctData.city = reca.city
				correctData.country = reca.addresses_to_countries.name
				allowLoad = true
			}
		}
	}

	if (allowLoad == true) {
		url = utils.stringReplaceTags(url, correctData)
		mapImage = plugins.http.getMediaData(encodeURI(url))
	} else {
		mapImage = null
	}
}

/**
 * @properties={typeid:24,uuid:"2839CE58-4E71-4370-8310-FC05BAD6CD22"}
 */
function renderMapImageRight() {
	var url = 'https://maps.googleapis.com/maps/api/staticmap?center=%%street%%,%%city%%,%%country%%&zoom=14&size=%%width%%x%%heigth%%&maptype=roadmap&markers=%%street%%,%%city%%,%%country%%'
	var correctData = { }
	correctData.heigth = elements.comp_infocompany.containedForm.goImage.getHeight();
	correctData.width = elements.comp_infocompany.containedForm.goImage.getWidth();
	var rec = foundset.getSelectedRecord();
	var reca
	var allowLoad = false

	if (utils.hasRecords(rec, 'contacts_to_addresses$type2')) {
		reca = rec.contacts_to_addresses$type2.getRecord(1)
		if (utils.hasRecords(reca, 'addresses_to_countries')) {
			if (reca.line_1 && reca.city && reca.addresses_to_countries.name) {
				correctData.street = reca.line_1
				correctData.city = reca.city
				correctData.country = reca.addresses_to_countries.name
				allowLoad = true
			}
		}
	}

	if (allowLoad == true) {
		url = utils.stringReplaceTags(url, correctData)
		mapImage2 = plugins.http.getMediaData(encodeURI(url))
	} else {
		mapImage2 = null
	}
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"913DC411-02C4-4779-B508-26F19ECDE8E1"}
 */
function onLoad(event) {
	controller.readOnly = true;
}
