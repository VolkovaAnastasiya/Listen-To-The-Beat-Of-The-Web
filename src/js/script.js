$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    speed: 1000,
    fade: true,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendArrows: $('.slider_content'),
    appendDots: $('.slider_content'),
  });
});
