angular.module('servoysampleScMainMenu', ['servoy']).directive('servoysampleScMainMenu', function () {
  return {
    restrict: 'E',
    scope: {
        model: '=svyModel',
        handlers: '=svyHandlers',
        api: '=svyApi'
    },
    controller: function ($scope, $element, $attrs) {
      $scope.menu = []
      $scope.closedmenu = false
      $scope.getImage = function (menuitem) {
    	if (menuitem.description === 'Administratie') return 'resources/fs/mnx_libraries/menu/menu_administratie.png'
    	if (menuitem.description === 'Onderhoud') return 'resources/fs/mnx_libraries/menu/menu_onderhoud.png'
    	if (menuitem.description === 'Taken') return 'resources/fs/mnx_libraries/menu/menu_taken.png'
    	if (menuitem.description === 'Opvragen') return 'resources/fs/mnx_libraries/menu/menu_opvragen.png'
    	if (menuitem.description === 'Afdrukken') return 'resources/fs/mnx_libraries/menu/menu_print.png'
    	if (menuitem.description === 'Beheer') return 'resources/fs/mnx_libraries/menu/menu_beheer.png'
    	if (menuitem.description === 'Tools') return 'resources/fs/mnx_libraries/menu/menu_beheer.png'
        return null
      }
      $scope.getNestedImage = function (menuitem) {
        if (menuitem.children.length > 0) return 'resources/fs/mnx_libraries/menu_arrow.png'
        return null
      }
      $scope.mouseOverMenuItem = function ($event, menuitem) {
    	  $scope.closedmenu = false
      }
      $scope.clickMenuItem = function (menuitem) {
        if (menuitem.type !== 'R') {
          $scope.closedmenu = true
          $scope.handlers.onActivateMenuItem(menuitem.menu_item_id)
        }
      }
    },
    link: function ($scope, $element, $attrs) {
      $scope.$watch('model.visible', function () {})
      $scope.$watch('model.menu', function () {
		$scope.menu = $scope.model.menu
		$scope.closedmenu = true
	  })
    },
    templateUrl: 'servoysample/scMainMenu/scMainMenu.html'
  }
})
