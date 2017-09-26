console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("input.add").on('change', function(){
    var left = $("input#left").val();
    var right = $("input#right").val();
    var leftNum = parseInt(left) || 0;
    var rightNum = parseInt(right) || 0;
    var total = leftNum + rightNum;
    $("#total").val(total);
  })

  $("#time").text( Date.now() );

})
