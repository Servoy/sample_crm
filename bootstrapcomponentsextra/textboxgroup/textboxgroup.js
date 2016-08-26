angular.module('bootstrapcomponentsextraTextboxgroup',['servoy']).directive('bootstrapcomponentsextraTextboxgroup', function() {  
    return {
        restrict: 'E',
        scope: {
         	model: "=svyModel",
         	handlers: "=svyHandlers"
        },
        link: function($scope, $element, $attrs) {
        },
      templateUrl: 'bootstrapcomponentsextra/textboxgroup/textboxgroup.html'
    };
  })