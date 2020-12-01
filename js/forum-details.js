!(function($) {
  "use strict";

  $("#header").load("/common/header.html");
  $("#footer").load("common/footer.html");

  // Initiate venobox lightbox
  $(document).ready(function() {
    $('.venobox').venobox({
      titleattr  : 'data-title',                       // default: 'title'
      numeratio  : true,                               // default: false
      infinigall : true,                               // default: false
      share      : ['download'] // default: []
    });
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1200);
    return false;
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
