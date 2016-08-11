
/**

 * @private
 * @param {String} menuItem
 * 
 * @properties={typeid:24,uuid:"2B8A2EBE-E181-4A79-A13E-D9ECE90EFEB4"}
 */
function goToContacts(menuItem) {
	application.output('User click on : ' + menuItem )
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"E05AE2B0-491E-4FB7-8947-270CFEE94300"}
 */
function toggleMenuButton() {
	if(elements.navigation.getCurrentMenuView() == 'full') {
		elements.navigation.menuView = 'mini'
	} else {
		elements.navigation.menuView = 'full'
	}
	

}
