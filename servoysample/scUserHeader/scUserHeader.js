angular.module('servoysampleScUserHeader',['servoy']).directive('servoysampleScUserHeader', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'servoysample/scUserHeader/scUserHeader.html'
    };
  })