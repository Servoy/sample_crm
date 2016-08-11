angular.module('servoysampleSidebarNav',['servoy']).directive('servoysampleSidebarNav', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel',
		  api: "=svyApi",
	      handlers: "=svyHandlers"
      },
      controller: function($scope, $element, $attrs) {
    	  
    	  //FUNCTIONS
    	  $scope.init = init;
    	  $scope.activeItem = $scope.model.menuItems[0].itemText;
		  $scope.menuItemOnClick = menuItemOnClick;
		  $scope.initMenu = initMenu;

    	 function init() {
    	 		initMenu();
    		};
    		
    	  function menuItemOnClick(itemName) {
    		  $scope.activeItem = itemName;
    		  $scope.handlers.onItemClick(itemName);
    	  };
    	  
    	  function initMenu() {
    		    $('#menu ul').hide();
    		    $('#menu ul').children('.current').parent().show();
    		}
    	  
    		//API
    		$scope.api.getCurrentMenuView = function() {
    			if($scope.model.menuView) {
    			  	return $scope.model.menuView;
    			} else {
    				return "full";
    			}
             };
             
             //WATCHERS
	   		$scope.$watch('model.menuView', function(){
	    		  if ($scope.model.menuView)
	    		  {
	    		  	$("#wrapper").toggleClass("toggled-2");
	    		  }	  
	    	})
    	  
      },
      templateUrl: 'servoysample/SidebarNav/SidebarNav.html'
    };
    
  })
