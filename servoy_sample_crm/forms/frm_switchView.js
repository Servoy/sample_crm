
/**
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FE9A449C-F895-4ECD-A3B4-DBA107A1C6E4"}
 */
function showListView(event) {
	forms.baseContact.elements.tab_dataContent.containedForm = scopes.contactUtils.contactViewForm.DETAIL;
}

/**
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"958CC25E-BAAB-4034-81E9-ADC3CA6219AA"}
 */
function showCardView(event) {
	forms.baseContact.elements.tab_dataContent.containedForm = scopes.contactUtils.contactViewForm.CARD;
}
