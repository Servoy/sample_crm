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
					$scope.model.mapObject = JSON.stringify({zoom: $scope.model.zoom, 
											disableDoubleClickZoom: $scope.model.disableDoubleClickZoom,
											draggable: $scope.model.draggable,
											keyboardShortcuts: $scope.model.keyboardShortcuts,
											scrollwheel: $scope.model.scrollwheel,
											center: {lat: 52.3409950, lng: 4.8636360}})
				}
			}
    	  
//    	  function convertAddres($address) {
//    		  if($address && $scope.model.apiKey) {
//    			  console.info("https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURI($address) + "&key=" + $scope.model.apiKey)
//    			  $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURI($address) + "&key=" + $scope.model.apiKey).success(function(data, status, headers, config) {
//    			  		  return data
//    				  }).
//    				  error(function(data, status, headers, config) {
//    					  return data
//    				  });
//    		  }
//    	  }

			$scope.api.setNewLocation = function($lat, $lng) {
				if($lat && $lng) {
					$scope.model.mapObject.center.lat = parseFloat($lat)
					$scope.model.mapObject.center.lng = parseFloat($lng)
				}
			};
      },
      templateUrl: 'svygooglemaps/map/map.html'
    };
  }]).directive('svygooglemapsMapTemplate', ["$compile", function($compile) {
		return { 
			restrict: 'E',
			link: function($scope, $element, attrs, ctrl, transclude) {
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
										        map = new google.maps.Map(document.getElementById(\'map\'), ' + $scope.model.mapObject + '); \
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