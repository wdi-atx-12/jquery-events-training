console.log("Sanity Check: JS is working!");
var navbar = "<h3><nav><a href='../ready/index.html'>Ready</a>&nbsp;<a href='../keypress/index.html'>Keypress</a>&nbsp;<a href='../click/index.html'>Click</a>&nbsp;<a href='../change/index.html'>Change</a>&nbsp;<a href='../submit/index.html'>Submit</a></nav></h3>";
$(document).ready(function(){

  $("h1").prepend(navbar);

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
