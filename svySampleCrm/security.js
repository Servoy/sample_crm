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
	if(!scopes.login.user_uuid) {
		security.logout();
		return false;
	}
	
	//Table filter for multi-user
	databaseManager.addTableFilterParam(server,null,'user_id','=',scopes.login.user_uuid, 'userFilter');
	
	//Set some default values if its the first login
	if(scopes$login_to_users.first_login == 1) {
		//Setup default user info
		scopes$login_to_users.name_last = scopes$login_to_users.username;
		scopes$login_to_users.profile_photo = solutionModel.getMedia('contact/unkown_user.png').bytes;
		
		//The first user also checks if there are countries loaded
		if(!databaseManager.getFoundSetCount(datasources.db.svy_sample.countries.getFoundSet())) {
			scopes.exampleApi.loadCountries();
		}
		//Setup first addresses 100 random
		scopes.exampleApi.loadUsers(75);
		
		//Mark fist setup as done
		scopes$login_to_users.first_login = 0;
		databaseManager.saveData();
	}
	return true
}