/**
 * @properties={typeid:24,uuid:"F2FEB010-12C6-462C-BFAC-39058176F489"}
 * @AllowToRunInFind
 */
function authenticate_user(username, password) {
	if (username && password) {
		var users = datasources.db.svy_sample.users.getFoundSet();
		if (users.find()) {
			users.username = username;
			users.user_password = password;
			var result = users.search();
			if (result == 1) {
				if(security.login(username, users.user_id, ['Administrators'])) {
					return users.user_id
				};
			} else if (application.isInDeveloper()) {
				users.loadAllRecords();
				if (users.getSize() == 0) {
					var rec = users.getRecord(users.newRecord());
					rec.username = username;
					rec.user_password = password;
					databaseManager.saveData(rec)
					if(security.login(users.username, users.user_id, ['Administrators'])) {
						return users.user_id
					};
				}
			}
		}
	}
	return null
}
