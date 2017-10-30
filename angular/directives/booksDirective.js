
// This is a custom directive for 'books' //
// It is used here to design the template/view/html for books inside the ng-repeat //
// This gives us flexibility to structure our program in a way that we have access to the scopes of both, //
// The parent and the directive's scope. //

myApp.directive("booksCard",function(){
  return{
    restrict:"E", // Restrict element //
    templateUrl:"views/templates/booksTemplate.html", // location url of the books template //
    controller: function($scope){

       // This is used to store the current book's url from the array in a variable //
       // After storing, the string is altered by using 'split()' which splits the string by removing the value mentioned in split("?") //
       // Then pop() method is called which returns the last element of the array //
       var booksData = $scope.combinedData;
       var bookUrl = booksData.url;
       var id = bookUrl.split("/").pop();
       $scope.getId = id;
    }
  }
});
