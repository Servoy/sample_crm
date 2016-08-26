
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2644A3EF-A967-44F2-BABF-1C32B551E596"}
 */
function onShow(firstShow, event) {
}

/**
 * @param rec
 *
 * @properties={typeid:24,uuid:"29C18C84-66C5-406E-A434-185906BD2EEF"}
 */
function showForm(rec) {
	if(rec) {
		foundset.setSelectedIndex(foundset.getRecordIndex(rec));
	}
	
	forms.frm_mo_contactTab.elements.tab.tabIndex = 2;
}