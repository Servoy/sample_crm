/**
 * @enum 
 * @properties={typeid:35,uuid:"F93786D8-8863-4157-A31C-6097FB58D0F6",variableType:-4}
 */
var searchbarContactDataType = {
	phoneNumber: 1,
	email: 2,
	name: 3,
	company: 4
}
/**
 * Called when the valuelist needs data, it has 3 modes.
 * real and display params both null: return the whole list
 * only display is specified, called by a typeahead, return a filtered list
 * only real value is specified, called when the list doesnt contain the real value for the give record value, this will insert this value into the existing list
 *
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method. (This is the FindRecord in find mode, which is like JSRecord has all the columns/dataproviders, but doesn't have its methods)
 * @param {Boolean} findMode True if foundset of this record is in find mode
 * @param {Boolean} rawDisplayValue The raw displayValue without being converted to lower case
 *
 * @return {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"797F9245-B08E-45AE-86E1-298FC883637D"}
 * @AllowToRunInFind
 */
function getDataSetForValueList(displayValue, realValue, record, valueListName, findMode, rawDisplayValue) {
	var args = null;
	var query = datasources.db.svy_sample.searchbardata.createSelect();
	/** @type  {JSDataSet} */
	var result = null;
	application.output('Triggering valuelist global')
	if (displayValue == null && realValue == null) {
		query.result.add(query.columns.displayvalue).add(query.columns.returnvalue);
		result = databaseManager.getDataSetByQuery(query, 499);
	} else if (displayValue != null) {
		// TYPE_AHEAD filter call, return a filtered list
		args = [displayValue + "%", displayValue + "%"];
		query.result.add(query.columns.displayvalue).add(query.columns.returnvalue).root.where.add(query.or.add(query.columns.displayvalue.lower.like('%' + args[0] + '%')));
		result = databaseManager.getDataSetByQuery(query, 499);
	} else if (realValue != null) {
		args = [realValue];
		query.result.add(query.columns.displayvalue).add(query.columns.returnvalue).root.where.add(query.columns.returnvalue.eq(args[0]));
		result = databaseManager.getDataSetByQuery(query, 1);
	}
	return result;

}
