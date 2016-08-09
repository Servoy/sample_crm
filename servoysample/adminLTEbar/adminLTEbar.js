angular.module('servoysampleAdminLTEbar',['servoy']).directive('servoysampleAdminLTEbar', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'servoysample/adminLTEbar/adminLTEbar.html'
    };
  })