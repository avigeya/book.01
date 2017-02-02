angular.module('startBooks.controllers', [])

.controller('printAllBooks', ['$scope', '$http',  function($scope, $http) {

	$scope.getBooks = function() {
          $http({
              
              method: 'POST',
              url: 'api/functions.php',
              data: {  
              	      typeAction: 'printAllBooks' 
              	  }
              
          }).then(function (response) {
              
             // $scope.books = response.data;
              console.log(response.data);
              
          }, function (response) {
              
              ///console.log(response.data,response.status);
              
          });
         // console.log($scope.books);
    };

    /* $scope.books = [
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