angular.module('servoysampleSidebarNav',['servoy']).directive('servoysampleSidebarNav', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
      	  $scope.getContainerStyle = function() {
    		  var height = 0;
    		  if ($scope.model.height)
    		  {
    			  height = $scope.model.height
    		  }
    		  return {position:"relative", minHeight:height+"px"};
    	  }
      },
      templateUrl: 'servoysample/SidebarNav/SidebarNav.html'
    };
    
  })
