console.log("Sanity Check: JS is working!");

var start;
var end;
var timeElapsed = 0;

$(document).ready(function(){
  $(window).keypress(function(event){
    // if the space bar is pressed
    if (event.keyCode == 32){
      // do something
      console.log('user pressed the spacebar');
      // trigger start
      // if it happens again
        // trigger end
    } else {
      console.log('user pressed some other button');
    }

  })
})
