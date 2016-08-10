angular.module('servoysampleSidebarNav',['servoy']).directive('servoysampleSidebarNav', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'servoysample/SidebarNav/SidebarNav.html'
    };
    
  })
