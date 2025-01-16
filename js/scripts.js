$(document).ready(function() {
    let lastScrollPosition = 0;

    $("#hero-slider").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    });

    $(".jsScreensSlider").slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      mobileFirst: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 767,
          settings: "unslick",
        }
      ]
    });

    $(window).scroll(function () {
      let currentScrollPosition = $(window).scrollTop();
      let w = window.innerWidth;

      if(currentScrollPosition > 60) {
        $(".jsHeader").addClass('isScrolled');
      } else {
        $(".jsHeader").removeClass('isScrolled');
      }

      if (lastScrollPosition > currentScrollPosition) {
        $(".jsHeader").addClass('isFixed');
      } else {
        $(".jsHeader").removeClass('isFixed');
      }

      lastScrollPosition = currentScrollPosition;
    });

    wow = new WOW();
    wow.init();

    setTimeout(function() {
      $(".jsHeader").css("opacity", "1");
    }, 1000);
});
