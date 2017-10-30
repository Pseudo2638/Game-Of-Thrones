
// This the controller for the characters view, //
// Here, $http,$scope,$routeParams are passed as an inbuilt directive to use corresponding feature //
// But, IceAndCubeApiCalls is a service method which has all the API calls using '$http' //

// charactersController START //
myApp.controller('charactersController',['$http','$scope','$routeParams','IceAndCubeApiCalls',function($http,$scope,$routeParams,IceAndCubeApiCalls){

  // To store the current context in a variable //
  var main = this;
  // Collect the parameter from the url using $routeParamas directive //
  // It is used here as id for the character to make $http request to the api //
  var characterId = $routeParams.id;
  // Varible/Array to hold data for the books view //
  this.singleCharacterDetails = [];
  console.log(characterId);

  // ng-init function which loads when the page route is called //
  this.showCharactersPage = function(){
     // Service method's function to get details of a particular character //
     IceAndCubeApiCalls.getParticularCharacter(characterId)
      // If succesfull connection //
      .then(function successCallBack(response){
        // Iterate through response and store the main iterable data in a variable //
        var mainData = response.data;
        console.log(mainData);
        // Passing data to the array declared for storing data for characters and passing it tp ng-repeat //
        main.singleCharacterDetails.push(mainData);
      },
      // If unsuccessfull connection //
        function errorCallBack(response){
           // Show error //
           console.log(response);
           alert(response);
      });
  }
}]);
// charactersController END //
