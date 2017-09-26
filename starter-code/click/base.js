console.log("Sanity Check: JS is working!");
var navbar = "<h3><nav><a href='../ready/index.html'>Ready</a>&nbsp;<a href='../keypress/index.html'>Keypress</a>&nbsp;<a href='../click/index.html'>Click</a>&nbsp;<a href='../change/index.html'>Change</a>&nbsp;<a href='../submit/index.html'>Submit</a></nav></h3>";
$(document).ready(function(){

  $("h1").prepend(navbar);

 $('#imperatives span').click(function(stuffs) {
      var textval = $(stuffs.target).text();
      var nowish =  Date.now();
     $("ul").append('<li>' + textval + " added at " + nowish +'</li>');
    });

 /*WOW!  I totally over thought that for like ever and got lost in trying to build
 an object model and jquery for each it. totally unneccessary lol!
 */

})



