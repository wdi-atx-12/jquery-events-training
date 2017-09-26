console.log("Sanity Check: JS is working!");

var rick_roll_youtube_embed_code = "<iframe width='420' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>";

$(document).ready(function(){

  $("#time").text( Date.now() );

})


$("form").click(function(event)
 {
   event.preventDefault(); // cancel default behavior

   //... rest of add logic
   $('body').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/LMYH7Wk-rX0" frameborder="0" allowfullscreen></iframe>');


 });
