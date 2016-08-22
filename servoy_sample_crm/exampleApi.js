/**
 * @properties={typeid:24,uuid:"433DE9C1-2819-45A1-A180-34F5656F481C"}
 * @AllowToRunInFind
 */
function loadUsers() {
	var userCount = 75//plugins.dialogs.showInputDialog('', 'Number of users to add')
	var userDelete = 'Yes'//plugins.dialogs.showQuestionDialog('', 'Delete all the data', 'Yes', 'No')
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
		var obj = scopes.contactUtils.splitContactFullName(randomUser.results[i].name.first + ' ' + randomUser.results[i].name.last)
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
		recAddress = rec.contacts_to_addresses$type1.getRecord(rec.contacts_to_addresses$type1.newRecord())
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
