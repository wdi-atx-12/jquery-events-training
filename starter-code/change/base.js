console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

});

$("#reset").click(function() {
    $("add #left #right #total").text('0');
    $("#left add").removeClass('0');
    $("#right add").removeClass('0');
    $("#total").removeClass('0');


});
