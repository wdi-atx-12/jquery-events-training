console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
  $("input.add").on("change", function handleChange(event){
    var leftSide = $("input#left").val();
    var rightSide = $("input#right").val();
    var leftNumber = parseInt(leftSide) || 0;
    var rightNumber = parseInt(rightSide) || 0;
    var totalNumber = leftNumber + rightNumber;
    $("#total").val(totalNumber);
  });

})
