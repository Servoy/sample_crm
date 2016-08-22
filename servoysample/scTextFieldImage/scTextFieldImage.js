angular.module('servoysampleScTextFieldImage', ['servoy', 'ngMaterial']).directive('servoysampleScTextFieldImage', ['$svyProperties', '$sabloConstants', function($svyProperties, $sabloConstants) {
		return {
			restrict: 'E',
			scope: {
				model: '=svyModel',
				handlers: "=svyHandlers",
				api: "=svyApi",
				svyServoyapi: "="
			},
			controller: function($scope, $element, $attrs) {
				$scope.style = {
					width: '100%',
					height: '100%',
					'overflow': 'hidden'
				}
				$scope.teaxtareastyle = {
					width: '100%',
					height: '100%',
					'overflow-y': 'auto'
				}
			},
			link: function($scope, $element, $attrs) {
				$scope.hasFieldImage = hasFieldImage;
				var tooltipState = null;
				var formatState = null;
				var className = null;
				
				Object.defineProperty($scope.model, $sabloConstants.modelChangeNotifier, {
						configurable: true,
						value: function(property, value) {
							switch (property) {
							case "enabled":
								var input = getInputElement();
								if (!isDisabled()) input.removeAttr("disabled");
								else input.attr("disabled", "disabled");
								break;
							case "readOnly":
								var input = getInputElement();
								if (!isDisabled()) input.removeAttr("disabled");
								else input.attr("disabled", "disabled");
								break;
							}
						}
					});
				var destroyListenerUnreg = $scope.$on("$destroy", function() {
						destroyListenerUnreg();
						delete $scope.model[$sabloConstants.modelChangeNotifier];
					});
				// data can already be here, if so call the modelChange function so that it is initialized correctly.
				var modelChangFunction = $scope.model[$sabloConstants.modelChangeNotifier];
				for (key in $scope.model) {
					modelChangFunction(key, $scope.model[key]);
				}

				function getInputElement() {
					return $element.find('textfield');
				}

				function isDisabled() {
					return ($scope.model.readOnly == true) || !$scope.model.enabled;
				}
				
				function hasFieldImage() {
					
					if($scope.model.fieldimage) {
						return true
					} else {
						return false
					}
				}
			},
			templateUrl: 'servoysample/scTextFieldImage/scTextFieldImage.html'
		};
	}]).directive('servoysampleSctextfieldimageTemplate', ["$compile", function($compile) {
		return {
			restrict: 'E',
			link: function($scope, $element, attrs, ctrl, transclude) {
				// Is not possible to add/remove dinamically attributes from material design template.
				// Therefore the template is compiled at runtime
				function getTemplate() {
						var template = ""
							template += "<input type='text' ng-model='model.dataProviderID'\
										sablo-tabseq='model.tabSeq' \
										svy-focusgained='handlers.onFocusGainedMethodID($event)'\
										svy-focuslost='handlers.onFocusLostMethodID($event)' "
						if($scope.model.required) {
							template += " required md-no-asterisk "
						}
						
						if($scope.model.validation == 'E-mail') {
							template += 'ng-pattern="/^.+@.+\\..+$/" '
						} else if($scope.model.validation == 'Phone') {
							template += 'ng-pattern="/^[(]{0,1}[0-9]{3}[)]{0,1}[-\\s\\.]{0,1}[0-9]{3}[-\\s\\.]{0,1}[0-9]{4}$/" '
						}
							template += "svy-autoapply />"
						return template
				}

				// set the template and populate it
				$element.html(getTemplate());
				$compile($element.contents())($scope);
			}
		}
	}])