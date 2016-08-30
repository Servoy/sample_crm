angular.module('bootstrapcomponentsextraTextboxgroup',['servoy']).directive('bootstrapcomponentsextraTextboxgroup', function() {  
    return {
        restrict: 'E',
        scope: {
         	model: "=svyModel",
         	api: "=svyApi",
         	handlers: "=svyHandlers"
        },
        link: function($scope, $element, $attrs) {
        	//VARS
        	var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        	$scope.showError = false
			
			//METHODS
        	$scope.$watch('model.dataProviderID', function() {
        		if($scope.model.inputValidation == 'email') {
        			$scope.errorMessage = 'This is a invalid email address'
        			var isMatchRegex = EMAIL_REGEXP.test($scope.model.dataProviderID);
        			if(isMatchRegex || $scope.model.dataProviderID <= 3) {
        				$scope.showError = false
        			} else {
        				$scope.showError =  true
        			}
        		} else {
        			$scope.showError = false
        		}
        	})
			
			//API
			$scope.api.isValid = function() {
				return !$scope.showError
			}
        },
      templateUrl: 'bootstrapcomponentsextra/textboxgroup/textboxgroup.html'
    };
  })