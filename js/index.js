!(function($) {
  "use strict";

  // Smooth scroll
  $( '.nav-menu a.smooth-scroll' ).on( 'click', function(e){

    var href = $(this).attr( 'href' );

    // Run a scroll animation to the position of the element which has the same id like the href value.
    $( 'html, body' ).animate({
      scrollTop: $( href ).offset().top
    }, '300' );

    e.preventDefault();
  });

  $(".my-work-carousel").owlCarousel({
    autoplay: false,
    dots: true,
    loop: true,
    nav:true,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });


})(jQuery);
