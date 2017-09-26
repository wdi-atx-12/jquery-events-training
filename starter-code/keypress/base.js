console.log("Sanity Check: JS is working!");

var time1 = 0;

$(document).ready(function(){
  $(document).keydown(event => {

    if (time1 === 0) {
      time1 = Date.now();
    } else {
      var time2 = Date.now();
      timeElapsed = parseInt(time2 - time1) / 1000;
      $("#total-time").text(timeElapsed);
    }
  });
})
