console.log("Sanity Check: JS is working!");
var rick_roll_youtube_embed_code = "<iframe width='420' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>";
var navbar = "<h3><nav><a href='../ready/index.html'>Ready</a>&nbsp;<a href='../keypress/index.html'>Keypress</a>&nbsp;<a href='../click/index.html'>Click</a>&nbsp;<a href='../change/index.html'>Change</a>&nbsp;<a href='../submit/index.html'>Submit</a></nav></h3>";
$(document).ready(function(){

  $("h1").prepend(navbar);

  $("input").click(function(){
        $(this).attr("disabled", "disabled");  //disabled.   aka 'none ya'!!
         $("h1").html(rick_roll_youtube_embed_code); //no, you're rick rolled :)
    });

  $("#time").text( Date.now() );




})
