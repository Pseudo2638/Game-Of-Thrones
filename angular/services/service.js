myApp.service('IceAndCubeApiCalls',function($http){

  this.baseUrl = "https://www.anapioficeandfire.com/api";
  this.getBooksData = function(size)
  {
    return $http.get(this.baseUrl +"/books?page=1&pageSize="+size);
  }
  this.getCharectorsData = function(size)
  {
    return $http.get(this.baseUrl +"/characters?page=1&pageSize="+size);
  }
  this.getHousesData = function(size)
  {
    return $http.get(this.baseUrl +"/houses?page=1&pageSize="+size);
  }
});
