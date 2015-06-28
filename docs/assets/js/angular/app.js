var app = angular.module("portalAPI", ["ngRoute"]);

app.config(function ($routeProvider) {
 
    $routeProvider

    	.when("/", {
	        controller: "homeController",
	        templateUrl: "pages/home.html",
	    })
	    .when("/getting-started", {
	    	templateUrl: "pages/getting-started.html"
	    })
	    .when("/client-key", {
	    	templateUrl: "pages/client-key.html"
	    })
	    .when("/open-source", {
	    	templateUrl: "pages/open-source.html"
	    })
	    .otherwise({ redirectTo: "/" });
 
});