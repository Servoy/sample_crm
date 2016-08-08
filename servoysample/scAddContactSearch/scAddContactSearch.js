angular.module('servoysampleScAddContactSearch', ['servoy', 'ngMaterial']).directive('servoysampleScAddContactSearch', ['$timeout', '$q', '$utils', '$parse', function($timeout, $q, $utils, $parse) {
		return {
			restrict: 'E',
			scope: {
				model: '=svyModel',
				handlers: "=svyHandlers",
				api: "=svyApi",
				svyServoyapi: "="
			},
			controller: function($scope, $element, $attrs) { },
			link: function($scope, $element, $attrs) {

				$scope.searchText = null;
				$scope.simulateQuery = false;
				$scope.isDisabled = false;
				$scope.items = [];
				$scope.querySearch = querySearch;
				$scope.selectedItem = getDisplayValue($scope.model.dataProviderID);		// fix for editable grid
				$scope.selectedItemChange = selectedItemChange;
				$scope.searchTextChange = searchTextChange;

				$scope.dpChanged = false;

				// use timeout to attach onFocusLost/focusGained event to input field in autocomplete
				$timeout(function() {
						var input = $element.find('input')
						if (!input) {
							console.log("warning: can't find input field in md-autocomplete");
							return;
						}

						if ($scope.handlers.onFocusGainedMethodID) {
							attachEventHandler(input, $scope, $scope.handlers.onFocusGainedMethodID, 'focus');
						}
						if ($scope.handlers.onFocusLostMethodID) {
							attachEventHandler(input, $scope, $scope.handlers.onFocusLostMethodID, 'blur');
						}
					});

				/**
				 * Search for items... use $timeout to simulate
				 * remote dataservice call.
				 */
				function querySearch(query) {
					if ($scope.dpChanged) {
						$scope.dpChanged = false;
						return;
					}

					// valuelistID has values
					if ($scope.model.valuelistID && $scope.model.valuelistID.length) {
						var items = $scope.model.valuelistID;

						// filter empty objects
						if (items[0].realValue === "") {
							items = items.filter(function(item) {
								return item.realValue !== ""
							});
						}

						// search for results
						var results = (query != null && query != '') ? items.filter(createFilterFor(query)) : items.filter(createFilterFor(''));
						var deferred;
						if ($scope.simulateQuery) {
							deferred = $q.defer();
							$timeout(function() {
									deferred.resolve(results);
								}, Math.random() * 1000, false);
							return deferred.promise;
						} else {
							return results;
						}
					} 
				}

				// When the search text is modified or cleared
				function searchTextChange(text) {

					// When search text is cleared, clear the data provider
					if (text == '' || text == null) {
						$scope.model.dataProviderID = null;
						$scope.svyServoyapi.apply('dataProviderID');
						$scope.searchText = '';
					}
				}

				// When one item is selected
				function selectedItemChange(item) {
					if (item) {
						$scope.model.dataProviderID = item.realValue;
						$scope.svyServoyapi.apply('dataProviderID');
						if($scope.handlers.onActionMethodID) {
							$scope.handlers.onActionMethodID()
						}
					}
				}

				/**
				 * Create filter function for a query string
				 */
				function createFilterFor(query) {

					if (!$scope.model.enabled) return;

					var lowercaseQuery = angular.lowercase(query);
					var nameFilter = []
					return function filterFn(item) {
						if (item.realValue === "") {
							return false;
						}
						var nameMatch = item.displayValue.toLowerCase().split(' - ')[0]
						var value = item.displayValue.toLowerCase()
						if(nameFilter.indexOf(nameMatch) == -1 && value.indexOf(lowercaseQuery) !== -1) {
							nameFilter.push(nameMatch)
							return true
						} else {
							return false
						}
					};
				}

				// Get display value of the item in valuelistID
				function getDisplayValue(realValue) {
					var item;
					if ($scope.model.valuelistID) {
						for (var i in $scope.model.valuelistID) {
							item = $scope.model.valuelistID[i]
							if (item.realValue == realValue) {
								return item.displayValue;
							}
						}
					}
					return realValue;
				}

				// Watch dataprovider changes
				$scope.$watch('model.dataProviderID', function(newVal, oldVal) {

						if (newVal == oldVal) {
							return;
						}

						$scope.dpChanged = true;
						if ($scope.model.dataProviderID == null || $scope.model.dataProviderID == '') {
							$scope.searchText = '';
						} else {
							$scope.searchText = getDisplayValue($scope.model.dataProviderID);
						}
					});
				
				
				// attach handler to element. Source code from $utils.attachEventHandlers
				function attachEventHandler (element,scope,fn,domEvent) {
					element.on(domEvent, function(event) {
							
							function executeHandler(){
								fn(event);
							};
							// always use timeout or evalAsync because this event could be triggered by a angular call (requestFocus) thats already in a digest cycle.
							scope.$evalAsync(executeHandler);
							return true;
					}); 
				}

			},
			templateUrl: 'servoysample/scAddContactSearch/scAddContactSearch.html'
		};
	}])