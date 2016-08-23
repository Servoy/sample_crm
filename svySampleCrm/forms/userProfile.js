
/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"2505821E-27C8-43B2-8140-73AD48B3FC05"}
 */
function onChangeNameFull(oldValue, newValue, event) {
	if(newValue) {
		var obj = scopes.contactUtils.splitContactFullName(newValue);
		name_first = obj.firstName;
		name_middle = obj.middleName;
		name_last = obj.lastName;
		databaseManager.saveData()
	}
	return true
}
