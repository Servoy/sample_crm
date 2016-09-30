/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"955DC418-94F2-4452-B6D7-AA9AD9DBB099"}
 */
function onShow(firstShow, event) {
	if (firstShow) {
		createSampleData();
	}
}

/**
 * @properties={typeid:24,uuid:"400318D8-0921-45AF-904B-D6C79AE058BE"}
 */
function createSampleData() {
//	elements.progressbar.animate = true;
//	elements.progressbar.visible = true;
//	elements.progressbar.max = 100;
//	elements.progressbar.value = 0;
//	elements.progressbar.showValue = true;
//	elements.treeview.refresh(false);
	
	//Setup default user info
	var fs = datasources.db.svy_sample.timeline.getFoundSet();
	var rec;

	scopes$login_to_users.name_last = scopes$login_to_users.username;
	scopes$login_to_users.profile_photo = solutionModel.getMedia('contact/unkown_user.png').bytes;

	//The first user also checks if there are countries loaded
	if (!databaseManager.getFoundSetCount(datasources.db.svy_sample.countries.getFoundSet())) {
		scopes.exampleApi.loadCountries(updateProgressBarCountries, 2);
	}

	//Setup first addresses 100 random
	scopes.exampleApi.loadUsers(75, updateProgressBarContacts, 2);

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

	//Set some data to the timeline if its a existing user
	if (!utils.hasRecords(scopes$login_to_users.users_to_timeline)) {
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

	// show the main form when done
	application.showForm(forms.baseForm);
}


/**
 * @protected 
 * @properties={typeid:24,uuid:"C881B0D2-9344-4B8E-BBBC-356C04F5C807"}
 */
function updateProgressBarContacts(value) {
	elements.progressbar.value = 30 + Math.floor(value * 0.70);
	elements.treeview.refresh(false);
}

/**
 * @param value
 *
 * @properties={typeid:24,uuid:"1BF9B738-F169-480C-95AB-C1657ECD034B"}
 */
function updateProgressBarCountries(value) {
	elements.progressbar.value = Math.floor(value * 0.30);
	elements.treeview.refresh(false);
}
