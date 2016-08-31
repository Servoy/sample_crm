angular.module('svyoauth2SigninLinkedin',['servoy','satellizer']).config(function($authProvider) {
   $authProvider.linkedin({
       clientId: '78zvij188dntsk',
	   redirectUri: window.location.origin,
	   url: window.location.origin
     });
  }).directive('svyoauth2SigninLinkedin', function($auth) {  
   return {
     restrict: 'E',
     scope: {
       model: '=svyModel',
	   handlers: "=svyHandlers"
     },
     controller: function($scope, $element, $attrs) {
       $scope.authenticate = function(provider) {
         $auth.link(provider, {clientId: $scope.model.cliendId}).then(function(response) {
			 if(response && response.config && response.config.data &&response.config.data.code) {
			 	$scope.model.tokenDataProviderID = response.config.data.code
				console.log($scope.model.tokenDataProviderID)
			 } else {
				 console.log('Failed to get the token')
				 $scope.model.tokenDataProviderID = null
			 }
         })
		};
     },
     templateUrl: 'svyoauth2/signinLinkedin/signinLinkedin.html'
   };
})