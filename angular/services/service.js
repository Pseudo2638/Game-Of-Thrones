
// This is the service method of angular.js //
// In angular.js, our main aim is to simplify the procedure and provide dynamic nature to the website //
// In order to make api call, we make Service method which has functions in itself according to different api's to interact with //
// Please note, you have to pass the service name to the controller in order to use the service's functions //

myApp.service('IceAndCubeApiCalls',function($http){

  // Base URL //
  this.baseUrl = "https://www.anapioficeandfire.com/api";

  // Function to get all books data //
  // Here, paramter is taken to set the 'pageSize' for the url according to which amount of data is displayed //
  this.getBooksData = function(size)
  {
    return $http.get(this.baseUrl +"/books?page=1&pageSize="+size);
  }

  // Function to get all characters data //
  // Here, paramter is taken to set the 'pageSize' for the url according to which amount of data is displayed //
  this.getCharectorsData = function(size)
  {
    return $http.get(this.baseUrl +"/characters?page=1&pageSize="+size);
  }
  // Function to get all houses data //
  // Here, paramter is taken to set the 'pageSize' for the url according to which amount of data is displayed //
  this.getHousesData = function(size)
  {
    return $http.get(this.baseUrl +"/houses?page=1&pageSize="+size);
  }

  // Function to get single book data //
  // Here, paramter is taken to set the 'id' for the url according to which the book is identified which has to be called from the api //
  this.getParticularBook = function(id)
  {
    return $http.get(this.baseUrl + "/books/" +id);
  }

  // Function to get single character data //
  // Here, paramter is taken to set the 'id' for the url according to which the character is identified which has to be called from the api //
  this.getParticularCharacter = function(id)
  {
    return $http.get(this.baseUrl + "/characters/" +id);
  }

  // Function to get single house data //
  // Here, paramter is taken to set the 'id' for the url according to which the house is identified which has to be called from the api //
  this.getParticularHouse = function(id)
  {
    return $http.get(this.baseUrl + "/houses/" +id);
  }
});
