/**
 * @properties={typeid:35,uuid:"5E58D71B-C0A1-4C43-AC96-E02EAADF64F7",variableType:-4}
 */
var mapImage2 = null;

/**
 * @properties={typeid:35,uuid:"67145B80-6ABC-47D8-BC11-4880825BF7A0",variableType:-4}
 */
var mapImage = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"10D679FD-34C2-4484-ACF5-3602C3F57A49"}
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
 * @properties={typeid:24,uuid:"7F3C6F55-C3F9-4560-AB74-42C45D2EAB33"}
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
 * @properties={typeid:24,uuid:"7ABBDAE3-EECF-49D7-A4DE-344E0FFEF590"}
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
 * @properties={typeid:24,uuid:"A8950A36-0AEF-4A04-A282-0743F7931673"}
 */
function onRecordSelection(event) {
	renderMapImageLeft()
	renderMapImageRight()
}

/**
 * @properties={typeid:24,uuid:"A1CEE410-BFF9-4170-9F02-D19AAC0E4FA3"}
 */
function renderMapImageLeft() {
	var url = 'https://maps.googleapis.com/maps/api/staticmap?center=%%street%%,%%city%%,%%country%%&zoom=14&size=%%width%%x%%heigth%%&maptype=roadmap&markers=%%street%%,%%city%%,%%country%%'
	var correctData = { }
	correctData.heigth = elements.formcomponent.containedForm.comp_infopersonal.containedForm.goImage.getHeight();
	correctData.width = elements.formcomponent.containedForm.comp_infopersonal.containedForm.goImage.getWidth();
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
 * @properties={typeid:24,uuid:"ADCBFCCD-2786-4221-97FB-5BE23EF17F97"}
 */
function renderMapImageRight() {
	return
	var url = 'https://maps.googleapis.com/maps/api/staticmap?center=%%street%%,%%city%%,%%country%%&zoom=14&size=%%width%%x%%heigth%%&maptype=roadmap&markers=%%street%%,%%city%%,%%country%%'
	var correctData = { }
	correctData.heigth = elements.formcomponent.containedForm.comp_infocompany.containedForm.goImage.getHeight();
	correctData.width = elements.formcomponent.containedForm.comp_infocompany.containedForm.goImage.getWidth();
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
