(function ($) {
  'use strict';

  // Navbar burger toggle for mobile
  $(document).ready(function () {
    // Magnific Popup for gallery
    $('.gallery-popup').magnificPopup({
      type: 'image',
      gallery: { enabled: true }
    });

    // Counter Up
    $('.counter-stat').counterUp({
      delay: 10,
      time: 1000
    });

    // Smooth scroll
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        $('html, body').animate({ scrollTop: target.offset().top - 80 }, 600);
      }
    });

    // Navbar fixed on scroll
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#navbar').addClass('nav-fixed');
      } else {
        $('#navbar').removeClass('nav-fixed');
      }
    });
  });
})(jQuery);
