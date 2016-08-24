angular.module('svyoauth2SigninLinkedin',['servoy','satellizer']).config(function($authProvider) {
    $authProvider.linkedin({
        clientId: '78zvij188dntsk',
        redirectUri: 'http://localhost:8080/solutions/svySampleCrm/index.html?a='
      });
   }).directive('svyoauth2SigninLinkedin', function($auth) {  
    return {
      restrict: 'E',
      scope: {
        model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
        $scope.authenticate = function(provider) {
          $auth.link('linkedin').then(function(response) {
            console.log('bla')
          });
          };
          
          $scope.isAuthenticated = function() {
              return $auth.isAuthenticated();
            };
      },
      templateUrl: 'svyoauth2/signinLinkedin/signinLinkedin.html'
    };
  })