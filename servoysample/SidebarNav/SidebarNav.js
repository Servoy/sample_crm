angular.module('servoysampleSidebarNav',['servoy']).directive('servoysampleSidebarNav', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel',
	      handlers: "=svyHandlers"
      },
      controller: function($scope, $element, $attrs) {
    	  $scope.activeItem = $scope.model.menuItems[0].itemText
		  $scope.menuItemOnClick = menuItemOnClick
		  
//      	  $scope.getContainerStyle = function() {
//    		  var height = 0;
//    		  if ($scope.model.height)
//    		  {
//    			  height = $scope.model.height
//    		  }
//    		  return {position:"relative", minHeight:height+"px"};
//    	  }
      	  
    	  
    	  function menuItemOnClick(itemName) {
    		  $scope.activeItem = itemName
    		  $scope.handlers.onItemClick(itemName)
    	  }
      },
      templateUrl: 'servoysample/SidebarNav/SidebarNav.html'
    };
    
  })
