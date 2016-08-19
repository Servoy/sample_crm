angular.module('svygooglemapsMap',['servoy']).directive('svygooglemapsMap', ['$svyProperties', '$sabloConstants', function($svyProperties, $sabloConstants) {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel',
    	  api: "=svyApi"
      },
      controller: function($scope, $element, $attrs, $http) {
    	  $scope.init = init();
    	  $scope.mapSourceUrl = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap'
    	  //FUNCTIONS
    	  function init() {
				if(!$scope.model.mapObject) {
					$scope.model.mapObject = {zoom: $scope.model.zoom, 
											disableDoubleClickZoom: $scope.model.disableDoubleClickZoom,
											draggable: $scope.model.draggable,
											keyboardShortcuts: $scope.model.keyboardShortcuts,
											scrollwheel: $scope.model.scrollwheel,
											center: {lat: parseFloat($scope.model.Latitude), lng: parseFloat($scope.model.Longitude)}}
				}
			}
			
			$scope.api.setNewLocation = function($lat, $lng) {
				if($lat && $lng) {
					$scope.model.mapObject.center.lat = parseFloat($lat)
					$scope.model.mapObject.center.lng = parseFloat($lng)
					init()
				}
			};
      },
      templateUrl: 'svygooglemaps/map/map.html'
    };
  }])