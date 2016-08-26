/**
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"10830C2B-0A85-4954-B2A4-684930E67FF3"}
 */
var searchValue = '';

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E6E919C2-0913-4578-83A5-8A7776885EE5"}
 */
function searchPersion(event) {
	var select = datasources.db.svy_sample.contacts.createSelect();
		select.result.addPk();
		select.where.add(select.columns.c_name_full.like(searchValue));
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B8D1F9D0-8458-48B5-B5DF-E7E2A53574E8"}
 */
function goToListForm(event) {
	forms.frm_mo_contactTab.elements.tab.tabIndex = 1;
}
