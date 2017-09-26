console.log("Sanity Check: JS is working!");
var rick_roll_youtube_embed_code = "<iframe width='420' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>";

$(document).ready(function(){

  $("input").click(function(){
        $(this).attr("disabled", "disabled");  //disabled.   aka 'none ya'!!
         $("h1").html(rick_roll_youtube_embed_code); //no, you're rick rolled :)
    });

  $("#time").text( Date.now() );




})
