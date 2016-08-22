angular.module('servoysampleScNavHeaderMenu',['servoy']).directive('servoysampleScNavHeaderMenu', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'servoysample/scNavHeaderMenu/scNavHeaderMenu.html'
    };
  })