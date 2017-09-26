console.log("Sanity Check: JS is working!");

var begin;
var end;
var all = 0;

$(document).ready(function(){
  $(window).on("keypress", function keypress(press){

    if ( begin ) {
      end = Date.now();
      all = (endTime - startTime) / 1000;
      displayTotal();
    } else {
      begin = Date.now();
      window.setInterval(displayTotal, 500);
    }

  })

})

function displayTotal(){
  all = (Date.now() - begin) / 1000;
  $("#total-time").text( all + " seconds" );
}
