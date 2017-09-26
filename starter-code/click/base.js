console.log("Sanity Check: JS is working!");

var a = $(".clicked");

$(document).ready(function(){

  $("#imperatives").click(function() {
  console.log('sanity');
  $( "ul" ).append($('.clicked'));;
});
});
