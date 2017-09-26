console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $('.add').change(function (){
    var left = parseInt($('#left').val(), 10);
    console.log(left);
    var right = parseInt($('#right').val(), 10);

    // tried to get console to not output NaN and instead replace it with number 0 :(
    if (right === undefined) {
      right = 0;
    }
    console.log(right);

    var totalOutput = left + right;
    $('#total').val(totalOutput);
    console.log('i did a math thing');
  })

})
