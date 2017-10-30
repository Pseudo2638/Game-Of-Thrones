
// This is a custom directive //
// It is used here to apply show() and hide() effect of jQuery //
// In order to use jQuery wih Angular.js, you have to declare jQuery code seperately and then called on to the element to be displayed on //
// Normal javascript file for jQuery doesn't shows any effect //

myApp.directive('jquery',function () {
  return {
    link: function(scope,element,attribute)
    {
      $(document).ready(function(){
        // Navbar is hidden initially //
        $("nav").hide();

        // When the block to toggle the nav buton is cliked //
        $(".showNavButton").on('click',function () {
          // Nav button is toggled ie: show and hide //
          $("nav").slideToggle();
      });

    });
  }
};
});
