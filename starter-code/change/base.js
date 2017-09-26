console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
  $(".add").on("change", event => {
    let left = $("#left").val();
    let right = $("#right").val();
    let leftNum = parseInt(left) || 0;
    let rightNum = parseInt(right) || 0;
    let sum = ( leftNum + rightNum );
    $("#total").val(sum);
  });
})
