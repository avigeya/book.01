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

}])


.controller('printAllBooks', ['$scope', function($scope){

     /*$scope.books = [
      {id: 1, name: "Book 1", price: 125, author: "Author 15", genre: "Genre 15", description: "Many many words about this."},
      {id: 2, name: "Book 2", price: 125, author: "Author 14", genre: "Genre 1", description: "Many many words about this."},
      {id: 3, name: "Book 3", price: 125, author: "Author 5", genre: "Genre 15", description: "Many many words about this."},
      {id: 4, name: "Book 4", price: 125, author: "Author 1", genre: "Genre 1g", description: "Many many words about this."},
      {id: 5, name: "Book 5", price: 125, author: "Author 1", genre: "Genre 21", description: "Many many words about this."},
      {id: 6, name: "Book 6", price: 125, author: "Author 9", genre: "Genre 1", description: "Many many words about this."},
      {id: 7, name: "Book 7", price: 125, author: "Author 10", genre: "Genre 14", description: "Many many words about this."},
      {id: 8, name: "Book 8", price: 125, author: "Author 11", genre: "Genre 16", description: "Many many words about this."}

    ];*/

}]);

