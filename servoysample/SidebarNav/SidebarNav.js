angular.module('servoysampleSidebarNav', ['servoy']).directive('servoysampleSidebarNav', function($sabloApplication) {
		return {
			restrict: 'E',
			scope: {
				model: '=svyModel',
				api: "=svyApi",
				handlers: "=svyHandlers"
			},
			controller: function($scope, $element, $attrs) {

				//FUNCTIONS
				$scope.init = init();
				$scope.activeItem = $scope.model.menuItems[0].itemText;
				$scope.menuItemOnClick = menuItemOnClick;
				$scope.initMenu = initMenu;

				function init() {
					initMenu();
					//Init set menu open (so toggle it once)
					$("#wrapper").toggleClass("toggled-2");
				}
				;

				function menuItemOnClick(itemName) {
					$scope.activeItem = itemName;
					$scope.handlers.onItemClick(itemName);
				}
				;

				function initMenu() {
					$('#menu ul').hide();
					$('#menu ul').children('.current').parent().show();
				}

				$scope.getContainerStyle = function() {
					var height = 0;
					if ($scope.model.height) {
						height = $scope.model.height
					}
					return { position: "relative", minHeight: height + "px" };
				}

				//API
				$scope.api.getCurrentMenuView = function() {
					if ($scope.model.menuView) {
						return $scope.model.menuView;
					} else {
						return "full";
					}
				};

				//WATCHERS
				$scope.$watch('model.menuView', function() {
						if ($scope.model.menuView) {
							$("#wrapper").toggleClass("toggled-2");
							if ($scope.model.ExtraToggleId) {
								var split = $scope.model.ExtraToggleId.split(".")
								if (split && split[0] && split[1]) {
									$(split[0]).toggleClass(split[1])
								}
							}
						}
					})
			},
			templateUrl: 'servoysample/SidebarNav/SidebarNav.html'
		};
	})
