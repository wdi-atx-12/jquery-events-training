console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( new Date(Date.now()) );


  $('input.add').on('change', function(event) {
    var left = $('input#left').val();
    var right = $('input#right').val();
    var leftVal = parseInt(left);
    var rightVal = parseInt(right);
    var total = leftVal + rightVal;
    $('#total').val(total);
  });

});
