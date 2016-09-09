/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CDFB04EF-DCA0-478F-BC6F-021186F18DB5",variableType:4}
 */
var numberOfContacts = 0;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"52CD002A-C551-4DDE-8AC7-2D43902A122A"}
 */
function form_onShow(firstShow, event) {
	//Count contacts
	var fs = datasources.db.svy_sample.contacts.getFoundSet();
	fs.loadAllRecords();
	numberOfContacts = databaseManager.getFoundSetCount(fs);
}
