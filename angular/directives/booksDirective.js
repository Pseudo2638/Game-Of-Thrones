myApp.directive("booksCard",function(){
  return{
    restrict:"E",
    templateUrl:"views/templates/booksTemplate.html",
    controller: function($scope){
      $scope.check = "hello";
    }
  }
});
