app.controller('indexController', function($scope, globalSettingsService) {

	var extractSettings = function(data) {
		$scope.settingsUrl = data.url;
	};

	globalSettingsService.show().success(extractSettings);

	$scope.routes = {
		home: {
			'url': '/docs/#/',
			'title': 'Introduction'
		},
		gettingStarted: {
			'url': '/docs/#/getting-started',
			'title': 'Getting Started'
		},
		clientKey: {
			'url': '/docs/#/client-key',
			'title': 'Client Key'
		},
		openSource: {
			'url': '/docs/#/open-source',
			'title': 'Open Source'
		},
		departments: {
			'url': '/docs/#/departments',
			'title': 'API Departments'
		},
		programs: {
			'url': '/docs/#/programs',
			'title': 'API Programs'
		}
	};

	$scope.red = "#F44336";
	$scope.red_lighter = "#EF9A9A";
	$scope.red_darker = "#D32F2F";

	$scope.indigo = "#3F51B5";
	$scope.indigo_lighter = "#9FA8DA";
	$scope.indigo_darker = "#303F9F";

});