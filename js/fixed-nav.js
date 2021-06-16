/*
========================
NAVBAR FIXED ON SCROLL
========================
    */
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".nav-scroll").addClass("nav-strict");
    } else {
        $(".nav-scroll").removeClass("nav-strict");
    }
});