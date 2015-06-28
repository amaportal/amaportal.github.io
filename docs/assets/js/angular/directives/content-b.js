app.directive('contentB', function() {
	return {
		restrict: 'E',
		transclude: true,
    	templateUrl: 'templates/content-b.html'
	};
});