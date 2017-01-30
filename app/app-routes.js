angular.module('startBooks', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "app/home/homeView.html"
    })
    .otherwise({
      redirectTo: '/'
   });
});

// попробовать сделат через stateProvider
