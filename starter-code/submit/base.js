console.log("Sanity Check: JS is working!");

var rick_roll_youtube_embed_code = "<iframe width='420' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>";
var doggieVideo = "<iframe width='560' height='315' src='https://www.youtube.com/embed/83ZrTybo2t4' frameborder='0' allowfullscreen></iframe>";

$(document).ready(function(){

  $("#time").text( Date.now() );

  $("form").submit(function (event){
    event.preventDefault();
    $("body").append(doggieVideo);
  });
});
