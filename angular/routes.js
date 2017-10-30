
// This is the '$routeProvider' directive which defines the route and the view to be displayed //
// This has to be declared as a directive in angular module //

myApp.config(['$routeProvider',function($routeProvider){
  $routeProvider

  // Default Page or Home page //
  // This view will load first when the website url is hit //
  // '/' is the one which defines the route to be home page here //
  .when('/',{
    templateUrl : "views/main-view.html", // Index view //
    controller : "mainController", // Index controller //
    controllerAs : "myMainController" // Name of the controller //
  })

  // When the url has 'book' in the end //
  // Please note, first in when, we define the route name //
  // Then we define the view to be decalred when the route is called //
  // We specify the controller where the functions are executed for the view //
  // Then, we define the name of the controller by which controller is called in the view html //

  // Here, parameter is passed from the html to the url when this route is called //
  // Note, this is used to get the parameters passed in url as data in the controller and store it as a variable //
  // You have to mention '$routeParams' as the directive in the controller to get the parameter values //
  .when('/book/:id',{
    templateUrl : "views/books-view.html",
    controller : "booksController",
    controllerAs : "myBooksController"
  })

  // Same logic as for above //
  // 'characters' route //
  .when('/character/:id',{
    templateUrl : "views/characters-view.html",
    controller : "charactersController",
    controllerAs : "myCharactersController"
  })

  // Same logic as above //
  // 'houses' route //
  .when('/house/:id',{
    templateUrl : "views/houses-view.html",
    controller : "housesController",
    controllerAs : "myHousesController"
  })

  // If urls mistyped or error in route configuration //
  .otherwise({
    template: "<h1> Not Found </h1>" // Displayed when error occured //
  });
}]);
