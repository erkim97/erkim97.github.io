/*
========================
ACTIVE OR NOT TOGGLER NAV
========================
    */
var trigger = $('.navbar-toggler'),
  navc = $('.navbar-collapse'),
  active = false;


$('.navbar-toggler').on('click', function () {
  $('.navbar-toggler').toggleClass('active')
  navc.toggleClass('active');

  $(".nav").find(".active").removeClass("active");
  $(this).addClass("active");

});