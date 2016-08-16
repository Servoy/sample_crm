
/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"FC97CE68-BC00-4693-935D-262BD35BF83E"}
 */
function onResize(event) {
	var height = (application.getWindow().getHeight() - 58);
	elements.tab_listForm.height = height;
	elements.tab_detailForm.height = height;
}
