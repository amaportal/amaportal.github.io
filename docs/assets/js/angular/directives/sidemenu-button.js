app.directive('sidemenuButton', function() {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			routeTo: '=routes'
		},
    	templateUrl: 'templates/sidemenu-button.html'
	};
});