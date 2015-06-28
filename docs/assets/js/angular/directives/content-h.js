app.directive('contentH', function() {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			color: '=color'
		},
    	templateUrl: 'templates/content-h.html'
	};
});