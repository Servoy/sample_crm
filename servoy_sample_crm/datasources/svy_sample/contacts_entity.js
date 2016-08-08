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
	
	if(rec && record.phone) {
		displayValue = [];
		if(record.c_name_full) {
			displayValue.push(record.c_name_full);
		}
		if(record.phone) {
			displayValue.push(record.phone);
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
	
	if(rec && record.email) {
		displayValue = [];
		if(record.c_name_full) {
			displayValue.push(record.c_name_full);
		}
		if(record.email) {
			displayValue.push(record.email);
		}
		
		rec.returnvalue = record.contact_id;
		rec.displayvalue = displayValue.join(' - ');
	} else {
		contacts_to_searchbardata$email.deleteRecord(rec)
	}
}
