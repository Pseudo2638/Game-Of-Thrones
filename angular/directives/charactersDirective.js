myApp.directive("charactersCard",function(){
  return{
    restrict:"E",
    templateUrl:"views/templates/charactersTemplate.html",
    controller: function($scope){
      $scope.check = "hello";
    }
  }
});
