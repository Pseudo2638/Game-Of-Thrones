myApp.directive('jquery',function () {
  return {
    link: function(scope,element,attribute)
    {
      $(document).ready(function(){
        $("nav").hide();
        $(".showNavButton").on('click',function () {
          $("nav").slideToggle("slow");
      });
    });
  }
};
});
