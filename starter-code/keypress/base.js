console.log("Sanity Check: JS is working!");

$(document).ready(function(){

var starts = null;
var ends = null;

document.body.onkeyup = function(spacey){

    if(spacey.keyCode == 32){

          if (starts === null){
              starts = Date.now();
              console.log("i was null " + starts);
              return starts;
          } else if (starts !== null && ends === null)  {
              ends = Date.now();
              var diff = (ends-starts)*.001;
              $("#total-time").text(diff + " seconds");
          } else if (starts !== null && ends !== null){
               location.reload();
          } else {
              console.log('some error happened.');
          }

    }
}





})
