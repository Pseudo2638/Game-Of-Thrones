
// This the controller for the main/index view, //
// Here, $http,$scope,$route are passed as an inbuilt directive to use corresponding feature //
// But, IceAndCubeApiCalls is a service method which has all the API calls using '$http' //

// mainController START //
myApp.controller('mainController',['$http','$scope','$route','IceAndCubeApiCalls', function($http,$scope,$route,IceAndCubeApiCalls){
  // Store the context in a variable for future reference //
  var main = this;

  // Since, in angular.js, if the same url is called as the browser is on ; the page doesn't loads so, in order to refresh the page this method is used //
  // This is triggered on a button click of refresh on filter div //
  $scope.reloadRoute = function() {
   $route.reload();
  }

  // These are for the sorting buttons //
  // In which, one is initialy set to hide by using 'false' and the other is kept visible using 'true' //
  $scope.descendingButton = true;
  $scope.ascendingButton = false;

  // Here, we pass the 'orderBy' value to html //
  // According to which the data is sorted //
  // Note: Here 'name' is for ascending order and '-name' is for reverse and 'name' is the element in the ng-repeat's array //
  // The data is then sorted according to the 'sign' and element passed //
  $scope.alterOrder = 'name';

  // These functions are triggered when the sort buttons are clicked //
  // The functions are linked to the html using 'ng-click' //
  // 1. When descending order button is clicked //
  $scope.changeToDescendingOrder = function() {
    // Pass '-' ie: the sign to tell to sort in reverse order and 'name', the element according to which the data is to be sorted //
    $scope.alterOrder = '-name';
    // Toggling Buttons //
    $scope.descendingButton = false;
    $scope.ascendingButton = true;
  }
  // 1. When ascending order button is clicked //
  $scope.changeToAscendingOrder = function() {
    // Pass '' ie: the sign to tell to sort in ascending order and 'name', the element according to which the data is to be sorted //
    $scope.alterOrder = 'name';
    // Toggling Buttons //
    $scope.descendingButton = true;
    $scope.ascendingButton = false;
  }

  // These are the arrays to store the data for the select dropdowns //
  this.authors = []; // Authors //
  this.books = [];  // Books //
  this.houses = [];  // Houses //
  this.characters = []; // Characters //
  this.booksISBN = []; // ISBN of Books //
  this.charactersGender = ['Male','Female']; // Character's Gender //

  // This is the arrays to store the data for ng-repeat //
  // In order to make all the directives inside single ng-repeat, //
  // Here, all the data from each ie: books, characters and houses are stored in a single array and passed to the ng-repeat //
  // Note: ng-if conditions are used upon the elements of the array to distinguish between each category //
  this.allData = [];

  // Filter Toggle START //
  // Toggle block and buttons linked using 'ng-show' //
  // Note: Here, false means invisible and true means visible //
  // Below block is triggered when the filter buttons are selected ie: all, books, characters and houses //
  // This part decided which block to show according to the button clicked //
  $scope.ISBNDropdown = false;
  $scope.genderDropdown = false;
  $scope.showMoreButton = true;

  $scope.booksShowOrHide = false;
  $scope.housesShowOrHide = false;
  $scope.charactersShowOrHide = false;
  $scope.infoBlockShowOrHide = true;

  $scope.toggleAll = function(){
    $scope.booksShowOrHide = true;
    $scope.housesShowOrHide = true;
    $scope.charactersShowOrHide = true;
    $scope.infoBlockShowOrHide = false;
  };

  $scope.toggleBooks = function(){
    $scope.booksShowOrHide = true;
    $scope.housesShowOrHide = false;
    $scope.charactersShowOrHide = false;
    $scope.infoBlockShowOrHide = false;
  };

  $scope.toggleCharacters = function(){
    $scope.booksShowOrHide = false;
    $scope.housesShowOrHide = false;
    $scope.charactersShowOrHide = true;
    $scope.infoBlockShowOrHide = false;
  };

  $scope.toggleHouses = function(){
    $scope.booksShowOrHide = false;
    $scope.housesShowOrHide = true;
    $scope.charactersShowOrHide = false;
    $scope.infoBlockShowOrHide = false;
  };
  // Filter Toggle END //

  // To hide and show other fliter blocks START //
  $scope.showMore = function()
  {
    $scope.ISBNDropdown = true;
    $scope.genderDropdown = true;
    $scope.showMoreButton = false;
  }
  // To hide and show other fliter blocks END //

  // ng-init function for loading data into the main view //
  this.showMainPage = function()
  {
      // Service method's function for making $http request to characters part of url //
      // Here, 50 is passed as a parameter which is used in the url to get the data //
      IceAndCubeApiCalls.getCharectorsData(50)
        // If connection is succesfull //
        .then(function successCallBack(response)
        {
          // Storing the main iterable response in a variable //
          var mainData = response.data;
          // Pushing data to the main array to store data for ng-repeat //
          main.allData.push.apply(main.allData,mainData);
          // Paramters are passed to the below function where //
          // the 1st parameter is the data to iterate and the 2nd is the array to store the iterated data in //
          // This function passes iterated data to the select dropdown for characters //
          allSelectDropdowns(mainData,main.characters);
        },
        // If connection unsuccessfull //
         function errorCallBack(response)
         {
           // show the error recieved //
           alert(response);
           console.log(response);
        });

        // Service method's function for making $http request to books part of url //
        // Here, 50 is passed as a parameter which is used in the url to get the data //
        IceAndCubeApiCalls.getBooksData(50)
          // If connection is succesfull //
          .then(function successCallBack(response)
          {
            // Storing the main iterable response in a variable //
            var mainData = response.data;
            // Pushing data to the main array to store data for ng-repeat //
            main.allData.push.apply(main.allData,mainData);
            // Paramters are passed to the below function where //
            // the 1st parameter is the data to iterate and the 2nd is the array to store the iterated data in //

            // This function passes iterated data to the select dropdown for books //
            allSelectDropdowns(mainData,main.books);
            // This function passes iterated data to the select dropdown for book's author //
            authorSelectDropdown(mainData,main.authors);
            // This function passes iterated data to the select dropdown for book's isbn //
            isbnSelectDropdown(mainData,main.booksISBN);
          },
          // If connection is unsuccessfull //
           function errorCallBack(response)
           {
             // Show the error //
             alert(response);
             console.log(response);
          });

         // Service method's function for making $http request to houses part of url //
         // Here, 50 is passed as a parameter which is used in the url to get the data //
         IceAndCubeApiCalls.getHousesData(50)
           // If connection is succesfull //
           .then(function successCallBack(response)
            {
              // Storing the main iterable response in a variable //
              var mainData = response.data;
              // Pushing data to the main array to store data for ng-repeat //
              main.allData.push.apply(main.allData,mainData);
              // Paramters are passed to the below function where //
              // the 1st parameter is the data to iterate and the 2nd is the array to store the iterated data in //
              // This function passes iterated data to the select dropdown for houses //
              allSelectDropdowns(mainData,main.houses);
            },
            // If connection is unsuccessfull //
             function errorCallBack(response)
             {
               // Show error //
               alert(response);
               console.log(response);
            });

  }

}]);
// mainController END //

// Function to pass data to houses,characters and books dropdowns //
var allSelectDropdowns = function (mainData,arrayToStore)
{
  // For loop to iterate the data and find name //
  for (var i = 0; i < mainData.length; i++) {
    // If name as a key found in the array and it is not null //
    if(!!mainData[i].name)
    {
      // Push the current iterated name to the array to be stored in //
      arrayToStore.push(mainData[i].name);
    }
    // If conditions are not true //
    else {
      // Increment counter //
      i++;
    }
  }
}

// Function to pass data to book's isbn dropdown //
var isbnSelectDropdown = function(mainData,arrayToStore)
{
  // For loop to iterate the data and find books's isbn //
  for (var i = 0; i < mainData.length; i++) {
    // Push the current iterated name to the array to be stored in //
    arrayToStore.push(mainData[i].isbn);
  }
}

// Function to pass data to book's author dropdown //
var authorSelectDropdown = function(mainData,arrayToStore)
{
   // To store the current authors //
   var newArray = [];
   // For loop to iterate the data and find books's authors //
   for (var i = 0; i < mainData.length; i++) {
      // Store the current book's authors array //
      var current = mainData[i].authors;
      // For loop to iterate the current book's authors array//
      for (var j = 0; j < current.length; j++) {
           // Push the current iterated name to the current author array //
           newArray.push(current[j]);
      }
   }

   // Variable to store only the unique names in the current array //
   var uniqueNames = [];

   // '$each' function to iterate through the current author array from the data //
   $.each(newArray, function(i, el){
     // If duplicates are found in the the array //
     if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
   });

   // For loop to iterate through the uniqueNames array //
   for (var i = 0; i < uniqueNames.length; i++) {
     // Push current index element to the array to store data in //
     arrayToStore.push(uniqueNames[i]);
   }
}
