console.log("Sanity Check: JS is working!");

var startTime;
var stopTime;
var total = 0;

$(document).ready(function(){

 $(window).on("keypress", function stopAndGo(event){
  if (startTime){
    stopTime = Date.now();
    total = (stopTime - startTime) / 1000;
    totalTime();
  } else {
    startTime = Date.now();
    window.setInterval(totalTime, 500);
  }

 })

})

function totalTime(){
  total = (Date.now() - startTime) / 1000;
  $("#total-time").text(total + " seconds");
};
