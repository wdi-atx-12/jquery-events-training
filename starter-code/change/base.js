console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

})

let t = parseInt($('#left').val()) + parseInt($('#right').val());
$('#total').val(t);
