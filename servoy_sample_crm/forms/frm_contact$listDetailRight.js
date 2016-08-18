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
	var apiKey = "AIzaSyCBdY4vrndAD52OwBg1OpfReqe8xumQaTs"
	var address = 'Ravelplantsoen 6, Amersfoort, Nederland'
		/**@type {{results: Array<{geometry: {location: {lat: Number, lng: Number}}}>}} */
	var result = JSON.parse(plugins.http.getPageData("https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURI(address) + "&key=" + apiKey))
	if (result && result.results[0]) {
		elements.googleMaps.setNewLocation(result.results[0].geometry.location.lat,result.results[0].geometry.location.lng)
	}
	//elements.googleMaps.setMapByAddress("ravelplantsoen 6")
	//	if(fav_chk == 1) {
	//		fav_chk = 0;
	//	} else {
	//		fav_chk = 1;
	//	}
}
