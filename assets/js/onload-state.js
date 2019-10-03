/*
========================
ONLOAD STATE WEBPAGE
========================
    */

window.onload = function() {

    // DAY NIGHT HTML
    if ($("body").hasClass("night")) {
        div.innerHTML = 'Dark Mode';
        div.style.color = "black";
        $("div.mh-about-inner, li span").css("color", "white");
        $("div.mh-about-inner.about-inner-center h2").css("color", "white");
        $(".mb-5").css("color", "white");
        $(".col-lg-3.contactinfo, .row.introline").css("color", "white");

    } else {
        div.innerHTML = 'Light Mode';
        div.style.color = "#BE4405";
        $("div.mh-about-inner, li span").css("color", "black");
        $(".mb-5").css("color", "black");
        $(".col-lg-3.contactinfo, .row.introline").css("color", "black");
    }

    // TYPEWRITER ON LOAD JS
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
}