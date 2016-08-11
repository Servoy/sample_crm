/**
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"886447F3-9E3F-4D07-B12D-C879FB80DD12"}
 */
var searchValue = '';

/**
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FBAC0E03-E6CE-49F2-835E-25B33790B6BE"}
 */
function searchPerson(event) {	
	if(searchValue) {
		var fs = datasources.db.svy_sample.contacts.getFoundSet();
			fs.loadRecords(application.getUUID(searchValue))
		if(fs.getSize() == 1) {
			if(forms.frm_list_tab.elements.tabpanel.tabIndex == 1) {
				foundset.setSelectedIndex(foundset.getRecordIndex(fs.getRecord(1)))
			} else {
				application.output('OHOH This function is not build, try again later!!!')
				//forms.dlg_editContact.showDialog(fs.getRecord(1))
			}
		}
	}
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"AEC08934-6826-43C0-98AD-8D05F7988E6A"}
 */
function noResultonActionMethodID() {
	application.output('bla')
}
