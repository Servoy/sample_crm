angular.module('servoysampleScCardView',['servoy', 'ngMaterial']).directive('servoysampleScCardView', function() {  
    return {
      restrict: 'E',
      scope: {
         	model: "=svyModel",
         	handlers: "=svyHandlers"
        },
      controller: function($scope, $element, $attrs) {
      },
      link: function($scope, $element, $attrs) {
    	  $scope.$watch('model.foundset.serverSize', function (newValue,oldValue) {
    		  if (newValue)
    		  {
    		  	$scope.model.foundset.loadRecordsAsync(0, newValue);
    		  }	  
          });
    	  
    	  $scope.getImageUrl = function(column,row) {
    		  if (column && row) {
       			var index = $scope.model.foundset.viewPort.rows.indexOf(row)
       			if (index >= 0 && column.image && column.image[index]) {
       				 return column.image[index];
       			}	 
       		 }	  
      		 return null; 
    	  }
    	  
    	  $scope.getUrl = function(column,row) {
     		 if (column && row) {
     			var index = $scope.model.foundset.viewPort.rows.indexOf(row)
     			if (index >= 0 && column.dataprovider && column.dataprovider[index] && column.dataprovider[index].url) {
     				 return column.dataprovider[index].url;
     			}	 
     		 }	  
    		 return null; 
    	  }
    	  
    	  $scope.getData = function(column,row) {
	  		if(column && row) {
	  			var index = $scope.model.foundset.viewPort.rows.indexOf(row)
     			if (index >= 0 && column.dataprovider && column.dataprovider[index]) {
     				 return column.dataprovider[$scope.model.foundset.viewPort.rows.indexOf(row)];
     			}	 
     		 }	  
    		 return null; 
    	  }
    	  if ($scope.handlers.onCardClick) {
    		  $scope.cardClicked = function(row) {
    			  $scope.handlers.onCardClick((row) + 1);
    		  }
    	  }
      },
      templateUrl: 'servoysample/scCardView/scCardView.html'
    };
  })