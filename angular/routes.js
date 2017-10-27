myApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl : "views/main-view.html",
    controller : "mainController",
    controllerAs : "myMainController"
  })
  .otherwise({
    template: "<h1> Not Found </h1>"
  });
}]);
