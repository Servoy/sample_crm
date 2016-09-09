/**
 * @param {JSRecord<db:/svy_sample/contacts>} record
 * @properties={typeid:24,uuid:"21325533-4E2E-4B67-883C-82A907A578D2"}
 */
function onRecordInsert(record)
{
	updateSearchData(record)
	
	//New Timeline Info
	var fs = datasources.db.svy_sample.timeline.getFoundSet();
	var rec = fs.getRecord(fs.newRecord());
		rec.item_image = rec.item_image = solutionModel.getMedia('timeline/add.png').bytes;
		rec.item_date = application.getServerTimeStamp();
		rec.item_title = 'Contact added';
		rec.item_text = 'New contact added: ' + record.c_name_full + '.';
		databaseManager.saveData(rec)
}

/**
 * @param {JSRecord<db:/svy_sample/contacts>} record
 * @properties={typeid:24,uuid:"9138324F-DB2A-4102-A9E0-603DAA19BDED"}
 */
function onRecordUpdate(record)
{
	updateSearchData(record)
	
	//Update Timeline Info
	var fs = datasources.db.svy_sample.timeline.getFoundSet();
	var rec = fs.getRecord(fs.newRecord());
		rec.item_image = rec.item_image = solutionModel.getMedia('timeline/edit.png').bytes;
		rec.item_date = application.getServerTimeStamp();
		rec.item_title = 'Contact update';
		rec.item_text = 'The contact information for contact: ' + record.c_name_full + '\n has been manualy updated.';
		databaseManager.saveData(rec)
}

/**
 * @param {JSRecord<db:/svy_sample/contacts>} record
 * @properties={typeid:24,uuid:"50B933B5-8628-4413-AD9F-6BD6EB5CC333"}
 */
function updateSearchData(record)
{
	var rec
	var displayValue = [];
	//Name part
	if(utils.hasRecords(contacts_to_searchbardata$name)) {
		rec = contacts_to_searchbardata$name.getRecord(1);
	} else {
		rec = contacts_to_searchbardata$name.getRecord(contacts_to_searchbardata$name.newRecord());
	}
	
	if(rec) {
		displayValue = []
		if(record.c_name_full) {
			displayValue.push(record.c_name_full);
		}
		
		rec.returnvalue = record.contact_id;
		rec.displayvalue = displayValue.join();
	}
	
	//Company part
	if(utils.hasRecords(contacts_to_searchbardata$company)) {
		rec = contacts_to_searchbardata$company.getRecord(1);
	} else {
		rec = contacts_to_searchbardata$company.getRecord(contacts_to_searchbardata$company.newRecord());
	}
	
	if(rec && record.c_job_company) {
		displayValue = [];
		if(record.c_name_full) {
			displayValue.push(record.c_name_full);
		}
		if(record.c_job_company) {
			displayValue.push(record.c_job_company);
		}
		
		rec.returnvalue = record.contact_id;
		rec.displayvalue = displayValue.join(' - ');
	} else {
		contacts_to_searchbardata$company.deleteRecord(rec)
	}
	
	//Phone part
	if(utils.hasRecords(contacts_to_searchbardata$phone)) {
		rec = contacts_to_searchbardata$phone.getRecord(1);
	} else {
		rec = contacts_to_searchbardata$phone.getRecord(contacts_to_searchbardata$phone.newRecord());
	}
	
	if(rec && record.phone_1) {
		displayValue = [];
		if(record.c_name_full) {
			displayValue.push(record.c_name_full);
		}
		if(record.phone_1) {
			displayValue.push(record.phone_1);
		}
		
		rec.returnvalue = record.contact_id;
		rec.displayvalue = displayValue.join(' - ');
	} else {
		contacts_to_searchbardata$phone.deleteRecord(rec)
	}
	
	//Email part
	if(utils.hasRecords(contacts_to_searchbardata$email)) {
		rec = contacts_to_searchbardata$email.getRecord(1);
	} else {
		rec = contacts_to_searchbardata$email.getRecord(contacts_to_searchbardata$email.newRecord());
	}
	
	if(rec && record.email_1) {
		displayValue = [];
		if(record.c_name_full) {
			displayValue.push(record.c_name_full);
		}
		if(record.email_1) {
			displayValue.push(record.email_1);
		}
		
		rec.returnvalue = record.contact_id;
		rec.displayvalue = displayValue.join(' - ');
	} else {
		contacts_to_searchbardata$email.deleteRecord(rec)
	}
}
