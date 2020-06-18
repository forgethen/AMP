'use strict';

$(document).ready(function() {

  $("a.slow").click(function() {
    var e = $(this).attr("href"),
      h = $('header').outerHeight(),
      k = $(e).offset().top - h;
    return $("html,body").animate({
      scrollTop: k
    }, 750), !1
  });

$('.slider').slick({
  autoplay: true,
  dots: true,
  slideToShow: 1,
  slideToScroll: 1,
  fade:true,
  arrows: false,
  speed: 300,
  infinite: true,
  autoplaySpeed: 35000,
});


});

//# sourceMappingURL=main.js.map
