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
	   svyApi: '=svyServoyapi',
	   handlers: "=svyHandlers"
     },
     controller: function($scope, $element, $attrs) {
       $scope.authenticate = function(provider) {
         $auth.link(provider, {clientId: $scope.model.cliendId}).then(function(response) {
			 if(response && response.config && response.config.data &&response.config.data.code) {
			 	$scope.model.tokenDataProviderID = response.config.data.code
				$scope.svyApi.apply('tokenDataProviderID')
			 } else {
				 $scope.model.tokenDataProviderID = null
			 }
         })
		};
     },
     templateUrl: 'svyoauth2/signinLinkedin/signinLinkedin.html'
   };
})