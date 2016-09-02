angular.module('servoynavigationMenubar',['servoy']).directive('servoynavigationMenubar', function() {  
	return {
		restrict: 'E',
		scope: {
			model: '=svyModel',
			api: "=svyApi",
			handlers: "=svyHandlers",
			svyApi: '=svyServoyapi'
		},
		controller: function($scope, $element, $attrs) {

			//FUNCTIONS
			$scope.init = init();
			$scope.activeItem = $scope.model.menuItems[0].itemText;
			$scope.menuItemOnClick = menuItemOnClick;
			$scope.initMenu = initMenu;

			function init() {
				initMenu();
				//If menu shouldn't be collapsed by default toggle it once
				if($scope.model.menuViewcollapse != true) {
					$("#wrapper").toggleClass("toggled-2");
				}
			};

			function menuItemOnClick(itemName) {
				$scope.activeItem = itemName;	
				$scope.handlers.onItemClick(itemName);
			};

			function initMenu() {
				$('#menu ul').hide();
				$('#menu ul').children('.current').parent().show();
			}

			$scope.getContainerStyle = function() {
				var height = 0;
				if ($scope.model.height) {
					height = $scope.model.height;
				} 
				
				if(height == 1) {
					return { height: "100%" };
				}
				return { position: "relative", minHeight: height + "px" };
			}

			//API
			$scope.api.isMenuCollapsed = function() {
				if ($scope.model.menuViewcollapse) {
					return $scope.model.menuViewcollapse;
				} else {
					return false
				}
			};

			//WATCHERS
			$scope.$watch('model.menuViewcollapse', function() {
					$("#wrapper").toggleClass("toggled-2");
				})
		},
      templateUrl: 'servoynavigation/menubar/menubar.html'
    };
  })