

// Animation CSS
if ($(window).width() >= 1024) {
    new WOW().init();
}

// Mobile Menu
if ($(window).width() <= 991) {
    $("#menu").mmenu({
    	"pageScroll": true,
        "offCanvas": {
            "position": "right"        }
    });

}

 // Header Fixed   
 $(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height >100) {
    $('header').addClass('header-fixed');
  }
  else if (height == 0) {
    $('header').removeClass('header-fixed');
  }
});  














