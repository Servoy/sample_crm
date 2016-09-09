angular.module('servoynavigationUserbar',['servoy']).directive('servoynavigationUserbar', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel',
		  handlers: "=svyHandlers"
      },
      controller: function($scope, $element, $attrs) {
    	  $scope.imageSource = '';
    	  $scope.$watch('model.userImageDataProviderID', function() {
    		  if($scope.model.userImageDataProviderID) {
				if (!$scope.model.userImageDataProviderID.url) {
					$scope.imageSource = $scope.model.userImageDataProviderID;
				} else {
					$scope.imageSource = $scope.model.userImageDataProviderID.url
				}
			  }
			})
      },
      templateUrl: 'servoynavigation/userbar/userbar.html'
    };
  })