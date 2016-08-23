/**
 * @private
 * @param {String} menuItem
 *
 * @properties={typeid:24,uuid:"2B8A2EBE-E181-4A79-A13E-D9ECE90EFEB4"}
 */
function menuNavigationClick(menuItem) {
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

 * @protected
 * @param {String} menuItem
 *
 * @properties={typeid:24,uuid:"5F97DDA6-3A40-460C-9D00-27DFCAE0C9B3"}
 */
function userMenuItemClick(menuItem) {
	switch (menuItem) {
	case 'logout':
		security.logout();
		break;
	
	case 'settings':
		var window = application.createWindow('userSettings', JSWindow.MODAL_DIALOG);
		window.show('userProfile');
	break;
	default:
		if(application.isInDeveloper()) {
			application.output('Clicked on menuitem: ' + menuItem)
		}
	break;
	}
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"FCDBF997-2832-4C76-AB3E-52FDD3A8F4E8"}
 */
function onLoad(event) {
	elements.userheader.userName = scopes$login_to_users.name_full;
}
