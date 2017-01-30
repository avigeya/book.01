angular.module('startBooks', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    });
});