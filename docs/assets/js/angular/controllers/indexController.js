app.controller('indexController', function($scope) {

	$scope.routes = {
		home: '/docs/#/',
		gettingStarted: '/docs/#/getting-started',
		clientKey: '/docs/#/client-key'
	};

	$scope.red = "#F44336";
	$scope.red_lighter = "#EF9A9A";
	$scope.red_darker = "#D32F2F";

	$scope.indigo = "#3F51B5";
	$scope.indigo_lighter = "#9FA8DA";
	$scope.indigo_darker = "#303F9F";

});