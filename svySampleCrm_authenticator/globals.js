/**
 * @param {String} username
 * @param {String} password
 * @param {Boolean} createAccount
 *
 * @properties={typeid:24,uuid:"F2FEB010-12C6-462C-BFAC-39058176F489"}
 * @AllowToRunInFind
 */
function authenticate_user(username, password, createAccount) {
	var users = datasources.db.svy_sample.users.getFoundSet();
	var result
	if (createAccount == true) {
		if (username && password) {
			if (users.find()) {
				users.username = username;
				result = users.search();
				if (result == 0) {
					var rec = users.getRecord(users.newRecord());
					rec.username = username;
					rec.user_password = utils.stringMD5HashBase64(password);
					databaseManager.saveData(rec)
					if (security.login(users.username, users.user_id, ['Administrators'])) {
						return users.user_id;
					}
				}
			}
		}
	} else if (username && password) {
		if (users.find()) {
			users.username = username;
			users.user_password = utils.stringMD5HashBase64(password);
			result = users.search();
			if (result == 1) {
				if (security.login(username, users.user_id, ['Administrators'])) {
					return users.user_id;
				}
			}
		}
	}
	return null
}
