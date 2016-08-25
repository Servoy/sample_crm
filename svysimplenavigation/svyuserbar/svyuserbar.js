angular.module('svysimplenavigationSvyuserbar',['servoy']).directive('svysimplenavigationSvyuserbar', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel',
		  handlers: "=svyHandlers"
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'svysimplenavigation/svyuserbar/svyuserbar.html'
    };
  })