angular.module('startBooks', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "app/home/homeView.html"
    })
    .when("/admin", {
        templateUrl : "app/admin/adminView.html"
    })
    .otherwise({
      redirectTo: '/'
   });

   $locationProvider.html5Mode(true);
}]);


