angular.module('servoysampleScFabNavigationItems',['servoy', 'ngMaterial']).directive('servoysampleScFabNavigationItems', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
	          var self = this;
	          self.hidden = false;
	          self.isOpen = false;
	          self.hover = false;
    	     $scope.$watch('model.isOpen', function(isOpen) {
    	         if (isOpen) {
    	           $timeout(function() {
    	             $scope.tooltipVisible = self.isOpen;
    	           }, 600);
    	         } else {
    	           $scope.tooltipVisible = self.isOpen;
    	         }
    	       });
    	     
    	     self.items = [
    	        { name: "Twitter", icon: "img/icons/twitter.svg", direction: "bottom" },
    	        { name: "Facebook", icon: "img/icons/facebook.svg", direction: "top" },
    	        { name: "Google Hangout", icon: "img/icons/hangout.svg", direction: "bottom" }
    	      ];
      },
      templateUrl: 'servoysample/scFabNavigationItems/scFabNavigationItems.html'
    };
  })