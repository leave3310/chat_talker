$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 8,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });

});
