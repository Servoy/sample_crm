angular.module('svygooglemapsMap',['servoy']).directive('svygooglemapsMap', ['$svyProperties', '$sabloConstants', function($svyProperties, $sabloConstants) {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel',
    	  api: "=svyApi"
      },
      controller: function($scope, $element, $attrs, $http) {
    	  $scope.init = init();
    	  
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
  }]).directive('svygooglemapsMapTemplate', ["$compile", function($compile) {
		return { 
			restrict: 'E',
			link: function($scope, $element, attrs, ctrl, transclude) {
				// Is not possible to add/remove dinamically attributes from material design template.
				// Therefore the template is compiled at runtime
				function getTemplate() {
						var template = '<html> \
										  <head> \
										    <title>Simple Map</title> \
										    <meta name="viewport" content="initial-scale=1.0"> \
										    <meta charset="utf-8"> \
										    <style> \
										      html, body { \
										        height: 100%; \
										        margin: 0; \
										        padding: 0; \
										      } \
										      #map { \
										        height: 100%; \
										      } \
										    </style> \
										  </head>  \
										  <body> \
										    <div id="map"></div> \
										    <script> \
										      var map; \
										      function initMap() { \
										        map = new google.maps.Map(document.getElementById(\'map\'), ' + JSON.stringify($scope.model.mapObject) + '); \
										      } \
										    </script> \
										    <script src="https://maps.googleapis.com/maps/api/js?key='+ $scope.model.apiKey +'&callback=initMap" \
										    async defer></script> \
										  </body> \
										</html>'
						return template
				}

				// set the template and populate it
				$element.html(getTemplate());
				$compile($element.contents())($scope);
			}
		}
	}])