/**
 *
 * @param {Number} column
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"345B89FB-37C4-4F34-85B1-6583DBB70B29"}
 */
function onCardClick(column) {
	
	foundset.setSelectedIndex(column);
	forms.baseContact.elements.tab_dataContent.containedForm = scopes.contactUtils.contactViewForm.DETAIL;

}
