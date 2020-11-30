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
