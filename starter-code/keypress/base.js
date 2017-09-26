console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  var stopWatch = 0;
  $(document).keypress(function(e) {
    if(e.which !== 32) return;
    if(stopWatch === 0)
      stopWatch = Date.now();
    else {
      stopWatch = (Date.now() - stopWatch) / 1000;
      $("#total-time").text(stopWatch);
      stopWatch = 0;
    }
  });
/***ADD Stretch: update the display to show the time while the clock is running.***/

//WRAP IT UP
showNavBar();
})
