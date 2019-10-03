/*
========================
NIGHT OR DAY MODE TOGGLE
========================
    */

var mode = localStorage.getItem('nightMode');
var div = document.getElementById('switchText');

if (mode)
    $('body').addClass(mode);

$(".time-circle").click(function () {
    if ($("body").hasClass("night")) {
        $("body").removeClass("night");
        div.innerHTML = 'Light Mode';
        div.style.color = "#BE4405";
        $("div.mh-about-inner, li span").css("color", "black");
        $(".mb-5").css("color", "black");
        $(".col-lg-3.contactinfo, .row.introline").css("color", "black");

        localStorage.setItem('nightMode', null);

    } else {
        $("body").addClass("night");
        $("div.mh-about-inner, li span").css("color", "white");
        $(".mb-5").css("color", "white");
        $(".col-lg-3.contactinfo, .row.introline").css("color", "white");
        div.innerHTML = 'Dark Mode';
        div.style.color = "black";
        localStorage.setItem('nightMode', 'night');

    }
});