/*
  What needs to change so that the page says "Go!"?
*/

$(document).ready(function(){
  $("h1").text("Go!");
  console.log( "The page says:", $("h1").text() );
});

// moved this line of code into .ready func so that when document is 'ready', h1 text changes to 'go!''
$("h1").text("Go!");

if ( $("h1").text() === "Go!" ){
  console.log( "The page says:", $("h1").text() );
  console.log("Success!");
} else {
  console.log( 'Can you make it say "Go!"?' );
}
