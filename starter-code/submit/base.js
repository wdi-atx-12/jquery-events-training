console.log("Sanity Check: JS is working!");

var rick_roll_youtube_embed_code = "<iframe width='420' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>";

$(document).ready(function(){

  $("#time").text( Date.now() );
  $('form').submit(function(e) {
    e.preventDefault();
    $('body').append(rick_roll_youtube_embed_code);
  });

  /* try 1
  $("form").on("submit",function(e){
    e.preventDefault();
    $("#time").append(rick_roll_youtube_embed_code);
  });
  */
  /* try 2: only works when clicking any of body's child elements
  $("body").on("click",function(e){
    e.preventDefault();
    $("#time").append(rick_roll_youtube_embed_code);
  });
  */

  //WRAP IT UP
  showNavBar();
});
