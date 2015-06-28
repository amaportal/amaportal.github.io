app.controller('homeController', function($scope, $http) {

	$scope.loadingStatus = true;
	$scope.testResult = {};

	$http.get('http://api.amaportal/api/test')
		.success(function(data) {
			$scope.testResult.status = true;
			$scope.testResult.data = data;
			$scope.testResult.stringed = JSON.stringify(data);

			$scope.loadingStatus = false;
		})
		.error(function() {
			$scope.testResult.status = false;
			$scope.testResult.data = "Somethin went wrong.";

			$scope.loadingStatus = false;
		});

});