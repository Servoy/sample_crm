/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ADA160C0-DBDC-4EC2-920A-E592FBC22A84"}
 */
var server = 'svy_sample';

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
	databaseManager.addTableFilterParam(server,null,'user_id','=',scopes.login.user_uuid);
	
	//Set some default values if its the first login
	if(scopes$login_to_users.first_login == 1) {
		//Setup default user info
		scopes$login_to_users.name_last = scopes$login_to_users.username;
		scopes$login_to_users.profile_photo = solutionModel.getMedia('contact/unkown_user.png').bytes
		
		//Setup first address
		var fs = datasources.db.svy_sample.contacts.getFoundSet();
		var rec = fs.getRecord(fs.newRecord());
		if(rec) {
			rec.image = solutionModel.getMedia("servoy/donut.png").bytes
			rec.name_last = 'Servoy';
			rec.company = 'Servoy';
			rec.email_2 = 'info@servoy.com';
			rec.website = 'https://www.servoy.com';
			rec.phone_2 = '+31 202291150'
			var reca = rec.contacts_to_addresses$type2.getRecord(rec.contacts_to_addresses$type2.newRecord());
			reca.line_1 = 'Fred. Roeskestraat 97c';
			reca.city = 'Amsterdam';
			reca.zipcode = '1076 EC';
			
			var fsc = datasources.db.svy_sample.countries.getFoundSet();
			if(fsc.find()) {
				fsc.alt_name = 'NL';
				if(fsc.search() == 1) {
					reca.countrie_id = fsc.getRecord(1).countrie_id;
				}
			}
		}
		
		//Mark fist setup as done
		scopes$login_to_users.first_login = 0;
		databaseManager.saveData()
	}
	return true
}