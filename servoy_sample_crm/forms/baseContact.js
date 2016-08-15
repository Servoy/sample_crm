/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"4317A045-F1CD-42F4-98BB-2091D39772BF"}
 */
function onResize(event) {
	var height = forms.baseForm.elements.tab_content.height;
	elements.tab_dataContent.height = height - 58;
}
