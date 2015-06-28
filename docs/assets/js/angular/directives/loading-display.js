app.directive('loadingDisplay', function() {
	return {
		restrict: 'E',
    	template: '<div class="col-sm-12" ng-show="loadingStatus"><span class="spinner-loader"></span></div>'
	};
});