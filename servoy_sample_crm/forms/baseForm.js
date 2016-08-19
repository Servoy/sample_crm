/**

 * @private
 * @param {String} menuItem
 *
 * @properties={typeid:24,uuid:"2B8A2EBE-E181-4A79-A13E-D9ECE90EFEB4"}
 */
function menuNavigationClick(menuItem) {
	application.output('User click on : ' + menuItem)
	switch (menuItem) {
	case 'Dashboard':
		elements.tab_content.containedForm = 'baseDashboard'
		break;
	case 'Contacts':
		elements.tab_content.containedForm = 'baseContact'
		break;
	default:
		elements.tab_content.containedForm = 'baseDashboard'
		break;
	}
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"E05AE2B0-491E-4FB7-8947-270CFEE94300"}
 */
function toggleMenuButton() {
	if (elements.navigation.getCurrentMenuView() == 'full') {
		elements.navigation.menuView = 'mini'
	} else {
		elements.navigation.menuView = 'full'
	}

}

/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"828383CC-7211-40E2-BF83-57F9432C725F"}
 */
function formOnResize(event) {
	//var height = application.getWindow().getHeight() - 58;
	//elements.navigation.height = height;
	//elements.tab_content.height = height;
}
