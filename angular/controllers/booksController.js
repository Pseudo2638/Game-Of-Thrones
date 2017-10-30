
// This the controller for the books view, //
// Here, $http,$scope,$routeParams are passed as an inbuilt directive to use corresponding feature //
// But, IceAndCubeApiCalls is a service method which has all the API calls using '$http' //

// booksController START //
myApp.controller('booksController',['$http','$scope','$routeParams','IceAndCubeApiCalls',function($http,$scope,$routeParams,IceAndCubeApiCalls){

  // To store the current context in a variable //
  var main = this;
  // Collect the parameter from the url using $routeParamas directive //
  // It is used here as id for the book to make $http request to the api //
  var bookId = $routeParams.id;
  // Varible/Array to hold data for the books view //
  this.singleBookDetails = [];
  console.log(bookId);

  // ng-init function which loads when the page route is called //
  this.showBooksPage = function(){
    // Service method's function to get details of a particular book //
     IceAndCubeApiCalls.getParticularBook(bookId)
      // If succesfull connection //
      .then(function successCallBack(response){
        // Iterate through response and store the main iterable data in a variable //
        var mainData = response.data;
        // Passing data to the array declared for storing data for books and passing it tp ng-repeat //
        main.singleBookDetails.push(mainData);
      },
      // If unsuccessfull connection //
        function errorCallBack(response){
           // Show error //
           console.log(response);
           alert(response);
      });
  }
}]);
// booksController END //
