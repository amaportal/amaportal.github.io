app.factory('globalSettingsService', function($http) {

	var factory = {};

	factory.show = function() {

		return $http.get('http://amaportal/settings.json');

	};

	factory.test = function() {
		return "this is a test data";
	};

	return factory;

});