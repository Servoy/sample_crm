/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ADA160C0-DBDC-4EC2-920A-E592FBC22A84"}
 */
var server = datasources.db.svy_sample.getServerName();

/**
 * @properties={typeid:24,uuid:"9BCE2B01-2A80-470D-AD59-BC6571083E67"}
 * @AllowToRunInFind
 */
function onOpenSolution() {
	if (!scopes.login.user_uuid) {
		security.logout();
		return false;
	}
	
	//Table filter for multi-user
	databaseManager.addTableFilterParam(server,null,'user_id','=',scopes.login.user_uuid, 'userFilter');
	
	//Set some default values if its the first login
	if(scopes$login_to_users.first_login == 1) {
		application.showForm(forms.baseProgressBar);
	}
	
	return true
}