myApp.directive("housesCard",function(){
  return{
    restrict:"E",
    templateUrl:"views/templates/housesTemplate.html",
    controller: function($scope){
      $scope.check = "hello";
    }
  }
});
