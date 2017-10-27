myApp.controller('mainController',['$http','$scope','IceAndCubeApiCalls', function($http,$scope,IceAndCubeApiCalls){
  var main = this;
  this.charactersArray = [];
  $scope.authors = [];
  $scope.books = [];
  this.allData = [];
  this.getIndex = function()
  {
    for (var i = 0; i < 3; i++) {
      return i;
    }
  }
  this.noOfView = 6;
  this.increaseNumber = function()
  {
    main.noOfView += 10;
  }
  this.showMainPage = function()
  {
      IceAndCubeApiCalls.getCharectorsData(50)
        .then(function successCallBack(response)
        {
          var mainData = response.data;
          allSelectDropdowns(mainData,main.charactersArray);
          main.allData.push.apply(main.allData,mainData);
        },
         function errorCallBack(response)
         {
           alert(response);
           console.log(response);
        });

        IceAndCubeApiCalls.getBooksData(50)
          .then(function successCallBack(response)
          {
            var mainData = response.data;
            console.log(mainData);
            allSelectDropdowns(mainData,$scope.books);
            authorSelectDropdown(mainData,$scope.authors);
            main.allData.push.apply(main.allData,mainData);
          },
           function errorCallBack(response)
           {
             alert(response);
             console.log(response);
          });

         IceAndCubeApiCalls.getHousesData(50)
           .then(function successCallBack(response)
            {
              var mainData = response.data;
              console.log(mainData);
              main.allData.push.apply(main.allData,mainData);
              console.log(main.allData);
            },
             function errorCallBack(response)
             {
               alert(response);
               console.log(response);
            });

  }



}]);

var allSelectDropdowns = function (mainData,arrayToStore)
{
  for (var i = 0; i < mainData.length; i++) {
    if(!!mainData[i].name)
    {
      arrayToStore.push(mainData[i].name);
    }
    else {
      i++;
    }
  }
  console.log(arrayToStore);
}

var authorSelectDropdown = function(mainData,arrayToStore)
{
   var newArray = [];
   for (var i = 0; i < mainData.length; i++) {
      var current = mainData[i].authors;
      for (var j = 0; j < current.length; j++) {
           newArray.push(current[j]);
      }
   }

   var uniqueNames = [];
   $.each(newArray, function(i, el){
     if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
   });

   for (var i = 0; i < uniqueNames.length; i++) {
     arrayToStore.push(uniqueNames[i]);
   }

}
