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
	var window = application.getWindow();
	elements.tab_frm_list.height = (window.getHeight() - 110);
	elements.tab_sm_list.height = (window.getHeight() - 100)
}
