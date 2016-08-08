angular.module('servoysampleScNavMainMenu',['servoy']).directive('servoysampleScNavMainMenu', function() {  
    return {
      restrict: 'E',
      scope: {
       	model: "=svyModel",
     	handlers: "=svyHandlers"
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'servoysample/scNavMainMenu/scNavMainMenu.html'
    };
  })