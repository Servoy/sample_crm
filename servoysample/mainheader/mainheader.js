angular.module('servoysampleMainheader',['servoy']).directive('servoysampleMainheader', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'servoysample/mainheader/mainheader.html'
    };
  })