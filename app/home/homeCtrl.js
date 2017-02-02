angular.module('startBooks.controllers', [])

.controller('addBooksCtrl', ['$scope', '$http',  function($scope, $http){

	/*$scope.addBook = function() {

          $http({
              
              method: 'POST',
              url: '../../api/functions.php',
              data: { book: $scope.book, 
              	      author: $scope.author, 
              	      genre: $scope.genre, 
              	      price: $scope.price, 
              	      description: $scope.description, 
              	      typeAction: 'add' 
              	  }
              
          }).then(function (response) {
              
              //$scope.book = response.data;
              
          }, function (response) {
              
              ///console.log(response.data,response.status);
              
          });
          //console.log($scope.newNameBook);
    };

    $scope.authors = [
    	{id: 1, name: "Author 1"},
    	{id: 2, name: "Author 11"},
    	{id: 6, name: "Author 12"},
    	{id: 8, name: "Author 13"},
    	{id: 10, name: "Author 14"},
    	{id: 63, name: "Author 15"},
    	{id: 66, name: "Author 16"}
    ];
    $scope.myAuthors = 1;

    $scope.genres = [
    	{id: 9, name: "Genre 1"},
    	{id: 2, name: "Genre 11"},
    	{id: 95, name: "Genre 12"},
    	{id: 10, name: "Genre 13"},
    	{id: 12, name: "Genre 14"},
    	{id: 15, name: "Genre 15"},
    	{id: 63, name: "Genre 16"}
    ];
    $scope.myGenres = 2;
*/

}])

.controller('addAuthorCtrl', ['$scope', '$http',  function($scope, $http){

 /* $scope.addAuthor = function() {

          $http({
              
              method: 'POST',
              url: '../../api/functions.php',
              data: { 
                      author: $scope.author, 
                      typeAction: 'add_new_author' 
                  }
              
          }).then(function (response) {
              
              //$scope.book = response.data;
              
          }, function (response) {
              
              ///console.log(response.data,response.status);
              
          });
          //console.log($scope.newNameBook);
    };*/

}])

.controller('addGenreCtrl', ['$scope', '$http',  function($scope, $http){

  /*$scope.addAuthor = function() {

          $http({
              
              method: 'POST',
              url: '../../api/functions.php',
              data: { 
                      genre: $scope.genre, 
                      typeAction: 'add_new_genre' 
                  }
              
          }).then(function (response) {
              
              //$scope.book = response.data;
              
          }, function (response) {
              
              ///console.log(response.data,response.status);
              
          });
          //console.log($scope.newNameBook);
    };*/

}]);



