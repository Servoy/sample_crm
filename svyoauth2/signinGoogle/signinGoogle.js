angular.module('svyoauth2SigninGoogle',['servoy','satellizer']).config(function($authProvider) {
   $authProvider.linkedin({
       clientId: '',
	   redirectUri: window.location.origin,
	   url: window.location.origin
     });
  }).directive('svyoauth2SigninGoogle', function($auth) {  
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
			 } else {
				 $scope.model.tokenDataProviderID = null
			 }
         })
		};
     },
     templateUrl: 'svyoauth2/signinGoogle/signinGoogle.html'
   };
})