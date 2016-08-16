angular.module('servoysampleScTags',['servoy']).directive('servoysampleScTags', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel',
		  handlers: "=svyHandlers"
      },
      controller: function($scope, $element, $attrs) {
    	  //Functions
    	  $scope.dummyDate = []
    	  
    	  $scope.getData = function(column,row) {
  	  		if(column && row) {
  	  			var index = $scope.model.foundset.viewPort.rows.indexOf(row)
       			if (index >= 0 && column.dataprovider && column.dataprovider[index]) {
       				 return column.dataprovider[$scope.model.foundset.viewPort.rows.indexOf(row)];
       			}	 
       		 }	  
      		 return null; 
      	  }
    	  
    	  $scope.newTag = function(chip) {
    	      return chip
    	  }
    	 //Watchers
    	  $scope.$watch('model.foundset', function() {
    		  $scope.dummyDate = []
    		  if($scope.model.column[0] && $scope.model.column[0].dataprovider) {
	    		  for(var i = 1; i <= $scope.model.foundset.viewPort.size(); i++) {
	    			  $scope.dummyDate.push($scope.model.column[0].dataprovider[$scope.model.foundset.viewPort.rows[i]])
	    		  }
    		  }
    	  })
      },
      templateUrl: 'servoysample/scTags/scTags.html'
    };
  })