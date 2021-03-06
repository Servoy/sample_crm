angular.module('svytimelineTimeline',['servoy']).directive('svytimelineTimeline', function($formatterUtils) {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
    	  
//      		$scope.$on('$viewContentLoaded',(function () {
//	    			var timelineBlocks = $('.svy-timeline-block'),
//					offset = 0.8;
//			
//					//hide timeline blocks which are outside the viewport
//					hideBlocks(timelineBlocks, offset);
//				
//					//on scolling, show/animate timeline blocks when enter the viewport
//					$(window).on('scroll', function(){
//						(!window.requestAnimationFrame) 
//							? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
//							: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
//					});
//				
//					function hideBlocks(blocks, offset) {
//						blocks.each(function(){
//							( $(this).offset().top > $('.svy-timeline').scrollTop()+$('.svy-timeline').height()*offset ) && $(this).find('.svy-timeline-img, .svy-timeline-content').addClass('is-hidden');
//						});
//					}
//				
//					function showBlocks(blocks, offset) {
//						blocks.each(function(){
//							( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.svy-timeline-img').hasClass('is-hidden') ) && $(this).find('.svy-timeline-img, .svy-timeline-content').removeClass('is-hidden').addClass('bounce-in');
//						});
//					}
//				}));

    	  
    	  $scope.$watch('model.foundset.serverSize', function (newValue,oldValue) {
    		  if (newValue)
    		  {
    		  	$scope.model.foundset.loadRecordsAsync(0, newValue);
    		  }	  
          });
    	  
    	  $scope.getDate = function(dataprovider,row) {
    	  		if(dataprovider && row) {
    	  			var index = $scope.model.foundset.viewPort.rows.indexOf(row)
         			if (index >= 0 && dataprovider[index]) {
         				var date = dataprovider[$scope.model.foundset.viewPort.rows.indexOf(row)]
         				if(date) {
         					try {
         						//return date
         						return $formatterUtils.format(date, $scope.model.dateFormat.display, $scope.model.dateFormat.type) 
								//$formatterUtils.createFormatState($element, $scope, ngModel,true,date);
         						//return (date.getDate() + '-' + (date.getMonth() + 1) + '-' + (date.getFullYear().toString().substr(2)) + ' ' +  ("0" + date.getHours()).slice(-2) + ':' + ("0" + date.getMinutes()).slice(-2));
         					} catch(e) {
         						return null
         					}
         				}
         			}	 
         		 }	  
        		 return null; 
        	  }
      },
      templateUrl: 'svytimeline/timeline/timeline.html'
    };
  })