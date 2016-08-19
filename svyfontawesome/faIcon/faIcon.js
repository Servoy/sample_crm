angular.module('svyfontawesomeFaIcon',['servoy']).directive('svyfontawesomeFaIcon', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel',
    	  handlers : "=svyHandlers"
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'svyfontawesome/faIcon/faIcon.html'
    };
  })