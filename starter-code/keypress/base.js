console.log("Sanity Check: JS is working!");

  var start;
  var end;
  var count = false;
  var repeatDisplay;
  var total = 0;

$(document).ready(function(){
  $(window).on("keypress",function key(e){
    if(!count){
      count = true;
      start = Date.now();
      repeatDisplay = setInterval(displayCurrentTotal,100);
    }
    else{
      count = false;
      clearInterval(repeatDisplay);
      end = (Date.now() - start)/1000;
      total = total + end;
      $("#total-time").text( total + " seconds" );
    }
  })
})

function displayCurrentTotal(){
  var elapsedTime = (Date.now() - start)/1000;
  $('#total-time').text( (total + elapsedTime) + " seconds");
}
