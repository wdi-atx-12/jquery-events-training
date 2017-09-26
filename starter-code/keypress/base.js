console.log("Sanity Check: JS is working!");

var begin;
var stop;
var time = 0;

$(document).ready(function(){
  $(window).on("keypress", function handleKeypress(event){
    if ( begin ) {
      stop = Date.now();
      time = (stop - begin) / 1000;
      displayTotal();
    } else {
      begin = Date.now();
      window.setInterval(displayTotal, 500);
    }

  })
});

function displayTotal(){
  total = (Date.now() - begin) / 1000;
  $("#total-time").text( time + " seconds" );
}
