angular.module('svyoauth2SigninLinkedin',['servoy','satellizer']).directive('svyoauth2SigninLinkedin', function($location) {  
    return {
      restrict: 'E',
      scope: {
        model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
        $scope.authenticate = function(provider) {
        	window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78zvij188dntsk&redirect_uri='+ encodeURI('http://localhost:8080/solutions/svySampleCrm/index.html?m=linkedinAuthentication&a=bl&')
          };
      },
      templateUrl: 'svyoauth2/signinLinkedin/signinLinkedin.html'
    };
  })