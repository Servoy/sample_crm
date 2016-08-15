angular.module('servoysampleScTags',['servoy']).directive('servoysampleScTags', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel',
		  handlers: "=svyHandlers"
      },
      controller: function($scope, $element, $attrs) {
    	  $scope.dummyDate = [{name: 'Test1'}, {name: 'Cool'}]
    	  
    	  
    	  $scope.newTag = function(chip) {
    	      return {
    	        name: chip
    	      }
    	  }
      },
      templateUrl: 'servoysample/scTags/scTags.html'
    };
  })