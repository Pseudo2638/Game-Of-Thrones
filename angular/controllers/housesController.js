
// This the controller for the books view, //
// Here, $http,$scope,$routeParams are passed as an inbuilt directive to use corresponding feature //
// But, IceAndCubeApiCalls is a service method which has all the API calls using '$http' //

// booksController START //
myApp.controller('housesController',['$http','$scope','$routeParams','IceAndCubeApiCalls',function($http,$scope,$routeParams,IceAndCubeApiCalls){

  // To store the current context in a variable //
  var main = this;
  // Collect the parameter from the url using $routeParamas directive //
  // It is used here as id for the house to make $http request to the api //
  var houseId = $routeParams.id;
  // Varible/Array to hold data for the books view //
  this.singleHouseDetails = [];
  console.log(houseId);

  // ng-init function which loads when the page route is called //
  this.showHousesPage = function(){
     // Service method's function to get details of a particular house //
     IceAndCubeApiCalls.getParticularHouse(houseId)
      // If connection is succesfull //
      .then(function successCallBack(response){
        // Iterate through response and store the main iterable data in a varible //
        var mainData = response.data;
        console.log(mainData);
        // Passing data to the array declared for storing data for houses and passing it tp ng-repeat //
        main.singleHouseDetails.push(mainData);
      },
        // If connection is unsuccessfull //
        function errorCallBack(response){
           // Show error //
           console.log(response);
           alert(response);
      });
  }
}]);
// booksController END //
