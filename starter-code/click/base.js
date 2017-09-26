console.log("Sanity Check: JS is working!");

$(document).ready(function(){

 $('#imperatives span').click(function(stuffs) {
      var textval = $(stuffs.target).text();
      var nowish =  Date.now();
     $("ul").append('<li>' + textval + " added at " + nowish +'</li>');
    });

 /*WOW!  I totally over thought that for like ever and got lost in trying to build
 an object model and jquery for each it. totally unneccessary lol!
 */

})



