/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ADA160C0-DBDC-4EC2-920A-E592FBC22A84"}
 */
var server = 'svy_sample';

/**
 * @properties={typeid:24,uuid:"9BCE2B01-2A80-470D-AD59-BC6571083E67"}
 */
function onOpenSolution() {
	if(!scopes.login.user_uuid) {
		security.logout();
		return false;
	}
	
	databaseManager.addTableFilterParam(server,null,'user_id','=',scopes.login.user_uuid)
	return true
}