angular.module('servoysampleMainheader',['servoy']).directive('servoysampleMainheader', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel',
		  handlers: "=svyHandlers"
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'servoysample/mainheader/mainheader.html'
    };
  })