
var navbar = "<h3><nav><a href='../ready/index.html'>Ready</a>&nbsp;<a href='../keypress/index.html'>Keypress</a>&nbsp;<a href='../click/index.html'>Click</a>&nbsp;<a href='../change/index.html'>Change</a>&nbsp;<a href='../submit/index.html'>Submit</a></nav></h3>";
$(document).ready(function(){




  console.log( "The page says:", $("h1").text() );
  $("h1").text("Go!");  //moved into document ready function.git
   $("h1").prepend(navbar);

});


if ( $("h1").text() === "Go!" ){
  console.log( "The page says:", $("h1").text() );
  console.log("Success!");
} else {
  console.log( 'Can you make it say "Go!"?' );
}
