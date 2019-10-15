
/*
==================
TYPEWRITER HEADER
==================
*/

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  // window.onload = function() {
     //WEATHER API
      
    //  var lat;
    //  var long;
 
    //  if (navigator.geolocation) {
 
    //      navigator.geolocation.getCurrentPosition(function (position) {
 
    //          lat = position.coords.latitude;
    //          long = position.coords.longitude;
 
    //          var api = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long + '';
             
    //          $.getJSON(api, function (res) {
 
    //              var celsius = res.main.temp;
    //              var farenheit = (celsius * 1.8) + 32;
 
    //              var location = res.name;
 
    //              $('.weather-location').html(location);
    //              $('.temp').html(Math.floor(celsius));
    //              $('.weather-description').html(res.weather[0].description);
    //              $('.weatherType').attr('id', res.weather[0].main);
 
    //              $('.row2').on('click', function () {
    //                  if ($('.temp').html() == (Math.floor(celsius))) {
    //                      $('.temp').html(Math.floor(farenheit));
    //                      $('.temp-type').html('°F');
 
    //                  } else {
    //                      $('.temp').html(Math.floor(celsius));
    //                      $('.temp-type').html('°C');
    //                  }
    //              });
 
 
    //              //SETTING UP THE ICON 
    //              var icons = new Skycons({
    //                  "color": "black"
    //              });
 
    //              icons.set("Clear-day", Skycons.CLEAR_DAY);
    //              icons.set("Clear-night", Skycons.CLEAR_NIGHT);
    //              icons.set("Partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
    //              icons.set("Partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
    //              icons.set("Clouds", Skycons.CLOUDY);
    //              icons.set("Rain", Skycons.RAIN);
    //              icons.set("Sleet", Skycons.SLEET);
    //              icons.set("Snow", Skycons.SNOW);
    //              icons.set("Wind", Skycons.WIND);
    //              icons.set("Fog", Skycons.FOG);
    //              icons.play();
 
    //          });
    //      });
    //  }
  

  // }
     
