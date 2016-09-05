/**
 * @private
 * @param {String} fullName
 * @return {{firstName: String, middleName: String, lastName: String}}
 * 
 * @properties={typeid:24,uuid:"CC3572DE-7628-4474-BA78-A7B095EA94CE"}
 */
function splitContactFullName(fullName) {
	/**@type {{firstName: String, middleName: String, lastName: String}} */
	var obj = {}
	var split = fullName.split(' ');
	if (split.length > 2) {
		obj.firstName = utils.stringInitCap(split.shift());
		obj.lastName = utils.stringInitCap(split.pop());
		obj.middleName = split.join(' ');
	} else if (split.length > 1) {
		obj.firstName = utils.stringInitCap(split.shift());
		obj.lastName = utils.stringInitCap(split.pop());
		obj.middleName = '';
	} else {
		obj.firstName = '';
		obj.lastName = utils.stringInitCap(split.pop());
		obj.middleName = '';
	}
	return obj
}

/**
 * @properties={typeid:24,uuid:"433DE9C1-2819-45A1-A180-34F5656F481C"}
 * @AllowToRunInFind
 * @param {Number} numberOfUsers
 */
function loadUsers(numberOfUsers) {
	var userCount = numberOfUsers
	var userDelete = 'Yes'
	var fs = datasources.db.svy_sample.contacts.getFoundSet();

	if (userDelete == 'Yes') {
		fs.loadAllRecords();
		fs.deleteAllRecords();
	}

	var rec, recAddress
	/**@type {{results: Array}}*/
	var randomUser = JSON.parse(plugins.http.getPageData('https://randomuser.me/api/?nat=nl,us&results=' + userCount.toString()))
	var fsCountry = datasources.db.svy_sample.countries.getFoundSet()
	for (var i = 0; i < userCount; i++) {
		rec = fs.getRecord(fs.newRecord());
		var obj = splitContactFullName(randomUser.results[i].name.first + ' ' + randomUser.results[i].name.last)
		rec.name_first = obj.firstName;
		rec.name_middle = obj.middleName;
		rec.name_last = obj.lastName;
		rec.phone_1 = randomUser.results[i].phone;
		rec.phone_3 = randomUser.results[i].cell;
			
		rec.email_1 = randomUser.results[i].email
		rec.image = plugins.http.getMediaData(randomUser.results[i].picture.large)

		//Job part
		rec.company = scopes.randomCompany.data[i].company;
		rec.job_title = scopes.randomCompany.data[i].job_title;
		rec.website = scopes.randomCompany.data[i].website;
		
		
		//Address part
		recAddress = rec.sample$contacts_to_addresses$type1.getRecord(rec.sample$contacts_to_addresses$type1.newRecord())
		recAddress.city = randomUser.results[i].location.city
		recAddress.zipcode = randomUser.results[i].location.postcode
		recAddress.line_1 = randomUser.results[i].location.street
		
		if(fsCountry.find()) {
			fsCountry.alt_name = randomUser.results[i].nat
			var result = fsCountry.search();
			if(result == 1) {
				recAddress.countrie_id = fsCountry.getRecord(1).countrie_id
			}
			
		}
		
		databaseManager.saveData(rec)
		databaseManager.saveData(recAddress)
		application.output("Loading data: " + i + ' of ' + (userCount -1))
	}
	databaseManager.saveData()
}

/**
 * @properties={typeid:24,uuid:"4604372A-6AFC-4778-B0C8-B56993DAE232"}
 */
function loadCountries() {
	var countryDelete = 'Yes';
	var fs = datasources.db.svy_sample.countries.getFoundSet();
	if(countryDelete == 'Yes') {
		fs.loadAllRecords();
		fs.deleteAllRecords();
	}
	
	var countries = JSON.parse(plugins.http.getPageData('http://restcountries.eu/rest/v1/all'))
	for(var i in countries) {
		var rec = fs.getRecord(fs.newRecord());
		rec.name = countries[i].name;
		rec.alt_name = countries[i].altSpellings[0];
		rec.region = countries[i].region
	}
	databaseManager.saveData()
	
}

/**
 * @properties={typeid:24,uuid:"1CB6D64A-3333-44AA-B7B4-AB0D63423185"}
 */
function devCleanAllData() {
	if(application.isInDeveloper()) {
		if(plugins.dialogs.showQuestionDialog('Clean all Data','Do you want to remove ALL data', 'Yes', 'No') == 'Yes') {
			if(plugins.dialogs.showQuestionDialog('Remove SaaS filter?','Do you want to remove the SaaS filter?', 'Yes', 'No') == 'Yes') {
				databaseManager.removeTableFilterParam(datasources.db.svy_sample.getServerName(),'userFilter');
			}
			var tables = databaseManager.getTableNames(datasources.db.svy_sample.getServerName())
				for(var i in tables) {
					var fs = databaseManager.getFoundSet(databaseManager.getTable(datasources.db.svy_sample.getServerName(),tables[i]).getDataSource())
					fs.loadAllRecords();
					fs.deleteAllRecords();
				}
			security.logout()
		}
	}
}
