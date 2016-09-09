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
	
	
	var fs = datasources.db.svy_sample.timeline.getFoundSet();
	var rec
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
		
		//Setup timeline messages
		//First delete the incorrect messages
		fs.loadAllRecords();
		fs.deleteAllRecords();
		rec = fs.getRecord(fs.newRecord())
		rec.item_image = rec.item_image = solutionModel.getMedia('timeline/message.png').bytes;
		rec.item_date = application.getServerTimeStamp();
		rec.item_title = 'Welcome';
		rec.item_text = 'Welcome to the Sample CRM. \n We hope to give you a good impression how you can build a good looking App.';
		
		rec = fs.getRecord(fs.newRecord());
		rec.item_image = rec.item_image = solutionModel.getMedia('timeline/gear.png').bytes;
		rec.item_date = application.getServerTimeStamp();
		rec.item_title = 'Sample Data';
		rec.item_text = 'We loaded some sample date to give you a good idea of the application.';
			
		databaseManager.saveData();
		
		
		//Mark fist setup as done
		scopes$login_to_users.first_login = 0;
		databaseManager.saveData();
	}
	
	//Set some data to the timeline if its a existing user
	if(!utils.hasRecords(scopes$login_to_users.users_to_timeline)) {
		rec = fs.getRecord(fs.newRecord())
		rec.item_image = rec.item_image = solutionModel.getMedia('timeline/message.png').bytes;
		rec.item_date = application.getServerTimeStamp();
		rec.item_title = 'Welcome';
		rec.item_text = 'Welcome to the Sample CRM. \n We hope to give you a good impression how you can build a good looking App.';
		
		rec = fs.getRecord(fs.newRecord());
		rec.item_image = rec.item_image = solutionModel.getMedia('timeline/gear.png').bytes;
		rec.item_date = application.getServerTimeStamp();
		rec.item_title = 'Sample Data';
		rec.item_text = 'We loaded some sample date to give you a good idea of the application.';
			
	}
	return true
}