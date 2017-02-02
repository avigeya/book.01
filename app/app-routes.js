angular.module('startBooks', ['ngRoute', 'startBooks.controllers'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "app/home/homeView.html"
    })
    .when("/admin", {
        templateUrl : "app/admin/adminView.html"
    })
    .when("/books", {
        templateUrl : "app/books/booksView.html",
        controller:   "printAllBooks"
    })
    .otherwise({
      redirectTo: '/'
   });

   $locationProvider.html5Mode(true);
}]);


