angular.module('svygooglemapsMap',['servoy']).directive('svygooglemapsMap', ['$svyProperties', '$sabloConstants', function($svyProperties, $sabloConstants) {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'svygooglemaps/map/map.html'
    };
  }]).directive('vygooglemapsMapTemplate', ["$compile", function($compile) {
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
										        map = new google.maps.Map(document.getElementById(\'map\'), { \
										          center: {lat: -34.397, lng: 150.644}, \
										          zoom: 8 \
										        }); \
										      } \
										    </script> \
										    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" \
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