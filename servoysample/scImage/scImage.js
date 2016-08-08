angular.module('servoysampleScImage',['servoy']).directive('servoysampleScImage', function() {  
    return {
      restrict: 'E',
      scope: {
          model: "=svyModel",
	      handlers: "=svyHandlers"
      },
      controller: function($scope, $element, $attrs) {
    	  function test(){
    		  console.log('bla')
    	  }
      },
      templateUrl: 'servoysample/scImage/scImage.html'
    };
  })